<template>
    <div class="images-change">
      <el-carousel :interval="2000" height="150px" arrow="always">
        <el-carousel-item v-for="(imgItem,index) in images" :key="index">
          <img style="width:100%;height:150px;" :src="imgItem" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'imagesChange',
  components:{
  },
  data() {
    return {
      images: [
        'http://p1.meituan.net/mmc/d86f659d44b08581010a43c0cf9dc782143214.jpg',
        'http://p1.meituan.net/mmc/8678a83330d441c532aa865f7389692b153732.jpg',
        'http://image14.m1905.cn/uploadfile/2017/0706/thumb_1_1380_460_20170706090158303243.jpg',
        'http://image13.m1905.cn/uploadfile/2017/0816/thumb_1_1380_460_20170816051156482715.jpg'
      ]
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
  .images-change{
    // outline: 1px solid red;
  }

</style>
