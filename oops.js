<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Information</title>
    <script>
        class student{

    static totalstudent = 0;

    constructor(rollno, name, marks){
        this.name=name;
        this.rollno=rollno;
        this.marks=marks;



        student.totalstudent++;
    }


    displayresult(){
        console.log("your name is: ",this.name);
        console.log("your roll number: ", this.rollno);
        console.log("your marks: ",this.marks);

        console.log("___________________________________________________________");

        if(this.marks>= 33){
            console.log("you are passed mooj le. ");
        }
        else{
            console.log("your are fail chl nikll le av.");
        }

    }

    static displaytotalstudent(){
        console.log("total number of student: ",student.totalstudent)
    }
    
}

let student1= new student(21,"Naman sharma", 99);
let student2 = new student(22,"Naina sharma", 10);


student1.displayresult();
student2.displayresult();

student.displaytotalstudent();






    </script>
</head>
<body>
    
</body>
</html>
