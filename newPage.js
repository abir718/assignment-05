
function openPage(page) {
    window.location.href = page;
}

let totalCoins = document.getElementById('availableCoins')
    availableCoins = parseInt(totalCoins.innerText)

let noakhaliAmount = document.getElementById('noakhaliDonation')
    noakhaliDonation = parseInt(noakhaliAmount.innerText)

let feniAmount = document.getElementById('feniDonation')
    feniDonation = parseInt(feniAmount.innerText)

let quotaAmount = document.getElementById('quotaDonation')
    quotaDonation = parseInt(quotaAmount.innerText)


function inputValidation() {
    let inputNoakhali = document.getElementById('input')
    let input = inputNoakhali.value
    

    if (/^\d+$/.test(input) && parseInt(input) > 0) {
        let inputNumber = parseInt(input)

        if ( inputNumber <= availableCoins) {
            availableCoins = availableCoins - inputNumber
            totalCoins.innerText = availableCoins
            noakhaliDonation += inputNumber
            noakhaliAmount.innerText = noakhaliDonation
            console.log(typeof noakhaliDonation)
            console.log(typeof availableCoins)
            document.getElementById("success-modal").checked = true; 
            inputNoakhali.value = ''
                     
        } else {
            alert("you dont have enough coins")
        }
  
    }  
    else {
        alert("invalid amount")
    }
   
    
}


function inputValidationFeni() {
    let inputFeni = document.getElementById('inputFeni')
    input = inputFeni.value


    if (/^\d+$/.test(input) && parseInt(input) > 0) {
        let inputNumber = parseInt(input)

        if ( inputNumber <= availableCoins) {
            availableCoins = availableCoins - inputNumber
            totalCoins.innerText = availableCoins
            feniDonation += inputNumber
            feniAmount.innerText = feniDonation
            document.getElementById("success-modal").checked = true; 
            inputFeni.value = ''
                     
        } else {
            alert("you dont have enough coins")
        }
  
    }  
    else {
        alert("invalid amount")
    }
   
    
}

function inputValidationQuota() {
    let inputQuota = document.getElementById('inputQuota')
    input = inputQuota.value


    if (/^\d+$/.test(input) && parseInt(input) > 0) {
        let inputNumber = parseInt(input)

        if ( inputNumber <= availableCoins) {
            availableCoins = availableCoins - inputNumber
            totalCoins.innerText = availableCoins
            quotaDonation += inputNumber
            quotaAmount.innerText = quotaDonation
            document.getElementById("success-modal").checked = true; 
            inputQuota.value = ''
                     
        } else {
            alert("you dont have enough coins")
        }
  
    }  
    else {
        alert("invalid amount")
    }
   
    
}





