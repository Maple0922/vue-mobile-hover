<template>
  <div class="container">
    <h1>Vue Mobile Hover</h1>
    <p>Hoverのみ</p>
    <button class="btn" :class="{ pc: !mobile}" @click="countUp">UP</button>
    <p>Touch Event実装</p>
    <button class="btn" :class="{ pc: !mobile}" @click="countDown" @touchstart="touchStart" @touchend="touchEnd">DOWN</button>
    <p>count: <input v-model="count" readonly></p>
  </div>
</template>

<script>
import isMobile from "ismobilejs";

export default {
  name: "Main",

  data () {
    return {
      count: 0,
    }
  },

  computed: {
    mobile () {
      return isMobile(window.navigator).any;
    }
  },

  methods: {
    countUp(){
      this.count++;
    },
    countDown(){
      this.count--;
    },
    touchStart(e){
      e.target.classList.add('touched');
    },
    touchEnd(e){
      e.target.classList.remove('touched');
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
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  &.pc {
    &:hover {
      background: blue;
      color: white;
    }
    &:active {
      background: white;
      color: blue;
    }
  }
  &.touched {
    background: blue;
    color: white;
  }
}
</style>
