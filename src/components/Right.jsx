const Right = ({ recipe }) => {
  return (
    <div className="right">
      <h3>Ingredients: </h3>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
    </div>
  )
}

export default Right
