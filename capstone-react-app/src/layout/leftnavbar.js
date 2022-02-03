import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css'; 
function LeftNavBar() {
    return (
        <div className={classes.leftnavbar}>
            <nav className={classes.leftnavbarnav}>
                    <li>
                        Shirts
                    </li>
                    <li>
                        Pants
                    </li>
                    <li>
                        Shorts
                    </li>
                    <li>
                        Outerwear
                    </li>
            </nav>
        </div>
    )
}

export default LeftNavBar;