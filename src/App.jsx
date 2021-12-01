// App.jsx
import "./App.scss";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import team from "./data/team";

const App = () => {

    return (
        <div className="app">
            <header className="greeting">
                <h1 className="greeting__heading">Ticket Tracker</h1>
            </header>
            <section className="wrapper">
                {team.map(employee => {
                    return <EmployeeCard name={employee.name} role={employee.role} />
                })}

            </section>
        </div>
    );
};

export default App;