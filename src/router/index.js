import Vue from 'vue';
import Router from 'vue-router';
import NotFound from '@/components/404';
import Home from '@/pages/home/index';
import Search from '@/pages/search/index';
import Edit from '@/pages/edit/index';
import Bell from '@/pages/bell/index';
import Person from '@/pages/person/index';
import TopicDetail from '@/pages/home/topics-detail/index';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit,
    },
    {
      path: '/bell',
      name: 'Bell',
      component: Bell,
    },
    {
      path: '/person',
      name: 'Person',
      component: Person,
    },
    {
      path: '/topics-detail/:id',
      name: 'topics-detail',
      component: TopicDetail,
    },
    {
      path: '*',
      name: '404',
      component: NotFound,
    },
  ],
});
