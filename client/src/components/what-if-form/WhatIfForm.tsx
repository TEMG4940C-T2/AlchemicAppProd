import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WhatIfForm.scss'

const PredictionForm = ({ defaultValues, onPrediction }) => {
    const [formValues, setFormValues] = useState(defaultValues);

    useEffect(() => {
        setFormValues(defaultValues);
    }, [defaultValues]);

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit= async (e) => {
        e.preventDefault();
        onPrediction("A");
    };


    return (
        <form onSubmit={handleSubmit} className="form">
            {Object.keys(formValues).map((key) => {
                if (key === 'id' || key === 'crMigCL'|| key === 'crSpreadPred' || key === 'crSpreadSL' || key === 'crMigPred') {
                    return null; // Skip the 'ID'
                }

                const label = key.charAt(0).toUpperCase() + key.slice(1);

                return (
                    <div key={key} className="inputGroup">
                        <label className="label">{label}</label>
                        { key === 'name' || key === 'ticker'  ? 
                            <p>{formValues[key]}</p> : 
                            <input
                                type="any"
                                name={key}
                                value={formValues[key]}
                                onChange={handleChange}
                                className="input"
                            />
                        }
                    </div>
                );
            })}
            <button type="submit" className="button">Predict</button>
        </form>
    );
};

export default PredictionForm;