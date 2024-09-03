let inputText = document.getElementById("textarea");
let btnDataAdd = document.getElementById("addBtn");
let noteData = document.getElementById("card-body");

noteData.innerHTML = "";

let edit_text = null;

let submittedData = [];

btnDataAdd.addEventListener("click", function (event) {
  event.preventDefault();

  let inputTextValue = inputText.value;

  let noteObj = {
    text: inputTextValue,
  };
  if (edit_text == null) {
    submittedData.push(noteObj);
  } else {
    submittedData.splice(edit_text, 1, noteObj);
  }
  btnDataAdd.innerHTML = "Add Note";
  inputText.value = "";
  displayData();
});

function displayData() {
  let html = "";
  submittedData.forEach(function (element, index) {
    html =
      html +
      `  <div class="card-body" id="card-body">
          <h5 class="card-title" style="font-weight: 600">Note ${index + 1}</h5>

          <p class="card-text">${element.text}</p>
          <a onClick='editData(${index})'href="#" class="btn btn-primary">Edit</a>
          <a onClick='deleteData(${index})'href="#" class="btn btn-danger">Delete</a>
        </div>`;
  });
  noteData.innerHTML = html;
}

function deleteData(index) {
  submittedData.splice(index, 1);
  displayData();
}

function editData(index) {
  edit_text = index;
  inputText.value = submittedData[index].text;
  btnDataAdd.innerHTML = "Edit Text";
}
