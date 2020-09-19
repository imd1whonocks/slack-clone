import { Home } from 'Containers';
import { routePaths } from 'Constants';

const routes = [
    {
        path: routePaths.HOME,
        component: Home,
        exact: true,
    },
    {
        path: routePaths.CHANNEL,
        component: Home,
        exact: true
    }
];

export default routes;
