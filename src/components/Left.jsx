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
      <h4>Step 2: {recipe.instructions.stepTwo}</h4>
      {recipe.instructions.stepThree ? (
        <h4>Step 3: {recipe.instructions.stepThree}</h4>
      ) : null}
      {recipe.instructions.stepFour ? (
        <h4>Step 4: {recipe.instructions.stepFour}</h4>
      ) : null}
      {recipe.instructions.stepFive ? (
        <h4>Step 5: {recipe.instructions.stepFive}</h4>
      ) : null}
      {recipe.instructions.stepSix ? (
        <h4>Step 6: {recipe.instructions.stepSix}</h4>
      ) : null}
      {recipe.instructions.stepSeven ? (
        <h4>Step 7: {recipe.instructions.stepSeven}</h4>
      ) : null}
      {recipe.instructions.stepEight ? (
        <h4>Step 8: {recipe.instructions.stepEight}</h4>
      ) : null}
      {recipe.instructions.stepNine ? (
        <h4>Step 9: {recipe.instructions.stepNine}</h4>
      ) : null}
    </div>
  )
}

export default Left
