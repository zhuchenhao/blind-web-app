<template lang="html">
  <div class="topics">
    <div class="">
      <button
        class="button"
        v-for= "topic in topics"
        :style="{'background-color': topic.color}"
       >
        {{topic.name}}
     </button>
    </div>
  </div>
</template>

<script>
import topics from './topics.json';

export default {
  data() {
    return {
      topics,
    };
  },
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
