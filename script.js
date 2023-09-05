const btns=document.querySelectorAll('button')
const disp= document.getElementById('screen');

function themechange() {
   if(document.getElementById('toggle').value)  {
    document.body.classList.toggle('dark-a')
   }
    
}
window.onload=displayNumber();
function displayNumber() {
    btns.forEach(btn=>{
        btn.addEventListener('click',()=>{
           disp.value+=btn.innerText
            console.log(btn.innerText)

        })
    })
   
}

