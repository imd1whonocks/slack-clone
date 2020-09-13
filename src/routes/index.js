import { Login, Artists, Callback } from 'Components';
import { Home, Tracks } from 'Pages';
import { routePaths } from 'Constants';
// import { withAuthentication, lazyLoad } from "../views/enhancers";
const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/login',
        component: Login,
        exact: true,
    },
    {
        path: routePaths.TOP_ARTISTS,
        component: Artists,
        exact: true,
    },
    {
        path: routePaths.TOP_TRACKS,
        component: Tracks,
        exact: true,
    },
    {
        path: routePaths.RECENTLY_PLAYED,
        component: Artists,
        exact: true,
    } 
];

export default routes;
