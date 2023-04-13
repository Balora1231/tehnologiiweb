import './App.css';

import RecipeReviewCard from "./componets/card";
import ButtonBase from "./componets/button";
import CountrySelect from "./componets/numberinput";
import Asynchronous from "./componets/cardlist2";
import DisabledOptions from "./componets/cardlist3";
import TodoList from "./componets/toDoList";

function App() {
  return (
      <div>

      <div className='items'>
      <div>
   <h1 className='items'>Menu</h1>
      </div>
      <div className="menu">
          <div className="border">
<RecipeReviewCard />
      </div>
          <div className="border">
<RecipeReviewCard/>
      </div>
          <div className="border">
              <RecipeReviewCard/>
          </div>
          <div className="border">
              <RecipeReviewCard/>
          </div>
          <div className="border">
              <RecipeReviewCard/>
          </div>
      </div>
          <div className="numberalign">
              <div className='inputaligns'>
                  <CountrySelect />
              </div>
              <div className='inputaligns'>
                  <Asynchronous/>
              </div>
              <div className='inputaligns'>
                  <DisabledOptions/>
              </div>
              <div className="inputaligns">
                  <ButtonBase/>
              </div>
      </div>
          </div>
          <div>
            <TodoList/>
          </div>
      </div>

          );
}

export default App;
