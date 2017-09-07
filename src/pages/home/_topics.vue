<template lang="html">
  <div class="topics">
    <div class="">
      <button class="button">Engineer</button>
      <button class="button">SF BAY</button>
      <button class="button">Misc.</button>
      <button class="button">Startups</button>
      <button class="button">Seattle</button>
      <button class="button">Seattle</button>
      <button class="button">Seattle</button>
      <button class="button">Seattle</button>
      <button class="button">Seattle</button>
      <button class="button">Seattle</button>
      <button class="button">Seattle</button>
      <button class="button">Seattle</button>
      <button class="button">Seattle</button>
      <button class="button">Seattle</button>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.topics {
margin-top: 66px;
padding: 10px;
overflow: hidden;
overflow-x: scroll;
-webkit-overflow-scrolling: touch;
background-color: #ddd;
}

.topics::-webkit-scrollbar{
  display: none;
}

.button {
  display: inline-block;
  align-items: none;
  width: 80px;
  font-size: 12px;
}

.topics div {
  white-space: nowrap;
}
</style>
