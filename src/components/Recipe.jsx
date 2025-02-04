const Recipe = (props) => {
  return (
    <div className="main">
      <h2>{props.title}</h2>
      <h4>{props.chef}</h4>
      <h4>Prep time: {props.prepTime} minutes</h4>
      <h4>Cook time: {props.cookTime} minutes</h4>
      <h4>Yields {props.servings} servings</h4>
      <h3>Ingredients: </h3>
      <ul>
        {props.ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <h3>Step 1: {props.stepOne}</h3>
      <h3>Step 2: {props.stepTwo}</h3>
      {props.stepFour ? <h3>Step 4: {props.stepFour}</h3> : null}
      {props.stepFive ? <h3>Step 5: {props.stepFive}</h3> : null}
      {props.stepThree ? <h3>Step 3: {props.stepThree}</h3> : null}
      {props.stepSix ? <h3>Step 6: {props.stepSix}</h3> : null}
      {props.stepSeven ? <h3>Step 7: {props.stepSeven}</h3> : null}
      {props.stepEight ? <h3>Step 8: {props.stepEight}</h3> : null}
      {props.stepNine ? <h3>Step 9: {props.stepNine}</h3> : null}
    </div>
  )
}

export default Recipe
