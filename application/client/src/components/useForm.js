import {useState, useEffect} from 'react'

const useForm = (validate) => {
    const [values, setValues] = useState({
        email:''
    })
    const [errors, setErrors] = useState({})

    const handleChange = e => {
        const {email, value} = e.target
        setValues({
            ...values,
            [email]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
    }

    return{handleChange, values, handleSubmit, errors}
}

export default useForm;