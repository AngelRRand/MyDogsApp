import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { filterTemperament, postDog } from '../redux/actions';
import { Link } from 'react-router-dom';
import '../styles/form.css'


function validateForm(input) {
    let errors = {};


    if (!input.name) {
        errors.name = "You must type a name";
    } else {
        errors.name = "";
    }


    if (!input.weight_min) {

        errors.weight_min = "Type a valid minimal weight number";
    } else if (!/\d{1,2}/gi.test(input.weight_min)) {
        errors.weight_min = "Weight must have min values. Example: '25'";
    } else {
        errors.weight_min = "";
    }


    if (!input.weight_max) {

        errors.weight_max = "Type a valid maxim weight number";
    } else if (!/\d{1,2}/gi.test(input.weight_max)) {
        errors.weight_max = "Weight must have max values. Example: '25'";
    } else {
        errors.weight_max = "";
    }

    if (!input.height_min) {

        errors.height_min = "Type a valid minimal height number";
    } else if (!/\d{1,2}/gi.test(input.height_min)) {
        errors.height_min = "Height must have min values. Example: '25'";
    } else {
        errors.height_min = "";
    }


    if (!input.height_max) {

        errors.height_max = "Type a valid maxim height number";
    } else if (!/\d{1,2}/gi.test(input.height_max)) {
        errors.height_max = "Height must have max values. Example: '25'";
    } else {
        errors.height_max = "";
    }
    return errors;
}



export const Form = () => {
    const [error, setErrors] = useState('');
    useEffect(() => {
        dispatch(filterTemperament());
    }, []);
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
    const dispatch = useDispatch();

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
            <Link style={{ textDecoration: 'none' }} to={'/home'}><h1>X</h1></Link>
            </div>

            <div className='form-estruct'>
                <h1>Crea tu pichichu!</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='form_container'>
                        <div className='form-estruct'>

                            <div className='form_name'>
                                <label>Name</label>
                                <input
                                    type="text"
                                    value={input.name}
                                    name="name"
                                    placeholder="Grand Canadian Bulldog"
                                    onChange={(e) => handleChange(e)}
                                    required
                                />
                                <p>{error.name}</p>
                            </div>

                            <div className='form_img'>
                                <label>Image</label>
                                <input
                                    type="url"
                                    value={input.image}
                                    name="image"
                                    placeholder="url"
                                    onChange={(e) => handleChange(e)}
                                />
                                <p>{error.image}</p>
                            </div>

                            <div className='form_temp'>
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
                                <h4>Los temperamentos de tu perro son:</h4>
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

                        <div className='form-inf'>

                            <div className='form_heights'>
                                <label>Height</label>
                                <div className='form_valueH'>
                                    <input
                                        type="number"
                                        value={input.height_min}
                                        name="height_min"
                                        onChange={(e) => handleChange(e)}
                                        required
                                    />
                                    <p>{error.height_min}</p>

                                    -
                                    <input
                                        type="number"
                                        value={input.height_max}
                                        name="height_max"
                                        onChange={(e) => handleChange(e)}
                                        required
                                    />
                                    <p>{error.height_max}</p>

                                </div>
                            </div>

                            <div className='form_weights'>
                                <label>Weight</label>
                                <div className='form_valueW'>
                                    <input
                                        type="number"
                                        value={input.weight_min}
                                        name="weight_min"
                                        onChange={(e) => handleChange(e)}
                                        required
                                    />
                                    <p>{error.weight_min}</p>
                                    -
                                    <input
                                        type="number"
                                        value={input.weight_max}
                                        name="weight_max"
                                        onChange={(e) => handleChange(e)}
                                        required
                                    />
                                    <p>{error.weight_max}</p>
                                </div>

                            </div>

                            <div className='form_life'>
                                <label>Life Span</label>
                                <input
                                    type="text"
                                    value={input.life_span}
                                    name="life_span"
                                    placeholder="12 - 15 years"
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                        </div>

                    </div>


                    <button type="submit">
                        Creat 🐕
                    </button>
                </form>

            </div>
        </div>
    )
}
