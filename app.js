

//Create a complete fifth class students array and object data structure and find their result with gpa, grade, cgpa and final result  


const students=[
    {Name: " Istiak Hossain",
    className: "Five",
    Roll: 2,
    bangla: 70,
    English: 80,
    Math:90,
    Science: 85,
    socialScience:75}
    ,
    
    {Name: " Sumi Rahman",
    className: "Five",
    Roll: 6,
    bangla: 65,
    English: 75,
    Math:80,
    Science: 70,
    socialScience:60
    }
,
    {Name: " Zillur Rahman",
    className: "Five",
    Roll: 1,
    bangla: 80,
     English: 90,
    Math:98,
    Science: 90,
    socialScience:85
    },

    {Name: " Ashfia Nur",
    className: "Five",
    Roll: 5,
    bangla: 70,
    English: 75,
    Math:85,
    Science: 80,
    socialScience:80
    },
{Name: " Sonia Akter",
    className: "Five",
    Roll: 8,
    bangla: 60,
    English: 65,
    Math:70,
    Science: 75,
    socialScience:55}
    

]



students.forEach((data)=>{
//get student result according to their subject marks

let result;
if(data.bangla>=33 &&data.English>=33 && data.Math>=33 &&data.Science>=33 && data.socialScience>=33)
{result="Pass"}
else{result="Fail"}
//get student CGPA  according to their GPA for all subjects

let  cgpa=getGpa(data.bangla)+ getGpa(data.English)+ getGpa(data.Math)+ getGpa(data.Science)+ getGpa(data.socialScience);
cgpa=cgpa/5;
//get student Gpa , Grade, CGPA and final result according to marks and showing through console output
 
if(data.Roll==8)
{console.log(`Student Name: ${data.Name} , Student ClassName: ${data.className}
Student GPA: ${getGpa(data.bangla)},
${getGpa(data.English)},
${getGpa(data.Math)},
${getGpa(data.Science)},
${getGpa(data.socialScience)},
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
Student Grade: ${getGrade(data.bangla)},
${getGrade(data.English)},
${getGrade(data.Math)},
${getGrade(data.Science)},
${getGrade(data.socialScience)},
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
Student CGPA: ${cgpa},
Student Final Result: ${result}
`)}


})




