import { useDispatch } from "react-redux";
import { productsActions } from "../../../../redux/store/products-slice";

export const SearchAndSort = () => {
  const dispatch = useDispatch();
  const handleSearch = (event) => {
    event.preventDefault();
    const input = event.target[0];
    dispatch(productsActions.getFilterProductsByName(input.value));
  }
  return (
    <div className={`flex justify-between mt-2`}>
      <form onSubmit={handleSearch} className="w-1/2">
        <input name="name" className="w-full h-12 p-3 text-xl border border-slate-400 focus:outline-yellow-500" placeholder="Enter Search Here!"/>
      </form>
      
      <select className="border border-slate-400 px-3">
        <option>Default Sorting</option>
        <option>Sort By Name</option>
      </select>
    </div>
  )
}