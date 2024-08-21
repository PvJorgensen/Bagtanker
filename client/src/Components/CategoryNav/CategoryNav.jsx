import React, { useEffect, useState } from 'react'
import styles from './categorynav.module.scss'
import { NavLink } from 'react-router-dom'
import { useSupabase } from '../../Providers/SupabaseProvider'

export const CategoryNav = () => {
  const [category, setCategory] = useState()
  const { supabase } = useSupabase()

  const getData = async () => {
    if (supabase) {
        const { data, error } = await supabase
            .from("categories")
            .select("id,title,active");
        if (error) {
            console.error("Error Loading Categories");
        } else {
            setCategory(data);
        }
    }
};

useEffect(() => {
    getData();
}, [supabase]);
  return (
    <>
      <nav className={styles.navMain}>
        <ul>
          {category &&
              category.map((item) => (
                
                  <li key={item.id}><NavLink to={`/Products/${item.id}`}>{item.title}</NavLink></li>
               
              ))
          }
        </ul>
      </nav>
    </>
  )
}
