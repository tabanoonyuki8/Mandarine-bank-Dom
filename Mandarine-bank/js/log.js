//get button
const btnItem=document.getElementById("btn-id").addEventListener("click",function(){
   
//email
    const emmailItem=document.getElementById('email-id');
   const email=emmailItem.value;
   
//    //password
    const passwordlItem=document.getElementById('password-id');
    const password=passwordlItem.value;
    if(email==="tabanoonmim@gmail.com" & password=="tabanoon"){
    // window.location.href="claculation.html"
    window.location.href="cal.html"
    }
    else{
        alert("Invalid password")
    }
})