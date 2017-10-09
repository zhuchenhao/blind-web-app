import Vue from 'vue';
import Moment from 'moment';

Vue.filter('time-readable', (time) => {
  const now = Moment().unix();
  const postTime = Moment.unix(time).add(1, 'days');
  if (postTime.unix() > now) {
    return Moment.unix(time).fromNow();
  }
  return Moment.unix(time).format('YYYY/MM/DD');
});
