<template lang="html">
  <div class="posts">
    <div class="card" v-for="i in 9">
      <div class="card__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
  .posts {
    background-color: #ddd;
    height: 100%;
  }
  .card {
    margin: 0;
    border-radius: 0px;
    margin-bottom: 8px;
  }
</style>
