import "./Header.css"
import { React } from "react"
import Typed from "react-typed";

export default function Header() {
    return(
        <div id="home" className="header-container">
            <div className="header-text">
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
        </div>
    )
}