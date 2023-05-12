//grab form values

document.addEventListener('DOMContentLoaded',function () {
    const list = document.getElementById('#citizen-ul');
    const form = document.getElementById('getform');
//delete form 
list.addEventListener('click',function (e) {
console.log(e.target.classList)
if (e.target.className == 'deletebtn') {
    console.log(e.target.parentElement);
    const tr = e.target.parentElement;
    tr.parentNode.removeChild(tr);
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
    const tr = document.createElement('tr');
    const membername = document.createElement('td');
    const memberid = document.createElement('td');
    const countryname = document.createElement('td');
    const phoneNumber = document.createElement('td');
    const deleteElement = document.createElement('td');
    const deletebtn = document.createElement('button');
    
//append the button to element
    deleteElement.appendChild(deletebtn)

    membername.textContent = username;
    memberid.textContent = id;
    phoneNumber.textContent = number;
    countryname.textContent = country
    deletebtn.textContent = 'Delete';
    
    console.log(membername)
    console.log(memberid)
    //add classes
    
    // li.classList.add('content');
    // membername.classList.add('membername');
    // memberid.classList.add('memberid');
    // phoneNumber.classList.add('phoneNumber');
    // countryname.classList.add('country');
    deletebtn.classList.add('deletebtn');


    tr.appendChild(membername);
    tr.appendChild(memberid);
    tr.appendChild(phoneNumber);
    tr.appendChild(countryname);
    tr.appendChild(deletebtn);
    
    console.log(tr);  
    list.appendChild(tr);
       // clear input
       form.querySelector('input[type="text"]').value = '';
})

})