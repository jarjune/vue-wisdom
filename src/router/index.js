import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/page/home'
import personal from '@/components/page/personal'
import page2 from '@/components/page/page2'
import page3 from '@/components/page/page3'
import projectList from '@/components/page/projectList'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: '/v/',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home,
      meta: { keepAlive: true }
    },
    {
      path: '/page2',
      component: page2
    },
    {
      path: '/page3',
      component: page3
    },
    {
      path: '/personal',
      component: personal
    },
    {
      path: '/projectList',
      component: projectList
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      const position = {}
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      position.x = 0
      position.y = to.meta.savedPosition || 0
      return position
    }
  }
})
