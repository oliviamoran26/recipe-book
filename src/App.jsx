import './App.css'
import data from './recipes.json'
import MainContent from './components/MainContent'

const App = () => {
  return (
    <div className="App">
      <h1>Recipe Book</h1>
      <MainContent data={data} />
    </div>
  )
}

export default App
