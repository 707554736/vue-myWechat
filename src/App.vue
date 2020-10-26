<template>
  <div id="app">
    <welcome></welcome>
    <footer class="app-footer">
      <WxNav></WxNav>
    </footer>
  </div>
</template>

<script>
import welcome from "./components/common/Welcome"
import WxNav from "./components/common/wx-nav"

export default {
  name: "app",
  components: {
    welcome,
    WxNav,
  },
}
</script>

<style lang="less">
/*将公用的样式统一在此导入*/

@import 'assets/css/base.css';
@import 'assets/css/common.css';
@import 'assets/less/wx-header.less';
/*阿里 fonticon*/
@import 'https://at.alicdn.com/t/font_787625_xu4puvz4us9.css';

@import 'assets/css/lib/iconfont.css';
/*过渡效果需要的动画库*/

@import 'assets/css/lib/animate.css';
/*weui 样式库 非常适合高仿微信*/

@import 'assets/css/lib/weui.min.css';

/** 通用样式 */
@import 'assets/less/mixin.less';

#app {
  .app-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
