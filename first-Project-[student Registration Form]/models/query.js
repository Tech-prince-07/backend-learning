//fake dataBase
let registeredStudentQueries = [];

const path = require('path')
const rootDir = require('../utils/path.js')

const fs = require('fs');

module.exports = class Home {
    constructor(studentName, email, problem) {
        this.studentName = studentName
        this.email = email
        this.problem = problem
    }

    save() {
        registeredStudentQueries.push(this);
        fs.appendFileSync(path.join(rootDir, 'studentData', 'studentQueries.txt'), JSON.stringify(this) + '\n', (err) => {
            console.log("error during writing Student query in file : ", err)
        })
    }
    static fetchAll(){
            fs.readFileSync(path.join(rootDir, 'studentData', 'studentDetails.txt')), JSON.stringify(registeredStudentQueries) + "\n", (err,data)=>{
            console.log("file read student details : ", err , data);
            
            if(!err){
                registeredStudentQueries = JSON.parse(data)
            }
            return registeredStudentQueries;
            
            }
        }

}





