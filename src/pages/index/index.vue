<template>
  <div class="container">
    <div class="login">
      <img src="/static/imgs/guide_bg.jpg" alt="">
      <div class="learn">
        <!--bindgetuserinfo bind在vue中需要写成@-->
        <button open-type="getUserInfo" @getuserinfo="getUserInfo">开始学习</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
      methods: {
          getUserInfo(e){
              if(e.mp.detail.userInfo){

              }
          }
      }
  };
</script>
<style scoped>
  .container {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .login {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .login img {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  .login .learn {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
  }

  .learn button {
    position: absolute;
    top: 90%;
    left: 10%;
    width: 80%;
    background-color: #009eef;
    color: white;
  }
</style>
