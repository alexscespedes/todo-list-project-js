"use strict";

const contacts = [];

const incrementID = (function () {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
})();

const checkPhoneNumbers = function (str) {
  const regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
};

const checkEmail = function (str) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(str);
};

const addContact = function (name, phone, email) {
  if (name === "") {
    return "Empty description, please provide one.";
  }

  if (!checkPhoneNumbers(phone)) {
    return "Invalid phone number, please provide one.";
  }

  if (!checkEmail(email)) {
    return "Invalid email, please provide one.";
  }

  contacts.push({
    id: incrementID(),
    contactName: name,
    contactPhone: phone,
    contactEmail: email,
  });
};

// console.log(checkPhoneNumbers("809-479-9651"));
// console.log(checkEmail("alex@gmail.com"));

addContact("Alex", "809-479-9651", "alex@gmail.com");
console.log(contacts);
