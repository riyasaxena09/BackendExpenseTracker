const db=require('../models')
const Users=db.users;
var crudoper=async(req,res)=>{
    try{
        const data=await Users.create({
            Name:req.body.name,
           Email:req.body.email,
           Password:req.body.password,
            }) 
            console.log(data)
            res.redirect('/')
    }
 
    catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
          // Handle unique constraint violation (e.g., duplicate email)
          res.render('signup', { error: 'Email address is already in use.' });

        } else {
          console.error(error);
          res.status(500).send('Internal Server Error');
        }
      }
    // let response={
    //     data:'ok'
    // }
 
    // res.status(200).json(response)

}
module.exports={
    crudoper,
}