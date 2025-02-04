import Recipe from './Recipe'

const MainContent = (props) => {
  return (
    <div className="main-content">
      {props.data.recipes.map((recipe) => (
        <Recipe recipe={recipe} />
      ))}
    </div>
  )
}

export default MainContent
