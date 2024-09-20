let formData = document.getElementById("registrationForm");

let tableBody = document.getElementById("card-body");

let nameElement = document.getElementById("exampleInputName1");

let addressElement = document.getElementById("exampleInputAddress1");

let emailElement = document.getElementById("exampleInputEmail1");

let contactElement = document.getElementById("exampleInputPhone1");

let btnElement = document.getElementById("btn-submit");

tableBody.innerHTML = "";

let submittedData = [];

formData.addEventListener("submit", function (event) {
  event.preventDefault();

  let inputValue = {
    enteredName: nameElement.value,
    enteredAddress: addressElement.value,
    enteredEmail: emailElement.value,
    enteredContact: contactElement.value,
  };
  submittedData.push(inputValue);
});

function displayData() {
  let html = "";
  submittedData.forEach(function (ele, index) {
    html += ``;
  });
}
