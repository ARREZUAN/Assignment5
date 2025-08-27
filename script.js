let copyCount = 0;
const copyBtns =document.querySelectorAll('.copy-btn');
const copyValue = document.getElementById('copyValue');

for(const button of copyBtns){
button.addEventListener('click',function(){
copyCount++;
copyValue.textContent=copyCount;
})
};


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


document.getElementById("clr-btn")
.addEventListener('click',function(){
cartItem.innerHTML = '';

})