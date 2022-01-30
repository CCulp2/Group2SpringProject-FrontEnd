import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css'; 
function LeftNavBar() {
    return (
        <div className={classes.leftnavbar}>
            <nav>
                <ul>
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
                </ul>
            </nav>
        </div>
    )
}

export default LeftNavBar;