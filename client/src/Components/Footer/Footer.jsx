import React from 'react'
import styles from './footer.module.scss'
import { useForm } from "react-hook-form";
import { useSupabase } from '../../Providers/SupabaseProvider';

export const Footer = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { supabase } = useSupabase();

  const onSubmit = async (data) => {
    if (supabase) {
      const { data: supabaseData, error} = await supabase
        .from("newsletter_emails")
        .insert([{
          email: data.Email
        }]);

        if (error) {
          console.error("Error joining newsletter", error);
        } else {
          console.log("Newsletter joined successfully", supabaseData);
        }
    }
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.content}>
      </div>
      <footer className={styles.footerMain}>
        <section>
          <h4>Bagtanker</h4>
          <p>Øster Uttrupvej 1 <br />9000 Aalborg</p>
          <p>Tlf: 12345678 <br />Email: Info@bagtanker.dk</p>
        </section>
        <section>
          <h3>Tilmeld dig Bagtankers nyhedsbrev</h3>
          <p>Få vores nyheder direkte i din indbakke</p>
          <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("Email", { required: true })} placeholder='Email' />
          <button type='submit'>TILMELD</button>
          </form>
        </section>
      </footer>
    </div>
  )
}
