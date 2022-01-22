import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
function QuestionBank() {
    const [questionSet,setQuestionSet]=useState("");
    const [question,setQuestion]=useState("");
    const [answer1,setAnswer1]=useState("");
    const [answer2,setAnswer2]=useState("");
    const [answer3,setAnswer3]=useState("");
    const [correctAnswer,setCorrectAnswer]=useState("");
    useEffect(() => {
        getData();
    },[]);
    let getData=()=>{
      
        fetch('http://localhost:3001/api/questionList')
            .then(
                response => response.json()
            )
            .then(result=> {
                // const res=result.result; //result.result is return from backend
                setQuestionSet(...questionSet,result.result);
            })
            .catch(err=>{
                console.log(err.message);
            })
    }
    const questionSent=(e)=>{
        setQuestion(e.target.value) 
    }
    const Answer1Sent=(e)=>{
        setAnswer1(e.target.value)
    }
    const Answer2Sent=(e)=>{
        setAnswer2(e.target.value)
    }
    const Answer3Sent=(e)=>{
        setAnswer3(e.target.value)
    }
    const correctAnswerSent=(e)=>{
        setCorrectAnswer(e.target.value)
    }
  
    const sentData=(e)=>{
        e.preventDefault(e);
        const dataString={
            question: question,
            ans_1: answer1,
            ans_2: answer2,
            ans_3: answer3,
            correct: correctAnswer
        };
        console.log(dataString);
        axios({
           method: 'post',
            url: 'http://localhost:3001/api/createQuestion',
            data: dataString
             
        })
         .then((response)=>{
             console.log(response)
         });
    }

    return (
        <div className='regCs'>
            <Link to="/questionBank">
                <form id='new'>
                    <label htmlFor="question">Question :</label><br /><br />
                    <textarea onChange={questionSent} name="question" id="question" cols="30" rows="10"></textarea><br /><br />

                    <label htmlFor="ans1">Answer 1 :</label>
                    <input onChange={Answer1Sent} name="answer1" type="text" /><br /><br />

                    <label htmlFor="ans2">Answer 2 :</label>
                    <input onChange={Answer2Sent} name='answer2' type="text" /><br /><br />

                    <label htmlFor="ans3">Answer 3 :</label>
                    <input onChange={Answer3Sent} name='answer3' type="text" /><br /><br />

                    <label htmlFor="correctAns">Correct_Answer :</label>
                    <input onChange={correctAnswerSent} name='correctAnswer' type="text" /><br /><br />
                    
                    <button onClick={sentData} >save</button>
                </form>
                <table className='tableCs'>
                <thead>

                    <tr>
                        <th>question</th>
                        <th>answer1</th>
                        <th>answer2</th>
                        <th>answer3</th>
                        <th>correctAnswer</th>
                       
                    </tr>

                </thead>
                <tbody>
                    {questionSet ? 
                    questionSet.map((data,index) => 
                    (<tr key={index}>
                        <td>{data.question}</td>
                        <td>{data.ans_1}</td>
                        <td>{data.ans_2}</td>
                        <td>{data.ans_3}</td>
                        <td>{data.correct}</td>
                    </tr>
                    ))
                    
                    : 
                            <tr>
                                <td>Empty</td>
                            </tr>
                }
                </tbody>    
            </table>
            </Link>
        </div>
    )
}

export default QuestionBank
