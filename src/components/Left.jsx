const Left = ({ recipe }) => {
  return (
    <div className="left">
      <h2>{recipe.title}</h2>
      <h4>{recipe.chef}</h4>
      <h4>
        Prep time: {recipe.prepTime} minutes | Cook time: {recipe.cookTime}{' '}
        minutes | Yields {recipe.servings} servings
      </h4>
      <h3>Instructions</h3>
      <h4>Step 1: {recipe.instructions.stepOne}</h4>
      <h4>Step 2: {recipe.stepTwo}</h4>
      {recipe.stepThree ? <h4>Step 3: {recipe.stepThree}</h4> : null}
      {recipe.stepFour ? <h4>Step 4: {recipe.stepFour}</h4> : null}
      {recipe.stepFive ? <h4>Step 5: {recipe.stepFive}</h4> : null}
      {recipe.stepSix ? <h4>Step 6: {recipe.stepSix}</h4> : null}
      {recipe.stepSeven ? <h4>Step 7: {recipe.stepSeven}</h4> : null}
      {recipe.stepEight ? <h4>Step 8: {recipe.stepEight}</h4> : null}
      {recipe.stepNine ? <h4>Step 9: {recipe.stepNine}</h4> : null}
    </div>
  )
}

export default Left
