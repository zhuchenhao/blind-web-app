<template>
  <div id="app">
    <router-view></router-view>
    <i-nav></i-nav>
  </div>
</template>

<script>
import INav from '@/components/i-nav';

export default {
  name: 'app',
  components: {
    INav,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
