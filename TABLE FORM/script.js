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
  nameElement.value = "";
  addressElement.value = "";
  emailElement.value = "";
  contactElement.value = "";
  displayData();
});

function displayData() {
  let html = "";
  submittedData.forEach(function (ele, index) {
    html += `
        <div class="card-body" id="card-body">
          <p class="card-text"><strong>Name: </strong>${ele.enteredName}</p>
          <p class="card-text"><strong>Address: </strong>${ele.enteredAddress}</p>
          <p class="card-text"><strong>Email: </strong>${ele.enteredEmail}</p>
          <p class="card-text"><strong>Phone no: </strong>${ele.enteredContact}</p>
          <div class="btn-wrapper">
            <a href="#" class="btn btn-primary">Edit Data</a>
            <a href="#" class="btn btn-danger">Delete</a>
          </div>
        </div>`;
  });
  tableBody.innerHTML = html;
}
