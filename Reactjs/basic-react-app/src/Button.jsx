function doSomething(event){
    console.log("Hello!");
    console.log(event);
}

function onHover(){
    console.log("Hover");
}

export default function Button() {
    return (
        <div>
            <button onClick={doSomething}>Click Me!</button>
            <p onMouseOver={onHover}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, saepe!</p>
        </div>
    );
}