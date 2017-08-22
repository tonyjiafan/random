<template>
  <div class="Home" v-loading.fullscreen.lock="loading" element-loading-text="加载中">
    <!-- 轮播组件 -->
    <imagesChange></imagesChange>
    <!-- 主内容区 -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <!-- 推荐 -->
        <el-tab-pane label="推荐" name="first">
          <movieItem></movieItem>
        </el-tab-pane>
        <!-- 收藏 -->
        <el-tab-pane label="收藏" name="second">
          <cardsItem></cardsItem>
        </el-tab-pane>
        <!-- vip专区 -->
        <el-tab-pane label="Vip专区" name="third">Vip专区</el-tab-pane>
        <!-- 小众电影 -->
        <el-tab-pane label="小众电影专区" name="fourth">小众电影专区</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../../router'
import imagesChange from '../common/ImagesChange'
import movieItem from '../common/MovieItem'
import cardsItem from '../common/cards'

export default {
  name: 'home',
  components: {
    imagesChange,
    movieItem,
    cardsItem
  },
  data() {
    return {
      loading: true,
      time: 1500,
      activeName: 'first'
    }
  },
  created() {

  },
  mounted() {
    this.loadChange()
  },
  updated() {
  },
  methods: {
    loadChange() {
      let time = this.time
      setTimeout((time)=> {
        this.loading = false
      },time)
    },
    handleClick(tab, event) {
      //  console.log(tab, event);
    }
  }

}
</script>


<style scoped lang="scss">
.Home{
  width: 100%;
  padding-bottom: 60px;
}

</style>
