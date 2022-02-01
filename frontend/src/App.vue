<template>
  <div class="main-container">
    <Nav />
    <div class="body-container">
      <img src="./img/logo.png" style="width: 250px; height: 250px" />
      <div>
        <br />
        <h1 id="welcome" class="welcome-text">Coming soon{{ soon }}</h1>
      </div>
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
      soon: "",
      i: 0,
    };
  },
  methods: {
    async functie() {
      let data = await axios.get("http://localhost:8082/test");
      console.log(data);
    },
  },
  mounted: async function () {
    console.log("merge");
    let wl = document.getElementById("welcome");

    setInterval(() => {
      if (this.i === 350) this.i = 0;
      this.i++;

      wl.style["background-color"] = `hsl(${this.i}, 100%, 50%)`;
      console.log(this.i);
      if (this.soon === "...") {
        this.soon = "";
      } else {
        this.soon = this.soon + ".";
      }
    }, 10);
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
  color: #9f50a4;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #3d3d3d;
}

.main-container {
  display: flex;
  align-items: center;
  overflow: hidden;
}

.body-container {
  margin: auto;
}

.welcome-text {
  background-color: hsl(347, 100%, 50%);
}
</style>
