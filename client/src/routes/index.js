import config from '~/config';
import Dashboard from '~/pages/admin/dashboard';
import Order from '~/pages/admin/orders';
import Product from '~/pages/admin/products';
import User from '~/pages/admin/users';
import Home from '~/pages/public/home';
import Login from '~/pages/public/login';

const publicRoutes = [
    { path: config.home, page: Home },
    { path: config.login, page: Login, layout: null},
];

const privateRoutes = [
    { path: config.admin, page: Dashboard },
    { path: config.product, page: Product },
    { path: config.order, page: Order },
    { path: config.home, page: User },
];

export { publicRoutes, privateRoutes };
