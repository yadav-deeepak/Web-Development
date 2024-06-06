import './App.css'
import Title from "./Title.jsx";
import ProductTab from './ProductTab.jsx';
import MsgBox from './MsgBox.jsx';


function App() {
   return(
    <>
      <MsgBox userName="Luffy" textColor="blue"></MsgBox>
      <ProductTab></ProductTab>
    </>
   )
}

export default App
