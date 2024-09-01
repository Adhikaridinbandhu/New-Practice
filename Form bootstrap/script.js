let data = [
  {
    id: 1,
    title: "...",
    price: "...",
    category: "...",
    description: "...",
    image: "...",
  },
];

let repeatedCode = (
  <div class="card" style="width: 18rem">
    <img
      src="https://images.unsplash.com/photo-1719937206341-38a6392dfdef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      class="card-img-top"
      alt="image-title"
    />
    <div class="card-body">
      <h5 class="card-title">Description:</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <p class="card-text">
        <strong>Price: </strong>Rs.100
      </p>
      <p class="card-text">
        <strong>Category: </strong>Men's wear
      </p>
      <p class="card-text">
        <strong>Rating: </strong>3.5 out of 5
      </p>
      <div class="btn-container">
        <a href="#" class="btn btn-primary">
          Submit
        </a>
        <a href="#" class="btn btn-danger">
          Delete
        </a>
      </div>
    </div>
  </div>
);

function getData() {
  let url = "https://fakestoreapi.com/products";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
    });
}
