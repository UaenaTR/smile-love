<template>
    <div>
      <!-- <img class="logo" src="../assets/img/logo.png"> -->
      <!-- <div class="ran-yun">
        <cube-button class="entry-btn" @click='goIndex(0)'>然</cube-button>
        <cube-button class="entry-btn" @click='goIndex(1)'>云</cube-button>
      </div>
      <img class="love-tips" src="../assets/img/tips.png" alt=""> -->
      <p @click="getAll">所有用户</p>
      <p @click="register">注册</p>
      <p @click="update">更新</p>
      <p @click="logout">注销</p>
    </div>
</template>

<script>
import Axios from '../utils/request'
export default {
  props: {

  },
  data () {
    return {

    }
  },
  components: {

  },
  computed: {

  },
  async created () {
    const params = {
      id: 1
    }
    const result = await Axios.get('/api/user/login', params)
    console.log(result.data.data)
  },
  mounted () {

  },
  watch: {

  },
  methods: {
    // 查询所有
    async getAll () {
      const result = await Axios.get('api/user/getAll')
      console.log(result)
    },
    // 注册
    async register () {
      const params = {
        name: 'hh',
        password: '03-23'
      }
      await Axios.post('api/user/register', params)
    },
    async update () {
      const params = {
        id: 1,
        name: 'xx',
        password: 'update'
      }
      await Axios.post('api/user/update', params)
    },
    // 注销
    async logout () {
      const params = {
        id: 1
      }
      await Axios.get('api/user/logout', params)
    },
    // 弹出密码窗
    showPassword (title, birth, name) {
      this.passwordDialog = this.$createDialog({
        type: 'prompt',
        title: title,
        prompt: {
          value: '',
          placeholder: '如：01-01'
        },
        onConfirm: (e, promptValue) => {
          if (promptValue === birth) {
            this.$router.push(`/Home/${name}`)
            this.passwordDialog.promptValue = ''
          } else {
            this.$createToast({
              type: 'warn',
              time: 1000,
              txt: '您输入的生日不对哦~'
            }).show()
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
      let title, birth, name
      if (type === 0) {
        title = '她的生日'
        birth = '10-22'
        name = 'tr'
      } else {
        title = '他的生日'
        birth = '09-07'
        name = 'gjy'
      }
      this.showPassword(title, birth, name)
      console.log(11)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
