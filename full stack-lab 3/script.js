// STUDENT ACADEMIC PERFORMANCE

let student = {
    name: "Muhammad Abdullah",
    rollNumber: "CS-101",
    program: "BS Computer Science",
    semester: 5,

    assignment: 18,
    midterm: 22,
    finalExam: 42,

    attendance: 94
};


let student2 = {
    name: "Ali Khan",
    rollNumber: "CS-102",
    program: "BS Computer Science",
    semester: 5,

    assignment: 8,
    midterm: 10,
    finalExam: 31,

    attendance: 94
};


// FUNCTION TO DISPLAY STUDENT

function displayStudent(student, outputId) {

    // Calculate total marks

    let totalMarks =
        student.assignment +
        student.midterm +
        student.finalExam;


    // Total marks are out of 100

    let percentage = totalMarks;


    // DETERMINE GRADE

    let grade;

    if (percentage >= 80) {
        grade = "A";
    }
    else if (percentage >= 70) {
        grade = "B";
    }
    else if (percentage >= 60) {
        grade = "C";
    }
    else if (percentage >= 50) {
        grade = "D";
    }
    else {
        grade = "F";
    }


    // DETERMINE PASS / FAIL

    let status;

    if (percentage >= 50) {
        status = "Passed";
    }
    else {
        status = "Failed";
    }


    // SCHOLARSHIP ELIGIBILITY

    let scholarship;

    if (percentage >= 80 && student.attendance >= 80) {
        scholarship = "Eligible for Scholarship";
    }
    else {
        scholarship = "Not Eligible for Scholarship";
    }


    // DISPLAY RESULT

    let output =
        "<strong>Student Information</strong>" +

        "<br>Name: " + student.name +
        "<br>Roll Number: " + student.rollNumber +
        "<br>Program: " + student.program +
        "<br>Semester: " + student.semester +

        "<br><br>" +

        "<strong>Academic Performance</strong>" +

        "<br>Assignment Marks: " + student.assignment +
        "<br>Midterm Marks: " + student.midterm +
        "<br>Final Exam Marks: " + student.finalExam +
        "<br>Total Marks: " + totalMarks + " / 100" +
        "<br>Percentage: " + percentage + "%" +

        "<br><br>" +

        "<strong>Grade: " + grade + "</strong>" +
        "<br>Status: " + status +

        "<br><br>" +

        "<strong>Attendance: " + student.attendance + "%</strong>" +
        "<br><strong>Scholarship Status: " + scholarship + "</strong>";


    // PUT RESULT INSIDE THE CORRECT CARD

    document.getElementById(outputId).innerHTML = output;
}


// DISPLAY STUDENT 1

displayStudent(student, "resultOutput");


// DISPLAY STUDENT 2

displayStudent(student2, "resultOutput2");

// //Array of Students

// let lab04students=[
//     "Ali",
//     "Ahmed",
//     "Ayesha",
//     "Zainab",
// ];
// document.getElementById("arrayOutput").innerHTML=
// "Students: "+ lab04students.join(", ")+
// "<br><br>"+ "First Student: "+ lab04students[0]+
// "<br>Second Student: "+ lab04students[1]+
// "<br>Third Student: "+ lab04students[2]+
// "<br>Total Students: "+ lab04students.length;

// //Array Methods

// let lab04courses=[
//     "Web Development",
//     "Data Science",
//     "Mobile App Development",
//     "Cloud Computing",
// ];
// lab04courses.push("Cyber Security");
// let lab04HasAI=lab04courses.includes("Artificial Intelligence");
// document.getElementById("arrayMethodsOutput").innerHTML=
// "Courses: "+ lab04courses.join(", ")+
// "<br><br>"+ "Total Courses: "+ lab04courses.length+ 
// "<br>Does the list include 'Artificial Intelligence'? "+ lab04HasAI; 

// //For Loop

// let lab04ForLoopResult="";
// for(let i=0; i<lab04students.length; i++){
//     lab04ForLoopResult+= "Student "+ (i+1)+": "+ lab04students[i]+ "<br>";
// }
//     document.getElementById("forLoopOutput").innerHTML=lab04ForLoopResult;

