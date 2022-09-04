import { useSelector, useDispatch } from "react-redux";
import Item from "../components/Item";
import { changeCategory } from '../store/itemsSlice';
import Form from "../components/Form";
import { useState } from "react";
import { checkMore } from "../store/itemsSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";


const Home: React.FC = () => {
    const [find, setFind] = useState('');
    const [modal, setModal] = useState(false);
    const items = useAppSelector(state => state.items.items);
    const category = useAppSelector(state => state.items.category);
    const dispatch = useAppDispatch();

    return (
        <div
        className="relative"
        >
            <div
            className="relative ml-4 mb-2 w-[250px]"
            >
                <input 
                value={find}
                onChange={e => setFind(e.target.value)}
                placeholder="найдите товар"
                className="border w-full outline-none"
                type='text' 
                />
                <div
                className="absolute top-7 left-0 right-0 z-20 bg-white"
                >
                    {items.map(item => item.name.toLowerCase().includes(find.trim().toLowerCase()) && find.length > 2
                    ? <div
                    onClick={() => {
                        dispatch(checkMore({id: item.id}));
                        setFind('');
                    }}
                    key={item.id}
                    className="flex justify-between px-1 hover:bg-gray-100 cursor-pointer"
                    >
                        <img 
                        className="w-9 h-9 rounded"
                        src={item.imgLink} 
                        alt={item.name} 
                        />
                        <p>
                            {item.name}
                        </p>
                        <p>
                            {`${item.price}p`}
                        </p>
                    </div>
                    : '')}
                </div>
            </div>
            <ul
            className='flex py-2 gap-2 pl-4 mb-2 flex-wrap'
            >
                <li
                onClick={() => dispatch(changeCategory({category: 'все'}))}
                style={{border: '2px solid black'}}
                className={`cursor-pointer rounded px-2 ${category == 'все' ? 'bg-black text-white': 'bg-transparent text-black-500'}`}
                >
                    все
                </li>

                <li
                onClick={() => dispatch(changeCategory({category: 'животные'}))}
                style={{border: '2px solid black'}}
                className={`cursor-pointer rounded px-2 ${category == 'животные' ? 'bg-black text-white': 'bg-transparent text-black-500'}`}
                >
                    животные
                </li>

                <li
                onClick={() => dispatch(changeCategory({category: 'транспорт'}))}
                style={{border: '2px solid black'}}
                className={`cursor-pointer rounded px-2 ${category == 'транспорт' ? 'bg-black text-white': 'bg-transparent text-black-500'}`}
                >
                    транспорт
                </li>

                <li
                onClick={() => dispatch(changeCategory({category: 'техника'}))}
                style={{border: '2px solid black'}}
                className={`cursor-pointer rounded px-2 ${category == 'техника' ? 'bg-black text-white': 'bg-transparent text-black-500'}`}
                >
                    техника
                </li>
                
            </ul>
            <div 
            className="flex gap-2 flex-wrap px-4"
            >
                {items.map(item => item.category.includes(category) ? <Item key={item.id} item={item}/> : '')}
            </div>
            <button
            onClick={() => setModal(true)}
            className='w-8 h-8 bg-gray-600 text-white rounded-[15%] fixed bottom-4 right-4 shadow-md'
            >
                +
            </button>
            {modal && <Form setModal={setModal}/>}
        </div>
    )
}

export default Home;