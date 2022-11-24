import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummyData = [
  {
    id: "p1",
    title: "My headeach",
    description: "24*7",
    price: 6,
  },
  {
    id: "p2",
    title: "My headeach 2",
    description: "365 days",
    price: 10,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyData.map((product) => (
           <ProductItem
           key = {product.id}
           id={product.id}
           title={product.title}
           price={product.price}
           description={product.description}
         />
        ))}
      </ul>
    </section>
  );
};

export default Products;
