import { priceTransform } from "../../../helpers"

export const RelatedProducts = ({ products }) => {
  return (
    <div className={`grid grid-cols-4 gap-6`}>
      {products.map(prod => (
        <div key={prod._id.$oid} className={`flex flex-col gap-3 italic text-center`}>
          <img src={prod.img1} alt={prod.name}/>
          <p className={`font-bold text-slate-500`}>
            {prod.name}
          </p>
          <p className={`text-slate-400`}>
            {`${priceTransform(prod.price)} VNĐ`}
          </p>
      </div>
      ))}
    </div>
  )
}