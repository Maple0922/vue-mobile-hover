<template>
  <div class="container">
    <h1>Vue Mobile Hover</h1>
    <p>hoverのみ</p>
    <button class="btn" @click="countUp">Touch me!</button>
        <p>hoverとtouch event</p>
    <button class="btn" @click="countDown">Touch me!</button>
    <p>count: <input v-model="count" readonly></p>
  </div>
</template>

<script>
export default {
  name: "Main",

  data () {
    return {
      count: 0,
    }
  },

  methods: {
    countUp() {
      this.count++
    },
    countDown(){
      this.count--
    }
  },

};
</script>

<style scoped lang="scss">

// reset
button {
  padding: 0;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
}

// style
.btn {
  border: 1px solid blue;
  width: 200px;
  height: 50px;
  cursor: pointer;
  background: white;
  color: blue;
  &:hover {
    background: blue;
    color: white;
  }

}
</style>
