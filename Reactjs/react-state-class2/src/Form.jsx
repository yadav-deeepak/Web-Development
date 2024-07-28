import { useState } from "react";

export default function Form(){
    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: ""
    });

//     let handleNameChange = (event) =>{
//          setFullName(event.target.value);
//     };

//     let handleUsername = (event) =>{
//         setUserName(event.target.value);
//    };

      let handleInputChange = (event) =>{
        let fieldName = event.target.name;
        let newValue = event.target.value;
        console.log(newValue);
        setFormData((currData) => {
            return {...currData,[fieldName]: newValue};
        });
      };

      let handleSubmit = (event) =>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            username: "",
            password: "",
        });
      };

    return (
        <form onSubmit={handleSubmit}> 
            <label htmlFor="fullName">Fullname </label>
            <input placeholder="enter full name" type="text" value={formData.fullName} id="fullName" name="fullName" onChange={handleInputChange}></input>
            <br></br><br></br>
            <label htmlFor="username">Username </label>
            <input placeholder="enter user name" type="text" value={formData.username}  id="username" name="username" onChange={handleInputChange}></input>
            <br></br><br></br>
            <label htmlFor="password">Password </label>
            <input placeholder="enter password" type="password" value={formData.password}  id="password" name="password" onChange={handleInputChange}></input>
            <br></br><br></br>
            <button>Submit</button>
        </form>
    );
}