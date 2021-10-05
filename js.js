send.addEventListener("click",fnc);
function fnc(){
    let val_receipts = receipts.value;
    let val_cost = cost.value;
    let val_sales = sales.value;

    let val_result = val_receipts;
    
    val_result = ((val_receipts-val_cost)/val_sales)*100;

    result.innerHTML = val_result;
}