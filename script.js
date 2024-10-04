
class StudentInfo{
   

    constructor(name, age, occupation){
        this.name = name;
        this.age = age;
        this.occupation =  occupation;
    }

    getName(){
        return this.name;
    }
    getAge(){
        return this.age; 
    }
    getOccupation(){
        return this.occupation;
    }
}
// Inheritance part

class Major extends StudentInfo{
    course; school;

    constructor(name, age, occupation, course,school){
        super(name, age, occupation);
        this.course = course;
        this.school=school;
    }

    //Encapsulation part

    StudentInfo1(){
        return `<b>Name:</b> ${this.getName()}<br> <b>Age: </b> ${this.getAge()}<br> <b>Occupation: </b> ${this.getOccupation()}<br> <b>Course: </b> ${this.course} 
        <br> <b>School: ${this.school}`;
    }

    Name(){
        return `Name: ${this.getName()}`;
    }
    Age(){
        return `Age: ${this.getAge()}`;
    }
    Occupation(){
        return `Occupation: ${this.getOccupation()}`;
    }
    Course(){
        return `Course: ${this.course}`;

    }
    School(){
        return `School: ${this.school}`;

    }

}

const StudInfo = new Major('jino', 23, 'Student', 'BSIT' ,'NBSC');
document.getElementById('student').innerHTML = StudInfo.StudentInfo1();

const nAme =StudInfo.Name();
const age = StudInfo.Age();
const occupation = StudInfo.Occupation();
const courses = StudInfo.Course();
const school1 = StudInfo.School();

console.log(nAme); console.log(age); console.log(occupation); console.log(courses); console.log(school1);

