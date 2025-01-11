import React, { useEffect, useState } from 'react'
import getNews from '../Services'
import styles from '../style/widget.module.css';

export default function NewPage() {
    const [news,setNews] = useState([])
    var random = Math.floor(Math.random()*20) + 1

    useEffect(() => {
        getNews().then((res) => setNews(res[random]));
      }, []);

  return (
    <div className={styles.newsmain} style={{background :"white"}}>

        <div className={styles.newsimg}>
            <img src={news.urlToImage} alt="no image" />
            <h5>{news.title}</h5>
        </div>
        <div className={styles.newsdesc}>
            <p>{news.description}</p>
            <p>{news.content}</p>
        </div>
    

    </div>
  )
}
