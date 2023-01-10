import { ContentHome } from "../../components/ContentHome";
import Slide from "../../components/Slide";

function Home() {
    return ( 
        <div className="wrapper-home">
            <div className="slide">
                <Slide/>
            </div>
            <div className="content" style={{marginTop: "100px"}}>
                <ContentHome/>
                <ContentHome/>
                <ContentHome/>
            </div>
        </div>
     );
}

export default Home;