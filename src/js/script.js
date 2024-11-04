"use strict"
let textarea=document.getElementById('text-util');
let textinput=document.getElementById('textinput');
let clearall=document.getElementById('clearall');
let uppercase=document.getElementById('uppercase');
let lowercase=document.getElementById('lowercase');
let copy_text=document.getElementById('copy_text');
let read_time=document.getElementById('read_time');
let select_option=document.getElementById('select_option');
let count=0
let flag1=0
textarea.addEventListener('input',()=>{
    copy_text.src='img/copy.png'
    let letter_count=document.getElementById('letter_count');
    let word_count=document.getElementById('word_count');
    textinput.innerHTML=textarea.value;
    letter_count.innerHTML=textarea.value.length

    let temp=textarea.value.trim()// remove space from starting side and ending side
    temp=temp.split(" ")
    let words=temp.filter((element)=>{
        return element!=""
    })
    word_count.innerHTML=words.length

    read_time.innerHTML=Number(0.008*(words.length)).toFixed(3)
    flag1=1
})

uppercase.addEventListener('click',()=>{
    copy_text.src='img/copy.png'
    let temp=textarea.value
    if(temp.length==0){
        textinput.innerHTML="At list One Charecter"
        flag1=0
    }
    else{

        temp=temp.toUpperCase();
        textinput.innerHTML=temp
        flag1=1
    }
})
lowercase.addEventListener('click',()=>{
    copy_text.src='img/copy.png'
    let temp=textarea.value
    if(temp.length==0){
        textinput.innerHTML="At list One Charecter"
        flag1=0
    }
    else{

        temp=temp.toLowerCase();
        textinput.innerHTML=temp
        flag1=1
    }
})
clearall.addEventListener('click',()=>{
    copy_text.src='img/copy.png'
    textarea.value="";
    textinput.innerHTML="";
    read_time.innerHTML=0
    letter_count.innerHTML=0
    word_count.innerHTML=0
    flag1=0
})
copy_text.addEventListener('click',()=>{
    let temp=textinput.innerText
    if(temp.length==0 || flag1==0){   /////////
        textinput.innerHTML="we have not found proper value"
    }
    else{
        // copy text to clip board
        navigator.clipboard.writeText(temp)
        copy_text.src='img/checked.png'

    }

})

// option
select_option.addEventListener('click',()=>{
    copy_text.src='img/copy.png'
    if(select_option.value=='select'){
        
        textinput.innerHTML=textinput.innerText
    }
    else if(select_option.value=='extract_number'){
        
        let temp=textarea.value
        if(temp.length==0){
            flag1=0
            textinput.innerHTML="At list One Charecter"
        }
        else{
            temp=temp.match(/[0-9]+/g)
            if(temp==null){
                flag1=0
                textinput.innerHTML="Number Is Not Found"
            }
            else{
                flag1=1
                textinput.innerHTML=temp
            }
        }
    }
    else if(select_option.value=='extract_number_remove_comma'){
        let temp=textarea.value
        if(temp.length==0){
            flag1=0
            textinput.innerHTML="At list One Charecter"
        }
        else{
            
            temp=temp.match(/[0-9]+/g)
            if(temp==null){
                flag1=0
                textinput.innerHTML="Number Is Not Found"
            }
            else{
                flag1=1
                temp=temp.join("")
                textinput.innerHTML=temp
            }
        }
    }
    else if(select_option.value=='extract_string'){
        let temp=textarea.value
        if(temp.length==0){
            textinput.innerHTML="At list One Charecter"
            flag1=0
        }
        else{
            temp=temp.match(/[a-zA-Z]+/g)
            if(temp==null){
                textinput.innerHTML="Character Is Not Found"
                flag1=0
            }
            else{
                temp=temp.join(" ")
                textinput.innerHTML=temp
                flag1=1
            }
        }
    }
    else if(select_option.value=='extract_string_remove_comma'){
        let temp=textarea.value
        if(temp.length==0){
            textinput.innerHTML="At list One Charecter"
            flag1=0
        }
        else{
            temp=temp.match(/[a-zA-Z]/g)
            if(temp==null){
                textinput.innerHTML="Character Is Not Found"
                flag1=0
            }
            else{
                temp=temp.join("")
                textinput.innerHTML=temp
                flag1=1
            }
        }
    }
    else if(select_option.value=='spacial_charecter'){
        let temp=textarea.value
        if(temp.length==0){
            textinput.innerHTML="At list One Charecter"
            flag1=0
        }
        else{
            temp=temp.match(/[^a-zA-Z0-9]+/g)
            if(temp==null){
                textinput.innerHTML="Spacial charecter Is Not Found"
                flag1=0
            }
            else{
                temp=temp.join(" ")
                textinput.innerHTML=temp
                flag1=1
            }
        }
    }
    else if(select_option.value=='spacial_charecter_remove_comma'){
        let temp=textarea.value
        if(temp.length==0){
            textinput.innerHTML="At list One Charecter"
            flag1=0
        }
        else{
            temp=temp.match(/[^a-zA-Z0-9]+/g)
            if(temp==null){
                textinput.innerHTML="Spacial charecter Is Not Found"
                flag1=0
            }
            else{
                temp=temp.join("")
                textinput.innerHTML=temp
                flag1=1
            }
        }
    }
})



