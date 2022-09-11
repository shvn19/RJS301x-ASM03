import { ShowProductsPage } from "./ShowProductsPage"
import { SideBar } from "./SideBar"

export const ShopPage = () => {
  return (
    <div className="px-[100px]">
      <div className={`bg-slate-50 h-[200px] flex justify-between px-12 items-center italic`}>
        <p className="text-4xl font-bold text-slate-600">SHOP</p>
        <p className="text-lg text-slate-600">SHOP</p>
      </div>
      <div className="grid grid-cols-4 gap-6 pt-4">
        <div className={`col-span-1 bg-slate-50/50`}>
          <SideBar />
        </div>
        <div className={`col-span-3`}>
          <ShowProductsPage />
        </div>
      </div>
    </div>
  )
}