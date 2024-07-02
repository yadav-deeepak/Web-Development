function handleFormSubmit(event){
    event.preventDefault();
    console.log("Form was submitted");
}

export default function Form() {
    return (
        <form>
        <input placeholder="Write something"></input>
        <button onClick={handleFormSubmit}>Submit</button>
        </form>
    );
}