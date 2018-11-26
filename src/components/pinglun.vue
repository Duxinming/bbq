<template>
  <div id="app">
    <div class="zong">
      <div class="zong1">
        <div class="hang1">{{articleArr1.Name}} | {{articleArr1.selected}}</div>
        <div class="hang2">
            {{articleArr1.Content}}
        </div>  
      </div>
      <div class="zong2">
        <div style="padding-top: 10px; display: flex; justify-content: center;" >
            <input style="width:75vw; height:5vh; font-size: 150%; text-indent: 10px" type="text" v-model="Hcontent" placeholder="回点什么呢~">
        </div>
        <div style="display: flex; margin-top: 10px; padding-bottom: 30px; flex-direction: row-reverse;">
          <div style="width: 17vw; height: 40px; margin: 0px 12px 0px 12px; background-color: rgb(0, 120, 231); color: white; text-align: center; line-height: 40px;" 
          v-on:click="submit">评论</div>
          <input style="height: 40px; width: 25vw; margin: 0px 0px 0px 0px; border: 0px; padding: 0px; text-align: center; font-size: 110%;" type="text" v-model="Hname"  placeholder="昵称">    
        </div>
      </div>
      <div class="zong3">
        <div class="biao" v-bind:key='item.id' v-for='item in articleArr2'>
          <div style="margin: 5px 0px 0px 5px;">
              {{item.Hname}}
          </div>
          <div style="color: white; margin: 0px 5px 0px 5px; padding: 8px 8px 8px 28px; font-size: 120%;">
              {{item.Hcontent}}
          </div>
        </div>
      </div>
    </div>
    <div class="back" v-on:click="back">返回</div>  
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "pinglun",
  data() {
    return {
      Hcontent: "",
      Hname: "",
      count: "",
      time: new Date().getTime(),
      articleArr1: {},
      articleArr2: []
    };
  },
  created() {
    this.getParams();
  },
  mounted: function() {
    // this.getAeticle1();
    window.addEventListener("beforeunload", e => this.beforeunloadHandler(e));
  },
  // destroyed: function() {
  //   window.removeEventListener("beforeunload", e =>
  //     this.beforeunloadHandler(e)
  //   );
  // },
  methods: {
    getParams() {
      // 取到路由带过来的参数
      var routerParams = this.$route.params.id;
      // 将数据放在当前组件的数据内
      this.articleArr1 = routerParams;
      console.log(routerParams);
    },
    getAeticle1() {
      let that = this;
      axios
        .post("http://localhost:3000/Hgetarticle", {
          Id: this.articleArr1._id
        })
        .then(function(abc) {
          that.articleArr2 = abc.data;
          console.log(abc.data);
        });
    },
    submit: function() {
      let that = this;
      if (this.Hcontent === "") {
        alert("请输入内容");
      }
      if (this.Hname === "") {
        this.Hname = "匿名";
      }
      if (this.Hcontent !== "") {
        axios
          .post("http://localhost:3000/Harticle", {
            Hcontent: this.Hcontent,
            Hname: this.Hname,
            time: this.time,
            Id: this.articleArr1._id
          })
          .then(function(response) {
            console.log(response);
            that.getAeticle1();
          });
        axios
          .post("http://localhost:3000/pinglunnum", {
            Id: this.articleArr1._id
          })
          .then(function(abc) {
            console.log(abc.data);
          });
        alert("发布成功");
        this.Hcontent = "";
        this.Hname = "";
      }
    },
    back: function() {
      this.$router.push({
        path: "/bbq",
        name: "bbq"
      });
    },
    beforeunloadHandler(e) {
      // window.location.href='https://www.baidu.com'
      console.log("shuaxin");
    }
  },
  watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    $route: "getParams"
  }
};
</script>

<style>
* {
  margin: auto;
}
#app {
  display: flex;
  flex-direction: column;
  background-image: url("1.jpg");
  height: 100vh;
  background-size: 100vw 100vh;
  overflow: auto;
}
.zong {
  background-color: rgba(76, 175, 80, 0.85);
  margin: 20px;
}
/* .zong1 { */
/* background-color: rgba(76, 175, 80, 0.85); */
/* } */
.hang1 {
  color: black;
  font-size: 80%;
  padding-top: 10px;
  margin-left: 20px;
}
.hang2 {
  color: white;
  font-size: 200%;
  padding: 10px;
  margin-left: 50px;
}
.zong2 {
  background-color: rgba(255, 255, 255, 0.7);
  margin-left: 5px;
  margin-right: 5px;
}
.zong3 {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: rgba(255, 255, 255, 0.9);
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 10px;
}
.biao {
  width: 70vw;
  background-color: rgba(76, 175, 80, 0.85);
  margin: 20px;
  border: 1px solid black;
  border-radius: 8px;
}
.back {
  align-self: center;
  text-align: center;
  font-size: 120%;
  line-height: 40px;
  height: 40px;
  width: 80px;
  margin: 0px;
  background-color: rgb(230, 230, 230);
  border-radius: 8px;
}
</style>

