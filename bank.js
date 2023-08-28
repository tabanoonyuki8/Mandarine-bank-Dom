//deposite button
const dpositeBtn=document.getElementById("deposite-btn").addEventListener("click",function(){
    //deposite input flied
   const depositeEnter= document.getElementById("deposite-enter-id");
   //deposite value
   const newDepositeValueString=depositeEnter.value;
   const newDepositeValue=parseInt(newDepositeValueString);//string to float convert
   //deposite

   const deposite=document.getElementById("deposite-id");
   const preDepositeValueString=deposite.innerText;
   
   const preDepositeValue=parseInt(preDepositeValueString);


//  const total = preDepositeValue + newDepositeValue  ;

deposite.innerText=newDepositeValue ;

 

   //clear input
   depositeEnter.value="";

//balance

    const balanceId=document.getElementById("Balance-id");
    const previousBalanceString=balanceId.innerText;
    const previousBalance=parseFloat(previousBalanceString);
    const total=previousBalance + newDepositeValue;
    balanceId.innerText=total;
})
//withdraw button
const withdrawBtn=document.getElementById("withdraw-btn").addEventListener("click",function(){
    //deposite input flied
   const withdrawEnter= document.getElementById("withdraw-enter-id");
   //deposite value
   const withdrawValue=withdrawEnter.value;
   //deposite
   const withdraw=document.getElementById("withdraw-id");
   withdraw.innerText=withdrawValue;
   withdrawEnter.value="";
   //balance

   const balanceId=document.getElementById("Balance-id");
   const previousBalanceString=balanceId.innerText;
   const previousBalance=parseFloat(previousBalanceString);
   const total=previousBalance + newDepositeValue;
   balanceId.innerText=total;
})

