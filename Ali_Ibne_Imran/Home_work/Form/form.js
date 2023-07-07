function showResult() {
   var name = document.registration.name.value;
   var father_name = document.registration.father_name.value;
   var mother_name = document.registration.mother_name.value;
   var email = document.registration.email.value;
   var gender = document.registration.gender.value;
   const course = document.getElementsByClassName("form-check-input-course")
      let courses = ""
      for(let i=0; i<course.length; i++){
        if(course[i].checked){
          courses += course[i].value + ","
        }
      }

   var district = document.registration.district.value;
   var address = document.registration.address.value;

   // alert("Congratulation");
  var myWindow = window.open("" , "" , "width=500,height=600")
    
  myWindow.document.write("<ul>")

  myWindow.document.write("<li>" + "Name : " + name + "</li>")
  myWindow.document.write("<li>" + "Father's Name : " + father_name + "</li>")
  myWindow.document.write("<li>" + "Mother's Name : " + mother_name + "</li>")
  myWindow.document.write("<li>" + "Email : " + email + "</li>")
  myWindow.document.write("<li>" + "Gender : " + gender + "</li>")
  myWindow.document.write("<li>" + "Course : " + courses + "</li>")
  myWindow.document.write("<li>" + "District : " + district + "</li>")
  myWindow.document.write("<li>" + "Address : " + address + "</li>")

  myWindow.document.write("</ul>")
 
}
