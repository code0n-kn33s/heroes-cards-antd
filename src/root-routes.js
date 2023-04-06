import App from './App';
import { Main } from './Main';
import { Heroes, HeroesCard } from './Heroes';

const routes = [
    {
        path: '/',
        element: <App/>,
        children: [{
                path: 'main',
                element: <Main/>
            }, {
                path: 'heroes',
                element: <Heroes/>
            }, {
                path: 'heroes/:id/:name',
                element: <HeroesCard/>
            }
        ]
    }
]

export default routes;