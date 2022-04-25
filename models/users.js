//created a table with its attributes

module.exports = (sequelize,DataTypes)=>{

    // const Users = sequelize.define('users',{
        const Users = sequelize.define('users',{
 
        id :{
            type :DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
    
        },
        username:{
            type :DataTypes.STRING,
            allowNull :false
        },
        password : {
            type :DataTypes.STRING
        },
        age :{
            type:DataTypes.INTEGER
        },
        address:{
            type:DataTypes.STRING
        },
        pincode :{
            type:DataTypes.INTEGER
    
        }
        
    },
    {
        freezeTableName :true,
        timestamps:false
    });
    return Users;
    
    };
    