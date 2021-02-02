// Write a javascript function that will serve as an online phone book. You need to give the user an option for storing 
// new contacts and display them in a table. Each contact is consisted of firstName, lastName, phoneNumber. They request 
// from you to allow them insert the inputs through an input fields that are part of a form. If the contact is saved 
// successfully it needs to be displayed in a table. below the register form after clicking on the Add button.

// - Use of functions will be appreciated, but focus on making it work first
// - Use the provided HTML, it is a boost for save some time and focus on JS only
// - Make sure the contact is created as an object
// - Try to store each new contact in an array after adding new one

let fName = document.getElementById("fname");
let lName = document.getElementById("lname");
let phoneNum = document.getElementById("phone");
let submitBtn = document.getElementById("saveBtn");
let tableBody = document.getElementById("tableBody");

function Contact(fName, lName, phoneNum) {
    this.fName = fName;
    this.lName = lName;
    this.phoneNum = phoneNum;
}

let oneNewContact = new Contact(fName, lName, phoneNum);
let newContacts = [];;

function addNewContact() {
    newContacts.push(oneNewContact)
};

function displayContacts() {
    tableBody.innerHTML +=
        `<tr>
    <td>${oneNewContact.fName.value}</td>
    <td>${oneNewContact.lName.value}</td>
    <td>${oneNewContact.phoneNum.value}</td>
    </tr>`
}

console.log(displayContacts)

submitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    addNewContact();
    displayContacts();
});

