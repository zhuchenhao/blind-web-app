<template lang="html">
  <div class="">
    <div class="search-box">
      <input
        type="search"
        value=""
        placeholder="Keywords #hashtag"
        class="search-input"
        ref="searchInput"
        :class="{'focused':focused}"
        @focus="focused=true"
        @blur="focused=false"
      >
    </div>
    <p>{{focused}}</p>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$refs.searchInput.focus();
  },
  data() {
    return {
      focused: false,
    };
  },
};
</script>

<style lang="css" scoped>
.search-box {
  margin-top: 10px;
  width: 100%;
}
.search-input {
  width: 90%;
}
.focused {
  width: 75%;
}
</style>
