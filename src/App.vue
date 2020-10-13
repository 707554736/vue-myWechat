<template>
  <div id="app">
    <welcome></welcome>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import welcome from './components/common/Welcome'

export default {
  name:'app',
  components: {
    welcome
  }
}
</script>

<style lang="less">
/*将公用的样式统一在此导入*/

@import "assets/css/base.css";
@import "assets/css/common.css";
@import "assets/less/wx-header.less";
/*阿里 fonticon*/

@import "assets/css/lib/iconfont.css";
/*过渡效果需要的动画库*/

@import "assets/css/lib/animate.css";
/*weui 样式库 非常适合高仿微信*/

@import "assets/css/lib/weui.min.css";
</style>
