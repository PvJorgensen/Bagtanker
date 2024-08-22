import React, { useEffect, useState } from 'react';
import { useSupabase } from '../../Providers/SupabaseProvider';
import { format } from 'date-fns';
import styles from './getnews.module.scss';

export const GetNews = () => {
  const [news, setNews] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const { supabase } = useSupabase();

  const getData = async () => {
    if (supabase) {
      const { data, error } = await supabase
        .from("news")
        .select("id,title,teaser,content,images(id,filename),created_at");
      if (error) {
        console.error("Error Loading News");
      } else {
        const sortedData = data.sort(() => 0.5 - Math.random());
        setNews(sortedData);
        setSelectedArticle(sortedData[0]);
      }
    }
  };

  useEffect(() => {
    getData();
  }, [supabase]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'dd. MMMM. yyyy:');
  };

  const handleMenuClick = (article) => {
    setSelectedArticle(article);
  };

  return (
    <div className={styles.pageLayout}>
      <div className={styles.newsWrap}>
        {selectedArticle && (
          <div className={styles.newsCont}>
            <section className={styles.headline}>
              <h2>{selectedArticle.title}</h2>
            </section>
            <section className={styles.teaser}>
              <p>{formatDate(selectedArticle.created_at)}</p>
              <p>{selectedArticle.teaser}</p>
            </section>
            <section className={styles.imgContainer}>
              <img src={selectedArticle.images.filename} alt="Article image" />
            </section>
            <article className={styles.textContainer}>
              <p>{selectedArticle.content}</p>
            </article>
          </div>
        )}
      </div>

      <div className={styles.menuWrap}>
        <div className={styles.menuHeader}>Se også...</div>
        {news.map((item) => (
          <div
            key={item.id}
            className={`${styles.menuItem} ${
              selectedArticle && selectedArticle.id === item.id ? styles.active : ''
            }`}
            onClick={() => handleMenuClick(item)}
          >
            <img src={item.images.filename} alt={item.title} />
            <div>
            <p className={styles.menuDate}>{formatDate(item.created_at)}</p>
            <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
