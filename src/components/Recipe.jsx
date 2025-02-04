import Left from './Left.jsx'
import Right from './Right.jsx'

const Recipe = (props) => {
  return (
    <div className="recipeCard">
      <Left recipe={props.recipe} />
      <Right recipe={props.recipe} />
    </div>
  )
}

export default Recipe
