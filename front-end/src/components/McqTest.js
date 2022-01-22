import React from "react";
import { useState,useEffect } from "react";

const McqTest = () => {
    const[mcqList,setMcqList]= useState("");
    const[mcqAns,setmcqAns]=useState("");
    useEffect(() => {
        getData();
    },[]);
    let getData=()=>{
      
        fetch('http://localhost:3001/api/questionList')
            .then(
                response => response.json()
            )
            .then(result=> {
                const res=result.result; //result.result is return from backend
                
                setMcqList(res);
            })
            .catch(err=>{
                console.log(err.message);
            })
    }
    const mload=(e)=>{
        const ansData={[e.target.name]:e.target.value}
        console.log(ansData);
        setmcqAns([...mcqAns,ansData])
        console.log(mcqAns)
    }
    const checkAns=()=>{
        console.log(mcqAns);
    }
    return ( 
        <div className="testlist" >
            <h1 style={{textAlign:"center"}}>GOOD LUCK</h1>
             
            <div >
                <form > {
                    mcqList ?
                        mcqList.map((arr, index) =>
                            <div className="fa" key={index}>
                                
                                <div className="adi"><label>{index+1}. </label>{arr.question}</div>
                                <input type="radio" name={`Q${index+1}`} value='1' onChange={mload} />{arr.ans_1}<br/> 
                                <input type="radio" name={`Q${index+1}`} value='2' onChange={mload} />{arr.ans_2}<br/> 
                                <input type="radio" name={`Q${index+1}`} value='3' onChange={mload} />{arr.ans_3}<br/> <hr />
                            </div>
                        
                        )
                        
                        :
                        <p>No question found</p>
                        
                }
                <button>submit</button>
                </form>
               <button onClick={checkAns}>check answer</button>
            </div>
        

        </div>
       
    );
}
 
export default McqTest;