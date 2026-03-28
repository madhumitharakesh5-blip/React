import React from "react";
import HTML from "./assets/book.jpeg";
function App(){
    return(
        <div className="card">
            <h1>Eloquent Javascript</h1>
            <p>Modern JavaScript programming from basics to advanced topics,using clear explanations
                and practical examples.It includes exercise to help readers practice coding and understand
                concepts deeply.
            </p>
            <img src={HTML} alt="Book"/>
            <button> Study </button>
        </div>
    );
}
export default App;