<template>
  <div>
    <MyNavigation />
    <MyForm />
    <MyTable />
  </div>
</template>

<script>
import MyNavigation from "./MyNavigation.vue";
import MyForm from "./MyForm.vue";
import MyTable from "./MyTable.vue";
export default {
  name: "HomePage",
  components: {
    MyNavigation,
    MyForm,
    MyTable,
  },
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
