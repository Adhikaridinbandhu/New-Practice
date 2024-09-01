let inputTagName = document.getElementById("username");
let userBtn = document.getElementById("addUser");
let tableBody = document.getElementById("records");

tableBody.innerHTML = "";

let submittedData = [];

let edit_index = null;

userBtn.addEventListener("click", function (event) {
  event.preventDefault();

  let inputValue = inputTagName.value;
  //   console.log(inputValue);
  let formObj = {
    name: inputValue,
  };

  if (edit_index == null) {
    // Directly push data to the array(Add case)
    submittedData.push(formObj);
  } else {
    submittedData.splice(edit_index, 1, formObj);
    edit_index = null;
  }

  userBtn.innerText = "Add User";
  inputTagName.value = "";
  displayData();
});

// let repeatedCode = (
//   <tr>
//     <td>1</td>
//     <td>Shiva</td>
//     <td>
//       <i class="btn text-white fa fa-edit btn-info mx-2"></i>
//       <i class="btn btn-danger text-white fa fa-trash"></i>
//     </td>
//   </tr>
// );

function displayData() {
  let html = "";
  //   console.log(submittedData);
  submittedData.forEach(function (element, index) {
    html =
      html +
      `<tr>
    <td>${index}</td>
    <td>${element.name}</td>
    <td>
      <i onClick='editData(${index})' class="btn text-white fa fa-edit btn-info mx-2"></i>
      <i onClick='deleteData(${index})' class="btn btn-danger text-white fa fa-trash"></i>
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
  inputTagName.value = submittedData[index].name;
  userBtn.innerText = "Update Data";
}
