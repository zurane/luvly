
import productOne from "./assets/productImages/Home_Page_150825_Desktopi_HOME_800_X400_63359877cf.webp";
import productTwo from "./assets/productImages/green-walk.jpg";
import productThree from "./assets/productImages/fashion-cate.jpg";
import productFour from "./assets/productImages/music-category.jpg";
import productFive from "./assets/productImages/design-category.jpg";
import productSix from "./assets/productImages/money-category.jpg";

export const data = [
    {
        id: 1,
        name: "Technology",
        urlPath: "technology",
        imageUrl: productTwo
    },
    {
        id: 2,
        name: "Retail",
        urlPath: "retail",
        imageUrl: productThree
    },

    {
        id: 3,
        name: "Design",
        urlPath: "design",
        imageUrl: productFive
    },

    {
        id: 4,
        name: "Music",
        urlPath: "music",
        imageUrl: productFour
    },
    {
        id: 5,
        name: "Politics",
        urlPath: "politics",
        imageUrl: productOne
    },
    {
        id: 6,
        name: "Finance",
        urlPath: "finance",
        imageUrl: productSix
    }
];

export default data;