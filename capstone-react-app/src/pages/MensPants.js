import * as React from 'react';
import { getItemsByGenderAndType } from "../Components/Items/ItemsService";
import {ItemDisplayCard} from "../Components/Items/ItemDisplayCard";



function MensPants() {
    const [items, setItems] = React.useState([]); 

    React.useEffect(() => {
        getItemsByGenderAndType("MALE", "PANTS").then((data) => {
            return setItems(data);
        });
    },[]);


    return  (
        items.map((item) => (
            <ItemDisplayCard product_img_url={item.product_img_url} name={item.name}/> 
        ))
    )
}

export default MensPants;
