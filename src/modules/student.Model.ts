import { Schema, model } from 'mongoose';
import { Gurdian, LocalGurdiant, Student } from './students.interface';

const gurdianSchema = new Schema<Gurdian>( {
    fatherName : {type : String , required : true},
    fatherOcopation : {type : String , required : true},
    fatherContactNo : {type : String , required : true},
    motherName : {type : String , required : true},
    motherOcpation : {type : String , required : true},
    montherContactNo : {type : String , required : true},
}
)
const localGurdianSchema = new Schema <LocalGurdiant>( {
        name : {type : String , required : true},
        ocopation : {type : String , required : true},
        contactNo : {type : String , required : true},
        addrasse :{type : String , required : true},
}
)

const studentSchema = new Schema <Student> ({
    id : {type : String },
    name : {
        fistName : {type : String , required : true} ,
        middaleName : {type : String },
        lastName : {type : String , required : true }
    },
    email : {type : String , required : true },
    gender : [" Male", "FeMale" , "Others"] ,
    contactNo : {type : String },
    dateOfBirthday : {type : String },
    emarganceyContactNo: {type : String},
    blodGrop : ["A", "AB", "B", "O" ],
    presentAddrase : {type : String , required : true} ,
    parmanentAddrase : {type : String , required : true},
    gurdian : gurdianSchema,
    localGurdian : localGurdianSchema  ,
    profileImage : {type : String},
    isActive : {type : String}
})


export  const StudentsModels = model<Student>('students' ,studentSchema )