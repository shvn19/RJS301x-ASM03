import { useState } from "react";

export const PreviewImages = ({ product }) => {
  console.log('previews: ', product);
  const [selectedImage, setSelectedImage] = useState();
  return (
    <div className={`grid grid-cols-4 gap-2 max-h-[500px]`}>
      <div className={`flex flex-col gap-2`}>
        <img src={product.img1} alt="hinh1" onClick={()=> setSelectedImage(product.img1)}/>
        <img src={product.img2} alt="hinh2" onClick={()=> setSelectedImage(product.img2)}/>
        <img src={product.img3} alt="hinh3" onClick={()=> setSelectedImage(product.img3)}/>
        <img src={product.img4} alt="hinh4" onClick={()=> setSelectedImage(product.img4)}/>
      </div>
      <div className={`col-span-3 flex items-center`}>
        <img src={selectedImage?selectedImage:product.img1} alt="hinhpreview" />
      </div>
    </div>
  )
}