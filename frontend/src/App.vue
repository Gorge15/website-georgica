<template>
  <div class="main-container">
    <Nav />
    <div class="body-container">
      <img src="./assets/logo.png" />
      <div>
        <p>
          If Element Plus is successfully added to this project, you'll see an
          <code v-text="'<el-button>'"></code>
          below
        </p>
        <el-button @click="functie()" type="primary">el-button</el-button>
        <router-link to="/about">ABOUT</router-link>
      </div>
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Nav from "./components/Nav.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    HelloWorld,
    Nav,
  },
  data() {
    return {
      test: "",
    };
  },
  methods: {
    async functie() {
      let data = await axios.get("http://localhost:8082/test");
      console.log(data.data.data);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.main-container {
  display: flex;
  align-items: center;
  overflow: hidden;
}

.body-container {
  margin: auto
}
</style>
