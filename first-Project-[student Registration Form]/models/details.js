//fake dataBase
let registeredStudentData = [];

const fs = require('fs');
const path = require('path')
const rootDir = require('../utils/path.js')


module.exports = class Home {
    constructor(name, email, password, gender, address) {
        this.name = name
        this.email = email
        this.password = password
        this.gender = gender
        this.address = address
    }

    save() {
        registeredStudentData.push(this)
        fs.appendFileSync(path.join(rootDir, 'studentData', 'studentDetails.txt'), JSON.stringify(registeredStudentData) + "\n", (err)=>{
            console.log("error during writing Student details in file : ", err);
        })

    }

    static fetchAll(){
        fs.readFileSync(path.join(rootDir, 'studentData', 'studentDetails.txt')), JSON.stringify(registeredStudentData) + "\n", (err,data)=>{
        console.log("file read student details : ", err , data);
        
        if(!err){
            registeredStudentData = JSON.parse(data)
        }
        return registeredStudentData;
        
        }
    }

}





