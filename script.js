const submit=document.getElementById("btn")
const message=document.querySelector(".error")
const messagesucess=document.querySelector(".sucess")

submit.addEventListener("click", ()=>{
    const email=document.getElementById("email").value
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email == null || email == "" || !email.match(validRegex)){
        message.style.display="block"
        messagesucess.style.display="none"
    }
    else{
        message.style.display="none"
        messagesucess.style.display="block"
        
    }

})