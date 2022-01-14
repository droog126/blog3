import loadable from '@loadable/component';


export default [
  {
    path: "/",
    component: loadable(() => import('@/pages/home')),
    name: "首页",
  },
  {
    path: "/author",
    component: loadable(() => import('@/pages/author')),
    name: "首页",
  },
];

