
import React, { useState } from 'react';


const useRegister = () => {

    const [inputData, setInputData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const inputHandler = (e) => {
        const {name, value} = e.target;
        setInputData((prev) => {
            return{...prev, [name]: value}
        })
    }

    return[
        inputHandler, inputData,setInputData
    ]
}

export default useRegister