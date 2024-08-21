import React, { useEffect, useState } from 'react'
import { useSupabase } from '../../Providers/SupabaseProvider';
import styles from './getproducts.module.scss'
import { useParams } from 'react-router-dom';

export const GetProducts = () => {

    const [products, setProducts] = useState([])
    const { supabase } = useSupabase()
    const { category } = useParams()
    const [title, setTitle] = useState([])

    const getData = async () => {
        if (supabase) {
            const { data, error } = await supabase
                .from("category_product_rel")
                .select("products(id,title,teaser , images(filename))")
                .eq('category_id', category)
            if (error) {
                console.error("Error Loading News");
            } else {
                console.log(data);
                setProducts(data);
            }
        }
    };

    const getTitle = async () => {
        if (supabase) {
            const {data, error } = await supabase
                .from("categories")
                .select("title")
                .eq('id', category)
                .single()
            if (error) {
                console.error("Error getting title");
            } else {
                setTitle(data.title)
            }
        }
    }

    console.log(title);
    

    useEffect(() => {
        getData();
        getTitle();
    }, [supabase, category]);

    const truncateText = (text, wordLimit) => {
        if (!text) return '';
        const words = text.split(' ');
        if (words.length <= wordLimit) return text;
        return words.slice(0, wordLimit).join(' ') + '...';
    };

  return (
    <div>
        <h2>{title}</h2>
        <div className={styles.productWrapper}>
            {products && 
                products.map((item) => (
                    <section key={item.products.id} className={styles.products}>
                        <img src={item.products.images.filename} alt="" />
                        <div>
                        <h4>{item.products.title}</h4>
                        <p>{truncateText(item.products.teaser, 45)}</p>
                        <button>Læs mere</button>
                        </div>
                    </section>
                ))
            }
        </div>
    </div>
  )
}
