<template>
  <div>

    <div class="nav">
      <img class="logo" src="../img/logo.png" alt="GEORGICA LOGO" />
      <div class="buttons">
        <button id="btn1" class="btn noselect">TEST</button>
        <button id="btn2" class="btn noselect">TEST</button>
        <button id="btn3" class="btn noselect">TEST</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      i: 0,
    }
  },
  methods: {
    openNav() {
      const div = document.getElementById("sidebar");
      div.classList.remove("ascuns");
      div.classList.add("vede");
    },
  },
    mounted: async function () {
    // console.log("merge");
    
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let btn3 = document.getElementById("btn3");

    setInterval(() => {
      if (this.i === 350) this.i = 0;
      this.i++;

      btn1.style["border"] = `3px solid hsl(${this.i}, 100%, 50%)`;
      btn2.style["border"] = `3px solid hsl(${this.i}, 100%, 50%)`;
      btn3.style["border"] = `3px solid hsl(${this.i}, 100%, 50%)`;
    }, 10);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  margin: 0;
  padding: 0;
  width: 80px;
  height: 100vh;
  background-color: #212121;
  -webkit-box-shadow: 15px 0px 27px -5px rgba(0, 0, 0, 0.48);
  box-shadow: 15px 0px 27px -5px rgba(0, 0, 0, 0.48);
}

.logo {
  width: 100%;
  user-select: none;
  pointer-events: none;
}

.btn {
  width: 60px;
  height: 60px;
  border: none;
  border: 3px solid #9248d4;
  background-color: transparent;
  color: #9248d4;
  transition: 0.3s;
}

.ic {
  opacity: 0;
}

.sidebar {
}

.btn:hover {
  background-color: #9248d4;
  color: #212121;
  -webkit-box-shadow: 0px 0px 27px 7px rgba(186, 138, 227, 0.48);
  box-shadow: 0px 0px 27px 7px rgba(186, 138, 227, 0.48);
}

@media only screen and (max-width: 600px) {
  .nav {
    display: none;
  }

  .ic {
    opacity: 1;
    margin: 0;
    padding: 0;
    position: fixed;
    top: 0%;
    left: 100%;
    transform: translateX(-100%);
    font-size: 32px;
  }
}

.buttons {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
</style>
