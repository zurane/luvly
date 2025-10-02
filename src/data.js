
import productOne from "./assets/productImages/Home_Page_150825_Desktopi_HOME_800_X400_63359877cf.webp";
import productTwo from "./assets/productImages/Home_Page_150825_Desktopi_TECH_800_X400_5437182eec.webp";
import productThree from "./assets/productImages/Home_Page_150825_Desktopi_FASHION_800_X400_5437182eec.jpg";
import productFour from "./assets/productImages/Home_Page_150825_Desktopi_FURNISHER_800_X400_5437182eec.jpg";
import productFive from "./assets/productImages/Home_Page_150825_Desktopi_APPLIANCES_800_X400_5437182eec.jpg";
import productSix from "./assets/productImages/Home_Page_150825_Desktopi_JEWELLERY_800_X400_5437182eec.jpg";

export const data = [
    {
        id: 1,
        name: "Technology",
        urlPath: "technology",
        imageUrl: productTwo
    },
    {
        id: 2,
        name: "Fashion",
        urlPath: "fashion",
        imageUrl: productThree
    },

    {
        id: 3,
        name: "Home Appliances",
        urlPath: "home-appliances",
        imageUrl: productFive
    },

    {
        id: 4,
        name: "Furniture",
        urlPath: "furniture",
        imageUrl: productFour
    },
    {
        id: 5,
        name: "Clothing",
        urlPath: "clothing",
        imageUrl: productOne
    },
    {
        id: 6,
        name: "Jewellery",
        urlPath: "jewellery",
        imageUrl: productSix
    }
];

export default data;