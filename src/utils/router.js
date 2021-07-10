import { lazy } from 'react'
export const routers = [
  {
    path:'/match',
    name:'Match',
    exact: true,
    children:[
      {
        path:'/match/matchlist',
        name:'MatchList',
        component: lazy(()=>import('../views/match/matchlist')),
        exact: true,
      },
      {
        path:'/match/matchpoll',
        name:'MatchPoll',
        component: lazy(()=>import('../views/match/matchpoll')),
        exact: true,
      }
    ]
  },
  {
    path:'/trading',
    name:'Trading',
    exact: true,
    children:[
      {
        path:'/trading/task-center',
        name:'Task Center',
        component: lazy(()=>import('../views/trading/taskcenter')),
        exact: true,
      },
      {
        path:'/trading/my-match',
        name:'My Match',
        component: lazy(()=>import('../views/trading/mymatch')),
        exact: true,
      },
      {
        path:'/trading/trading-setting',
        name:'Trading Setting',
        component: lazy(()=>import('../views/trading/tradingsetting')),
        exact: true,
      },
      {
        path:'/trading/major-market',
        name:'Position Matrix(Major Market)',
        component: lazy(()=>import('../views/trading/majormarket')),
        exact: true,
      }
    ]
  },
  
]
