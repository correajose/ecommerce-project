import { Navigate, useRoutes } from 'react-router';
import CartView from '../components/CartView/CartView';
import CheckOut from '../components/CheckOut/CheckOut';
import ContactView from '../components/ContactView/ContactView';
import HomePage from '../components/HomePage/HomePage';
import InfoView from '../components/InfoView/InfoView';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import PaymentForm from '../components/PaymentForm/PaymentForm';
import SalesView from '../components/SalesView/SalesView';
import UsView from '../components/UsView/UsView';

const AppRouter = () => {

    const routes = useRoutes([
        { path: "/", element: <HomePage />},
        { path: "/us", element: <UsView />},
        { path: "/products/:catId", element: <ItemListContainer/> },
        { path: "/products/:catId/details/item/:itemId", element: <ItemDetailContainer/> },
        { path: "/checkout", element: <CheckOut /> },
        { path: "/payment", element: <PaymentForm /> },
        { path: "/sale", element: <SalesView/> },
        { path: "/cart", element: <CartView/> },
        { path: "/info", element: <InfoView/> },
        { path: "/contact", element: <ContactView/> },
        { path: "*", element: <Navigate to="/"/> }

    ])

    return routes
};

export default AppRouter;
