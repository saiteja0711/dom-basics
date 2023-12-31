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
window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/93c7a24723334118b3287682efdf2802/appiontmentDetails")
    .then((response) =>
    {
        //console.log(response);
        for(var i=0; i<response.data.length ; i++)
        {
          showUser(response.data[i]);
        }
    })
    .catch((error)=>
    {
        console.log(error)
    })
}
 
)
function showUser(value){
        const li=document.createElement('li');
        //li.appendChild(document.createTextNode(`${inpName.value}:${inpEmail.value}`));
        var deleteBtn=document.createElement('button');
        deleteBtn.className='btn btn-danger btn-sm float-right delete';
        deleteBtn.appendChild(document.createTextNode('Delete'));
        li.appendChild(document.createTextNode(value.Name+'  '+value.Email));
        

        li.appendChild(deleteBtn);

        var editBtn=document.createElement('button')
        editBtn.className='btn btn-primary btn-sm float-right  edit';
        editBtn.appendChild(document.createTextNode('Edit'));
        li.appendChild(editBtn);
        user.appendChild(li);

}

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
        console.log("myobj=",myObj);
        //localStorage.setItem(inpName.value,JSON.stringify(myObj));
        axios.post("https://crudcrud.com/api/93c7a24723334118b3287682efdf2802/appiontmentDetails",myObj)
        .then((response) => {
               //console.log(response)
               
        })
        .catch((err) => {
            console.log(err)
        })

        

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
            axios.get('https://crudcrud.com/api/93c7a24723334118b3287682efdf2802/appiontmentDetails')
    .then((response) =>
    {
        //console.log(response);
        for(var i=0; i<response.data.length ; i++)
        {
           if(response.data[i].Name === text[0])
           {
               const idToDelete = response.data[i]._id;
               
               axios.delete(`https://crudcrud.com/api/93c7a24723334118b3287682efdf2802/appiontmentDetails/${idToDelete}`)
               .then(response => {
                console.log('Delete successful:')
              })
              .catch(error => {
                console.error('Error deleting data:');
              });
           }
           break;
        }
       
    })
    .catch((error)=>
    {
        console.log(error)
    })
            //localStorage.removeItem(text[0]);

            user.removeChild(li);
        }
    }
    if(e.target.classList.contains('edit')){
        if(confirm('Do you want to Edit?'))
        {
            var li=e.target.parentElement;
            let editText=e.target.parentElement.firstChild.textContent.split('  ');
            //console.log(e.target.parentElement.firstChild.textContent);
            axios.get('https://crudcrud.com/api/93c7a24723334118b3287682efdf2802/appiontmentDetails')
    .then((response) =>
    {
        //console.log(response);
        for(var i=0; i<response.data.length ; i++)
        {
           if(response.data[i].Name === editText[0])
           {
               const idToDelete = response.data[i]._id;
               
               axios.delete(`https://crudcrud.com/api/93c7a24723334118b3287682efdf2802/appiontmentDetails/${idToDelete}`)
               .then(response => {
                console.log('Delete successful:')
              })
              .catch(error => {
                console.error('Error deleting data:');
              });
           }
           break;
        }
       
    })
    .catch((error)=>
    {
        console.log(error)
    })


            let editName=document.querySelector('#name');
            editName.value=editText[0];

            let editEmail=document.querySelector('#email');
            editEmail.value=editText[1];


            //localStorage.removeItem(editText[0]);
            user.removeChild(li);
        }

    }

}
