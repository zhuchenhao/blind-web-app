<template lang="html">
  <div class="">
    <h1>topic-detail</h1>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route);
    console.log(this.$route.params.id);
  },
};
</script>

<style lang="css">
</style>
