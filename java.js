let diamo=document.getElementById("diamond-select");
diamo.addEventListener("change",()=>{
    let ff= diamo.innerText;
    console.log(ff)
});
console.log(diamo.value)
let Scroll= document.querySelectorAll("header")[0];
document.addEventListener("scroll",()=>{
    if(scrollY>99){
       Scroll.style.position="fixed"
       Scroll.style.marginTop="-30px"
    }
    else{
        Scroll.style.position=""
        Scroll.style.marginTop=""
    }
})
if(diamo.innerText=="1125"){
    console.log("R8")
}
else{
    console.log("wng")
}
const tate= new Date();
const min= tate.getMinutes()
console.log(min)
console.log(diamo.innerText)
document.querySelectorAll("body")[0].addEventListener("scroll",()=>{
    const imager= document.getElementById("mainimg");
    const imagem= document.getElementById("fr");
if(min<30){
  imager.innerHTML=`
  <img src="1.jpg" alt="">`
  imagem.style.display="none";
console.log("sokon")

}
})
let siam=[
    {
        Name: "Arafat hasan siam",
        Batch: "2022",
        Gpa: "4.61",
        Number: "1049"
    },
    {
        Name: "Jainal abedin porosh",
        Batch: "2022",
        Gpa: "5.00",
        Number: "1090"
    },
    {
        Name: "Md.Sakil ahammed",
        Batch: "2022",
        Gpa: "4.72",
        Number: "1035"
    },
    {
        Name: "Arsraful islam apu",
        Batch: "2022",
        Gpa: "5.00",
        Number: "1111"
    }

]

function myfunction(key){
    console.log(siam.key)
}
siam.foreach(myfunction);