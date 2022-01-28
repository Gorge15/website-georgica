<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button @click="test">TEST</el-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "About",
  data() {
    return {
      test: "",
    }
  },
  methods: {
    async test() {
      let data = await axios.get("http://localhost:8082");
      console.log(data);
    },
  },
}
</script>