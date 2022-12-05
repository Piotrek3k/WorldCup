import Country from "./Country"
import { useState } from "react";
import "./Match.css"


const Match = (props) => {

    const [enteredScore1, setEnteredScore1] = useState();
    const scoreChangeHandler1 = (event) => {
    setEnteredScore1(event.target.value); }

    const [enteredScore2, setEnteredScore2] = useState();
    const scoreChangeHandler2 = (event) => {
    setEnteredScore2(event.target.value);
  };
    let setResult = () => {
    if(enteredScore1!=null && enteredScore2!=null)
    {
        if(enteredScore1 > enteredScore2)
        {
            props.country1.points+=3
            props.country1.wins+=1
            props.country2.losses+=1               
        }
        if(enteredScore1 < enteredScore2)
        {
            props.country2.points+=3
            props.country2.wins+=1
            props.country1.losses+=1 
        }
        else{
            props.country1.points+=1
            props.country2.points+=1
            props.country1.draws+=1
            props.country2.draws+=1
        }

        props.country1.goalsScored+=enteredScore1
        props.country1.goalsConceded+=enteredScore2
        props.country2.goalsScored+=enteredScore2
        props.country2.goalsConceded+=enteredScore1
    }
}
    return(
        <div className="match">
        <Country key={props.country1.id} name={props.country1.name} image={props.country1.image}/>
        <input className="score1" 
            type="number"
            min="0"
            max="99"
            step="1"
            value={enteredScore1}
            onChange={[scoreChangeHandler1,setResult]}
            onWheel={(e) => e.target.blur()}/>
        <div> : </div>
        <input className="score2" type="number"
            min="0"
            max="99"
            step="1"
            value={enteredScore2}
            onChange={[scoreChangeHandler2,setResult]}/>
        <Country key={props.country2.id} name={props.country2.name} image={props.country2.image}/>
        
        </div>
        

    )
}

export default Match