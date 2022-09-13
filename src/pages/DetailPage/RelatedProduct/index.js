import { priceTransform } from "../../../helpers"

export const RelatedProducts = ({ products }) => {
  return (
    <div className={`grid grid-cols-4 gap-6`}>
      {console.log('into related products ...')}
      {products.map(prod => (
        <div className={`flex flex-col gap-3 italic text-center`}>
          {console.log('prod in loop: ', prod)}
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