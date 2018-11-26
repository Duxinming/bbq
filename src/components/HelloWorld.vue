<template>
  <div>
    <div>
      <span>标题：</span>
      <input v-model="title" type="text">
    </div>
    <div>
      <span>作者：</span>
      <input v-model="author" type="text">
    </div>
     <div>
      <textarea v-model="content" name="" id="blogContent" cols="40" rows="20" style="margin-top: 20px; border: 1px solid black;"></textarea>
    </div>
    <button v-on:click="submit">提交</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "blog",
  data() {
    return {
      title: "",
      author: "",
      content: ""
    };
  },
  methods: {
    submit: function() {
      console.log(this.title);
      console.log(this.author);
      console.log(this.content);
      // axios
      //   .post("http://localhost:3000/getarticle", {
      //     title: this.title,
      //     author: this.author,
      //     content: this.content
      //   })
      //   .then(function(response) {
      //     console.log(response);
      //   });
        
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
