function getTotal(item, price, isPositive) {
    const itemNumber = document.getElementById(item + '-number');
    let productCount = parseInt(itemNumber.value);
    if (isPositive) {
        productCount = productCount + 1;
    }
    else if (itemNumber.value > 0) {
        productCount = productCount - 1;
    }
    itemNumber.value = productCount;
    let productTotal = document.getElementById(item + '-total');
    productTotal.innerText = productCount * price;
    getTotalCalc();

}

function getTotalCalc() {
    const phonePrice = parseInt(document.getElementById('phone-total').innerText);
    const casePrice = parseInt(document.getElementById('case-total').innerText);

    const subTotal = phonePrice + casePrice;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-total').innerText = tax;
    document.getElementById('total-price').innerText = total;
}

//another way of get total calculation
/* function gteInputValue(item) {
    const productInput = parseInt(document.getElementById(item + '-number').value);
    return productInput;
}
function getTotalCalc() {
    const phoneTotal = gteInputValue('phone') * 1219;
    const caseTotal = gteInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-total').innerText = tax;
    document.getElementById('total-price').innerText = total;
} */




document.getElementById('phone-plus').addEventListener('click', function () {
    getTotal('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    getTotal('phone', 1219, false);
});
document.getElementById('case-plus').addEventListener('click', function () {
    getTotal('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    getTotal('case', 59, false);
});


// document.getElementById('clicked-total').addEventListener('click', function () {
//     const phonePrice = parseInt(document.getElementById('phone-total').innerText);
//     const casePrice = parseInt(document.getElementById('case-total').innerText);

//     const total = phonePrice + casePrice;
//     console.log(total);
// })