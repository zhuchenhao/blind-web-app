<template lang="html">
  <nav>
    <div class="tabbar">
        <router-link :to="{ name: 'Home'}" class="tabbar__item">
          <button class="tabbar__button">
            <i class="tabbar__icon ion-home"></i>
          </button>
        </router-link>

        <router-link :to="{ name: 'Search'}" class="tabbar__item">
          <button class="tabbar__button">
            <i class="tabbar__icon ion-search"></i>
          </button>
        </router-link>

        <router-link :to="{ name: 'Edit'}" class="tabbar__item">
          <button class="tabbar__button">
            <i class="tabbar__icon ion-edit"></i>
          </button>
        </router-link>

        <router-link :to="{ name: 'Bell'}" class="tabbar__item">
          <button class="tabbar__button">
            <i class="tabbar__icon ion-ios-bell"></i>
          </button>
        </router-link>

        <router-link :to="{ name: 'Person'}" class="tabbar__item">
          <button class="tabbar__button">
            <i class="tabbar__icon ion-person"></i>
          </button>
        </router-link>

    </div>
  </nav>
</template>

<script>
export default {
};
</script>

<style lang="css" scoped>
.tabbar__item.router-link-exact-active.router-link-active .tabbar__icon {
  color: red;
}
</style>
