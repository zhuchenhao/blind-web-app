<template lang="html">
  <div class="topics-detail">
    <div class="topic-header">
      <span class="topic-back" @click="goBack">
        <i class="ion-ios-arrow-back"></i>
      </span>
      <span style="line-height:65px;">
        Career
      </span>
    </div>
    <post style="margin-top:75px;"></post>
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
.topics-detail{
  overflow: scroll;
  background-color: #ddd;
}
.topic-header {
  background-color: #357BE8;
  height: 65px;
  text-align: center;
  position:fixed;
  width:100%;
  z-index: 1;
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