// let lab04StudentInfo = {
//      name: "Ahmed",
//     age: 21,
//     department: "Computer Science",
//     semester: 6
// };

// //For In Loop
// let lab04ForInResult = "";
// for (
//     let lab04Key in lab04StudentInfo
// ) {
//     lab04ForInResult +=

//         lab04Key +
//         ": " +
//         lab04StudentInfo[lab04Key] +
//         "<br>";
// }
// document.getElementById(
//     "forInOutput"
// ).innerHTML =
//     lab04ForInResult;
    
// //For Each Loop
// let lab04ForEachResult = "";


// lab04Students.forEach(
//     function(student, index) {

//         lab04ForEachResult +=

//             (index + 1) +
//             ". " +
//             student +
//             "<br>";

//     }
// );
// document.getElementById(
//     "forEachOutput"
// ).innerHTML =
//     lab04ForEachResult;

// //Function to calculate total marks
// function lab04CalculateTotal(
//     assignment,
//     midterm,
//     finalExam
// ) {
// let total =
//         assignment +
//         midterm +
//         finalExam;

//     return total;
// }
// let lab04StudentTotal =
//     lab04CalculateTotal(
//         18,
//         22,
//         42
//     );
// document.getElementById(
//     "functionOutput"
// ).innerHTML =

//     "Assignment Marks: 18" +

//     "<br>" + "Midterm Marks: 22" +

//     "<br>" + "Final Exam Marks: 42" +

//     "<br><br>" + "<strong>Total Marks: " +
//     lab04StudentTotal +
//     "</strong>";

// //Arrow Function to calculate average marks
// const lab04CalculateAverage =
//     (mark1, mark2, mark3) => {
//         return (
//             mark1 +
//             mark2 +
//             mark3
//         ) / 3;
//     };
// let lab04Average =
//     lab04CalculateAverage(
//         18,
//         22,
//         42
//     );
// document.getElementById(
//     "arrowOutput"
// ).innerHTML =
//     "Marks: 18, 22, 42" +
//     "<br>" +
//     "Average: " +
//     lab04Average.toFixed(2);

// // ES6 CLASS
// class Lab04Student {
//     constructor(
//         name,
//         semester,
//         cgpa
//     ) {
//         this.name = name;
//         this.semester = semester;
//         this.cgpa = cgpa;
//     }
//     getStatus() {
//         if (this.cgpa >= 2.0) {
//             return "Active";
//         }
//         else {
//             return "Academic Warning";
//         }
//     }
// }

// let lab04StudentRecord =
//     new Lab04Student(
//         "Ahmed",
//         6,
//         3.45
//     );
// document.getElementById(
//     "classOutput"
// ).innerHTML =
//     "Name: " +
//     lab04StudentRecord.name +
//     "<br>" +
//     "Semester: " +
//     lab04StudentRecord.semester +
//     "<br>" +
//     "CGPA: " +
//     lab04StudentRecord.cgpa +
//     "<br>" +
//     "Status: " +
//     lab04StudentRecord.getStatus();
 
// // OBJECT DESTRUCTURING
// const lab04StudentData = {
//     name: "Sara",
//     semester: 6,
//     cgpa: 3.75
// };
// const {
//     name: lab04Name,
//     semester: lab04Semester,
//     cgpa: lab04CGPA
// } = lab04StudentData;
// document.getElementById(
//     "destructuringOutput"
// ).innerHTML =
//     "Name: " +
//     lab04Name +
//     "<br>" +
//     "Semester: " +
//     lab04Semester +
//     "<br>" +
//     "CGPA: " +
//     lab04CGPA;
 
// // TERNARY OPERATOR
// const lab04Marks = 78;
// const lab04Status =
//     lab04Marks >= 50
//         ? "Passed"
//         : "Failed";
// document.getElementById(
//     "ternaryOutput"
// ).innerHTML =
//     "Marks: " +
//     lab04Marks +
//     "<br>" +
//     "Status: " +
//     lab04Status;

