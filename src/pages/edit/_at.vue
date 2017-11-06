<template lang="html">
  <div class="">
    <header class="at-header">
      <span style="color: #3468e7" @click="cancel">Cancel</span>
      <i class="ion-ios-at" style="font-size:26px"></i>
      <span>Done</span>
    </header>
  </div>
</template>

<script>

export default {
  props: ['showAt'],
  methods: {
    cancel() {
      this.$emit('close-at');
    },
  },
};

</script>

<style lang="css" scoped>
.at-header{
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
</style>
