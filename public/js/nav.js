"use strict"
let hum=document.getElementById('humburger');
let flag=0

hum.addEventListener('click',function(){
    let ul=document.getElementById('ul');
    
    if(flag==0){
    
        ul.className="pb-2 mx-3 sm:flex sm:justify-end  sm:absolute sm:right-2 sm:top-0  sm:text-white sm:bg-none sm:mr-20 sm:translate-y-0 relative top-4 rounded-lg bg-gradient-to-r from-purple-400 to-blue-400  translate-y-52 transition-all duration-200"
        flag=1
        
    }
    else{
      
        ul.className="pb-2 mx-3 sm:flex sm:justify-end  sm:absolute sm:right-2 sm:top-0  sm:text-white sm:bg-none sm:mr-20 sm:translate-y-0 relative top-4 rounded-lg bg-gradient-to-r from-purple-400 to-blue-400  -translate-y-52 transition-all duration-200"
        flag=0
    }
})