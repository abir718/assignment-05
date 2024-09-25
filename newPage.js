
function openPage(page) {
    window.location.href = page;
}

let totalCoins = document.getElementById('availableCoins')
    availableCoins = parseInt(totalCoins.innerText)

let noakhaliAmount = document.getElementById('noakhaliDonation')
    noakhaliDonation = parseInt(noakhaliAmount.innerText)


function inputValidation() {
    let input = document.getElementById('input').value


    if (/^\d+$/.test(input) && parseInt(input) > 0) {

        if ( input <= availableCoins) {
            availableCoins = availableCoins - input
            totalCoins.innerText = availableCoins
            document.getElementById("success-modal").checked = true; 
                     
        } else {
            alert("you dont have enough coins")
        }
  
    }  
    else {
        alert("invalid amount")
    }
   
    
}


