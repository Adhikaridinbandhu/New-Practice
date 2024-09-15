document
  .getElementById("personalForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = `
        <div class="card">
            <h3>${name}</h3>
            <p>Email: ${email}</p>
            <p>Age: ${age}</p>
        </div>
    `;

    document.getElementById("personalForm").reset();
  });
