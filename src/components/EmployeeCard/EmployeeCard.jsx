import React from "react";
import Counter from "../Counter/Counter";
import "./EmployeeCard.scss";

const EmployeeCard = ({ name, role }) => {

    return (
        <div className="employee">
            <h3 className="employee__name">{name}</h3>
            <h3 className="employee__role">{role}</h3>
            <Counter />
        </div>
    )
}

export default EmployeeCard;