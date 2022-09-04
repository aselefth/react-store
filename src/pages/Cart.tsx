import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import { removeCartItem } from "../store/CartSlice";
import { toggleSelectedItem } from "../store/itemsSlice";

const Cart:React.FC = () => {
    const cart = useAppSelector(state => state.cart.items);
    const totalPrice = useAppSelector(state => state.cart.totalPrice);
    const dispatch = useAppDispatch();
    return (
        <div
        className="flex flex-col gap-2 w-full px-4 min-h-[100%] relative"
        >
            <div
            style={{flex: '1 1 auto'}}
            >
                {cart.map(item => (
                    <div
                    className="flex justify-between items-center"
                    key={item.id}
                    >
                        <div
                        className="flex items-center gap-2"
                        >
                            <img 
                            className="w-[50px] h-[50px] rounded-[25%] border"
                            src={item.imgLink}
                            />
                            <span>
                                {item.name}
                            </span>
                        </div>
                        <div
                        className="flex gap-8"
                        >
                            <span>
                                {`${item.price}p`}
                            </span>
                            <button
                            className="px-2 h-7 bg-red-200 rounded hover:bg-red-300"
                            onClick={() => {
                                dispatch(toggleSelectedItem({id: item.id}));
                                dispatch(removeCartItem({id: item.id}));
                            }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                            </button>
                        </div>
                    </div>
                ))}
                <div
                className="text-xl underline"
                >
                    Итого: {`${totalPrice}p`}
                </div>
            </div>
            <div
            className="flex justify-center fixed bottom-3 left-0 right-0"
            >
                <Link 
                className="px-4 py-1 bg-blue-200 rounded hover:bg-blue-300 active:bg-blue-300 flex items-center gap-2"
                to='/'
                >
                    <span
                    className="text-lg"
                    >
                        в магазин
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"/></svg>
                </Link>
            </div>
        </div>
    )
}

export default Cart;