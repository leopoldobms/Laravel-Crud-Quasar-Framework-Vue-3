const routes = [
  {
    path: '/',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '', name: 'loginDefault', component: () => import('pages/auth/Login.vue') },
      { path: 'login', name: 'login', component: () => import('pages/auth/Login.vue') },
      { path: 'register', name: 'register', component: () => import('pages/auth/Register.vue') },
      { path: 'forgot-password', name: 'forgotPassword', component: () => import('pages/auth/ForgotPassword.vue') },
      { path: 'info-forgot-password', name: 'infoForgotPassword', component: () => import('pages/auth/InfoForgotPassword.vue') },
      { path: 'password-reset/:token?', name: 'passwordReset', component: () => import('pages/auth/ResetPassword.vue') }
    ]
  },
  {
    path: '/list',
    component: () => import('layouts/ListLayout.vue'),
    children: [
      { path: '', name: 'list', component: () => import('pages/ListPage.vue') }
    ],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/despesas',
    component: () => import('layouts/DespesasLayout.vue'),
    children: [
      { path: 'novo', name: 'novo', component: () => import('pages/despesas/createDespesas.vue') },
      { path: 'edit/:id?', name: 'edit', component: () => import('pages/despesas/editDespesas.vue') }
    ],
    meta: {
      requiresAuth: true
    }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
