import Link from "next/link"
import styles from 'styles/NavBar.module.css'
import Image from "next/image"

//Rutas de linkeo
const links = [{
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

const NavBar = () => {
    return (
        <div>
            <nav className={styles.navbar}>
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={70}
                    height={70}
                />
                <p className={styles.name}>
                    Salud y Armonía
                    <br />
                    Adriana Sosa
                </p>
                <ul className={styles.navLinks}>
                    {links.map(({ label, route }) => (
                        <li key={route}>
                            <Link className={styles.link} href={route}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default NavBar