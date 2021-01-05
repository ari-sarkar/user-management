import "./App.scss";
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import DisplayUsersInformation from "./Components/DisplayUsersInformation";
function App() {
  return (
    <main className="App">
      <Header />
      <Navigation />
      <DisplayUsersInformation />
    </main>
  );
}

export default App;
