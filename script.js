console.log("%cTeachers Day Website Loaded ",
"color:blue;font-size:16px;font-weight:bold;");
// SAVE DARK MODE


if(localStorage.getItem("theme")=="dark"){

document.body.classList.add("dark");

document.querySelector(".mode-btn").innerHTML="☀️";

}



function toggleMode(){


document.body.classList.toggle("dark");


if(document.body.classList.contains("dark")){


localStorage.setItem("theme","dark");


document.querySelector(".mode-btn").innerHTML="☀️";


}

else{


localStorage.setItem("theme","light");


document.querySelector(".mode-btn").innerHTML="🌙";


}


}





// Add small sparkle effect on teacher cards


document.querySelectorAll(".teacher").forEach(item=>{


item.addEventListener("click",()=>{


confetti({

particleCount:50,

spread:60,

origin:{
y:.7
}

});


});


});
