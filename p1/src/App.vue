<template>
  <div id="app">
    <div class="Main">
      <router-view></router-view>
      <div class="footer-bar">
        <router-link to="/nextOne/1">
          <div class="left-button">
            <i class="el-icon-menu"></i>
          </div>
        </router-link>
        <router-link to="/nextOne/2">
          <div class="right-button">
            <i class="el-icon-setting"></i>
          </div>
        </router-link>
        <div style="clear:both;"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components:{

  }
}
</script>

<style scoped lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  // text-align: center;
  // margin-top: 60px;
}
.Main{
  margin: 0;
  padding: 0;
  .footer-bar{
    position: fixed;
    border-top: 1px solid #f1f1f1;
    background: #fff;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    overflow: hidden;
    .left-button{
      width: 50%;
      text-align: center;
      float: left;
      padding: 10px 0;
      margin-left: -1px;
      color: #666;
    }
    .right-button{
      border-left: 1px solid #f1f1f1;
      width: 50%;
      text-align: center;
      float: right;
      padding: 10px 0;
      color: #666;
    }
  }
}

</style>
