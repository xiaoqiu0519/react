export const routers = [
  {
    path:'/',
    component: ()=> import('../views/login'),
    exact: true,
  },
  {
    path:'/login',
    component: ()=> import('../views/login'),
    exact: true,
  },
  {
    path:'/mathclist',
    component: ()=> import('../views/matchlist'),
    exact: true,
  },
  {
    path:'/matchpoll',
    component: ()=> import('../views/matchpoll'),
    exact: true,
  }
]
