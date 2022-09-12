import { useNavigate } from "react-router-dom";

const categories1 = [
  {
    url: "./product_1.png",
    des: "iphone"
  },
  {
    url: "./product_2.png",
    des: "Mac"
  }
];

const categories2 = [
  {
    url: "./product_3.png",
    des: "iPad"
  },
  {
    url: "./product_4.png",
    des: "Watch"
  },
  {
    url: "./product_5.png",
    des: "AirPods"
  }
]

export const Categories = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/shop");
  }
  return (
    <div className="py-4 px-10 bg-slate-50">
      <p className="text-center italic text-lg text-slate-400">CAREFULLY CREATED COLLECTIONS</p>
      <p className="text-center italic text-2xl text-slate-500 font-bold">BROWSE OUR CATEGORIES</p>
      <div className="grid grid-cols-2 gap-6 mt-6">
        {
          categories1.map(cat => (
            <img key={cat.des} src={cat.url} alt={cat.des} className="w-full hover:opacity-70 hover:scale-105 transition duration-500 ease-in" onClick={handleClick}/>
          ))
        }
      </div>
      <div className="grid grid-cols-3 gap-6 mt-6">
        {
          categories2.map(cat => (
            <img key={cat.des} src={cat.url} alt={cat.des} className="w-full hover:opacity-70 hover:scale-105 transition duration-500 ease-in" onClick={handleClick} />
          ))
        }
      </div>
    </div>
  )
}