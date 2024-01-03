const {Sequelize,DataTypes}=require('sequelize')
const sequelize=new Sequelize('node-complete','root','Riya1234@',{
    host:'localhost',
    dialect:'mysql'
})
const db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;
db.users=require('./users')(sequelize,DataTypes)
sequelize.authenticate().then(()=>{
    console.log("done")
})
.catch((err)=>console.log(err))
db.sequelize.sync().then(()=>{
    console.log("created")
}).catch(()=>{
    console.log("not created")
})
module.exports =db;
