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
          stepFour={recipes.instructions.stepFour}
          stepFive={recipes.instructions.stepFive}
          stepSix={recipes.instructions.stepSix}
          stepSeven={recipes.instructions.stepSeven}
          stepEight={recipes.instructions.stepEight}
        />
      ))}
    </div>
  )
}

export default MainContent
