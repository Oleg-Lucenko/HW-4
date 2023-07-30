
import {Outlet, NavLink } from 'react-router-dom';
import './layout.css';



const Layout = () => {

    return (
        <>
        <nav>
            <NavLink to='/'   className={({isActive}) => isActive ? "active" : ""}>Main</NavLink>
            <NavLink to='/About-us'   className={({isActive}) => isActive ? "active" : ""}>About us</NavLink>
            <NavLink to='/Articles'   className={({isActive}) => isActive ? "active" : ""}>Articles</NavLink>
        </nav>

        <Outlet/>
        </>
    )
}


export default Layout;