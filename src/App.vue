<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
  background: linear-gradient(#ffcec0,#ff3f79);
  height: 100%;

  .logo{
    width: 266px;
    margin-top: 80px;
  }

  .ran-yun{
    display: flex;
    margin-top: 60px;
    justify-content: space-around;

    .entry-btn{
      width: 120px;
      height: 50px;
      border-radius: 20px;
      background-color: cyan;
      color: #ff3f79;
    }
  }

  .love-tips{
    margin-top: 120px;
  }
}
</style>
