import {useState,useEffect} from 'react';

const UseForm = (validate,callback)=>{
    const [values,setValues] = useState({
        your_name:'',
        your_email:'',
        your_pass:'',
        your_pass2:'',
        your_check:true
    });

    const [errors,setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) =>{
        const {name,value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }
    const handleCheck = (e) =>{
      const target = e.target
      const value = target.type === 'checkbox' ? target.checked : target.value;
      console.log(value);
      const name = target.name;
      setValues({
        ...values,
        [name] : value
      });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    }

    useEffect(
        () => {
          if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
          }
        })
    
      return { handleChange, handleSubmit, values, errors, handleCheck }

}

export default UseForm;