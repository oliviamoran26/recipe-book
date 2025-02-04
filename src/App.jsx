import './App.css'
import data from './recipes.json'
import MainContent from './components/MainContent'

const App = () => {
  return (
    <div className="App">
      <MainContent data={data} />
    </div>
  )
}

export default App
