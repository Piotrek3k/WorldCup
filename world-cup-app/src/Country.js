import "./Country.css"
import React from "react"


class Country extends React.Component {
    constructor(props){
        super(props)
        this.image = props.image
        this.name = props.name
        this.id=props.id
    }
    render() {
        return(
        <div className="country-display"> 
        <img className="country-flag" alt={this.props.name}
        src={this.props.image} height={20} width={30}></img>
        {this.props.name}</div>
        )
    }
  }

  export default Country