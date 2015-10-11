var students = [];

function student(first_name, last_name, student_id) {
    this.fName = first_name;
    this.lName = last_name;
    this.sId = student_id;
    this.report = function(){
        return this.fName + " " + this.lName + " " + this.sId + "<br />";
    };
}

document.getElementById("myButton").addEventListener("click",function(){
    //alert("got here");
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var sId = document.getElementById("sId").value;

    //alert(fName);
    //alert(lName);

    var studentOne = new student(fName,lName,sId);

    students.push(studentOne);

    document.getElementById("target").innerHTML = "";

    for(var i = 0; i < students.length; i++)
    {
        document.getElementById("target").innerHTML += students[i].report();
    }



});