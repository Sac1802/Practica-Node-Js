const Data = require('../models/data');

function saveData(req, res){
    const myData = new Data(req.body);
    //myData.user = req.email

    myData.save((err, result) => {
        if(err){
            res.status(500).send({message: err});
        }else{
            res.status(200).send({ message: result});
        }
    });
}

function enlistData(req, res){

    let search = req.params.search;
    let queryParam = {};

    if(search){
        queryParam = {
            $or: [
                {category: {$regex: search, $options: "i"}}
            ]
        }
    }

    let query = Data.find(queryParam).sort('createdAt');

    query.exec((err, result) => {
        if(err){
            res.status(500).send({message: err + 'Error'});
        }else{
            res.status(200).send({message: result});
        }
    });
}

function updateData(req, res){
    let id = req.params.id;
    let data = req.body;

    Data.findByIdAndUpdate(id, data, {new: true}, (err, result) => {
        if(err){
            res.status(500).send({message: err});
        }else{
            res.status(200).send({message: result});
        }
    });
}

function deleteData(req, res){
    let id = req.params.id;

    Data.findOneAndDelete(id, (err, result) => {
        if(err){
            res.status(500).send({message: err})
        }else{
            res.status(200).send({message: result});
        }
    })
}


module.exports = {saveData, enlistData, updateData, deleteData};