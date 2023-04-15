'use client'

import Image from 'next/image';
import { useState } from 'react'
import styles from 'styles/Contact.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = () => {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true)

    const data = {
      first: String(e.target.first.value),
      last: String(e.target.last.value),
      email: String(e.target.email.value),
      phone: String(e.target.phone.value),
      message: String(e.target.message.value),
    }

    const response = await fetch("/api/ContactForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      setLoading(false);
      toast.success('Mensaje enviado. Nos contactaremos en la brevedad!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
      e.target.email.value = ''
      e.target.phone.value = ''
      e.target.first.value = ''
      e.target.last.value = ''
      e.target.message.value = ''
    } else {
      setLoading(false);
      toast.error('Error al mandar mensaje. Intenta más tarde.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }
  }

  return (
    <>
      <div className={styles.title}>
        <h1>Contacto</h1>
      </div>
      <section className={styles.formContainer}>
        <form className={styles.container} onSubmit={handleSubmit}>
          <div className={styles.block}>
            <label htmlFor="email">Correo</label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="off"
              required
            />
          </div>
          <div className={styles.block}>
            <label htmlFor="phone">Teléfono</label>
            <input
              id="phone"
              type="text"
              name="phone"
              autoComplete="off"
              required
            />
          </div>
          <div className={styles.name}>
            <div >
              <label htmlFor="first">Nombre</label>
              <input
                id="first"
                type="text"
                name="first"
                autoComplete="off"
                required
              />
            </div>
            <div>
              <label htmlFor="last">Apellido</label>
              <input
                id="last"
                type="text"
                name="last"
                autoComplete="off"
                required
              />
            </div>
          </div>
          <div className={styles.block}>
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" rows="6" name="message"></textarea>
          </div>
          <div className={styles.blockBttn}>
            <button disabled={loading} type="submit">
              Enviar
            </button>
          </div>
          <ToastContainer />
        </form>
      </section>

      <section className={styles.contactInfo}>
        <div className={styles.contactContent}>
          <p>
            <Image
              src="/telefono.png"
              alt="Teléfono Logo"
              width={20}
              height={20}
            />
            Teléfono
          </p>
          <span>Puedes contactar directamente a nuestro Whatsapp mandando un mensaje al +598 98 709 897<hr /></span>
        </div>
        <div className={styles.contactContent}>
          <p>
            <Image
              src="/location.png"
              alt="Dirección Logo"
              width={20}
              height={20}
            />
            Dirección
          </p>
          <span>Nos encontramos en Eduardo Rivero 631, Ombues de Lavalle, Colonia, Uruguay.<hr /></span>
        </div>
        <div className={styles.contactContent}>
          <p>
            <Image
              src="/hora.png"
              alt="Reloj Logo"
              width={20}
              height={20}
            />
            Horario
          </p>
          <span>De Lunes a Viernes, de 08:00 a 21:00 horas. Consultar por disponibilidad horaria.<hr /></span>
        </div>
        <div className={styles.contactContent}>
          <p>
            <Image
              src="/email.png"
              alt="Email Logo"
              width={20}
              height={20}
            />
            Email
          </p>
          <span>Puedes contactar directamente a nuestro correo mandando un mensaje a saludyarmoniaas@gmail.com<hr /></span>
        </div>
      </section>
    </>
  )
}


export default ContactPage