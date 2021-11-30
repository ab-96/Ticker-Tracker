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
      <EmployeeCard name = {team[0].name}  role = {team[0].role}/>
      <EmployeeCard name = {team[1].name}  role = {team[1].role}/>
      
      
      </section>
    </div>
  );
};

export default App;