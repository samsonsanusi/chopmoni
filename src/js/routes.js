
import HomePage from '../pages/home.jsx';
import AboutPage from '../pages/about.jsx';
import CreateBusinessPage from '../pages/createBusiness.jsx';
import CatalogPage from '../pages/catalog.jsx';
import OrdersPage from '../pages/orders.jsx';
import SettingsPage from '../pages/settings.jsx';
import LoginPage from '../pages/login.jsx';

import DynamicRoutePage from '../pages/dynamic-route.jsx';
import RequestAndLoad from '../pages/request-and-load.jsx';
import NotFoundPage from '../pages/404.jsx';
import { doesSessionExist } from '../services/supertoken.js';
import { fetchMenu, fetchOrders } from '../services/apiService.js';
import MenuPage from '../pages/menu.jsx';
import CreateMenuItemsPage from '../pages/createMenuItem.jsx';

function authRoute(route) {
  return async({ resolve, reject }) => {
    if (await doesSessionExist()) {
      resolve({ component: route })
    } else {
      resolve({ component: LoginPage })
    }
  }
}

var routes = [
  {
    path: '/',
    async: authRoute(HomePage)
  },
  {
    path: '/form',
    async: authRoute(CreateBusinessPage)
  },
  {
    path: '/orders',
    async: async function({ router, to, resolve }) {
      if (!(await doesSessionExist())) {
        return resolve({ component: LoginPage })
      }
      var app = router.app;
      app.preloader.show();
      const { orders } = await fetchOrders();
      app.preloader.hide();
      resolve({ component: OrdersPage }, { props: { orders }})
    }
  },
  {
    path: '/menu',
    async: async function({ router, to, resolve }) {
      if (!(await doesSessionExist())) {
        return resolve({ component: LoginPage })
      }
      var app = router.app;
      app.preloader.show();
      const { menu } = await fetchMenu();
      app.preloader.hide();
      console.log(menu);
      resolve({ component: MenuPage }, { props: { menu }})
    }
  },
  {
    path: '/addItems',
    async: authRoute(CreateMenuItemsPage)
  }

  // {
  //   path: '/dynamic-route/blog/:blogId/post/:postId/',
  //   component: DynamicRoutePage,
  // },
  // {
  //   path: '/request-and-load/user/:userId/',
  //   async: function ({ router, to, resolve }) {
  //     // App instance
  //     var app = router.app;

  //     // Show Preloader
  //     app.preloader.show();

  //     // User ID from request
  //     var userId = to.params.userId;

  //     // Simulate Ajax Request
  //     setTimeout(function () {
  //       // We got user data from request
  //       var user = {
  //         firstName: 'Vladimir',
  //         lastName: 'Kharlampidi',
  //         about: 'Hello, i am creator of Framework7! Hope you like it!',
  //         links: [
  //           {
  //             title: 'Framework7 Website',
  //             url: 'http://framework7.io',
  //           },
  //           {
  //             title: 'Framework7 Forum',
  //             url: 'http://forum.framework7.io',
  //           },
  //         ]
  //       };
  //       // Hide Preloader
  //       app.preloader.hide();

  //       // Resolve route to load page
  //       resolve(
  //         {
  //           component: RequestAndLoad,
  //         },
  //         {
  //           props: {
  //             user: user,
  //           }
  //         }
  //       );
  //     }, 1000);
  //   },
  // },
  // {
  //   path: '(.*)',
  //   component: NotFoundPage,
  // },
];

export default routes;
