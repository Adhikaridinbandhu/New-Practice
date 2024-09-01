let inputName = document.getElementById("exampleInputName");
let inputAddress = document.getElementById("exampleInputAddress");
let inputEmail = document.getElementById("exampleInputEmail");
let inputNumber = document.getElementById("exampleInputNumber");
let userBtn = document.getElementById("addUser");
let tableBody = document.getElementById("personal-details");
tableBody.innerHTML = "";

let submittedData = [];

let edit_index = null;

userBtn.addEventListener("click", function (event) {
  event.preventDefault();

  let inputNameValue = inputName.value;
  let inputAddressValue = inputAddress.value;
  let inputEmailValue = inputEmail.value;
  let inputNumberValue = inputNumber.value;
  let tableObj = {
    name: inputNameValue,
    address: inputAddressValue,
    email: inputEmailValue,
    number: inputNumberValue,
  };
  if (edit_index == null) {
    submittedData.push(tableObj);
  } else {
    submittedData.splice(edit_index, 1, tableObj);
    edit_index = null;
  }
  userBtn.innerText = "Submit";
  inputName.value = "";
  inputAddress.value = "";
  inputEmail.value = "";
  inputNumber.value = "";
  displayData();
});

// let repeatedData = (
//   <tr>
//     <th scope="row">1</th>
//     <td>Mark</td>
//     <td>Otto</td>
//     <td>@mdo</td>
//     <td>9846088418</td>
//     <td class="btn-wrapper">
//       <button class="btn btn-primary">Edit</button>
//       <button class="btn btn-danger">Delete</button>
//     </td>
//   </tr>
// );

function displayData() {
  let html = "";
  submittedData.forEach(function (element, index) {
    html =
      html +
      `<tr>
    <th scope="row">${index + 1}</th>
    <td>${element.name}</td>
    <td>${element.address}</td>
    <td>${element.email}</td>
    <td>${element.number}</td>
    <td class="btn-wrapper">
      <button onClick='editData(${index})'class="btn btn-primary">Edit</button>
      <button onClick='deleteData(${index})'class="btn btn-danger">Delete</button>
    </td>
  </tr>`;
  });
  tableBody.innerHTML = html;
}

function deleteData(index) {
  submittedData.splice(index, 1);

  displayData();
}

function editData(index) {
  edit_index = index;
  inputName.value = submittedData[index].name;
  inputAddress.value = submittedData[index].address;
  inputEmail.value = submittedData[index].email;
  inputNumber.value = submittedData[index].number;
  userBtn.innerText = "Update Data";
}
