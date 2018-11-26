<template>
  <div id="apps">
    <div class="title">表 白 墙</div>
    <div class="kong" style="height:20px;"></div>
    <div class="zong1">
        <div v-bind:class="name1" v-on:click='onclick1()'>全部</div>
        <div v-bind:class="name2" v-on:click='onclick2()'>表白</div>
        <div v-bind:class="name3" v-on:click='onclick3()'>一句</div>
        <div v-bind:class="name4" v-on:click='onclick4()'>吐槽</div>
    </div>
    <div class="kong" style="height:30px;"></div>
    <div class="zong2">
      <div class="hang1" v-on:click='onclick5()' v-if='seen1'>
        <div class="tu1"></div>
        <div style="height: 30px;
            width: 70px;
            margin: 0px;
            line-height: 30px;  
            color: white;">
            点我搜索
        </div>
      </div>
      <div class="hang1" v-on:click='onclick5()' v-if='seen2'>
        <div class="tu2"></div>
        <div style="height: 30px;
            width: 70px;
            line-height: 30px;  
            color: white;">
            退出搜索
        </div>
      </div>
      <div class="hang2">
        <input type="text" v-model='Content' v-if='seen1' style="width:97vw; height: 5vh; border: 1px solid black; text-indent: 10px"
            placeholder="请输入内容">
        <input type="text" v-model='sousuo' v-if='seen2' style="width:97vw; height: 5vh; border: 1px solid black; text-indent: 10px;"
              placeholder="请输入要搜索的内容">
      </div>
      <div class="hang3" v-if='seen1'>
            <!-- <div style="height: 30px; width: 40px; background-image: url('图片.png'); background-size: 35px 30px; background-repeat: no-repeat; margin-right: 10px;"></div> -->
        <select class="x" name="leibie" v-model='selected'>
          <option disabled value="">请选择</option>
          <option>表白</option>
          <option>一句</option>
          <option>吐槽</option>
        </select>
        <input class="y" type="text" v-model='Name' placeholder="昵称">
        <div class="z" v-on:click='submit'>发布</div>
      </div>
      <div class="hang3" v-if='seen2'>
          <div class="s" v-on:click='onclick6()'>搜索</div>
      </div>
    </div>
    <div class="biao1" v-for="item in articleArr" v-bind:key="item.id">
      <div style="color:white; margin-left: 20px;">{{item.Name}} | {{item.selected}}</div>
      <div style="margin: 10px auto 10px 60px;  color: white; font-size: 170%;">
          {{item.Content}} 
      </div>
      <div class="pinglun" v-on:click='pinglun(item)'>
        <div class="tu3"></div>
        <div style="color: white; line-height: 30px;">{{item.Count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "blog",
  data() {
    return {
      name1: "di2",
      name2: "di1",
      name3: "di1",
      name4: "di1",
      seen1: true,
      seen2: false,
      Content: "",
      Name: "",
      selected: "表白",
      articleArr: [],
      sousuo: "",
      num: new Date().getTime()
    };
  },
  mounted: function() {
    this.getAeticle1();
  },
  methods: {
    getAeticle1() {
      let that = this;
      axios.get("http://localhost:3000/getarticle1").then(function(abc) {
        // console.log(abc);
        that.articleArr = abc.data;
      });
    },
    getAeticle2() {
      let that = this;
      axios.get("http://localhost:3000/getarticle2").then(function(abc) {
        that.articleArr = abc.data;
        console.log(abc.data);
      });
    },
    getAeticle3() {
      let that = this;
      axios.get("http://localhost:3000/getarticle3").then(function(abc) {
        that.articleArr = abc.data;
        console.log(abc.data);
      });
    },
    getAeticle4() {
      let that = this;
      axios.get("http://localhost:3000/getarticle4").then(function(abc) {
        that.articleArr = abc.data;
        console.log(abc.data);
      });
    },
    getAeticle5() {
      let that = this;
      axios.post("http://localhost:3000/getarticle5", { sousuo: this.sousuo })
        .then(function(abc) {
          that.articleArr = abc.data;
          console.log(abc.data);
        });
    },
    onclick1: function() {
      if (this.name1 === "di1") {
        this.name1 = "di2";
        this.name2 = "di1";
        this.name3 = "di1";
        this.name4 = "di1";
        this.getAeticle1();
      } else {
        this.name1 = "di2";
        this.name2 = "di1";
        this.name3 = "di1";
        this.name4 = "di1";
        this.getAeticle1();
      }
    },

    onclick2: function() {
      if (this.name2 === "di1") {
        this.name1 = "di1";
        this.name2 = "di2";
        this.name3 = "di1";
        this.name4 = "di1";
        this.selected = "表白";
        this.getAeticle2();
      } else {
        this.name1 = "di1";
        this.name2 = "di2";
        this.name3 = "di1";
        this.name4 = "di1";
        this.getAeticle2();
      }
    },

    onclick3: function() {
      if (this.name3 === "di1") {
        this.name1 = "di1";
        this.name2 = "di1";
        this.name3 = "di2";
        this.name4 = "di1";
        this.selected = "一句";
        this.getAeticle3();
      } else {
        this.name1 = "di1";
        this.name2 = "di1";
        this.name3 = "di2";
        this.name4 = "di1";
        this.getAeticle3();
      }
    },

    onclick4: function() {
      if (this.name4 === "di1") {
        this.name1 = "di1";
        this.name2 = "di1";
        this.name3 = "di1";
        this.name4 = "di2";
        this.selected = "吐槽";
        this.getAeticle4();
      } else {
        this.name1 = "di1";
        this.name2 = "di1";
        this.name3 = "di1";
        this.name4 = "di2";
        this.getAeticle4();
      }
    },
    onclick5: function() {
      if (this.seen1 === true) {
        this.seen1 = false;
        this.seen2 = true;
        this.getAeticle1();
      } else {
        this.seen1 = true;
        this.seen2 = false;
        this.getAeticle1();
      }
    },
    onclick6: function() {
      this.getAeticle5();
    },
    submit: function() {
      if (this.Content === "") {
        alert("请输入内容");
      }
      if (this.selected === "") {
        alert("请选择类别");
      }
      if (this.Name === "") {
        this.Name = "匿名";
      }
      let that = this;
      if (this.Content !== "" && this.selected !== "") {
        axios
          .post("http://localhost:3000/article", {
            Content: this.Content,
            Name: this.Name,
            selected: this.selected,
            num: this.num,
            Count: "0"
          })
          .then(function(response) {
            console.log(response);
            that.getAeticle1();
          });
        alert("发布成功");
        this.Content = "";
        this.Name = "";
        this.selected = "表白";
      }
    },
    //评论
    pinglun: function(flag) {
      console.log(flag);
      this.$router.push({
        path: "/pinglun",
        name: "pinglun",
        params: {
          id: flag
        }
      });
    },
    pinglunnum: function(flag) {
      let that = this;
      axios
        .post("http://localhost:3000/pinglunnum", { Id: flag._id })
        .then(function(abc) {
          console.log(abc.data);
        });
    }
  }
};
</script>

<style scoped>
* {
  margin: auto;
}
#apps {
  background-image: url("1.jpg");
  width: 100vw;
  height: 100vh;
  margin: 0px;
  background-size: 100vw 100vh;
  overflow: auto;
}
.title {
  font-size: 300%;
  text-align: center;
  color: white;
}
.zong1 {
  display: flex;
  width: 100%;
  height: 30px;
  background-color: rgb(209, 209, 208);
  justify-content: center;
  border: 1px solid black;
}
.di1 {
  width: 20%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: rgb(209, 209, 208);
}

