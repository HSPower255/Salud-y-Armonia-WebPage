import styles from 'styles/Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

const fastTravelLinks = [{
    label: 'Inicio',
    route: '/',
}, {
    label: 'Sobre Nosotros',
    route: '/components/AboutUs',
}, {
    label: 'Tratamientos',
    route: '/components/Treatments'
}, {
    label: 'Contacto',
    route: '/components/Contact',
}, {
    label: 'Agendar Cita',
    route: '/components/Appointments'
}]

const servicesLinks = [{
    label: 'Masajes terapéuticos',
    route: '/components/Therapies/MasajesTerapeuticos',
}, {
    label: 'Reiki',
    route: '/components/Therapies/Reiki',
}, {
    label: 'Drenaje linfático',
    route: '/components/Therapies/DrenajeLinfatico'
}, {
    label: 'Reflexología podal',
    route: '/components/Therapies/ReflexologiaPodal',
}, {
    label: 'Quiropraxia',
    route: '/components/Therapies/Quiropraxia',
}, {
    label: 'Piedras Calientes',
    route: '/components/Therapies/PiedrasCalientes',
},]

const Footer = () => {
    return (
        <div className={styles.footerBody}>
            <footer className={styles.footerContainer}>
                {/*Main Footer */}
                <section className={styles.footerMain}>
                    <div className={styles.footerMainItem}>
                        <h2 className={styles.footerTitle}>Viaje rápido</h2>
                        <ul className={styles.navLinks}>
                            {fastTravelLinks.map(({ label, route }) => (
                                <li key={route}>
                                    <Link className={styles.link} href={route}>
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.footerMainItem}>
                        <h2 className={styles.footerTitle}>Servicios</h2>
                        <ul className={styles.servicesLinks}>
                            {servicesLinks.map(({ label, route }) => (
                                <li key={route}>
                                    <Link className={styles.link} href={route}>
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.footerMainItem}>
                        <Image className={styles.logo}
                            src="/logo.png"
                            alt="Logo"
                            width={100}
                            height={100}
                        />
                        <br />
                        <p className={styles.description}>
                            Salud y Armonía.
                            <br />
                            Adriana Sosa
                        </p>
                    </div>
                    <div className={styles.footerMainItem}>
                        <iframe width="350" height="300" src="https://maps.google.com/maps?width=550&amp;height=300&amp;hl=en&amp;q=Eduardo%20Rivero%20631%20Omb%C3%BAes%20de%20Lavalle+(Consultorio)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
                    </div>
                </section>
                {/*Social Footer */}
                <section className={styles.footerSocial}>
                    <ul className={styles.footerSocialList}>
                        <li>
                            <Link target="_blank" href={"https://www.facebook.com/adrianacristina.sosamodernell"}>
                                <Image
                                    src="/facebook-icon.png"
                                    alt="Facebook Icon"
                                    width={50}
                                    height={50}
                                />
                            </Link>
                        </li>
                        <li>
                            <Link target="_blank" href={"https://wa.me/59898709897"}>
                                <Image
                                    src="/whatsapp-icon.png"
                                    alt="Whatsapp Icon"
                                    width={50}
                                    height={50}
                                />
                            </Link>
                        </li>
                        <li>
                            <Link target="_blank" href={"https://www.instagram.com/adrianasosa771/"}>
                                <Image
                                    src="/instagram-icon.png"
                                    alt="Instagram Icon"
                                    width={50}
                                    height={50}
                                />
                            </Link>
                        </li>
                        <li>
                            <Link target="_blank" href={"https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqbQsgpNlhdSSZssxhtsZJpmWCbxdRmzkfpPQvxcDLQlcmXRnHgRlWzjxmwWNszLBnqLJq "}>
                                <Image
                                    src="/gmail-icon.png"
                                    alt="Gmail Icon"
                                    width={50}
                                    height={50}
                                />
                            </Link>
                        </li>
                    </ul>
                </section>
                {/*Policy Footer */}
                <section className={styles.footerPolicy}>
                    <div>
                        <Link target="_blank" href={"https://www.linkedin.com/in/santiagotourn/"}>
                            • Página creada por Santiago Tourn.
                            <Image
                                src="/in.png"
                                alt="Instagram Icon"
                                width={25}
                                height={25}
                            />
                        </Link>
                    </div>
                </section>
            </footer>
        </div>
    )
}

export default Footer