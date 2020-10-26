<template>
  <div id="wx-nav">
    <nav>
      <router-link to="/" tag="a" exact>
        <div class="menu-item">
          <span class="iconfont icon-wechat"></span>
          <!-- TODO 新消息提醒 -->
          <span class="title">微信</span>
        </div>
      </router-link>
      <router-link to="/contact" tag="a">
        <div class="menu-item">
          <span class="iconfont icon-contact"></span>
          <span class="title">通讯录</span>
        </div>
      </router-link>
      <router-link to="/explore" tag="a">
        <div class="menu-item">
          <span class="iconfont icon-find"></span>
          <!-- TODO 新发现提醒 -->
          <span class="title">发现</span>
        </div>
      </router-link>
      <router-link to="/self" tag="a">
        <div class="menu-item">
          <!-- <span class="iconfont icon-me"></span> -->
          <span class="iconfont icon-jiantou32"></span>
          <span class="title">我</span>
        </div>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
@import '../../assets/less/mixin.less';
@r: 0.068376rem;
@wx-color: #0bb908;
#wx-nav {
  nav {
    .size(100%, 52px);
    padding: 8px 0;
    .flex-center-v;
    color: #d5d5d5;

    a {
      flex-basis: 25%;
      color: #929292;
    }

    .menu-item {
      .flex-center;
      flex-direction: column;
      .iconfont {
        font-size: 26px;
        .size(26px);
      }
      .title {
        font-size: 12px;
        margin-top: 4px;
      }
    }

    .router-link-active {
      color: @wx-color;
    }
  }
}
</style>
