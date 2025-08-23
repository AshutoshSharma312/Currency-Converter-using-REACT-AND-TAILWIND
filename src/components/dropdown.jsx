import { HiOutlineStar } from "react-icons/hi2";
import { HiStar } from "react-icons/hi2";

const Currencydropdown = ({
    currencies,
    currency,
    setCurrency,
    favorites,
    handleFavorite,
    title = "",
}) => {

    const isFavorite = curr=>favorites.includes(curr);


  return (
    <div className='mt-1 relative'>
        <label htmlFor={title} 
        className='block text-sm font-medium text-gray-700'
        >{title} </label>

        <div><select value={currency} onChange={(e)=>setCurrency(e.target.value)}
        className='border border-gray-700 w-full p-2 rounded-md shadow-sm 
        focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-500 text-2xl'>

        {favorites.map((currency) => {return(
            <option className="bg-gray-200"
            key={currency} value={currency}>
                {currency}</option>
        )})}
       
       <hr />

        {currencies .filter((c) => !favorites.includes(c))
        .map((currency) => {
            return(
         <option key={currency} value={currency}>{currency}</option>
        )})}
        </select>
        
        <button onClick={()=>handleFavorite(currency)}
        className='absolute top-7.5 right-4 text-gray-400 hover:text-yellow-500'>
            
            {isFavorite(currency) ?<HiStar />: <HiOutlineStar />}
            
        </button>

        </div>
    </div>
  )
}
export default Currencydropdown
