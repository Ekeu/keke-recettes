import GridContainer from '../grid-container/grid-container.component';
import CardRecipe from '../cards/card-recipe.component';
import CardListRecipe from '../cards/card-recipe-simple.component';

const RecipesDisplay = ({ data, filter }) => {
  return filter.view.list ? (
    <GridContainer className='gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12'>
      {data.map((page) =>
        page.map((recipe) => (
          <CardListRecipe key={recipe._id} recipe={recipe} />
        ))
      )}
    </GridContainer>
  ) : (
    <GridContainer className='max-w-lg mx-auto gap-5 lg:grid-cols-3 lg:max-w-none'>
      {data.map((page) =>
        page.map((recipe) => <CardRecipe key={recipe._id} recipe={recipe} />)
      )}
    </GridContainer>
  );
};

export default RecipesDisplay;
