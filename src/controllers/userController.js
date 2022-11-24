const User = require('../models/user');
const bcrypt = require('bcrypt');
const Data = require('../models/data');

async function saveUser(req, res){
    let myUser = new User(req.body);

    const userFound = await User.findOne({
        email: myUser.email
    });
    if(userFound != null){
        res.status(500).send( { message: 'User is Already Registered' } );
    }else{
        const salt = await bcrypt.genSalt(10);
        myUser.password = await bcrypt.hash(myUser.password, salt)

        myUser.save( ( err, result ) => {
            if(err){
                res.status(500).send( { message: err } );
            }else{
                res.status(200).send( { message: result });
            }
        });


    }
}

function deleteUser(req, res){
    let id = req.params.id;

    Data.findByIdAndDelete(id, (err, result) => {
        if(err){
            res.status(403).send({message: err})
        }else{
            res.status(200).send({message: result})
        }
    });
}

module.exports = {saveUser, deleteUser};