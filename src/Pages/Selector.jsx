import React, { useState } from 'react'
import styles from '../style/selector.module.css'
import { useNavigate } from 'react-router-dom';

export default function Selector() {
    var navigate = useNavigate()
    var movieArr = [
        {
            id : 1,
            label: "Action",
            img : <img src='src/Images/image 2.png'></img>,
            bgc: "#FF5209"

        },
        {
            id : 2,
            label: "drama",
            img : <img src='src/Images/image 3.png'></img>,
            bgc: "#D7A4FF"

        },
        {
            id :3,
            label:"Romance",
            img : <img src='src/Images/image 4.png'></img>,
            bgc: "#11B800"
        },
        {
            id : 4,
            label:"Thriller",
            img : <img src='src/Images/image 6.png'></img>,
            bgc: "#84C2FF"
        },
        {
            id : 5,
            label :"Western",
            img : <img src='src/Images/image 7.png'/>,
            bgc: "#902500"
        },
        {
            id : 6,
            label : "Horror",
            img : <img src='src/Images/image 8.png'></img>,
            bgc: "#7358FF"
        },
        {
            id : 7,
            label : "Fantasy",
            img : <img src='src/Images/image 9.png'></img>,
            bgc:"#FF4ADE"
        },
        {
            id:8,
            label : "Music",
            img : <img src='src/Images/image 10.png'></img>,
            bgc : "#E61E32"
        },
        {
            id:9,
            label : "Fiction",
            img : <img src='src/Images/image 11.png'></img>,
            bgc : "#6CD061 "
        }
    ]

    const [arr,setArr] = useState([])
    const [error,setError] = useState(false)
    var handleClick =(item)=>{
        if(arr.some((arrItem) => arrItem.id === item.id)){
            setArr(arr.filter((arr)=>arr.id != item.id ))
        }
        else{
            setArr([...arr,{id : item.id, label : item.label}])   
        }
    }
    var handleButton = ()=>{
        
        if(listlength < 3){
            setError(true)
        }
        else{
            setError(false)
            localStorage.setItem("selectiondata", JSON.stringify(arr));
            navigate("/widgets")
        }
    }
    var listlength = arr.length
  return (
    <div className={styles.container}>
        <div className={styles.innerdiv1}>
            <div  className={styles.bigCard}>
                <h1>super app</h1>
                <h2>Choose your entertainment category</h2>
                <div className={styles.chips}>
                    {arr.map((item)=>  (
                     <div className={styles.chip} ><h6>{item.label}</h6><span onClick={()=>handleClick(item)}>X</span></div>
                    ))}
                </div>
                {error && <p style={{color:"red"}}>Minimum 3 category required</p>}
            </div>
        </div>
        <div className={styles.innerdiv2}>
            <div className={styles.cardsHolder}>
            {movieArr.map((item,index)=>
            <div onClick={()=>handleClick(item)} className={styles.card} style={{ border: arr.some((arritem)=>item.id === arritem.id) ? "3px solid lightgreen" : "2px solid black", backgroundColor : item.bgc }}>
                <h2 style={{color:"white"}}>{item.label}</h2>{ item.img}
                
            </div>
            )
            }
            </div>

            <input onClick={()=>handleButton()} className={styles.button} type="submit" value="NEXT" />
            
        </div>
    </div>
  )
}
