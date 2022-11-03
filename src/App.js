import './App.css'
import Search from "./components/search/search"
import Current from "./components/current/current";

function App() {
    const handleOnSearchChange = (searchData) => {
        console.log(searchData)
    }

    return (
        <div className="App">
            <Search onSearchChange={handleOnSearchChange}/>
            <Current/>
        </div>
    )
}

export default App