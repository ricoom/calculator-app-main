const btns=document.querySelectorAll('button')
const disp= document.getElementById('screen');
var num1=0;
var num2=0;
var total=0;
var op;
function themechange() {
   if(document.getElementById('toggle').value)  {
    document.body.classList.toggle('dark-a')
   }
    
}
window.onload=displayNumber();
function displayNumber() {
    btns.forEach(btn=>{
        btn.addEventListener('click',()=>{
            //omit operators
            if(btn.innerText!='+' && btn.innerText!='-' && btn.innerText!='x' && btn.innerText!='/' && btn.innerText!='=' && btn.innerText!='.' &&btn.innerText!='Del' && btn.innerText!='Reset'){
                disp.value+=btn.innerText
            }
           

            switch (btn.innerText) {
                case "+":
                    num1= parseInt(disp.value);
                    disp.value=""
                    op='+';
                    btn.classList.toggle('active')
                    setTimeout(() => {
                        btn.classList.remove('active')
                    }, 1500);
                   
                    break;

                    case "-":
                        num1= parseInt(disp.value);
                        disp.value=""
                        op='-';
                        btn.classList.toggle('active')

                        setTimeout(() => {
                            btn.classList.remove('active')
                        }, 1500);

                        break;

                        case "x":
                        num1= parseInt(disp.value);
                        disp.value=""
                        op='x';
                        btn.classList.toggle('active')

                        setTimeout(() => {
                            btn.classList.remove('active')
                        }, 1500);
                        
                        break;
                        case "/":
                        num1= parseInt(disp.value);
                        disp.value=""
                        op='/';
                        btn.classList.toggle('active')

                        setTimeout(() => {
                            btn.classList.remove('active')
                        }, 1500);
                        
                        break;
                        
                        case "Reset":
                    disp.value=""
                    
                    break;
                    case "Del":
                    disp.value=""

                    break;

                    case "=":
                    num2=parseInt(disp.value);
                    if(op=='+'){                      
                        total=num1+num2;
                        disp.value=total
                    }
                   if(op=='-'){
                      
                        total=num1-num2;
                        disp.value=total
                    }
                    if(op=='x'){
                      
                        total=num1*num2;
                        disp.value=total
                    }
                    if(op=='/'){
                      
                        total=num1/num2;
                        disp.value=total
                    }

                        break;
            
                default: 
                    break;
            }



        })
    })
   
}

