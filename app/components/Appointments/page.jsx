'use client'

import Image from 'next/image';
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from 'styles/Appointments.module.css'

const Appointment = () => {
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

        const response = await fetch("/api/SessionForm", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        if (response.ok) {
            setLoading(false);
            toast.success('Petición enviada. Nos contactaremos en la brevedad!', {
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
            toast.error('Error al solicitar cita. Intenta más tarde.', {
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
                <h1>Agendar Cita</h1>
                <h3>Una vez hecha la reserva, le contactaremos y le daremos las opciones de horarios disponibles.</h3>
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
                        <label htmlFor="message">Detalles de la Reserva</label>
                        <textarea placeholder="Escriba aquí el tipo de terapia que busca. También si padece de alguna dolencia, lesión o cualquier dato que considere relevante" id="message" rows="6" name="message" />
                    </div>
                    <div className={styles.blockBttn}>
                        <button disabled={loading} type="submit">
                            Enviar
                        </button>
                    </div>
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
                        <span>Puedes contactar directamente a nuestro Whatsapp y hacer tu reserva mandando un mensaje al +598 98 709 897<hr /></span>
                    </div>
                    <ToastContainer />
                </form>
            </section>
        </>
    )
}

export default Appointment