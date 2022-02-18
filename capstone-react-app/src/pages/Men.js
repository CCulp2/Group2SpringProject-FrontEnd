import { Container, CssBaseline, Divider, Grid, Typography, makeStyles } from "@mui/material";
import { maxWidth } from "@mui/system";
import LeftNavBarMen from "../layout/leftnavbarMen";



function Men() {

    return  (
        <>
        <CssBaseline>
        {LeftNavBarMen()}
        </CssBaseline> 
        </>
    )
}

export default Men;