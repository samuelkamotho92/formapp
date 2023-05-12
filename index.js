//grab form values

document.addEventListener('DOMContentLoaded',function () {
    const list = document.querySelector('#citizen-ul');
    const form = document.getElementById('getform');
//delete form 
list.addEventListener('click',function (e) {
console.log(e.target.button)
console.log(e.target.classList)
if (e.target.className == 'deletebtn') {
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
}
});



    //get values 
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const  username = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const id = document.getElementById('id').value;   
    const country = document.getElementById('country').value;
    console.log(username,number,id,country);
    //create content element
    const li = document.createElement('li');
    const membername = document.createElement('div');
    const memberid = document.createElement('div');
    const phoneNumber = document.createElement('div');
    const countryname = document.createElement('div');
    const deletebtn = document.createElement('button');
    
    membername.textContent = username;
    memberid.textContent = id;
    phoneNumber.textContent = number;
    countryname.textContent = country
    deletebtn.textContent = 'Delete';
    
    console.log(membername)
    console.log(memberid)
    //add classes
    
    li.classList.add('content');
    membername.classList.add('membername');
    memberid.classList.add('memberid');
    phoneNumber.classList.add('phoneNumber');
    countryname.classList.add('country');
    deletebtn.classList.add('deletebtn');


    li.appendChild(membername);
    li.appendChild(memberid);
    li.appendChild(countryname);
    li.appendChild(phoneNumber);
    li.appendChild(deletebtn);
    
    console.log(li);  
    list.appendChild(li);
       // clear input
       form.querySelector('input[type="text"]').value = '';
})

})