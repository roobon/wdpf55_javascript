function showResult() {
   var name = document.registration.name.value;
   var father_name = document.registration.father_name.value;
   var mother_name = document.registration.mother_name.value;
   var email = document.registration.email.value;
   var password = document.registration.password.value;
   var re_password = document.registration.re_password.value;
   var gender = document.registration.gender.value;
   var district = document.registration.district.value;
   var address = document.registration.address.value;

   // alert("Congratulation");
   output = ("name" + "father_name" + "mother_name" + "email" + "password" + "re_password" + "gender" + "district" + "address")
   document.write(output)
}
