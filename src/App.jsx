// App.jsx
import "./App.scss";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import Counter from "./components/Counter/Counter";
import team from "./data/team";


const App = () => {

    return (
        <div className="app">
            <header className="greeting">
                <h1 className="greeting__heading">Ticket Tracker</h1>
            </header>
            <section className="wrapper">
                {team.map((employee, index)  => { 
              
                    return <EmployeeCard key={employee, index}  name={employee.name} role={employee.role} />
                })}

            </section>
        </div>
    );
};

export default App;

