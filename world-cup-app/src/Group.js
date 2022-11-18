import React from "react";
import Country from "./Country";
import "./Group.css"
class Group extends React.Component {
    constructor(props) {
        super(props)
        this.countries = props.countries
        this.name=props.name
        this.id=props.id
        
    }
    render() {
        return(
            <div className="full-group-render">
                
                <ul className="full-country-render">
                    <div className="country-row"><div className="describer"> {this.name}</div>
                    <div className="result"> P </div>
                    <div className="result"> W </div>
                    <div className="result"> D </div>
                    <div className="result"> L </div>
                    <div className="goal-difference"> GD </div>
                    </div>
                    {this.countries.map((singleCountry) => (
                    <div className="country-row">
                    <Country key={singleCountry.id} name={singleCountry.name} image={singleCountry.image} />
                    <div className="result"> 3 </div>
                    <div className="result"> 1 </div>
                    <div className="result"> 0 </div>
                    <div className="result"> 2 </div>
                    <div className="goal-difference"> 3:4 </div>
                    </div>)
                    )}                  
                </ul>

            </div>
        )
    }
}

export default Group