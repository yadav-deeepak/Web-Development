import { useState } from "react";

export default function Form(){
    let [fullName, setFullName] = useState("");
    let handleNameChange = (event) =>{
         setFullName(event.target.value);
    }

    return (
        <form>
            <label htmlFor="username">Fullname </label>
            <input placeholder="enter full name" type="text" value={fullName} onChange={handleNameChange} id="username"></input>
            <button>Submit</button>
        </form>
    );
}