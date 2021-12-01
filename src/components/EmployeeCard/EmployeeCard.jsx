import React from "react";
import "./EmployeeCard.scss";

const EmployeeCard = (props) => {
    const { name, role } = props;
    console.log(name)

    return (
        <div className="employee">
            <h3 className="employee__name">{name}</h3>
            <h3 className="employee__role">{role}</h3>
            <div className="counter">
                <h3 className="counter__title">Counter</h3>
                <h3 className="counter__score">0</h3>
            </div>
        </div>
    )
}

export default EmployeeCard;