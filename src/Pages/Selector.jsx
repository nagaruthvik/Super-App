import React, { useState } from 'react';
import styles from '../style/selector.module.css';
import { useNavigate } from 'react-router-dom';


import img2 from '../Images/image 2.png';
import img3 from '../Images/image 3.png';
import img4 from '../Images/image 4.png';
import img6 from '../Images/image 6.png';
import img7 from '../Images/image 7.png';
import img8 from '../Images/image 8.png';
import img9 from '../Images/image 9.png';
import img10 from '../Images/image 10.png';
import img11 from '../Images/image 11.png';

export default function Selector() {
    var navigate = useNavigate();
    

    var movieArr = [
        {
            id: 1,
            label: "Action",
            img: <img src={img2} alt="Action" />,
            bgc: "#FF5209"
        },
        {
            id: 2,
            label: "Drama",
            img: <img src={img3} alt="Drama" />,
            bgc: "#D7A4FF"
        },
        {
            id: 3,
            label: "Romance",
            img: <img src={img4} alt="Romance" />,
            bgc: "#11B800"
        },
        {
            id: 4,
            label: "Thriller",
            img: <img src={img6} alt="Thriller" />,
            bgc: "#84C2FF"
        },
        {
            id: 5,
            label: "Western",
            img: <img src={img7} alt="Western" />,
            bgc: "#902500"
        },
        {
            id: 6,
            label: "Horror",
            img: <img src={img8} alt="Horror" />,
            bgc: "#7358FF"
        },
        {
            id: 7,
            label: "Fantasy",
            img: <img src={img9} alt="Fantasy" />,
            bgc: "#FF4ADE"
        },
        {
            id: 8,
            label: "Music",
            img: <img src={img10} alt="Music" />,
            bgc: "#E61E32"
        },
        {
            id: 9,
            label: "Fiction",
            img: <img src={img11} alt="Fiction" />,
            bgc: "#6CD061"
        }
    ];

    const [arr, setArr] = useState([]);
    const [error, setError] = useState(false);

    var handleClick = (item) => {
        if (arr.some((arrItem) => arrItem.id === item.id)) {
            setArr(arr.filter((arr) => arr.id !== item.id));
        } else {
            setArr([...arr, { id: item.id, label: item.label }]);
        }
    };

    var handleButton = () => {
        if (arr.length < 3) {
            setError(true);
        } else {
            setError(false);
            localStorage.setItem("selectiondata", JSON.stringify(arr));
            navigate("/widgets");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.innerdiv1}>
                <div className={styles.bigCard}>
                    <h1>Super App</h1>
                    <h2>Choose your entertainment category</h2>
                    <div className={styles.chips}>
                        {arr.map((item) => (
                            <div className={styles.chip}>
                                <h6>{item.label}</h6>
                                <span onClick={() => handleClick(item)}>X</span>
                            </div>
                        ))}
                    </div>
                    {error && <p style={{ color: "red" }}>Minimum 3 categories required</p>}
                </div>
            </div>
            <div className={styles.innerdiv2}>
                <div className={styles.cardsHolder}>
                    {movieArr.map((item) => (
                        <div
                            onClick={() => handleClick(item)}
                            className={styles.card}
                            style={{
                                border: arr.some((arrItem) => item.id === arrItem.id)
                                    ? "3px solid lightgreen"
                                    : "2px solid black",
                                backgroundColor: item.bgc
                            }}
                        >
                            <h2 style={{ color: "white" }}>{item.label}</h2>
                            {item.img}
                        </div>
                    ))}
                </div>

                <input onClick={() => handleButton()} className={styles.button} type="submit" value="NEXT" />
            </div>
        </div>
    );
}
