<template>
  <div class="BottomBar" v-loading.fullscreen.lock="loading" element-loading-text="加载中">
    <h5 class="h5-title">我是bottombar</h5>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../../router'
export default {
  name: 'bottomBar',
  data() {
    return {
      loading: true
    }
  },
  created() {
    let that = this;
  },
  mounted() {
    this.loadingChange();
  },
  updated() {
  },
  methods: {
    loadingChange(){
      setTimeout(()=> {
        this.loading = false;
      }, 2000)
    }
  }
}
</script>


<style scoped lang="scss">
.BottomBar{
  width: 100%;
  text-align: center;
  padding-bottom: 100px;
  // height: 20rem;
  // background: yellow;
  .h5-title{
    background: #01aef2;
    font-size: 12px;
    color: #fff;
  }
}

</style>
