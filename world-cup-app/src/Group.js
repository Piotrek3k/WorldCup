import React from "react";
import Country from "./Country";
import "./Group.css"
import Match from "./Match";


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
                    <div key={singleCountry.id+200} className="country-row">
                    <Country key={singleCountry.id} name={singleCountry.name} image={singleCountry.image} />
                    <div className="result"> {this.singleCountry.state.points} </div>
                    <div className="result"> {singleCountry.wins} </div>
                    <div className="result"> {singleCountry.draws} </div>
                    <div className="result"> {singleCountry.losses}</div>
                    <div className="goal-difference"> {singleCountry.goalsScored}:{singleCountry.goalsConceded} </div>
                    </div>))
                    }
                                      
                </ul>
                <Match country1={this.countries[0]} country2={this.countries[1]}/>
                <Match country1={this.countries[2]} country2={this.countries[3]}/>
                <Match country1={this.countries[0]} country2={this.countries[2]}/>
                <Match country1={this.countries[3]} country2={this.countries[1]}/>
                <Match country1={this.countries[1]} country2={this.countries[2]}/>
                <Match country1={this.countries[3]} country2={this.countries[0]}/>

            </div>
        )
    }
}

export default Group