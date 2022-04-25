
var db = require('../models');
// const Users = db.users;
const Users = db.sequelize.models.users;
var addUser = async(req,resp)=>{

    // by using create();
    
//   let data = await Users.create({
//         username:'tejashri',
//         password:'tej@133', 
//         age:34 , 
//         address:'goa',
//         pincode:237650});

//  console.log(data.dataValue);

// by using build();

    // let  data = await Users.build({username:'davi',password:'dav@133', age:7 , address:'mumbai',pincode:412660},{
    //     username:'arjun',password:'arj@133', age:37 , address:'pune',pincode:412687

    // });
    // await data.save();


    // adding data in bulk

    let data= await Users.bulkCreate([
        {username:'davi',password:'dav@133', age:17 , address:'mumbai',pincode:412660},
        {username:'raj',password:'raj@133', age:27 , address:'pune',pincode:412662},
        {username:'tej',password:'tej@133', age:37 , address:'delhi',pincode:412661}
    ])


    //find all

    // let data1=await Users.findAll({}); 

    //find one
    let data1=await Users.findOne({}); 


    let response = {
        data:data1
    }
    resp.status(200).json(response);
}

module.exports = {
    addUser
}