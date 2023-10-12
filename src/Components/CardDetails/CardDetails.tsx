import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import "./CardDetails.css";
import { Navbar } from "../Navbar/Navbar";

type ProductProps = {
  key: number;
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

const discountPrice = (price: number, discount: number) => {
  const result: number = price - price * (discount / 100);
  return result;
};

const starsRating = (rating: number) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="star">
          <path
            id="Vector"
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="#FFD100"
            stroke="#FFD100"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    );
  }
  return stars;
};

export function CardDetails() {
  const [data, setData] = useState<ProductProps>();
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState<string>("");

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  useEffect(() => {
    async function fetchProduct(): Promise<void> {
      const statsApi = `https://dummyjson.com/products/${id}`;
      fetch(statsApi)
        .then((response) => response.json())
        .then((data) => setData(data));
    }
    fetchProduct();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="card-details-page">
        <div className="details-card">
          <div className="details-images">
            <img
              className="details-main-image"
              src={selectedImage || data?.images[0]}
              alt={data?.title}
            />
            <div className="details-alt-images">
              {data?.images.map((img) => (
                <img
                  className="alt-images"
                  src={img}
                  alt="img"
                  width="50px"
                  height="50px"
                  onClick={() => handleImageClick(img)}
                />
              ))}
            </div>
          </div>
          <div className="right-details">
            <div className="details-details">
              <h2>{data?.title}</h2>
              <div className="rating">{data && starsRating(data?.rating)}</div>
              <h3>${data?.price}</h3>
              <h3>
                $
                {data &&
                  Math.floor(
                    discountPrice(data?.price, data?.discountPercentage)
                  )}
              </h3>
            </div>
            <div className="details-buy">
              <p>{data?.description}</p>
              <h3>Stock: {data?.stock}</h3>
              <div className="button-wrapper">
                <button className="cardbutton">Add Cart</button>
                <button className="cardbutton">Wishlist</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
