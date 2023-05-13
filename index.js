//grab form values

document.addEventListener('DOMContentLoaded',function () {
    let  users = JSON.parse(localStorage.getItem("user")) || [];
    const list = document.getElementById('#citizen-ul');
    const form = document.getElementById('getform');
    console.log(users);
if(users){
for(let user of users){
    tableRow = document.createElement("tr");
    for (const [key,value] of Object.entries(user)) {
        console.log(value)
        const tableData = document.createElement("td");
        tableData.textContent = value;
        tableRow.appendChild(tableData);
        if(tableData.innerText == 'Delete'){
            tableData.classList.add('deletebtn')
        }
        console.log(tableRow)
    }
list.appendChild(tableRow);
}
}
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
    let  username = document.getElementById('name').value;
    let number = document.getElementById('number').value;
    let id = document.getElementById('id').value;   
    let country = document.getElementById('country').value;

    console.log(username,number,id,country);
    let userDetails = {
        name:username,
        number: number,
        id: id,
        country: country,
        deletebtn:'Delete'
    }
users.push(userDetails);
localStorage.setItem("user", JSON.stringify(users));
console.log(users);
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

});
