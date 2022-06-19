import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { detailDogs } from '../../../redux/actions';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
const CardDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailDogs(id));
  }, []);


  const detail = useSelector((state) => state.detail)
  let temp = detail.temperaments

  console.log(detail)
  return (
    <div className='detail'>
      <div className='detailArrow'>
        <Link style={{ textDecoration: 'none' }} to={'/home'}><IoIosArrowBack size={70}></IoIosArrowBack></Link>
      </div>
      <div className='detailFocus'>
        <h1>{detail.name}</h1>
        <div className='card_Detail'>
          <img src={detail.image} alt="dog" />
          <p>
            {
              typeof temp === 'object' ?

                temp.map(t => {
                  return (
                    <p>{t.name}</p>
                  )
                })

                :
                temp
            }
          </p>
        </div>
      </div>
      <div className='detailInfo'>
        <div className='life'>
          <h4>Life</h4>
          <span>{detail.life_span}</span>
        </div>
        <div className='heig-weigt'>
          <div className='detail_Heigh'>
            <h4>Heigh</h4>
            <p>Altura minima: {detail.height_min}</p>
            <p>Altura maxima: {detail.height_max}</p>
          </div>
          <div className='detail_weight'>
            <h4>Weight</h4>
            <p>Peso minima: {detail.weight_min}</p>
            <p>Peso maxima: {detail.weight_max}</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default CardDetail