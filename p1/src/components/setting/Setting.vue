<template>
    <div class="Setting">
      <h5>我是 /two 的轮播组件</h5>
      <images></images>
      <router-link to="/home">
        <span class="go-home">主页</span>
      </router-link>
    </div>
</template>

<script>
import axios from 'axios'
import images from '../common/ImagesChange'
export default {
  name: 'setting',
  components:{
    images
  },
  data() {
    return {
    }
  },
  created() {

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
  .Setting{
    // outline: 1px solid red;
    .go-home{
      font-size: 14px;
      color: #fff;
      display: inline-block;
      padding: 4px 15px;
      background: #fc5144;
      border-radius: 4px;
      margin: 10px auto;
    }
  }

</style>