// // MAP(), FILTER() AND FIND()
// const lab04MarksList = [
//     45,55,72,81,38
// ];
// const lab04UpdatedMarks =
//     lab04MarksList.map(
//         mark => mark + 5
//     );
// const lab04PassedMarks =
//     lab04MarksList.filter(
//         mark => mark >= 50
//     );
// const lab04FirstHighMark =
//     lab04MarksList.find(
//         mark => mark >= 70
//     );
// document.getElementById(
//     "advancedArrayOutput"
// ).innerHTML =
//     "Original Marks: " +
//     lab04MarksList.join(", ") +
//     "<br><br>" +
//     "After map() (+5): " +
//     lab04UpdatedMarks.join(", ") +
//     "<br><br>" +
//     "Passed Marks using filter(): " +
//     lab04PassedMarks.join(", ") +
//     "<br><br>" +
//     "First Mark >= 70 using find(): " +
//     lab04FirstHighMark;

// // FINAL STUDENT PERFORMANCE DASHBOARD
// const lab04StudentRecords = [
//     {
//         name: "Ali",
//         semester: 6,
//         marks: 82
//     },
//     {
//         name: "Ahmed",
//         semester: 5,
//         marks: 67
//     },
//     {
//         name: "Sara",
//         semester: 6,
//         marks: 91
//     },
//     {
//         name: "Ayesha",
//         semester: 4,
//         marks: 48
//     }
// ];

// //   GRADE CALCULATION FUNCTION
// function lab04CalculateGrade(marks) {
//     if (marks >= 80) {
//         return "A";
//     }
//     else if (marks >= 70) {
//         return "B";
//     }
//     else if (marks >= 60) {
//         return "C";
//     }
//     else if (marks >= 50) {
//         return "D";
//     }
//     else {
//         return "F";
//     }
// }

// //   STATUS USING ARROW FUNCTION + TERNARY
// const lab04GetStatus =
//     marks =>
//         marks >= 50
//             ? "Passed"
//             : "Failed";

// //   CREATE DASHBOARD 
// let lab04DashboardOutput = "";
// lab04StudentRecords.forEach(
//     student => {
//         const {
//             name: lab04Name,
//             semester: lab04Semester,
//             marks: lab04StudentMarks
//         } = student;
//         const lab04Grade =
//             lab04CalculateGrade(
//                 lab04StudentMarks
//             );
//         const lab04StudentStatus =
//             lab04GetStatus(
//                 lab04StudentMarks
//             );
//         lab04DashboardOutput +=
//             "<div class='border rounded p-3 mb-3'>" +
//                 "<h5>" +
//                     lab04Name +
//                 "</h5>" +
//                 "<p>" +
//                     "<strong>Semester:</strong> " +
//                     lab04Semester +
//                     "<br>" +
//                     "<strong>Marks:</strong> " +
//                     lab04StudentMarks +
//                     "<br>" +
//                     "<strong>Grade:</strong> " +
//                     lab04Grade +
//                     "<br>" +
//                     "<strong>Status:</strong> " +
//                     lab04StudentStatus +
//                 "</p>" +
//             "</div>";
//     }
// );


//    //DISPLAY DASHBOARD 
// document.getElementById(
//     "studentDashboardOutput"
// ).innerHTML =
//     lab04DashboardOutput;

const students = [
  { name: "Ali", rollNumber: "BSCS-001", department: "Computer Science", semester: 6, cgpa: 3.45 },
  { name: "Abdullah", rollNumber: "CS-2021-001", department: "Computer Science", semester: 6, cgpa: 3.85 },
  { name: "Mushaf", rollNumber: "EE-2022-014", department: "Electrical Engineering", semester: 4, cgpa: 2.70 },
  { name: "Abdulwahab", rollNumber: "ME-2020-089", department: "Mechanical Engineering", semester: 8, cgpa: 2.20 },
  { name: "Abdulrehman", rollNumber: "CS-2023-045", department: "Computer Science", semester: 2, cgpa: 1.85 },
  { name: "Sara", rollNumber: "SE-2021-012", department: "Software Engineering", semester: 6, cgpa: 3.68 }
];

