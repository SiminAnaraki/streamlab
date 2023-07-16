import Header from "../header";
import Footer from "../footer"; 

export default function LayOut(props){
    return(<>
        <Header/>
         {props.children}
        <Footer/>
    </>)
}