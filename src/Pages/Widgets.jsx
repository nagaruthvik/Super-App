import React, { useState, useEffect } from 'react';
import styles from '../style/widget.module.css';
import Markdown from 'react-markdown';
import Stopwatch from "../components/stopwatch";
import NewPage from '../components/newPage';
import Notepad from '../components/notepad';
import Weather from "../components/weather";
import { marked } from 'marked';
import ReactMarkdown from "react-markdown";
import { useNavigate } from 'react-router-dom';

// Import the image
import profileImg from '../Images/boy.png';

export default function Widgets() {
  const [data, setData] = useState({ name: '', email: '', username: '', selections: [] });
  const [text, setText] = useState("");

  const handleNotpad = (event) => {
    setText(event.target.value);
    localStorage.setItem('notepad', JSON.stringify(text)); 
  };

  var navigate = useNavigate();

  useEffect(() => {
    const storedText = localStorage.getItem('notepad');
    if (storedText) {
      setText(JSON.parse(storedText));
    }
  }, []); 

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('formData')) || {};
    const selection = JSON.parse(localStorage.getItem('selectiondata')) || [];

    setData({ email: items.email, name: items.name, username: items.userName, selections: selection });
  }, []);

  const handleClik = () => {
    navigate("/Movies");
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.subcontainer1}>
          <div className={styles.banner}>
            {/* Use the imported image here */}
            <img src={profileImg} alt="Profile" />
          </div>
          <div className={styles.info}>
            <div className={styles.listData}>
              <p>{data.name}</p>
              <p>{data.email}</p>
              <h2>{data.username}</h2>
            </div>
          </div>
          <div className={styles.selection}>
            <div className={styles.chipscont}>
              {data.selections.map((selection, index) => (
                <div className={styles.chips} key={index}>
                  <h3>{selection.label}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.subcontainer2}>
          <h1>All notes</h1>
          <div className={styles.textbox}>
            <textarea className={styles.notepad} value={text} onChange={handleNotpad} />
          </div>
        </div>

        <div className={styles.subcontainer3}>
          <NewPage />
        </div>

        <div className={styles.subcontainer4}>
          <Weather />
        </div>

        <div className={styles.subcontainer5}>
          <Stopwatch />
        </div>
      </div>

      <div className={styles.button}>
        <button onClick={handleClik}>Click me</button>
      </div>
    </div>
  );
}
