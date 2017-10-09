<template lang="html">
  <div class="posts">
    <div class="card" v-for= "post in posts" :key="post.id">
      <div class="card__content">
        <div class="top">
          <router-link
            class="card__tag"
            v-for= "topic in post.topics"
            :to="{ name: 'topics-detail', params: {id: topic.id} }"
            :key="topic.id"
          >
            {{topic.name}}
          </router-link>
          <h6>{{post.title}}</h6>
          <p class="post-content">{{post.content}}</p>
          <p class="poster">{{post.poster}}</p>
        </div>
        <div class="bottom">
          <span>
            <i class="ion-ios-eye"></i>
            {{post.viewCount}}
          </span>
          <span>
            <i class="ion-thumbsup"></i>
            {{post.liked}}
          </span>
          <span>
            <i class="ion-ios-chatbubble"></i>
            {{post.commentCount}}
          </span>
          <span class="bookmark">
            <i class="ion-bookmark"></i>
          </span>
          <span class="post-time">
            {{post.time | time-readable}}
          </span>
        </div>
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
  padding: 0px;
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
h6 {
  margin: 5px 0;
  font-weight: 400;
  font-size: 20px;
}
.post-content {
  margin: 4px 0;
  color: #999;
}
.poster {
  margin: 5px 0;
  color: #444;
}
.top {
  padding: 16px 16px 0px 16px;
  border-bottom: 1px solid #eee;
}
.bottom {
  padding: 0 16px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: #999;
  font-size: 12px;
}
.bottom i {
  font-size: 20px;
  color: #bbb;
  overflow: hidden;
}
.bookmark {
  height: inherit;
  width: 60px;
  float: right;
  border-left: 1px solid #eee;
  /*text-align: center;*/
  /*display: inline-flex;*/
  /*justify-content: center;*/
}
.bookmark i {
  display: inline-block;
  margin-left: 50%;
  transform: translateX(-140%);
}
.post-time {
  float: right;
  padding-right: 4px;
}
</style>
