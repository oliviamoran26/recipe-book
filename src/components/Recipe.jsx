const Recipe = (props) => {
  return (
    <div className="main">
      <h2>{props.title}</h2>
      <h4>{props.chef}</h4>
      <h4>
        Prep time: {props.prepTime} minutes | Cook time: {props.cookTime}{' '}
        minutes | Yields {props.servings} servings
      </h4>
      <h3>Ingredients: </h3>
      <ul>
        {props.ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <h4>Step 1: {props.stepOne}</h4>
      <h4>Step 2: {props.stepTwo}</h4>
      {props.stepThree ? <h4>Step 3: {props.stepThree}</h4> : null}
      {props.stepFour ? <h4>Step 4: {props.stepFour}</h4> : null}
      {props.stepFive ? <h4>Step 5: {props.stepFive}</h4> : null}
      {props.stepSix ? <h4>Step 6: {props.stepSix}</h4> : null}
      {props.stepSeven ? <h4>Step 7: {props.stepSeven}</h4> : null}
      {props.stepEight ? <h4>Step 8: {props.stepEight}</h4> : null}
      {props.stepNine ? <h4>Step 9: {props.stepNine}</h4> : null}
    </div>
  )
}

export default Recipe
