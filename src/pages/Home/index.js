import { Banner } from "./Banner"
import { Categories } from "./Categories"
import { TopTrending } from "./TopTrending"

export const Home = () => {
  return (
    <div className="px-[100px]">
      <Banner />
      <Categories />
      <TopTrending />
    </div>
  )
}