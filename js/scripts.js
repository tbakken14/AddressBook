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
    displayNewContact(newContact, body);
    addContactForm.setAttribute("class", "hidden");
    addContactButton.setAttribute("class", "");
    addContactForm.reset();
}

function displayNewContact(newContact, body) {
    let divElement = document.createElement("div");
    divElement.setAttribute("class", "contact-row");

    for (let prop in newContact) {
        let infoElement = document.createElement("span");
        infoElement.innerHTML = newContact[prop];
        divElement.appendChild(infoElement);
    }

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
}
