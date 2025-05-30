

import './styles/global.css';

import { useRouter } from "next/router"; // Import useRouter
import Footer from '../components/Footer';
import Link from 'next/link';
import MainHeader from '../components/header';


const MyApp = ({ Component, pageProps }) => {
    const router = useRouter();

    // List of pages where the navbar should be hidden
    const shouldHideNavbar = router.pathname.startsWith('/admin');
    

    return (
        <div>
          <MainHeader/>
            <Component {...pageProps} />
            <Footer/>
        </div>
    );}


    

export default MyApp;
