// const ul=document.querySelector('.items');
// ul.firstElementChild.innerHTML='<h1>Hello</h1>';
// ul.firstElementChild.style.color='green';
// ul.children[1].style.color='yellow';
// const form=document.querySelector('#myform');
// const name=document.querySelector('#name');
// const email=document.querySelector('#email');
// const msg=document.querySelector('.msg');
// const user=document.querySelector('#users');

// const btn=document.querySelector('.btn');

// btn.addEventListener('mouseout',(e)=>{
//     e.preventDefault();
//     document.querySelector('#my-form').style.background='#ccc';
//     document.querySelector('body').classList.add('bg-dark');
    
    

// });
const form=document.querySelector('#my-form');
const inpName=document.querySelector('#name');
const inpEmail=document.querySelector('#email');
const msg=document.querySelector('.msg');
const user=document.querySelector('#users');
let num=1;

form.addEventListener('submit',onSubmit);
function onSubmit(e){
    e.preventDefault();
    if(inpName.value==''||inpEmail=='')
    {
        msg.classList.add('error');
        msg.textContent='Add some valid Input';
        setTimeout(()=> msg.remove(),3000);
    }
    else{
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(`${inpName.value}:${inpEmail.value}`));
        user.appendChild(li);
       //adding to local stroage by integer num
        localStorage.setItem('Name'+num.toString(),inpName.value);
        localStorage.setItem('Email'+num.toString(),inpEmail.value);
        //increment the num
        num++;
        

    }
    inpEmail.value='';
    inpName.value='';
}
