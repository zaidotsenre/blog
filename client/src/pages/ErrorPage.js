import './ErrorPage.css';
import Navbar from '../components/Navbar';
import { useRouteError } from 'react-router';

function ErrorPage(props) {

    const error = useRouteError();
    console.error(error);

    return (
        <>
            <Navbar />

            <div className='Error'>
                <h1>Oops!</h1>
                <p>Sorry, an error has occured.</p>
                <i>{error.statusText || error.message}</i>
            </div>
        </>


    );
}

export default ErrorPage;
