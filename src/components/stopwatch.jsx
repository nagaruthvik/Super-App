import { useState, useEffect, useRef } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import styles from '../style/widget.module.css';

const Stopwatch = () => {
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [circletime, setCricleTime] = useState({ hr: 0, min: 0, sec: 0 });

  // Update circletime when time changes
  useEffect(() => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;


    if(time == 0){
      
      setCricleTime({ hr: 0, min: 0, sec: 0 });
    }
    setCricleTime({ hr: hours, min: minutes, sec: seconds });
    
  }, [time]);
  function handleButton(value) {
    setTime((prevTime) => {
      const newTime = prevTime + value;
      if (newTime >= 0) {
        return newTime;
      } else {
        alert('Time cannot be less than 0');
        return prevTime;
      }
    });
  }
  function handlePlaybtn(){
    setPlaying(!playing)
    
  }

  function formatTime(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  return (
    <div className={styles.timemain} style={{color:"white"}}>
      <div className={styles.timecircle}>
        <CountdownCircleTimer
          isPlaying={playing}
          duration={time}
          
          colors={['#FF6A6A']}
        >
          {({ remainingTime }) => formatTime(remainingTime)}
        </CountdownCircleTimer>
      </div>
      <div className={styles.timebuttons}>
        <div className={styles.names}>
          <h3>Hours</h3>
          <h3>Minutes</h3>
          <h3>Seconds</h3>
        </div>
        <div className={styles.timeholder}>
          <div className={styles.hrs}>
            <button onClick={() => handleButton(+3600)}>▲</button>
            <h5 style={{color:'white', fontSize:"1.5rem",fontWeight:"lighter"}}>{circletime.hr}</h5>
            <button onClick={() => handleButton(-3600)}>▼</button>
          </div>
          <div className={styles.min}>
            <button onClick={() => handleButton(+60)}>▲</button>
            <h5  style={{color:'white', fontSize:"1.5rem" ,fontWeight:"lighter"}}>{circletime.min}</h5>
            <button onClick={() => handleButton(-60)}>▼</button>
          </div>
          <div className={styles.sec}>
            <button onClick={() => handleButton(+1)}>▲</button>
            <h5 style={{color:'white',fontSize:"1.5rem",fontWeight:"lighter"}}>{circletime.sec}</h5>
            <button onClick={() => handleButton(-1)}>▼</button>
          </div>
        </div>

        <div className={styles.playbtn}>
          <button onClick={() =>handlePlaybtn()}>
            {playing ? <h4>pause</h4> : <h4>play</h4>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
