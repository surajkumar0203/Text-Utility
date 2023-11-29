"use strict"
let hum=document.getElementById('humburger');
let flag=0
hum.addEventListener('click',function(){
    let ul=document.getElementById('ul');
    
    if(flag==0){
    
        ul.classList.add('translate-y-0')
        flag=1
        
    }
    else{
        ul.classList.remove('translate-y-0')
        flag=0
    }
})