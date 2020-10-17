var name_of_pizza_array=[];
function submit(){
    var name=document.getElementById("suggestion").value;
   

 name_of_student_array.push(name);


 console.log(name_of_pizza_array);

 //for final output (submit button)
 document.getElementById("suggested").innerHTML=name_of_student_array;
}
function navigate() {
   document.getElementById("submit_button").style.display="inline-block";  
    document.getElementById("nav_suggestion").style.display="none";
    document.getElementById("suggestion").style.display="inline-block";  
}
   