import React, { useEffect, useState } from 'react'
import { useSupabase } from '../../Providers/SupabaseProvider';
import styles from './getproducts.module.scss'

export const GetProducts = () => {

    const [products, setProducts] = useState([])
    const { supabase } = useSupabase()

    const getData = async () => {
        if (supabase) {
            const { data, error } = await supabase
                .from("products")
                .select("id,images(id,filename),title,teaser,description,duration,amount,price");
            if (error) {
                console.error("Error Loading News");
            } else {
                const sortedData = data.sort(() => 0.5 - Math.random());
                setProducts(sortedData);
            }
        }
    };

    useEffect(() => {
        getData();
    }, [supabase]);

    const truncateText = (text, wordLimit) => {
        if (!text) return '';
        const words = text.split(' ');
        if (words.length <= wordLimit) return text;
        return words.slice(0, wordLimit).join(' ') + '...';
    };

  return (
    <div>
        <div className={styles.productWrapper}>
            {products &&
                products.slice(0, 4).map((item) => (
                    <section key={item.id} className={styles.products}>
                        <img src={item.images.filename} alt="" />
                        <div>
                        <h4>{item.title}</h4>
                        <p>{truncateText(item.teaser, 45)}</p>
                        <button>Læs mere</button>
                        </div>
                    </section>
                ))
            }
        </div>
    </div>
  )
}
