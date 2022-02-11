import { Container, CssBaseline, Divider, Grid, Typography, makeStyles } from "@mui/material";
import { maxWidth } from "@mui/system";
import LeftNavBar from "../layout/leftnavbar";



function Men() {

    return  (
        <>
        <CssBaseline>
        {LeftNavBar()}
        <Typography>Placeholder for the Menswear Page :]</Typography>
        <Container>
            <Grid container>
                <Grid item>
                    <Typography>This is a grid item</Typography>
                </Grid>
            </Grid>
        </Container>
        </CssBaseline> 
        </>
    )
}

export default Men;