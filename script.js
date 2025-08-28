
///----for time-----
function time(){
const now = new Date();
const timeString = now.toLocaleTimeString('en-US', { hour12: true });
return timeString;
}

//---------copy button---------
let copyCount = 0;
const copyBtns =document.querySelectorAll('.copy-btn');
const copyValue = document.getElementById('copyValue');

for(const button of copyBtns){
button.addEventListener('click',function(){
copyCount++;
copyValue.textContent=copyCount;
//----copy number------
const copyNumber = button.parentNode.parentNode.childNodes[7].innerText;
  navigator.clipboard.writeText(copyNumber);
})
};

//----heart icon click-----
let heartCount = 0;
const heartIcon =document.querySelectorAll('.heart');
//console.log(heartIcon);
const heartValue = document.getElementById('herdCount');

for(const hearts of heartIcon){
hearts.addEventListener('click',function(){
heartCount++;
heartValue.textContent=heartCount;
})
};


//----------call button-----
const callBtns =document.querySelectorAll('.call-btn');
const starValue = document.getElementById('star');

let starCount = 100;
let countVal=0;
for(const Call of callBtns){
 Call.addEventListener('click',function(){
const serviceName = Call.parentNode.parentNode.childNodes[5].innerText;
const phnNumber = Call.parentNode.parentNode.childNodes[7].innerText;
console.log(serviceName);

if(starCount <= 0){
alert(`❌ You do not have sufficient balance.Need minimum 20 coin to call.`);
}
else{
    alert(` 📞 Calling ${serviceName} ${phnNumber}...`);

countVal = starCount - 20;
starValue.innerText=countVal;
starCount = countVal;

const newCart =document.createElement("div");

newCart.innerHTML=
` <div class="history-item bg-[#FAFAFA] rounded-md p-2 border border-[#f5f2f2] flex justify-between items-center mb-2">
                        <div><span class="font-bold">${serviceName}</span>
                            <p> ${phnNumber}</p>
                        </div><span>${time()}</span>
                    </div>
                    `; 

cartItem.append(newCart);
}
})
};



//--clear button---
document.getElementById("clr-btn")
.addEventListener('click',function(){
cartItem.innerHTML = '';

})