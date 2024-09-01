let dataInformation = [
  {
    name: "Rajesh",
    age: 41,
    city: "Chitwan",
  },
  {
    name: "Biraj",
    age: 37,
    city: "Biratnagar",
  },
  {
    name: "Dilip",
    age: 28,
    city: "Pokhara",
  },
  {
    name: "Pradip",
    age: 29,
    city: "KTM",
  },
];
// let repeatedData = `<tr>
//           <th scope="row">1</th>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td>@mdo</td>
//           <td>
//             <button class="btn btn-primary">Edit</button>
//             <button class="btn btn-danger">Delete</button>
//           </td>
//         </tr>`;
displayData();
function displayData() {
  let html = "";
  //   console.log(html);
  let tableBody = document.getElementById("table-body");
  //   console.log(tableBody);
  dataInformation.forEach(function (ele, index) {
    html =
      html +
      `<tr>
          <th scope="row">${index + 1}</th>
          <td>${ele.name}</td>
          <td>${ele.age}</td>
          <td>${ele.city}</td>
          <td>
            <button class="btn btn-primary" onClick='edit(${index})'>Edit</button>
            <button class="btn btn-danger" onClick='deleteInfo(${index})'>Delete</button>
          </td>
        </tr>`;
  });
  if (dataInformation.length < 1) {
    tableBody.innerHTML = `<p class='text-center'>No Data</P>`;
  } else {
    tableBody.innerHTML = html;
  }
}

function edit(index) {
  console.log("editing index", index);
}
function deleteInfo(index) {
  console.log("deleting  index", index);
  dataInformation.splice(index, 1);
  displayData();
}
