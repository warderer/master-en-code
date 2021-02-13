import { useState, useEffect } from 'react'; 

function useForm(callback, defaults){
    const [inputs, setInputs] = useState(defaults) // form values

    useEffect(()=>{
        setInputs({...defaults})
    },[defaults])

    const handleSubmit = (event) => {
        event.preventDefault();
        callback(inputs);
    }

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        console.log(name,value);
        setInputs({...inputs, [name]:value});
    }

    return {
        inputs,
        handleInputChange,
        handleSubmit
    }
}

export default useForm;
