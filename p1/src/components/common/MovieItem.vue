<template>
    <div class="movie-item">
      <div class="movie-message" v-if="news.length == 0">
        <i class="el-icon-loading"></i>&nbsp;努力加载中...
      </div>
      <el-row v-for="(item,index) in news" :key="index" style="border-bottom: 1px solid #c9c7c7;">
         <el-col :xs="8" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><img :src="item.image" style="width:100px;height:auto;" alt="" /></div></el-col>
         <el-col :xs="16" :sm="18" :md="20" :lg="21">
           <div style="position:renative;" class="grid-content bg-purple-light">
            <p class="author-warp">作者:
              <span class="author" v-for="(peo,index) in item.author" :key="index">{{peo}}</span>
            </p>
            <p class="summary">
              <span v-if="item.summary == '' ">暂无简介...</span>
              {{item.summary}}
            </p>
            <router-link tag="a" to="/nextOne">
               <a class="next">查看详情</a>
             </router-link>
           </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'movieItem',
  components:{
  },
  data() {
    return {
      news: []
    }
  },
  created() {
    let that = this;
    if(localStorage.getItem('books')){
      this.news = JSON.parse(localStorage.getItem('books')).news
      // this.itemloading = false;
    } else {
      this.$axios.get('/api/hello')
      .then(reponse=>{
        let datas = {
          news: reponse.data.books
        }
        datas = JSON.stringify(datas)
        this.news = reponse.data.books
        localStorage.setItem('books',datas)
        this.loading = false;
      })
      .catch(error=>{
       console.log(error);
       that.$message({
           message: '网络错误',
           type: 'warning'
         })
      })
    }
  },
  mounted() {
  },
  updated() {
  },
  methods: {

  }

}
</script>


<style scoped lang="scss">
  .movie-item{
    // outline: 1px solid red;
    .movie-message{
      color: #999;
      text-align: center;
      font-size: 16px;
      margin: 50px auto;
    }
    .author-warp{
      padding-left: 2px;
      font-size: 14px;
      text-align: left;
      line-height: 18px;
      margin: 2px 0 4px;
      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    .author{
      font-size: 12px;
      display: inline-block;
      padding: 1px 2px;
      margin: 0 4px;
      background: rgba(227, 36, 101, 0.62);
      color: #fff;
      border-radius: 2px;
    }
    .summary{
      text-align: left;
      padding-left: 2px;
      font-size: 14px;
      text-indent: 1em;
      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      span:nth-child(1){
        // background: #F7BA2A;
        display: inline-block;
        color: #F7BA2A;
        border-radius: 2px;
        font-size: 12px;
        padding: 2px 10px;
        margin: 0 4px;
      }
    }
    .el-row{
      padding: 10px 0 35px;
    }
    .el-col{
      overflow: hidden;
    }
    .next{
      position: absolute;
      bottom: 15px;
      right: 20px;
      display: inline-block;
      padding: 2px 12px;
      background: #20A0FF;
      color: #fff;
      font-size: 14px;
      text-decoration:none;
      border-radius: 4px;
    }
  }

</style>
