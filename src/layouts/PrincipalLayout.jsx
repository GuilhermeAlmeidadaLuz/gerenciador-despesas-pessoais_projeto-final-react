// Header e Footer aqui
import {Outlet} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PrincipalLayout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}