export default [
  {
    path: '/',
    name: 'Entry',
    component: () => import('../pages/Entry.vue')
  },
  {
    path: '/Home/:name',
    name: 'Home',
    component: () => import('../pages/Home.vue')
  }
]
