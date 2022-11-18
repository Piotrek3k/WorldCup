import Group from "./Group";
import React from "react";
import "./GroupStage.css"

class GroupStage extends React.Component {
    constructor(props)
    {
        super(props)
        this.groups=props.groups
    }
    render() {
        return(
            <div>
                <ul className="groupstage-render">
                    {this.groups.map((singleGroup) => (<Group countries = {singleGroup.countries} name = {singleGroup.name} key = {singleGroup.id}></Group>
                    )
                    )}                  
                </ul>
            </div>
        )
    }
}

export default GroupStage