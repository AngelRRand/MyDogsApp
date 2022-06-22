import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { filterTemperament, postDog } from '../redux/actions';
import { Link } from 'react-router-dom';
import { BsXLg } from "react-icons/bs";
import styled from 'styled-components';
import { GiDogHouse } from "react-icons/gi";
import dogTres from '../img/perrito2.jpg'
import '../styles/form.css'

const Card = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border-radius: 10% 10% 0px 0px;
    height: 350px;
    margin: 10px 80px;
    width: 250px;
    max-width: 250px;
`
const CardImg = styled.div`
    width: 100%;
    height: 240px;
    max-height: 240px;
    object-fit: contain;
    border-radius: 10% 10% 0px 0px;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`
const CardText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const CardWei = styled.div`
    display: flex;
`
const Error = styled.div`
    background-color: crimson;
    width: 150px;
    height: auto;
    position: absolute;
    right: 430px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: white;
    padding: 10px;
    border-radius: 0% 20% 20% 0px;
    box-shadow: rgb(77, 38, 38) 0px 20px 30px -10px;
`



function validateForm(input) {
    let errors = {};


    if (!input.name) {
        errors.name = "You must type a name";
    } else {
        errors.name = "";
    }


    if (!input.weight_min) {

        errors.weight_min = "Type a valid minimal weight number";
    } else if (!/\d{1,2}/gi) {
        errors.weight_min = "Weight must have min values. Example: '25'";
    } else {
        errors.weight_min = "";
    }


    if (!input.weight_max) {

        errors.weight_max = "Type a valid maxim weight number";
    } else if (!/\d{1,2}/gi) {
        errors.weight_max = "Weight must have max values. Example: '25'";
    } else {
        errors.weight_max = "";
    }

    if (!input.height_min) {

        errors.height_min = "Type a valid minimal height number";
    } else if (!/\d{1,2}/gi) {
        errors.height_min = "Height must have min values. Example: '25'";
    } else {
        errors.height_min = "";
    }


    if (!input.height_max) {

        errors.height_max = "Type a valid maxim height number";
    } else if (!/\d{1,2}/gi) {
        errors.height_max = "Height must have max values. Example: '25'";
    } else {
        errors.height_max = "";
    }
    return errors;
}



export const Form = () => {
    const [error, setErrors] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(filterTemperament());
    }, [dispatch]);
    const [input, setInput] = useState({
        name: "",
        image: "",
        weight_min: "",
        weight_max: "",
        height_min: "",
        height_max: "",
        life_span: "",
        temperament: [],
    });

    const temperaments = useSelector((state) => state.temperaments).sort(
        function (a, b) {
            if (a < b) return -1;
            else return 1;
        }
    );

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(
            validateForm({
                ...input,
                [e.target.name]: e.target.value,
            })
        );
    }

    function handleSelect(e) {
        setInput({
            ...input,
            temperament: [...input.temperament, e.target.value],
        });
    }

    function handleDelete(el) {
        setInput({
            ...input,
            temperament: input.temperament.filter((temp) => temp !== el),
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (
            !error.name &&
            !error.image &&
            !error.weight_min &&
            !error.height_min &&
            !error.weight_max &&
            !error.height_max
        ) {
            alert("Your dog has been created successfully");
            dispatch(postDog(input));
            setInput({
                name: "",
                image: "",
                height_min: "",
                weight_min: "",
                height_max: "",
                weight_max: "",
                life_span: "",
                temperament: [],
            });
        } else {
            return alert("Something went wrong. Please try again.");
        }
    }


    return (
        <div className='form'>
            <div className='form-icons'>
                <Link style={{ textDecoration: 'none' }} to={'/home'}>
                    <div className='formBack'>
                        <h3>Close</h3>
                        <BsXLg></BsXLg>

                    </div>
                </Link>
            </div>



            <div className='form-main'>
                <h1>Create your dog</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='form_container'>


                        <div className='form-estruct'>

                            <div className='form_name form_input'>
                                <label>Name</label>
                                <input
                                    type="text"
                                    value={input.name}
                                    name="name"
                                    placeholder="dog name"
                                    onChange={(e) => handleChange(e)}
                                    required
                                />
                            </div>

                            <div className='form_img form_input'>
                                <label>Image</label>
                                <input
                                    type="url"
                                    value={input.image}
                                    name="image"
                                    placeholder="url"
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>

                            <div className='form_temp form_input'>
                                <label>Temperaments</label>
                                <select onChange={(e) => handleSelect(e)}>
                                    {temperaments.map((temp) => {
                                        return (
                                            <option key={temp} name={temp}>
                                                {temp}
                                            </option>
                                        );
                                    })}
                                </select>

                            </div>

                        </div>

                        <div className='form-inf'>

                            <div className='form_life form_input'>
                                <label>Life Span</label>
                                <input
                                    type="text"
                                    value={input.life_span}
                                    name="life_span"
                                    placeholder="12 - 15 years"
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div className='form-values'>
                                <div className='form_nums form_input'>
                                    <label>Height</label>
                                    <div className='form_valueWH'>
                                        <input
                                            type="text"
                                            value={input.height_min}
                                            name="height_min"
                                            placeholder="5"
                                            onChange={(e) => handleChange(e)}
                                            required
                                        />
                                        -
                                        <input
                                            type="text"
                                            value={input.height_max}
                                            name="height_max"
                                            placeholder="15"
                                            onChange={(e) => handleChange(e)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='form_nums form_input'>
                                    <label>Weight</label>
                                    <div className='form_valueWH'>
                                        <input
                                            type="text"
                                            value={input.weight_min}
                                            name="weight_min"
                                            placeholder="5"
                                            onChange={(e) => handleChange(e)}
                                            required
                                        />
                                        -
                                        <input
                                            type="text"
                                            value={input.weight_max}
                                            name="weight_max"
                                            placeholder="15"
                                            onChange={(e) => handleChange(e)}
                                            required
                                        />
                                    </div>

                                </div>

                            </div>


                        </div>

                    </div>


                    <button type="submit">
                        Creat <GiDogHouse></GiDogHouse>
                    </button>
                </form>

                <Error>
                    <h3>console.error</h3>
                    <p>{error.name}</p>
                    <p>{error.image}</p>
                    <p>{error.height_min}</p>
                    <p>{error.height_max}</p>
                    <p>{error.weight_min}</p>
                    <p>{error.weight_max}</p>
                </Error>

            </div>



            <div className='form-card'>
                <div className='creatingDog'>
                    <p>

                        {input.name && input.weight_min && input.weight_max && input.height_min && input.weight_max ? 'guau guau!' : 'Creating...'}
                    </p>
                </div>
                <Card>
                    <CardImg>
                        <img src={input.image || dogTres} />
                    </CardImg>
                    <CardText>
                        <h1>{input.name}</h1>
                        <CardWei>
                            <span>{input.weight_min}</span>
                            <span>-</span>
                            <span>{input.weight_max}</span>
                        </CardWei>
                    </CardText>
                </Card>
                <div className='list_Temp'>
                    <h4>Your dog's temperaments are:</h4>
                    <div className='form_containerTemps'>
                        {input.temperament.map((el) => (
                            <div className='form_temps' key={el} >
                                <p>{el}</p>
                                <button onClick={() => handleDelete(el)}>x</button>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
