<template>
  <div>
    <MyNavigation />
    <MyForm />
  </div>
</template>

<script>
import MyNavigation from "./MyNavigation.vue";
import MyForm from "./MyForm.vue";
export default {
  name: "HomePage",
  components: {
    MyNavigation,
    MyForm,
  },
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