const checkEligibility = (cgpa) => (cgpa >= 2.00 ? "Eligible" : "Not Eligible");

const getAcademicStatus = (cgpa) => {
  if (cgpa >= 3.00) return "Excellent";
  if (cgpa >= 2.50) return "Good";
  if (cgpa >= 2.00) return "Satisfactory";
  return "Academic Warning";
};

// Target the student-list ID inside task 8 container
const container = document.getElementById("student-list");

students.forEach((student) => {
  const status = getAcademicStatus(student.cgpa);
  const eligibility = checkEligibility(student.cgpa);
  const badgeClass = eligibility === "Eligible" ? "bg-success-subtle text-success border-success" : "bg-danger-subtle text-danger border-danger";

  container.innerHTML += `
    <div class="col">
      <div class="card h-100 student-card bg-white rounded-3 shadow-sm p-3">
        <div class="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom">
          <h5 class="fw-bold text-dark m-0">${student.name}</h5>
          <span class="badge border ${badgeClass} px-2 py-1">${eligibility}</span>
        </div>
        <div class="card-text text-secondary small">
          <p class="mb-1 d-flex justify-content-between">
            <span>Roll No:</span> <strong class="text-dark">${student.rollNumber}</strong>
          </p>
          <p class="mb-1 d-flex justify-content-between">
            <span>Department:</span> <strong class="text-dark">${student.department}</strong>
          </p>
          <p class="mb-1 d-flex justify-content-between">
            <span>Semester:</span> <strong class="text-dark">${student.semester}</strong>
          </p>
          <p class="mb-1 d-flex justify-content-between">
            <span>CGPA:</span> <strong class="text-dark">${student.cgpa}</strong>
          </p>
          <p class="mb-0 d-flex justify-content-between">
            <span>Status:</span> <strong class="text-primary">${status}</strong>
          </p>
        </div>
      </div>
    </div>
  `;
});
// =================================================================
// TASK 2: Course Registration Component
// =================================================================

// 1. Store courses in an array
let courses = [
  "Web Development",
  "Database Systems",
  "Artificial Intelligence",
  "Computer Networks",
  "Software Engineering",
  "Data Structures"
];

// 2. Add a new course using push() and remove courses using pop()
courses.push("Cloud Computing");
courses.pop(); // Removes "Cloud Computing"
courses.pop(); // Removes "Data Structures" to keep 5 registered courses

// 3. Check whether "Artificial Intelligence" is available using includes()
const isAIAvailable = courses.includes("Artificial Intelligence") ? "Yes" : "No";

// 4. Function that calculates total number of registered courses
function getTotalCourses(courseList) {
  return courseList.length;
}

// 5. Arrow function with ternary operator for student status
const getRegistrationStatus = (total) => (total >= 4 ? "Full-Time" : "Part-Time");

// Demonstration of for...of loop
let courseListHTML = "<ol>";
for (const course of courses) {
  courseListHTML += `<li>${course}</li>`;
}
courseListHTML += "</ol>";

// Demonstration of forEach() loop
let verifiedCourses = [];
courses.forEach((course) => {
  verifiedCourses.push(course);
});

const totalRegCourses = getTotalCourses(courses);
const regStatus = getRegistrationStatus(totalRegCourses);

// Render Task 2 to DOM
const task2Output = document.getElementById("task2-output") || document.querySelector(".output-text");
if (task2Output) {
  task2Output.innerHTML = `
    <h5 class="fw-bold mb-3">Available Courses</h5>
    ${courseListHTML}
    <p class="mb-1"><strong>Total Registered Courses:</strong> ${totalRegCourses}</p>
    <p class="mb-1"><strong>Artificial Intelligence Available:</strong> ${isAIAvailable}</p>
    <p class="mb-0"><strong>Student Status:</strong> ${regStatus}</p>
  `;
}


// =================================================================
// TASK 3: Student Examination & Result Processing System
// =================================================================

