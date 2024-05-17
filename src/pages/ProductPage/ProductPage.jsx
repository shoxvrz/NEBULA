import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import useGetData from "../../hooks/useGetData";
import "./ProductPage.scss";
import img from "../../assets/Subtract (9).svg";
import Slides from "../../components/Slides/Slides";

const sizeButtons = [38, 39, 40, 41, 42, 43];

const ProductPage = () => {
  const { productId } = useParams();
  const {data} = useGetData();
  const product = data.find((item) => item.id == +productId);


console.log(product);


  return (
    <div className="productPage">
      <Navbar />
      <div className="productPage__info">
        <div className="productPage__info--image">
          <img src={img} alt="" />
        </div>
        <div className="productPage__info--desc">
          <h1>NEBULA</h1>
          <p>Jordan 1 Satin Shattered Backboard sneakers</p>
          <h2>$20.00</h2>
        </div>
        <div className="productPage__info--selections">
          <div className="productPage__info--selections-sizes">
            {sizeButtons.map((size, i) => (
              <button key={i}>{size}</button>
            ))}
          </div>
          <button className="cartAdd">Add To Bag</button>
        </div>
      </div>
      <div className="productPage__slides">
        <Slides/>
      </div>
    </div>
  );
};

export default ProductPage;
