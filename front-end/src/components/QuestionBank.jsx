import React from 'react'
import { Link } from "react-router-dom";
function QuestionBank() {
    return (
        <div>
            <Link>
                <form action="">
                    <label htmlFor="question">Question :</label><br /><br />
                    <textarea name="question" id="question" cols="30" rows="10"></textarea><br /><br />
                    <label htmlFor="ans1">Answer 1 :</label>
                    <input type="text" /><br /><br />
                    <label htmlFor="ans2">Answer 2 :</label>
                    <input type="text" /><br /><br />
                    <label htmlFor="ans3">Answer 3 :</label>
                    <input type="text" /><br /><br />
                    <label htmlFor="correctAns">Correct_Answer :</label>
                    <input type="text" /><br /><br />
                    <label htmlFor="subject">Subject :</label>
                    <select name="subject" id="subjects">
                        <option value="Maths">Maths</option>
                        <option value="English">English</option>
                        <option value="Reasoning">Reasoning</option>
                    </select><br /><br />
                    <button>Question_Submit</button>
                </form>
            </Link>
        </div>
    )
}

export default QuestionBank
