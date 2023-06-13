// Unhides the addContactForm element
function handleAddContactButton(addContactForm) {
    addContactForm.setAttribute("class", "");
    addContactButton.setAttribute("class", "hidden");
}

function handleAddContactFormSubmit(event, addContactForm, addContactButton, body) {
    event.preventDefault();
    const newContact = new Contact();
    const inputs = addContactForm.getElementsByTagName("input");
    for (const input of inputs) {
        newContact[input.getAttribute("id")] = input.value;
    }
    displayNewContact(newContact);
    addContactForm.setAttribute("class", "hidden");
    addContactButton.setAttribute("class", "");
    addContactForm.reset();
}

function displayNewContact(newContact) {
    let body = document.querySelector("body");
    let divElement = document.createElement("div");
    divElement.setAttribute("class", "contact-row");

    for (let prop in newContact) {
        let infoElement = document.createElement("span");
        infoElement.setAttribute("class", prop);
        infoElement.innerHTML = newContact[prop];
        divElement.appendChild(infoElement);
    }
    let delButton = document.createElement("button");
    delButton.innerHTML = "X";
    delButton.setAttribute("class", "delete");
    divElement.appendChild(delButton);
    body.appendChild(divElement);
}

window.onload = function () {
    const body = document.querySelector("body");
    const addContactButton = document.getElementById("addContactButton");
    const addContactForm = document.getElementById("addContactForm");
    //const addContactFormSubmitButton = document.querySelector("body form button");
    addContactButton.addEventListener("click",
        (event) => handleAddContactButton(addContactForm));
    addContactForm.addEventListener("submit",
        (event) => handleAddContactFormSubmit(event, addContactForm, addContactButton, body));
    mockData();
}


function mockData() {
    let contacts = [];
    contact1 = {
        firstName: "Lionel",
        lastName: "Messi",
        city: "Miami",
        state: "FL",
        country: "USA",
        email: "lmessi10@gmail.com",
        phoneNumber: "1234567890"
    }
    contact2 = {
        firstName: "Arnold",
        lastName: "Schwarzenager",
        city: "Los Angeles",
        state: "CA",
        country: "USA",
        email: "ascharz@gmail.com",
        phoneNumber: "7890123456"
    }
    contact3 = {
        firstName: "Alex",
        lastName: "Hall",
        city: "Denver",
        state: "CO",
        country: "USA",
        email: "ahall100@gmail.com",
        phoneNumber: "0123789456"
    }


    contacts.push(contact1);
    contacts.push(contact2);
    contacts.push(contact3);
    contacts.forEach((e, i, a) => displayNewContact(e));
}
