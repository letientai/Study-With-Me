import { ContentCourse } from "../../components/ContentCourse";
import Slide from "../../components/Slide";

function Home() {
    return ( 
        <div className="wrapper-home">
            <div className="slide">
                <Slide/>
            </div>
            <div className="content" style={{marginTop: "100px"}}>
                <ContentCourse/>
                <ContentCourse/>
                <ContentCourse/>
            </div>
        </div>
     );
}

export default Home;