<template>
  <div id="app">
    <img class="logo" src="./assets/img/logo.png">
    <div class="ran-yun">
      <cube-button class="entry-btn" @click='goIndex(0)'>然</cube-button>
      <cube-button class="entry-btn" @click='goIndex(1)'>云</cube-button>
    </div>
    <img class="love-tips" src="./assets/img/tips.png" alt="">
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
    // 弹出密码窗
    showPassword (title, birth) {
      this.passwordDialog = this.$createDialog({
        type: 'prompt',
        title: title,
        prompt: {
          value: '',
          placeholder: '如：01-01'
        },
        onConfirm: (e, promptValue) => {
          if (promptValue === birth) {
            console.log('success')
            this.passwordDialog.promptValue = ''
          } else {
            console.log('failed')
            this.passwordDialog.promptValue = ''
          }
        },
        onCancel: (e) => {
          this.passwordDialog.promptValue = ''
        }
      }).show()
    },
    // 进入主页
    goIndex (type) {
      let title, birth
      if (type === 0) {
        title = '她的生日'
        birth = '10-22'
      } else {
        title = '他的生日'
        birth = '09-07'
      }
      this.showPassword(title, birth)
      console.log(11)
    }
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
