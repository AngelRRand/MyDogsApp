import React, { useState, useEffect } from 'react'
import { FaArrowCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
const Pagination = ({ pag, setPag, max }) => {
  //  const dispatch = useDispatch();
  const pagination = useSelector((state) => state.pagination)
  console.log(pagination)
  const [input, setInput] = useState('');

  useEffect(() => {
    setInput(pagination);
  }, []);


  const nextPage = () => {
    setInput(parseInt(input) + 1);
    setPag(parseInt(pag) + 1);
  }
  const previusPage = () => {
    setInput(parseInt(input) - 1);
    setPag(parseInt(pag) - 1);
  }
  const onKeyDown = e => {
    if (e.keyCode === 13) {
      setPag(parseInt(e.target.value))               //Esta funcion solo continua una ves se preciona enter
      if (
        parseInt(e.target.value < 0) ||
        parseInt(e.target.value) > Math.ceil(max) ||
        isNaN(parseInt(e.target.value))            //Si se escriben letras que no marque un error
      ) {
        setPag(1)
        setInput(1)
      } else {
        setPag(parseInt(e.target.value))
      }
    }
  }
  const onChance = (e) => {
    setInput(e.target.value)
  }
  return (
    <div className='pagination'>
      <button className='button_pag' disabled={pag === 1 || pag < 1} onClick={previusPage}> <FaArrowAltCircleUp size={28} /> </button>
      <div className='pag-circ'>
        <input
          onChange={(e) => onChance(e)}
          onKeyDown={(e) => onKeyDown(e)}
          name="page"
          autoComplete='off'
          value={pagination}
        />
        <p>{Math.ceil(max)}</p>

      </div>
      <button className='button_pag' disabled={pag === Math.ceil(max) || pag > Math.ceil(max)} onClick={nextPage}> <FaArrowCircleDown size={28} /> </button>
    </div>
  )
}

export default Pagination