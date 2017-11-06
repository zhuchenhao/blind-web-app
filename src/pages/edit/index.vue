<template lang="html">
  <div>
    <header class="edit-header">
      <span style="color: #3468e7" @click="goBack">Cancel</span>
      <span>Topics</span>
      <span>Post</span>
    </header>
    <div class="select-topics">
      <select class="select-input">
        <option>
          Choose a topic
        </option>
        <option>Women in tech</option>
        <option>Facebook</option>
      </select>
    </div>
    <div class="content">
      <div class="content-subject">
        <input type="text"
        class="text-input text-input--underbar"
        placeholder="Subject"
        ref="subject">
      </div>
      <div class="content-text">
        <textarea class="textarea textarea--transparent" rows="3" placeholder="Keep it relevant. If the "></textarea>
      </div>
      <div class="content-text">
        <textarea class="textarea textarea--transparent" rows="3" placeholder="@Company/Job Title."></textarea>
      </div>
      <div class="icons">
        <i class="ion-ios-camera"></i>
        <i class="ion-ios-at"></i>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    goBack() {
      window.history.back();
    },
  },
  mounted() {
    this.$refs.subject.focus();
  },
};
</script>

<style lang="css" scoped>
  .edit-header {
    background-color: #fefefe;
    display: flex;
    justify-content: space-between;
    height: 65.156px;
    line-height: 65.156px;
    font-size: 16px;
    padding-left: 20px;
    padding-right: 20px;
    border-bottom: 1px solid #eee;
  }
  .select-topics {
    padding-left: 20px;
    padding-right: 20px;
    border-bottom: 1px solid #eee;
  }
  .select-input {
    width: 100%;
    height: 50px;
  }
  .content {
    padding: 0 20px;
  }
  .text-input {
    width:100%;
    height: 50px;
  }
  .text-input--underbar {
    border-color: #eee;
  }
  .textarea {
    width: 100%;
    height: 140px;
    border-bottom: 1px solid #eee;
  }
  .icons {
    text-align: left;
    color: #bbb;
  }
  .ion-ios-camera {
    margin-right: 10px;
  }
</style>
