import React from "react";
import "./EmployeeCard.scss";

const EmployeeCard = (props) => {

    const names = props.name;
    console.log(names)

    return (
        <div className="employee">
            <h3 className="employee__name">{props.name}</h3>
            <h3 className="employee__role">{props.role}</h3>  
        </div> 
    )
}

export default EmployeeCard;