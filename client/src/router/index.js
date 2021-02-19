import Vue from 'vue';
import VueRouter from 'vue-router';
import Company from '../views/Company.vue';

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'Company',
    component: Company,
  },
];

const router = new VueRouter({
    routes,
  });
  
export default router;