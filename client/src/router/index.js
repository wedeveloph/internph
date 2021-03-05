import Vue from 'vue';
import VueRouter from 'vue-router';
import Company from '../views/Company.vue';
import test from '../views/test.vue';

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'Company',
    component: Company,
  },
  {
    path: '/test',
    name: 'test',
    component: test,
  },
];

const router = new VueRouter({
    routes,
  });
  
export default router;