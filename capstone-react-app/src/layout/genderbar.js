import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css'; 
function genderbar() {
    return (
        <div className={classes.genderbar}>
            Men | Women
        </div>
    )
}

export default genderbar;