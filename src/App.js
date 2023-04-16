import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import RecipeReviewCard from "./componets/card";
import ButtonBase from "./componets/button";
import CountrySelect from "./componets/numberinput";
import Asynchronous from "./componets/cardlist2";
import DisabledOptions from "./componets/cardlist3";
import TodoList from "./componets/toDoList";
import FullScreenLoginModal from "./componets/login";
import MenuApi from "./componets/ApiMenut";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <FullScreenLoginModal/>
            </div>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/books">Books</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={
                    <div className='items'>

                        <div>
                            <TodoList/>
                        </div>
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
                }/>

                <Route path="/books" element={<MenuApi/>} />

            </Routes>

        </div>
        </Router>
    );
}

export default App;
