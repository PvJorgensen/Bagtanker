import React, { useEffect, useState } from 'react';
import { useSupabase } from '../../Providers/SupabaseProvider';
import { format } from 'date-fns';
import styles from './frontnews.module.scss';


const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'dd. MMMM. yyyy:');
};

const truncateText = (text, wordLimit) => {
    if (!text) return '';
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
};

export const FrontNews = () => {
    const [news, setNews] = useState([]);
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
            }
        }
    };

    useEffect(() => {
        getData();
    }, [supabase]);

    return (
        <div className={styles.newsWrapper}>
            <h2>Nyheder</h2>
            <div className={styles.newsContainer}>
                {news &&
                    news.slice(0, 3).map((item) => (
                        <section key={item.id} className={styles.articles}>
                            <img src={item.images.filename} alt="Article image" />
                            <article>
                                <p>{formatDate(item.created_at)}</p>
                                <h5>{item.title}</h5>
                                <p>{truncateText(item.teaser, 45)}</p>
                            </article>
                        </section>
                    ))}
            </div>
        </div>
    );
};