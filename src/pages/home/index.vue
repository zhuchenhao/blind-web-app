<template lang="html">
  <div class="home">
    <home-header></home-header>
    <topics></topics>
    <post></post>
  </div>
</template>

<script>
import HomeHeader from './_homeheader';
import topics from './_topics';
import post from './_post';

export default {
  components: {
    HomeHeader,
    topics,
    post,
  },
};
</script>

<style scoped>
.home {
  height: 100%;
}
</style>
