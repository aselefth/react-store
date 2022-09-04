import { addItem } from "../store/itemsSlice"
import { 
  handleNameChange, 
  handlePriceChange, 
  handleCategoryChange, 
  handleImgLinkChange, 
  handleInfoChange 
} from "../store/FormSlice"
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import React, { KeyboardEventHandler } from "react";

interface FormProps {
  setModal: (value: boolean) => void
}

const Form:React.FC<FormProps> = ({setModal}) => {
  const name = useAppSelector(state => state.form.name);
  const price = useAppSelector(state => state.form.price);
  const category = useAppSelector(state => state.form.category);
  const imgLink = useAppSelector(state => state.form.imgLink);
  const info = useAppSelector(state => state.form.info);
  const dispatch = useAppDispatch();

  const handleKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = e => {
    if (e.key !== 'Enter') return; 
    if(name.trim().length == 0 || price.trim().length == 0) {
      alert('cant add with no price or name');
      return;
    }
    dispatch(addItem({
      name: name, 
      price: price, 
      category: category, 
      imgLink: imgLink, 
      info: info
    }))
    dispatch(handleNameChange({name: ''}));
    dispatch(handlePriceChange({price: ''}));
    dispatch(handleCategoryChange({category: 'все'}));
    dispatch(handleImgLinkChange({imgLink: ''}))
    setModal(false);
      

  }

  return (
    <div
    onClick={(e) => {
      setModal(false);
      dispatch(handleNameChange({name: ''}));
      dispatch(handlePriceChange({price: ''}));
      dispatch(handleCategoryChange({category: 'все'}));
      dispatch(handleImgLinkChange({imgLink: ''}));
      dispatch(handleInfoChange({info: ''}))
    }}
    style={{background: 'rgba(0, 0, 0, .6)'}}
    className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center"
    >
      <form
      onClick={e => e.stopPropagation()}
      onSubmit={e => {
        e.preventDefault();
        if(name.trim().length == 0 || price.trim().length == 0) {
          alert('cant add with no price or name');
          return;
        }
        dispatch(addItem({
          name: name, 
          price: price, 
          category: category, 
          imgLink: imgLink, 
          info: info
        }));
        dispatch(handleNameChange({name: ''}));
        dispatch(handlePriceChange({price: ''}));
        dispatch(handleCategoryChange({category: 'все'}));
        dispatch(handleImgLinkChange({imgLink: ''}))
        setModal(false);
      }
      }
      className="flex flex-col gap-2 bg-white opacity-[1] w-[20rem] h-fit p-2 rounded shadow-sm"
      >

        <p>
          наименование
        </p>

        <input 
        type='text' 
        placeholder="например, робот"
        value={name}
        onChange={e => dispatch(handleNameChange({name: e.target.value}))}
        />

        <p>
          цена
        </p>

        <input 
        type='number' 
        placeholder="например, 1000"
        value={price}
        onChange={e => dispatch(handlePriceChange({price: e.target.value}))}
        />

        <p>
          категория
        </p>

        <select
        defaultValue={category}
        onChange={(e) => dispatch(handleCategoryChange({category: e.target.value}))}
        >
          <option>
            все
          </option>
          <option>
            животные
          </option>
          <option>
            транспорт
          </option>
          <option>
            техника
          </option>
        </select>

        <p>
          изображение
        </p>

        <input 
        type='url'
        placeholder="url..."
        value={imgLink}
        onChange={e => dispatch(handleImgLinkChange({imgLink: e.target.value}))}
        />

        <p>
          или
        </p>

        <input
        type='file'
        onChange={
          (e: React.ChangeEvent<HTMLInputElement>) => {
            const data = e.target.files;
            const reader = new FileReader();
            if (data)
            reader.readAsDataURL(data[0]);
            reader.onload = () => {
              dispatch(handleImgLinkChange({imgLink: reader.result}))
            }
          }
        }
        />

        <p>
          описание
        </p>

        <textarea 
        style={{
          resize: 'none'
        }}
        value={info}
        placeholder='например, красного цвета...'
        onChange={e => dispatch(handleInfoChange({info: e.target.value}))}
        onKeyDown={handleKeyDown}
        />

        <button 
        className="h-8 bg-gray-600 shadow-sm rounded text-white"
        type='submit'
        >
          добавить
        </button>
      </form>
    </div>
  )
}

export default Form;