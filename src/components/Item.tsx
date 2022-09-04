import { useAppDispatch } from "../hooks/hooks";
import { addCartItem, removeCartItem } from "../store/CartSlice";
import { toggleSelectedItem, checkMore } from "../store/itemsSlice";
import { IItem } from "../types/types";

interface ItemProps {
  item: IItem
}

const Item: React.FC<ItemProps> = ({item}) => {
  const dispatch = useAppDispatch();
  return (
    <div
    style={{border: `2px solid lightgray`}}
    className={`flex flex-col max-w-[250px] min-w-[100px] gap-1 justify-center items-center p-2 bg-gray-200 rounded relative`}
    >
      <img 
      src={item.imgLink} 
      alt={item.name}
      className='w-[150px] h-[130px] rounded'
      style={{objectFit: 'cover'}}
      />
      <h1>
        {item.name}
      </h1>
      <p>
        {`${item.price}p`}
      </p>
      <div
      className="flex gap-2"
      >
        <button
        onClick={() => {
          if (item.selected) {
            dispatch(removeCartItem({id: item.id}));
          } else {
            dispatch(addCartItem({...item}));
          }
          dispatch(toggleSelectedItem({id: item.id}));
        }}
        className={`px-2 py-1 ${item.selected ? 'bg-green-300' : 'bg-blue-200'} rounded`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
        </button>
        <button
        onClick={() => dispatch(checkMore({id: item.id}))}
        className="px-2 py-1 bg-blue-200 rounded"
        >
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
        </button>
        {item.more && 
        <div
        onClick={() => dispatch(checkMore({id: item.id}))}
        className="fixed top-0 left-0 right-0 bottom-0 w-full z-10 flex justify-center items-center"
        style={{
          background: 'rgba(0, 0, 0, .6)'
        }}
        >
          <div
          onClick={e => e.stopPropagation()}
          className="w-[90%] h-[90%] bg-white rounded shadow-md p-2 flex flex-col items-center relative"
          >
            <img 
            src={item.imgLink} 
            alt={item.name}
            className='w-4/5 h-[48%] rounded'
            style={{objectFit: 'cover'}}
            />
            <h1
            className="text-2xl font-bold"
            >
              {item.name}
            </h1>
            <p
            className="text-xl"
            >
              {`${item.price}p`}
            </p>
            <p
            style={{
              flex: '1 1 auto'
            }}
            className="text-lg">
              {item.info}
            </p>
            <div
      className="flex gap-2"
      >
        <button
        onClick={() => {
          if (item.selected) {
            dispatch(removeCartItem({id: item.id}));
          } else {
            dispatch(addCartItem({...item}));
          }
          dispatch(toggleSelectedItem({id: item.id}));
        }}
        className={`px-2 py-1 ${item.selected ? 'bg-green-300' : 'bg-blue-200'} rounded`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
        </button>
        <button
        onClick={() => dispatch(checkMore({id: item.id}))}
        className="px-2 py-1 bg-red-200 rounded text-lg w-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>   
        </button>
        </div>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default Item;