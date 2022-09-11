export const Categories = () => {
  return (
    <div className="py-4 px-10 bg-slate-50">
      <p className="text-center italic text-lg text-slate-400">CAREFULLY CREATED COLLECTIONS</p>
      <p className="text-center italic text-2xl text-slate-500 font-bold">BROWSE OUR CATEGORIES</p>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <img src="./product_1.png" alt="iphone" 
        className="w-full" />
        <img src="./product_2.png" alt="Mac" 
        className="w-full" />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-6">
        <img src="./product_3.png" alt="iPad" 
        className="w-full" />
        <img src="./product_4.png" alt="Watch" 
        className="w-full" />
        <img src="./product_5.png" alt="AirPods" 
        className="w-full" />
      </div>
    </div>
  )
}