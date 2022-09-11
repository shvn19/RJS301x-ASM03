import { Banner } from "./Banner"
import { Categories } from "./Categories"

export const Home = () => {
  return (
    <div className="px-[100px]">
      <Banner />
      <Categories />
      <p>This is Home page</p>
    </div>
      
  )
}