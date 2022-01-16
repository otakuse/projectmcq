import React from 'react'
import Registration from './components/Registration'
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";         
import Home from './components/Home';
import QuestionBank from './components/QuestionBank';
import './index.css'
import ExamQuestion from './components/ExamQuestion';
import Admin from './Admin';

function App() {
    return (
        <div className='container'>
            <nav>
                <h1>MCQ EXAM AUTHORITY</h1>
                {/* <ExamQuestion/> */}
            </nav>
            <marquee>ONGOING ONLINE EXAMINATION 2022...</marquee>
            <div className='optionBody'>
                <Router>
                    <Switch>
                        <Route exact path="/">
                                <Home/>
                        </Route>
                        <Route exact path="/admin">
                            <Admin/>
                        </Route>
                        <Route exact path ="/registration">
                                <Registration/>
                        </Route>

                        <Route exact path="/questionBank">
                                <QuestionBank/>
                        </Route>

                    </Switch>
                </Router>
            </div>
        </div>
    )
}

export default App
