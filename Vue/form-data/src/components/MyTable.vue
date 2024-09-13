<template>
  <div>
    <table class="table container">
      <thead>
        <tr>
          <th scope="col">S.N.</th>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
          <th scope="col">Email</th>
          <th scope="col">Phone No.</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(ele, index) in Informations" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ ele.name }}</td>
          <td>{{ ele.address }}</td>
          <td>{{ ele.email }}</td>
          <td>{{ ele.contact }}</td>
          <td class="btn-wrapper">
            <b-button variant="primary">Edit</b-button>
            <b-button variant="danger">Delete</b-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
"

<script>
export default {
  name: "MyTable",
  components: {},
  props: {},
  data() {
    return {
      Informations: [
        {
          name: "Bandhu Adhikari",
          address: "Galyang",
          email: "tettikaihawa0@gmail.com",
          contact: 9806980611,
        },
        {
          name: "Prem Khanal",
          address: "Sunawali",
          email: "kaleyktomoh62@tuppi.com",
          contact: 9845464715,
        },
        {
          name: "Langry Matyatyang",
          address: "Rampur",
          email: "tatoaalu69@vukka.com",
          contact: 9806980611,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
table {
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: 30px;
}
.btn-wrapper {
  display: flex;
  justify-content: space-around;
}
</style>
