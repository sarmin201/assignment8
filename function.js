
//creating functions for geetting students grade and gpa based on their marks

function getGrade  ( marks){

let grade=0;
if(marks>=0 && marks<33)
    {
    grade="F";
    }
    if(marks>=33 &&marks<40)
    {
    grade="D";
    }
    if(marks>=40 && marks<50)
    {
    grade="C";
    }
    if(marks>=50 && marks<60)
    {
    grade="B";
    }
    if(marks>=60 && marks<80)
    {
    grade="A";
    }
    if(marks>=80&& marks<=100)
    {
    grade="A+";
    }

return grade;
}

function getGpa(marks){
    let gpa="";
    if(marks>=0 && marks<33)
    {
    gpa=0;
    }
    if(marks>=33 && marks<40)
    {
    gpa=1;
    }
    if(marks>=40 && marks<50)
    {
    gpa=2;
    }
    if(marks>=50 && marks<60)
    {
    gpa=3;
    }
    if(marks>=60 && marks<80)
    {
    gpa=4;
    }
    if(marks>=80&& marks<=100)
    {
    gpa=5;
    }
    return gpa;
    }