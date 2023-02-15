document.getElementById("btn-withdraw").addEventListener("click",function(event){
    const withdrawInput = document.getElementById("withdraw-amount");
    const withdrawValueString = withdrawInput.value;
    const withdrawValue = parseFloat(withdrawValueString);
    console.log(withdrawValue);

    const withdrawTotalElement=document.getElementById("withdraw-total");
    const previousWithdrawString =  withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawString);

    const withdraw = previousWithdrawTotal+withdrawValue;

    withdrawTotalElement.innerText = withdraw;
    withdrawInput.value = "";

    const balanceTotalElement = document.getElementById("balance-total");
    const balanceElementString = balanceTotalElement.innerText;
    const balance = parseFloat(balanceElementString);
    
    const currentBalance = balance-withdrawValue;
    balanceTotalElement.innerText = currentBalance;

    
    


})
