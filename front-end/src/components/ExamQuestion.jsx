import React from 'react'
import {useState} from 'react'
function ExamQuestion() {
    const dataValue=[
        { question:"who is the PM of India?", ans1:"jsn", ans2:"modi"},
        { question:"who is the CM of Manipur", ans1:"biren", ans2:"erin"}
    ];
    const [mcqQuestion,setMcqQuestion]=useState(dataValue);
    return (
        <div>
            { mcqQuestion.map((q,index)=>{
                return(<div>
                    <p>{index+1}. {q.question}</p>
                    a) <input type="radio" name={index+1} />{q.ans1} <br />
                    b) <input type="radio" name={index+1} />{q.ans2}
                       </div>)
            }
            
            )}
            <button>SUBMIT</button>
        </div>
    )
}

export default ExamQuestion
