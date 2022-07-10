import path from 'path'

export const routes = [
  {
    name: 'accounting-dashboard',
    path: '/accounting-reports',
    component: path.resolve(__dirname, 'pages/dashboard.vue'),
  },
]
