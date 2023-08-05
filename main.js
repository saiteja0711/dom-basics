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


form.addEventListener('submit',onSubmit);
user.addEventListener('click',removeItem);
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
        //li.appendChild(document.createTextNode(`${inpName.value}:${inpEmail.value}`));
        var deleteBtn=document.createElement('button');
        deleteBtn.className='btn btn-danger btn-sm float-right delete';
        deleteBtn.appendChild(document.createTextNode('Delete'));
        li.appendChild(document.createTextNode(inpName.value+'  '+inpEmail.value));
        

        li.appendChild(deleteBtn);

        var editBtn=document.createElement('button')
        editBtn.className='btn btn-primary btn-sm float-right  edit';
        editBtn.appendChild(document.createTextNode('Edit'));
        li.appendChild(editBtn);
        user.appendChild(li);
       //adding to local stroage by integer num
        let myObj={
            Name:inpName.value,
            Email:inpEmail.value
        };
        localStorage.setItem(inpName.value,JSON.stringify(myObj));

        

    }
    inpEmail.value='';
    inpName.value='';
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?'))
        {
            var li=e.target.parentElement;
            let text=e.target.parentElement.firstChild.textContent.split('  ');
            localStorage.removeItem(text[0]);
            user.removeChild(li);
        }
    }
    if(e.target.classList.contains('edit')){
        if(confirm('Do you want to Edit?'))
        {
            var li=e.target.parentElement;
            let editText=e.target.parentElement.firstChild.textContent.split('  ');
            //console.log(e.target.parentElement.firstChild.textContent);
            let editName=document.querySelector('#name');
            editName.value=editText[0];

            let editEmail=document.querySelector('#email');
            editEmail.value=editText[1];


            localStorage.removeItem(editText[0]);
            user.removeChild(li);
        }

    }

}
