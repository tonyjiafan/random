<template>
  <div class="NextOne" v-loading.fullscreen.lock="loading" element-loading-text="加载中">
    <h5 class="h5-title">建设中...</h5>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../../router'
export default {
  name: 'home',
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
.NextOne{
  width: 100%;
  text-align: center;
  // height: 20rem;
  // background: yellow;
  .h5-title{
    margin: 60px auto;
    color: #fc5144;
  }
}

</style>
