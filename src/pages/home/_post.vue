<template lang="html">
  <div class="posts">
    <div class="card" v-for= "post in posts" :key="post.id">
      <div class="card__content">
        <router-link
          class="card__tag"
          v-for= "topic in post.topics"
          :to="{ name: 'topics-detail', params: {id: topic.id} }"
          :key="topic.id"
        >
          {{topic.name}}
        </router-link>
        <p>{{post.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import posts from './posts.json';

export default {
  data() {
    return {
      posts,
    };
  },
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
.card__tag {
  display: inline-block;
  padding: 4px 20px;
  background-color: #ddd;
  color: #666;
  margin-right: 8px;
  text-decoration: none;
  border-radius: 14px;
}
</style>
