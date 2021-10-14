import "./Header.css"
import Typed from "react-typed";

export default function Header() {
    return(
        <div id="home" className="header-container">
            <h2 id="header-title">Henry Gillard:</h2>
            <h2>
            <Typed 
                strings={[
                    "a Software Developer.",
                    "a Drummer",
                    "a Person"
                ]}
                typeSpeed={70}
                backSpeed={50}
                loop
            />
            </h2>
        </div>
    )
}