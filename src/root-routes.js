import App from './App';
import { Main } from './Main';
import { Heroes, HeroesCard } from './Heroes';
import { NotFound } from './Components';
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
    }, {
        path: "*",
        element: <NotFound/>
    }
]

export default routes;