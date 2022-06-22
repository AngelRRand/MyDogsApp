import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { detailDogs, deleteDetails } from '../../../redux/actions';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoMdCreate } from "react-icons/io";
import '../../../styles/cardDetail.css'
import styled from 'styled-components';

const DetailNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 17px;
  background-color: rgb(41, 36, 36);
  color: white;
  align-items: center;
  text-align: center;
  height: 100vh;
  padding: 30px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  
`
const CardD = styled.div`
  display: flex;
  padding: 1px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px ease rgba(41, 36, 36, 0.37);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 10% 10% 30px 30px;
  height: 80vh;
  width: 500px;
`
const CardDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailDogs(id));
    return ()=>{
      dispatch(deleteDetails())
    }
  }, [dispatch, id]);
  

  const detail = useSelector((state) => state.detail)
  let temp = detail.temperaments

  console.log(detail)
  return (
    <div className='detail'>
      <div className='detailArrow'>
        <Link style={{ textDecoration: 'none' }} className='arrow' to={'/home'}>
          <DetailNav>
            <h3>Return</h3>
            <IoIosArrowBack size={70}></IoIosArrowBack>
          </DetailNav>
        </Link>
        <Link style={{ textDecoration: 'none' }} className='arrowDos' to={'/create'}>
          <DetailNav>
            <h3>CreateDogs</h3>
            <IoMdCreate size={70}></IoMdCreate>
          </DetailNav>
        </Link>
      </div>
      <CardD className='detailFocus'>
        <img src={detail.image} alt="dog" />
        <h1>{detail.name}</h1>
        <p className='detailInfo'>
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
      </CardD>
      <DetailInfo>
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
      </DetailInfo>

    </div>
  )
}

export default CardDetail