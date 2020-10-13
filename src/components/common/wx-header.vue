<template>
  <section class="wx-header">
      <div class="other">
          <!-- 只在微信页面显示 more图标 -->
          <span class="iconfont" v-show="$route.path==='/'" v-on:click="$store.commit('toggleTipsStatus')"></span>
          <router-link tag="span" to="/c"></router-link>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>