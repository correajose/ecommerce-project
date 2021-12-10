import { Navigate, useRoutes } from 'react-router';
import CartView from '../components/CartView/CartView';
import ContactView from '../components/ContactView/ContactView';
import InfoView from '../components/InfoView/InfoView';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import SalesView from '../components/SalesView/SalesView';

const AppRouter = () => {

    const routes = useRoutes([
        { path: "/", element: <>Home</>},
        { path: "/products/:catId", element: <ItemListContainer/> },
        { path: "/products/:catId/details/item/:itemId", element: <ItemDetailContainer/> },
        { path: "/sale", element: <SalesView/> },
        { path: "/cart", element: <CartView/> },
        { path: "/info", element: <InfoView/> },
        { path: "/contact", element: <ContactView/> },
        { path: "*", element: <Navigate to="/"/> }

    ])

    return routes
};

export default AppRouter;
