import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css'; 
function MainNavigation() {
    return (
        <div className={classes.topbar}>
            <nav className={classes.logolink}>
                <Link to='/'>
                    Name of Store
                </Link>
                <span>----</span>
                <Link to='/test'>
                    **getSendTest**
                </Link>
            </nav>
        </div>
    )
}

export default MainNavigation;