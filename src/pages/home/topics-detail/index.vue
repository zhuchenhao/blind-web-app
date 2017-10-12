<template lang="html">
  <div class="">
    <div class="topic-header">
      <span class="topic-back" @click="goBack">
        <i class="ion-ios-arrow-back"></i>
      </span>
      <span style="line-height:65px;">
        Career
      </span>
    </div>
    <post></post>
  </div>
</template>

<script>
import post from '../_post';

export default {
  created() {
  },
  methods: {
    goBack() {
      window.history.back();
    },
  },
  components: {
    post,
  },
};
</script>

<style lang="css">
.topic-header {
  background-color: #357BE8;
  height: 65px;
  text-align: center;
}
.topic-back {
  position: fixed;
  left: 0;
  top: 0;
  padding-left: 14px;
  padding-top: 18px;
  cursor: pointer;
  height: 65px;
}
</style>
