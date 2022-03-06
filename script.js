function akanNameCalculator() {

    
    //getting date input from the form
    let mydate = document.getElementById("mydate");
    //var mydate = document.forms["akanform"]["mydate"];
    let gender = document.akanform.gender;

    try {

        if (inputDate == "") throw "Empty"
    }

    catch {
        document.getElementById("emptyDate").innerHTML = "*Date field required"
        
    }
   
        
    // Get day

    
    let date = new Date(inputDate);
    let birthDate = date.getDay();
     

    // Store Akan names in Arrays


    let maleAkan = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleAkan = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    
    // Find male Akan from birthDate

    
    if (document.getElementById("genderMale").checked && (inputDate != "")) {

        document.getElementById("results").innerHTML =
         "According to your gender, your Akan name is: " + "<strong>" +
         maleAkan[birthDate] + "</strong>";

        }

        
    // Find male Akan from birthDate


    else if(document.getElementById("genderFemale").checked && (inputDate != "")) {

        document.getElementById("results").innerHTML = 
        "According to your gender, your Akan name is: " + "<strong>" +
         femaleAkan[birthDate] + "</strong>";

        }


    // Warning
        

    else if(!document.getElementById("genderFemale").checked && !document.getElementById("genderMale").checked) {

        document.getElementById("warning").innerHTML = 
        "*Select your gender";
        
    }
}
