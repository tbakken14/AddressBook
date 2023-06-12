// Unhides the addContactForm element
function handleAddContactButton(addContactForm) {
    addContactForm.setAttribute("class", "");
    addContactButton.setAttribute("class", "hidden");
}

function handleAddContactFormSubmit(event, addContactForm, body) {
    event.preventDefault();
    const newContact = new Contact();
    const inputs = addContactForm.getElementsByTagName("input");
    for (const input of inputs) {
        newContact[input.getAttribute("id")] = input.value;
    }
    displayNewContact(newContact, body);
    addContactForm.setAttribute("class", "hidden");
    addContactButton.setAttribute("class", "");
    addContactForm.reset();
}

function displayNewContact(newContact, body) {
    let divElement = document.createElement("div");
    let pElement = document.createElement("p");
    divElement.setAttribute("class", "contact-row")
    divElement.appendChild(pElement);
    body.appendChild(divElement);

    pElement.innerHTML = newContact.firstName;

    /*

    .createElement("p")
    create new element of type div
    add new paragraph element to div for each newContact
    append new div to body
    */


}

window.onload = function () {
    const body = document.querySelector("body");
    const addContactButton = document.getElementById("addContactButton");
    const addContactForm = document.getElementById("addContactForm");
    const addContactFormSubmitButton = document.querySelector("body form button");
    addContactButton.addEventListener("click",
        (event) => handleAddContactButton(addContactForm));
    addContactFormSubmitButton.addEventListener("click",
        (event) => handleAddContactFormSubmit(event, addContactForm, body));
}


















/*function Contact(firstName = "", lastName = "", streetAddress = "", city = "", state = "", territory = "", country = "", email = "", phone = "") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.streetAddress = streetAddress;
    this.city = city;
    this.state = state;
    this.territory = territory;
    this.country = country;
    this.email = email;
    this.phone = phone;
}*/
/*
function Contact() {
    this.firstName = "";
    this.lastName = "";
    this.streetAddress = "";
    this.city = "";
    this.state = "";
    this.territory = "";
    this.country = "";
    this.email = "";
    this.phone = "";
}

Contact.prototype.setCity = function (city) {
    this.city = city;
}

let person1 = new Contact();
let person2 = new Contact();
person1.__proto__.newAttr = "hi";
person1.city = "Seattle";
person2.city = "Portland";

//
if (person1.__proto__ === person2.__proto__) {
    console.log("Prototypes are the same for Contact object!");
}

if (person1 != person2) {
    console.log("These instances are not the same!");
}

/*
function Contact(firstName) {
    this.firstName = firstName;
    this.lastName = "";
    this.streetAddress = "";
    this.city = "";
    this.state = "";
    this.territory = "";
    this.country = "";
    this.email = "";
    this.phone = "";
}
*/
/*
class Contact {
    constructor(firstName) {
        this.firstName = firstName;
        this.lastName = "";
        this.streetAddress = "";
        this.city = "";
        this.state = "";
        this.territory = "";
        this.country = "";
        this.email = "";
        this.phone = "";
    }

    firstName = "generic"
    test = "hello";

    setCity(city) {
        this.city = city;
    }
}
*/
