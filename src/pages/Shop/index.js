export const ShopPage = () => {
  return (
    <div className="px-[100px]">
      <div className={`bg-slate-50 h-[200px] flex justify-between px-12 items-center italic`}>
        <p className="text-4xl font-bold text-slate-600">SHOP</p>
        <p className="text-lg text-slate-600">SHOP</p>
      </div>
      <div className="grid grid-cols-4 gap-6">
        <div className={`col-span-1 bg-red-200`}>
          sidebar
        </div>
        <div className={`col-span-3 bg-blue-200`}>
          content
        </div>
      </div>
    </div>
  )
}