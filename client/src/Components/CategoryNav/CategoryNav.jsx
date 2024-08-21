import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './categorynav.module.scss';
import { useSupabase } from '../../Providers/SupabaseProvider';

export const CategoryNav = () => {
  const [category, setCategory] = useState([]);
  const { supabase } = useSupabase();
  const location = useLocation();  // Brug location til at få den aktuelle sti

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
              <li
                key={item.id}
                className={location.pathname === `/Products/${item.id}` ? styles.active : ''}
              >
                <NavLink
                  to={`/Products/${item.id}`}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
        </ul>
      </nav>
    </>
  );
}
