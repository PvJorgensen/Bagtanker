import React, { useEffect, useState } from 'react';
import { useSupabase } from '../../Providers/SupabaseProvider';
import styles from './getproducts.module.scss';
import { useParams } from 'react-router-dom';

export const GetProducts = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null); // To keep track of the selected product
    const { supabase } = useSupabase();
    const { category = '1fc2c7e5-33b8-11ef-a9aa-001dd8b71d59' } = useParams();
    const [title, setTitle] = useState([]);

    const getData = async () => {
        if (supabase) {
            const { data, error } = await supabase
                .from("category_product_rel")
                .select("products(id,title,teaser,description,images(filename))")
                .eq('category_id', category);
            if (error) {
                console.error("Error Loading products");
            } else {
                setProducts(data);
            }
        }
    };

    const getTitle = async () => {
        if (supabase) {
            const { data, error } = await supabase
                .from("categories")
                .select("title")
                .eq('id', category)
                .single();
            if (error) {
                console.error("Error getting title");
            } else {
                setTitle(data.title);
            }
        }
    };

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

    const openModal = (product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
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
                                <p>{truncateText(item.products.teaser, 27)}</p>
                                <button onClick={() => openModal(item.products)}>Læs mere</button>
                            </div>
                        </section>
                    ))}
            </div>

            {/* Modal */}
            {selectedProduct && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={closeModal}>X</button>
                        <div className={styles.modalContent}>
                            <h2>{selectedProduct.title}</h2>
                            <section>
                            <img src={selectedProduct.images.filename} alt={selectedProduct.title} />
                            
                            </section>
                            <p>Fremgangsmåde:</p>
                            <p>{selectedProduct.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
