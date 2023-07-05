let pass= document.getElementById("pass");
let warning= document.getElementById("warning");
pass.addEventListener("keyup",()=>{
    if(pass.value.length<=6){
        warning.innerHTML="Password must be 6 cherecter"
    }
    else if(pass.value.length>=6){
        warning.innerHTML=""
    }
    if(pass.value.length==6){
        warning.innerHTML=""
    }
})