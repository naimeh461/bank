document.getElementById("btn-Deposit").addEventListener("click",function(event){
    const depositInput = document.getElementById("deposit-value")
    const newDepositValueString = depositInput.value;
    const newDepositValue = parseFloat(newDepositValueString);
    

    //current deposit total
    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotalString = depositTotalElement.innerText; 
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentDepositTotal = previousDepositTotal+newDepositValue;
    depositTotalElement.innerText= currentDepositTotal;

    //get ballance current total
    const totalBalanceElement = document.getElementById("balance-total");
    const totalBalanceString = totalBalanceElement.innerText;
    const totalBalance = parseFloat(totalBalanceString);
    
    const balance = totalBalance+newDepositValue;
    totalBalanceElement.innerText = balance;

    // clear input fill
    depositInput.value = ""; 
   
})
