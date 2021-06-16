
 
 
 function getValidation(event) {
     event.preventDefault();
    let date = document.myForm.date_of_birth.value;
    let year = document.myForm.year_of_birth.value;
    if (date >31 || date.length >2 || date <=0 || date == "" || isNaN(date) ) {
        alert("Enter a valid date!");
        return false;
    } 
    else {
        return getDayAndName();
    }
        
    
} 



 function calculateAkanName(){
    let dd = parseInt(document.getElementById("date_of_birth").value);

    let mm = parseInt( document.getElementById("month").value);
    let year = document.getElementById("year_of_birth").value;
    let temp = String(year).split("");

    
    let temp2 = temp.slice(0,2);

      let yy =  temp.slice(2,4).join(""); 
     let cc = temp.slice(0,2).join("");

     let dayOfTheWeek=( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;
     
     return(parseInt(dayOfTheWeek));
     
     
} 



function getDayAndName() {

    let dayOfTheWeek = calculateAkanName();

    let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    let femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    let Gender = document.getElementById("gender").value.toLowerCase();

    // let index=Name();
    let name = "";
    if (Gender === "male") {
        if (dayOfTheWeek == 0) {
            document.getElementById("output").innerHTML = "Hey , your Akan name is " + maleName[0] + " because you were born a male on a Sunday.";
        } else if (dayOfTheWeek == 1) {
            document.getElementById("output").innerHTML = "Hey , your Akan name is " + maleName[1] + " because you were born a male on a Monday.";
        } else if (dayOfTheWeek == 2) {
            document.getElementById("output").innerHTML = "Hey , your Akan name is " + maleName[2] + " because you were born a male on a Tuesday.";
        } else if (dayOfTheWeek == 3) {
            document.getElementById("output").innerHTML = "Hey , your Akan name is " + maleName[3] + " because you were born a male on a Wednesday.";
        } else if (dayOfTheWeek == 4) {
            document.getElementById("output").innerHTML = "Hey, your Akan name is " + maleName[4] + " because you were born a male on a Thursday.";
        } else if (dayOfTheWeek == 5) {
            document.getElementById("output").innerHTML = "Hey , your Akan name is " + maleName[5] + " because you were born a male on a Friday.";
        } else if (dayOfTheWeek == 6) {
            document.getElementById("output").innerHTML = "Hey , your Akan name is " + maleName[6] + " because you were born a male on a Saturday.";
        }
    }
    else if (Gender === "female") {
        if (dayOfTheWeek == 0) {
            document.getElementById("output").innerHTML = "Hey , your Akan name is " + femaleName[0] + " because you were born a female on a Sunday.";
        } else if (dayOfTheWeek == 1) {
            document.getElementById("output").innerHTML = "Hey , your Akan name is " + femaleName[1] + " because you were born a female on a Monday.";
        } else if (dayOfTheWeek == 2) {
            document.getElementById("output").innerHTML = "Hey , your Akan name is " + femaleName[2] + " because you were born a female on a Tuesday.";
        } else if (dayOfTheWeek == 3) {
            document.getElementById("output").innerHTML = "Hey , your Akan name is " + femaleName[3] + " because you were born on a female a Wednesday.";
        } else if (dayOfTheWeek == 4) {
            document.getElementById("output").innerHTML = "Hey , your Akan name is " + femaleName[4] + " because you were born a female on a Thursday.";
        } else if (dayOfTheWeek == 5) {
            document.getElementById("output").innerHTML = "Hey  , your Akan name is " + femaleName[5] + " because you were born a female on a Friday.";
        } else if (dayOfTheWeek == 6) {
            document.getElementById("output").innerHTML = "Hey , your Akan name is " + femaleName[6] + " because you were born a female on a Saturday.";
        }
        else if (Gender === null) {
            alert("input gender");
        }

    }
}



