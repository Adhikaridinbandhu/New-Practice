<template>
  <div>
    <form @submit.prevent="submitHandler" class="container" style="width: 40%">
      <h4 style="text-align: center">Fill up the following Personal Form</h4>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Name</label>
        <input
          v-model="formData.name"
          type="text"
          class="form-control"
          id="exampleInputName"
          aria-describedby="nameHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Address</label>
        <input
          v-model="formData.address"
          type="text"
          class="form-control"
          id="exampleInputAddress"
          aria-describedby="addressHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email</label>
        <input
          v-model="formData.email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Phone No.</label>
        <input
          v-model="formData.contact"
          type="number"
          class="form-control"
          id="exampleInputPhone"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "MyForm",
  components: {},
  props: {},
  data() {
    return {
      FormData: {
        name: "",
        address: "",
        email: "",
        contact: "",
      },
      submittedData: [],
    };
  },
  methods: {
    submitHandler() {
      console.log(this.FormData);
    },
  },
};
</script>

<style>
form {
  margin-top: 20px;
  box-shadow: 0 4px 8px 0px rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 4px;
}
</style>
