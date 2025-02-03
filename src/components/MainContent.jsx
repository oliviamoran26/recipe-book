import Recipe from './Recipe'

const MainContent = (props) => {
  return (
    <div>
      {props.data.recipes.map((recipes) => (
        <Recipe
          title={recipes.title}
          chef={recipes.chef}
          prepTime={recipes.prepTime}
          cookTime={recipes.cookTime}
          servings={recipes.servingSize}
          ingredients={recipes.ingredients}
          stepOne={recipes.instructions.stepOne}
          stepTwo={recipes.instructions.stepTwo}
          stepThree={recipes.instructions.stepThree}
        />
      ))}
    </div>
  )
}

export default MainContent