// 1. Array storing at least 5 students
const examStudents = [
  { name: "Sara", rollNumber: "BSCS-023", assignment: 18, midterm: 22, finalExam: 42 },
  { name: "Ali", rollNumber: "BSCS-001", assignment: 15, midterm: 20, finalExam: 45 },
  { name: "Usman", rollNumber: "BSCS-012", assignment: 10, midterm: 12, finalExam: 20 },
  { name: "Fatima", rollNumber: "BSCS-015", assignment: 19, midterm: 24, finalExam: 48 },
  { name: "Zain", rollNumber: "BSCS-009", assignment: 14, midterm: 18, finalExam: 38 }
];

// 2. Function to calculate total marks
function calculateTotalMarks(assignment, midterm, finalExam) {
  return assignment + midterm + finalExam;
}

// 3. Arrow function to calculate average
const calculateAverageMarks = (total) => (total / 3).toFixed(2);

// 4. Function to determine grade
function calculateExamGrade(total) {
  if (total >= 80) return "A";
  if (total >= 70) return "B";
  if (total >= 60) return "C";
  if (total >= 50) return "D";
  return "F";
}

let processedExamResults = [];

// 5. Process every student using forEach() and Object Destructuring
examStudents.forEach((student) => {
  const { name, rollNumber, assignment, midterm, finalExam } = student;
  const total = calculateTotalMarks(assignment, midterm, finalExam);
  const average = calculateAverageMarks(total);
  const grade = calculateExamGrade(total);
  
  // Ternary operator for Pass/Fail decision
  const status = total >= 50 ? "Passed" : "Failed";

  processedExamResults.push({
    name,
    rollNumber,
    assignment,
    midterm,
    finalExam,
    total,
    average,
    grade,
    status
  });
});

// 6. Additional Challenge: for loop to calculate passed/failed count
let examPassedCount = 0;
let examFailedCount = 0;

for (let i = 0; i < processedExamResults.length; i++) {
  if (processedExamResults[i].status === "Passed") {
    examPassedCount++;
  } else {
    examFailedCount++;
  }
}

// Render Task 3 to DOM
const task3Output = document.getElementById("task3-output");
if (task3Output) {
  let task3HTML = '<div class="row row-cols-1 row-cols-md-2 g-3">';
  
  processedExamResults.forEach((s) => {
    task3HTML += `
      <div class="col">
        <div class="card h-100 shadow-sm border-0 rounded-3">
          <div class="card-body">
            <h5 class="card-title fw-bold text-primary">${s.name}</h5>
            <p class="mb-1"><strong>Roll No:</strong> ${s.rollNumber}</p>
            <p class="mb-1"><strong>Assignment:</strong> ${s.assignment}</p>
            <p class="mb-1"><strong>Midterm:</strong> ${s.midterm}</p>
            <p class="mb-1"><strong>Final Exam:</strong> ${s.finalExam}</p>
            <p class="mb-1"><strong>Total:</strong> ${s.total}</p>
            <p class="mb-1"><strong>Average:</strong> ${s.average}</p>
            <p class="mb-1"><strong>Grade:</strong> ${s.grade}</p>
            <p class="mb-0"><strong>Status:</strong> <span class="badge ${s.status === "Passed" ? "bg-success" : "bg-danger"}">${s.status}</span></p>
          </div>
        </div>
      </div>
    `;
  });

  task3HTML += `</div>
    <div class="card mt-3 bg-light border-0 p-3 rounded-3">
      <p class="mb-1"><strong>Total Students:</strong> ${examStudents.length}</p>
      <p class="mb-1 text-success"><strong>Passed Students:</strong> ${examPassedCount}</p>
      <p class="mb-0 text-danger"><strong>Failed Students:</strong> ${examFailedCount}</p>
    </div>
  `;

  task3Output.innerHTML = task3HTML;
}


// =================================================================
// TASK 4: University Student Performance Dashboard
// =================================================================

// 1. ES6 Class
class Student {
  constructor(name, rollNumber, department, semester, cgpa, marks) {
    this.name = name;
    this.rollNumber = rollNumber;
    this.department = department;
    this.semester = semester;
    this.cgpa = cgpa;
    this.marks = marks;
  }
}

