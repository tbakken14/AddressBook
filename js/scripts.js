let bobContact = new Contact();
bobContact.firstName = "Bob";
console.log(bobContact);

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
