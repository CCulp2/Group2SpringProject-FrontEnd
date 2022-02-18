import { Container, CssBaseline, Divider, Grid, Typography, makeStyles } from "@mui/material";
import { maxWidth } from "@mui/system";
import LeftNavBar from "../layout/leftnavbar";



function Men() {

    return  (
        <>
        <CssBaseline>
        {LeftNavBar()}
        </CssBaseline> 
        </>
    )
}

export default Men;