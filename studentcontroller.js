const studentmodel = require("../model/studentmodel");

let createStudent = async (req,res) =>{
    try {
        let data = req.body;
        let register = await studentmodel.create(data);
        return res.status(201).send({
            status:true,
            msg : "student req successfully",
            data:register,

        });

    }catch (error) {
        return res 
        .status(500)
        .send({ status: false, msg : "Internal server Error"});
        }
    };
    module.exports = { createStudent }