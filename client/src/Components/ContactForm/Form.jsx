import React, { useState } from 'react';
import styles from './form.module.scss';
import map from '../../assets/Images/map/map.png';
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useSupabase } from '../../Providers/SupabaseProvider';

export const Form = () => {
// Importerer hooks fra react-hook-form til at håndtere formularer og validering
const { register, handleSubmit, formState: { errors } } = useForm();
// - register: Registrerer inputfelter med react-hook-form for at spore deres værdier og validering.
// - handleSubmit: Håndterer formularens indsendelse og validering. Kalder onSubmit, hvis valideringen er succesfuld.
// - errors: Indeholder valideringsfejl for inputfelterne.

const { supabase } = useSupabase();
// Henter Supabase-klienten fra useSupabase hook. Denne klient bruges til at kommunikere med Supabase-databasen.

const onSubmit = async (data) => {
  // Definerer asynkron onSubmit-funktion, der kaldes, når formularen indsendes og valideres.
  if (supabase) {
    // Tjekker, om Supabase-klienten er tilgængelig.
    
    // Indsætter data fra formularen i "messages"-tabellen i Supabase-databasen.
    const { data: supabaseData, error } = await supabase
      .from("messages")
      .insert([{
        name: data.Fornavn, // Bruger værdien fra "Fornavn" feltet i formularen til "name" kolonnen i databasen.
        email: data.Email, // Bruger værdien fra "Email" feltet i formularen til "email" kolonnen i databasen.
        message: data.Message // Bruger værdien fra "Message" feltet i formularen til "message" kolonnen i databasen.
      }]);

    if (error) {
      console.error("Error sending message", error);
    } else {
      console.log("Message sent successfully", supabaseData);
    }
  }
};

return (
  <>
    <h2>Kontakt os</h2>
    {/* Viser overskriften "Kontakt os". */}
    <div className={styles.formWrapper}>
      <section className={styles.formBox}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Håndterer formularens indsendelse med handleSubmit og kalder onSubmit ved succes. */}
          
          <input {...register("Fornavn", { required: true })} placeholder="Fornavn" />
          {/* Input-felt til fornavn. Registreres med react-hook-form og er påkrævet. */}
          {errors.Fornavn && <span>This field is required</span>}
          {/* Viser fejlmeddelelse, hvis "Fornavn" ikke er udfyldt. */}

          <input {...register("Email", { required: true })} placeholder="Email" />
          {/* Input-felt til email. Registreres med react-hook-form og er påkrævet. */}
          {errors.Email && <span>This field is required</span>}
          {/* Viser fejlmeddelelse, hvis "Email" ikke er udfyldt. */}

          <textarea {...register("Message", { required: true })} placeholder="Besked" />
          {/* Tekstområde til besked. Registreres med react-hook-form og er påkrævet. */}
          {errors.Message && <span>This field is required</span>}
          {/* Viser fejlmeddelelse, hvis "Message" ikke er udfyldt. */}
          <div className={styles.btnContainer}>
          <button type="submit">Send</button>
          </div>
        </form>
      </section>
      <section className={styles.imgContainer}>
        <NavLink to="https://www.google.com/maps/place/%C3%98ster+Uttrup+Vej+1,+9000+Aalborg/@57.0479261,9.9648879,17z/data=!3m1!4b1!4m6!3m5!1s0x464932b6a2b7696b:0x861634f2bf524040!8m2!3d57.0479232!4d9.9674628!16s%2Fg%2F11cpl6g6xw?entry=ttu">
          <img src={map} alt="Google Maps link" />
        </NavLink>
      </section>
    </div>
  </>
);
}
