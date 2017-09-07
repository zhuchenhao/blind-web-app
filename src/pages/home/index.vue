<template lang="html">
  <div class="home">
    <home-header></home-header>
    <topics></topics>
  </div>
</template>

<script>
import HomeHeader from './_homeheader';
import topics from './_topics';

export default {
  components: {
    HomeHeader,
    topics,
  },
};
</script>

<style lang="css">
</style>
