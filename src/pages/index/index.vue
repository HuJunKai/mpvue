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
        if (e.mp.detail.userInfo) {
          this.$store.dispatch("setIsAuthenticated", true);
          this.$store.dispatch("setUser", true);
          //获取code
          this.getCode();
        }
      },

      getCode(){
        wx.login({
          success: res => {
            console.log(res);
            this.getOpenid(res.code)
          }
        });
      },

      getOpenid(code){
        const appid = "wx91c40b9c277d110b";
        const secret = "ae1f40aaf0fb476f7ea8203d83f4f7e3";

        this.$https.request({
          url: `${this.$interfaces.getOpenid}${appid}/${secret}/${code}`,
          mehtod: 'get',
        }).then(res => {
          //将openid存入vuex
          this.isLearned('将openid存入vuex', res.data.openid);

          this.$store.dispatch('setOpenid', res.openid);
          //请求课程数据
        }).catch(err => console.log('getOpenid err', err));
      },

      isLearned(openid){
        this.$https.request({
          url: this.$interfaces.getMyLesson + openid,
          method: "get"
        }).then(res => {
          console.log("已测试过");
          wx.switchTab({
            url: '../learn/main'
          })
        }).catch(err => {
          console.log('还没有测试过');
          wx.redirectTo({
            url: '../question/main'
          })
        });
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
