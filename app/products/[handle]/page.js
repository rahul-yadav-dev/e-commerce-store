"use client";

import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import useToggle from "@/hooks/useToggle";
import { useState } from "react";
import ProductInfo from "@/components/ProductInfo";
import { useParams } from "next/navigation";
import { productList } from "@/utils/constants";

const ProductDetails = () => {
  const pageId = useParams().handle;
  const product = productList.filter((product) => product.id == pageId)[0];
  console.log(product);

  const [isOpen, toggle] = useToggle();
  const [mainImg, setMainImg] = useState(product.image[0]);

  function handleToggleMainImg() {
    if (window.screen.width > 640) {
      toggle();
    }
  }

  function prev() {
    let firstImage = productList[0];
    if (mainImg === firstImage) {
      return;
    }
    const currentImg = productList.indexOf(mainImg);
    setMainImg(productList[currentImg - 1]);
  }

  function next() {
    let lastImage = productList[productList.length - 1];
    if (mainImg === lastImage) {
      return;
    }
    const currentImg = productList.indexOf(mainImg);
    setMainImg(productList[currentImg + 1]);
  }

  return (
    <div className="flex mt-10 items-center pb-40 ">
      <div className="mt-4  ml-40 pl-20 ">
        <Image
          className="rounded-lg"
          src={mainImg}
          alt="Main product"
          width={900}
          height={900}
          onClick={handleToggleMainImg}
        />

        <div className="flex  mr-5">
          {product.image.map((srcImage, index) => (
            <div onClick={() => setMainImg(srcImage)} key={index}>
              <div className="mt-6 ml-4 hover:opacity-25">
                <Image
                  src={srcImage}
                  alt="Product view"
                  height={100}
                  width={100}
                  className={
                    srcImage === mainImg
                      ? "selected rounded-lg opacity-25"
                      : "rounded-lg"
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProductInfo
        name={product.name}
        price={product.price}
        description={product.description}
      />

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white w-96 p-4 rounded-lg   items-centeflexr">
            <button className="absolute top-2 right-2" onClick={toggle}>
              <CloseIcon fontSize="large" />
            </button>
            <div className="mb-4 flex">
              <button className="prev" onClick={prev}>
                <ArrowBackIosNewIcon />
              </button>
              <div className="mx-2">
                <Image src={mainImg} alt="Main product" />
              </div>
              <button onClick={next}>
                <ArrowForwardIosIcon />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
