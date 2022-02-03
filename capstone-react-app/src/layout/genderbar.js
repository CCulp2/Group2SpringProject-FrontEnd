import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css'; 

function genderbar() {
    return (
        <div className={classes.genderbar}>
            <nav className={classes.genderbarnav}>
                <Link to='/Men'>Men </Link>
                <a>|</a>
                <Link to='/Women'> Women</Link>
            </nav>
        </div>
    )
}

export default genderbar;