.di2 {
  width: 20%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: white;
}

.zong2 {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100vw;
  height: 140px;
  background-color: rgba(209, 209, 208, 0.7);
}
.hang1 {
  display: flex;
  width: 100px;
  height: 30px;
  padding: 0px;
  background-color: rgba(39, 206, 255, 0.9);
  margin-right: 5px;
  margin-top: -15px;
  margin-left: auto;
  /* align-self: center; */
}
.tu1 {
  height: 30px;
  width: 30px;
  margin: 0px;
  background-image: url("搜索.png");
  background-size: 30px 30px;
  background-repeat: no-repeat;
}
.tu2 {
  height: 30px;
  width: 30px;
  background-image: url("退出.png");
  background-size: 30px 30px;
  background-repeat: no-repeat;
}
.hang2 {
  display: flex;
  margin-top: 10px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  flex-direction: column;
}
.hang3 {
  display: flex;
  width: 100vw;
  height: 50px;
  margin-top: 10px;
}
.x {
  order: 1;
  height: 40px;
  width: 70px;
  margin-right: 10px;
}
.y {
  order: 2;
  height: 40px;
  width: 25vw;
  margin: 5px;
  border: 0px;
  padding: 0px;
  text-align: center;
}
.z {
  order: 3;
  height: 40px;
  width: 17vw;
  margin-left: 10px;
  margin-right: 5px;
  color: white;
  background-color: rgb(0, 120, 231);
  text-align: center;
  line-height: 40px;
}

.s {
  height: 40px;
  width: 17vw;
  margin-right: 10px;
  color: white;
  background-color: rgb(0, 120, 231);
  text-align: center;
  line-height: 40px;
}
.biao1 {
  display: flex;
  flex-direction: column;
  background-color: rgba(76, 175, 80, 0.85);
  border: 1px solid black;
  border-radius: 8px;
  margin: 10px;
}
.pinglun {
  display: flex;
  align-self: flex-start;
  margin-right: 5px;
}
.tu3 {
  height: 30px;
  width: 30px;
  margin: 0px;
  background-image: url("消息.png");
  background-size: 30px 30px;
  background-repeat: no-repeat;
}
</style>