// we are creating db connections.

const {Sequelize,DataTypes} = require('sequelize');
const sequelize = new Sequelize('seqe_db','root','root123',{
    host:'localhost',
    dialect:'mysql'
});

sequelize.authenticate().then(()=>{
    console.log("connected..");
}).catch((err)=>{
    console.log("error while connecting..");
});

const db = {};
db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.users = require('./users')(sequelize,DataTypes);

db.sequelize.sync({force: true}).then(()=>{
    console.log("yes re sync");
})

module.exports=db.users;