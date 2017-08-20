<template>
  <div class="NextOne" v-loading.fullscreen.lock="loading" element-loading-text="加载中">
    <h5 style="color:#fc5144;padding-top:100px;">正在建设中...</h5>
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
}

</style>
