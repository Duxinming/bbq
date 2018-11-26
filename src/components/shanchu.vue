<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="类别"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.selected }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="名字"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.Name }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="内容"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.Content }}</span>
      </template>
    </el-table-column>    
    <el-table-column label="操作">
      <template slot-scope="scope">
            <el-button
          size="mini"
          type="danger"
          @click="deleteItem(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import axios from "axios";
export default {
  name: "first",
  data() {
    return {
      selected: "",
      Name: "",
      Content: "",
      num: 0,
      num1: 1,
      tableData: []
    };
  },
  mounted: function() {
    let that = this;
    console.log(that.num);
    this.getAeticle1();
  },
  updated: function() {
    console.log(this.num);
    this.getdeleItem();
  },

  methods: {
    getAeticle1() {
      let that = this;
      axios.get("http://localhost:3000/getarticle1").then(function(abc) {
        that.tableData = abc.data;
        console.log(abc.data);
      });
    },
    deleteItem: function(value) {
      console.log(value);
      let that = this;
      axios
        .post("http://localhost:3000/removearticle", { biaoji: value._id })
        .then(function(abc) {
          console.log(abc.data);
          that.getAeticle1();
        });
      that.num = 1;
      this.getAeticle1();
    },
    getdeleItem: function() {
      if (this.num === 1) {
        // this.getAeticle1();
        this.num = 0;
      }
    }
  }
};
</script>

<style>
</style>
