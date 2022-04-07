import { CssBaseline, Grid } from "@mui/material";
import * as React from "react";
import ItemDisplayCard from "../Components/Items/ItemDisplayCard";
import { getItemsByGenderAndType } from "../Components/Items/ItemsService";

function MensShorts() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    getItemsByGenderAndType("MALE", "SHORTS").then((data) => {
      return setItems(data);
    });
  }, []);

  return (
    <CssBaseline>
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item xs={4}>
            <ItemDisplayCard
              product_img_url={item.product_img_url}
              name={item.name}
            />
          </Grid>
        ))}
      </Grid>
    </CssBaseline>
  );
}

export default MensShorts;
