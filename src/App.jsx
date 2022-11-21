import React from "react"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import data from "./data"

function App(){
    const cardsArray = data.map(item=>{
        return <Card
                    key={item.id}
                    {...item}
                    />
    })
    return (
        <div className="container">
            <Navbar />
            <div className="card-container">
                {cardsArray}
            </div>
        </div>
    )
}

export default App