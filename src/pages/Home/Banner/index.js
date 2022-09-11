export const Banner = () => {
  return (
    <div className="relative">
      <img src="./banner1.jpg" />
      <div className="absolute top-24 left-12 w-[300px] grid gap-4 italic">
        <p className="text-slate-500 italic text-2xl">NEW INSPIRATION 2020</p>
        <p className="text-color-primary text-4xl">20% OFF ON NEW SEASON</p>
        <button className="bg-color-primary px-3 py-2 text-xl text-white mt-4 transition duration-500 hover:opacity-70">Browse collections</button>
      </div>
    </div>
  )
}