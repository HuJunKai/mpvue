<template>
  <div class="question">
    <img class="bg" src="/static/imgs/test.jpg" alt="">
    <div class="qs_content" v-if="questions.length >0">
      <div class="" v-if="!startqs">
        <p class="title">温馨提示</p>
        <div class="warn_tag">
          为了更好的为您定制学习计划，请先回答以下问题，我们会为您量身推荐相关的课程。





        </div>
      </div>
      <div v-else>
        <p class="title">
          {{questions[currentIndex].title}}
        </p>
        <div class="response" v-for="(item,index) in questions[currentIndex].option" :key="index">
          <img v-if="item.select" src="/static/imgs/selected.jpg" alt="">
          <img v-else src="/static/imgs/unselect.jpg" alt="">
          <span>{{item.label}}</span>
        </div>
      </div>
    </div>
    <button @click="btn_click" class="qs_btn">{{btn_title}}</button>
  </div>

</template>

<script>
  export default {
    data(){
      return {
        questions: [],
        startqs: false, //是否显示问题列表
        currentIndex: 0, // 记录当前回答到第几道题
        btn_title: "开始答题",//按钮的title
      }
    },
    onLoad(){
      this.getData();
    },
    methods: {
      getData(){
        this.$https.request({
          url: this.$interfaces.getQuestions,
          method: "get"
        }).then(res => {
          this.questions = res.data.questions;
        })
      },
      btn_click(){
        if (!this.startqs) {
          this.startqs = true;
          this.btn_title = "下一题";
        } else {
          if (this.currentIndex < this.questions.length - 1) {
          }
          this.btn_title = "下一题";
          this.currentIndex++;
          if (this.currentIndex == this.questions.length - 1) {
            this.btn_title = "完成";

          }
        }
      },
      selectAnswer(index){
        const option = this.questions[this.currentIndex].option;
        option.forEach(item => {
          item.select = true;
        });
        option[index].select = !option[index].select
      }
    }
  }
</script>
<style>
  .question {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  .question .bg {
    width: 100%;
    height: 100%;
  }

  .qs_content {
    position: absolute;
    width: 80%;
    height: 50%;
    background: #fff;
    top: 36%;
    left: 10%;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 10px;
    color: rgb(13, 28, 51);
  }

  .qs_btn {
    position: absolute;
    top: 90%;
    left: 10%;
    width: 80%;
    background-color: #009eef;
    color: white;
  }

  .title {
    font-weight: bold;
    margin-bottom: 20px;
    word-break: break-all;
  }

  .warn_tag {
    padding: 40px 10px;
  }

  .response {
    padding: 10px;
  }

  .response img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
</style>
