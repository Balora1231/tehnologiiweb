import './App.css';

import RecipeReviewCard from "./componets/card";

import ButtonBase from "./componets/button";
import CountrySelect from "./componets/numberinput";
import Asynchronous from "./componets/cardlist2";
import DisabledOptions from "./componets/cardlist3";
function App() {
  return (
      <div class='items'>
      <div>
   <h1 class='items'>Menu</h1>
      </div>
      <div class="menu">
          <div class="border">
<RecipeReviewCard />
      </div>
          <div class="border">
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
          <div class="numberalign">
              <div class='inputaligns'>
                  <CountrySelect />
              </div>
              <div class='inputaligns'>
                  <Asynchronous/>
              </div>
              <div class='inputaligns'>
                  <DisabledOptions/>
              </div>
              <div class="inputaligns">
                  <ButtonBase/>
              </div>
      </div>
          </div>



  );
}

export default App;
