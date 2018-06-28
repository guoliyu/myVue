<template>
    <div class="login">
        {{msg}}
    </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "用户登录"
    };
  }
};
</script>
<style>
.login {
  background: #eee;
  color: blueviolet;
  text-shadow: 2px 2px 5px #ff4200;
}
</style>
