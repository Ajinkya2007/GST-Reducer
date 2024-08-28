document.querySelector(".button").addEventListener('click',()=> {
    let pamt = [parseFloat(document.querySelector(".pamt").value)];
    let rate = ([parseFloat(document.querySelector(".rate").value)]/100)+1;
    let res_el = document.querySelector(".result");

    let redAmt = (pamt / rate).toFixed(2);
    res_el.innerHTML = `The principal amount with GST is ${redAmt}`;
})