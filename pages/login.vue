<template>
  <div class="login">
    <div class="container login-panel">
      <b-img src="@/assets/admin/panda-defender.png" alt="panda-defender" fluid />
      
      <b-form-input
        class="input"
        v-model="password"
        type="text"
        placeholder="Введи пароль"
        :state="inputStatus"
        ></b-form-input>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  data () {
    return {
      password: '',
      inputStatus: null
    }
  },
  methods: {
    async systemAuth (val) {
      try {
        let response = await this.$auth.loginWith ('adminAuth', { data: { password: val.toUpperCase() } })
        //this.inputStatus = true
        console.log (response)
        this.$router.push('/admin')
      } catch (err) {
        console.log (err)
        this.inputStatus = false
      }
    }
  },
  watch: {
    password: function (val) {
      if (val.length == 5) {
        this.systemAuth (val)
      }
      if (val.length == 0) {
        this.inputStatus = null
      }
    }
  }
}
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  width: 100%;
}
  .login-panel {
    width: 300px;
    height: 400px;
  }

.input {
  margin-top: 10px;
  border: none;
  text-align: center;
  font-size: 25px;
  text-transform: uppercase;
}
</style>