// Array of at least 6 student objects
const dashboardStudents = [
  new Student("Ali", "BSCS-001", "Computer Science", 6, 3.45, 82),
  new Student("Ahmed", "BSCS-002", "Computer Science", 5, 2.80, 67),
  new Student("Sara", "BSE-012", "Software Engineering", 4, 3.80, 91),
  new Student("Usman", "BEE-005", "Electrical Engineering", 2, 1.85, 45),
  new Student("Ayesha", "BSCS-008", "Computer Science", 8, 3.20, 74),
  new Student("Bilal", "BME-003", "Mechanical Engineering", 3, 1.90, 52)
];

// 2. Grade Calculation Function
function calculateDashboardGrade(marks) {
  if (marks >= 80) return "A";
  if (marks >= 70) return "B";
  if (marks >= 60) return "C";
  if (marks >= 50) return "D";
  return "F";
}

// 3. Academic Status Arrow Function & Ternary Operator
const getAcademicEligibility = (cgpa) => (cgpa >= 2.0 ? "Eligible" : "Academic Warning");

// 4. Object Information using for...in loop
console.log("--- Student Object Properties (for...in) ---");
for (const key in dashboardStudents[0]) {
  console.log(`${key}: ${dashboardStudents[0][key]}`);
}

// 5. Course/Department Management using Array Methods (push, includes)
const availableDepartments = ["Computer Science", "Software Engineering", "Electrical Engineering"];
if (!availableDepartments.includes("Mechanical Engineering")) {
  availableDepartments.push("Mechanical Engineering");
}

// 6. for...of Loop Usage
const departmentList = [];
for (const std of dashboardStudents) {
  if (!departmentList.includes(std.department)) {
    departmentList.push(std.department);
  }
}

// 7. Calculate Statistics using standard for loop
let dashboardPassedCount = 0;
let dashboardFailedCount = 0;

for (let i = 0; i < dashboardStudents.length; i++) {
  if (dashboardStudents[i].marks >= 50) {
    dashboardPassedCount++;
  } else {
    dashboardFailedCount++;
  }
}

// 8. Render Dashboard using forEach() and Object Destructuring
const task4Output = document.getElementById("task4-output");
if (task4Output) {
  let dashboardCardsHTML = '<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">';

  dashboardStudents.forEach((student) => {
    // Object Destructuring
    const { name, rollNumber, department, semester, cgpa, marks } = student;
    const grade = calculateDashboardGrade(marks);
    const status = getAcademicEligibility(cgpa);
    
    const statusBadge = status === "Eligible" ? "bg-success" : "bg-warning text-dark";

    dashboardCardsHTML += `
      <div class="col">
        <div class="card h-100 shadow-sm border-0 rounded-3">
          <div class="card-header bg-dark text-white fw-bold">
            Student: ${name}
          </div>
          <div class="card-body">
            <p class="mb-1"><strong>Roll No:</strong> ${rollNumber}</p>
            <p class="mb-1"><strong>Department:</strong> ${department}</p>
            <p class="mb-1"><strong>Semester:</strong> ${semester}</p>
            <p class="mb-1"><strong>CGPA:</strong> ${cgpa}</p>
            <p class="mb-1"><strong>Marks:</strong> ${marks}</p>
            <p class="mb-1"><strong>Grade:</strong> ${grade}</p>
            <p class="mb-0"><strong>Status:</strong> <span class="badge ${statusBadge}">${status}</span></p>
          </div>
        </div>
      </div>
    `;
  });

  dashboardCardsHTML += `</div>
    <div class="card mt-4 border-0 bg-primary text-white p-3 rounded-3">
      <h5 class="fw-bold mb-2">Final Dashboard Statistics</h5>
      <p class="mb-1">Total Students: ${dashboardStudents.length}</p>
      <p class="mb-1">Passed Students: ${dashboardPassedCount}</p>
      <p class="mb-0">Failed Students: ${dashboardFailedCount}</p>
    </div>
  `;

  task4Output.innerHTML = dashboardCardsHTML;
}