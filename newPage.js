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
            createDonationEntry(inputNumber , 'Flood relief in Noakhali , Bangladesh') 

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
            createDonationEntry(inputNumber , 'Flood relief in Feni , Bangladesh') 

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
            createDonationEntry(inputNumber , 'quota movement of Bangladesh') 

                     
        } else {
            alert("you dont have enough coins")
        }
  
    }  
    else {
        alert("invalid amount")
    }
   
   
}

function createDonationEntry(inputNumber , event) {

    let now = new Date();
    let dateString = now.toString(); 
    let section = document.createElement('section')
    section.classList.add('flex' , 'flex-col' , 'items-center')
    let div = document.createElement('div');
    div.classList.add('border', 'rounded-lg', 'p-4', 'mb-4', 'bg-white', 'w-[80%]');
    div.innerHTML = `
      <p class="font-bold text-lg mb-2">${inputNumber} Taka is Donated for the ${event}</p>
      <p class="text-gray-500 text-sm">Date: ${dateString}</p>
    `;
    section.append(div)
    document.getElementById('history').appendChild(section);
    
    }


document.getElementById('historyButton').addEventListener('click' , function(){
    let history = document.getElementById('historyButton')
    history.classList.remove('border-2' , 'hover:bg-gray-200')
    history.classList.add('bg-[#bef264]')

    let donation = document.getElementById('donationButton')    
    donation.classList.add('border-2' , 'hover:bg-gray-200')
    donation.classList.remove('bg-[#bef264]')

    document.getElementById('history').classList.remove('hidden')
    document.getElementById('donation').classList.add('hidden')
   
})

document.getElementById('donationButton').addEventListener('click' , function(){
    let donation = document.getElementById('donationButton')
    donation.classList.remove('border-2' , 'hover:bg-gray-200')
    donation.classList.add('bg-[#bef264]')

    let history = document.getElementById('historyButton')
    history.classList.add('border-2' , 'hover:bg-gray-200')
    history.classList.remove('bg-[#bef264]')


    document.getElementById('donation').classList.remove('hidden')
    document.getElementById('history').classList.add('hidden')
   
})




