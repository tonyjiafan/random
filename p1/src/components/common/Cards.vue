<template>
    <div class="cards-item">
      <el-row >
        <el-col :span="12" v-for="(cardItem, index) in cards" :key="index" >
          <el-card :body-style="{ padding: '0px' }" style="margin:4px;">
            <img :src="cardItem.src" width="100%" height="80px">
             <div class="el-icon-warp">
               <i v-on:click="share(index)" class="el-icon-share"></i>
               <i v-show="cardItem.start" v-on:click="startChange('on',index)" class="el-icon-star-on"></i>
               <i v-show="!cardItem.start" v-on:click="startChange('off',index)" class="el-icon-star-off"></i>
               <i class="el-icon-delete" v-on:click="delCard(index)"></i>
             </div>
             <!-- tag标签 -->
             <el-tag
                 v-for="(tag,index) in cardItem.dynamicTags"
                 :key="tag.name"
                 :type="cardItem.type"
                 style="margin:0 0 0 8px;font-size:12px;"
               >
               {{tag}}
             </el-tag>
            <div style="padding: 14px;">
             <!-- 评分 -->
              <el-rate
                 v-model="cardItem.faceValue"
                 disabled
                 :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
               </el-rate>

              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">查看</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'cards',
  components:{
  },
  data() {
    return {
      cards: [
        {name: '杀破狼',
        faceValue: 1.8,
        start: true,
        dynamicTags: ['动作','枪战'],
        type: 'success',
        src:'http://p1.meituan.net/mmc/d86f659d44b08581010a43c0cf9dc782143214.jpg'},
        {name: '三生三世',
        faceValue: 3.2,
        start: true,
        dynamicTags: ['神话','杨幂'],
        type: 'danger',
         src:'http://p1.meituan.net/mmc/8678a83330d441c532aa865f7389692b153732.jpg'},
        {name: '大猩猩',
        faceValue: 2.7,
        start: true,
        dynamicTags: ['野兽','惊悚'],
        type: 'success',
         src:'http://image14.m1905.cn/uploadfile/2017/0819/thumb_1_1380_460_20170819111549581711.jpg'},
        {name: '心理罪',
        faceValue: 4.3,
        start: true,
        dynamicTags: ['犯罪','动作'],
        type: 'warning',
         src:'http://image14.m1905.cn/uploadfile/2017/0816/thumb_1_1380_460_20170816091423840626.jpg'},
        {name: '完美后花园',
        faceValue: 3.5,
        start: true,
        dynamicTags: ['童话','浪漫'],
        type: 'danger',
         src:'http://image13.m1905.cn/uploadfile/2017/0816/thumb_1_1380_460_20170816051156482715.jpg'},
        {name: '破局',
        faceValue: 4.7,
        start: true,
        dynamicTags: ['烧脑','悬疑'],
        type: 'success',
         src:'http://image13.m1905.cn/uploadfile/2017/0811/thumb_1_1380_460_20170811052248194412.jpg'},
        {name: '青春爱情',
        faceValue: 3.9,
        start: true,
        dynamicTags: ['爱情','正能量'],
        type: 'warning',
         src:'http://image14.m1905.cn/uploadfile/2017/0706/thumb_1_1380_460_20170706090158303243.jpg'}
      ],
      currentDate: new Date()
    }
  },
  created() {

  },
  mounted() {
  },
  updated() {
  },
  watch: {
  // '$route': 'getData' //切换路由，调用getData方法
  },
  methods: {
    delCard(index) {
      this.$confirm('此操作将删除该收藏, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.cards.splice(index, 1)
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    startChange(str,index) {
      if(str == 'on') {
        this.$message({
          message: '已取消收藏，该内容将只保留7天',
          type: 'warning'
        });
        this.cards[index].start = false;
        // this.cards.splice(index, 1)
      } else {
        this.$message({
          message: '收藏成功',
          type: 'success'
        });
        this.cards[index].start = true;
      }
    },
    share(index) {
      this.$message({
        message: '正在开发中敬请期待'
      });
    }
  }

}
</script>


<style scoped lang="scss">
  .cards-item{
    // outline: 1px solid red;
    /* 卡片样式 */
    .time {
      font-size: 13px;
      color: #999;
    }

    .bottom {
      margin-top: 13px;
      line-height: 12px;
    }

    .button {
      padding: 0;
      float: right;
    }

    .image {
      width: 100%;
      display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
    .el-icon-warp{
      position: relative;
      width: 100%;
      height: 20px;
      .el-icon-share{
        font-size: 16px;
        position: absolute;
        bottom:0px;
        right: 50px;
      }
      .el-icon-delete{
        @extend .el-icon-share;
        position: absolute;
        bottom:0px;
        right: 20px;
      }
      .el-icon-star-off{
        @extend .el-icon-share;
        position: absolute;
        bottom:0px;
        right: 80px;
      }
      .el-icon-star-on{
        @extend .el-icon-share;
        position: absolute;
        bottom:0px;
        right: 80px;
        color: rgba(241, 66, 126, 0.79);
      }
    }
    /* 弹框 */
    .el-message-box{
        width: 80%;
    }

  }

</style>
