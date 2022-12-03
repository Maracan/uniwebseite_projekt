// Initialisieren students array als neues array 
var students = [];

$(document).ready(() => {
    //Abfrage ob wir ein Item im localstorage haben - Wenn wir also ein Item haben was nicht null ist
    //dann parsen wir das in unser Students Object
    if (localStorage.getItem('students') != null)
        students = JSON.parse(localStorage.getItem('students'));


    renderStudentsTable();

});






function createStudent() {
    console.log("Create student...")

    let prename = $('#inputPrename').val();
    let lastname = $('#inputLastname').val();
    let id = $('#inputID').val();

    let newStudent = new Student(prename, lastname, id);
    students.push(newStudent);

    localStorage.setItem('students', JSON.stringify(students));

    renderStudentsTable();



}

function renderStudentsTable() {
    //delete all rows in der students sind

    $("table tr:gt(0)").remove();

    //render / create rows für alle students
    for (let i = 0; i < students.length; i++) {

        $("tbody").append("<tr></tr>")
        let row = $("tr:last")
        $(row).append("<td>" + students[i].prename + "</td>")
        $(row).append("<td>" + students[i].lastname + "</td>")
        $(row).append("<td>" + students[i].id + "</td>")
    }
}

class Student {

    constructor(prename, lastname, id) {
        this.prename = prename;
        this.lastname = lastname;
        this.id = id;
    }
}