import styles from './ReflexologiaPodal.module.css'
import Link from "next/link"
import Image from "next/image"

const ReflexologiaPodal = () => {
    return (
        <>
            <section className={styles.container}>
                <div>
                    <h1>Reflexología Podal</h1>
                    <p>
                        La reflexología podal es una técnica de masaje terapéutico que se enfoca en los puntos reflejos en los pies, los cuales están conectados a diferentes partes del cuerpo. Esta técnica se basa en la idea de que hay puntos en los pies que corresponden a diferentes órganos y sistemas del cuerpo, y que al aplicar presión en estos puntos se pueden aliviar dolores, mejorar la circulación y promover la relajación.
                        <br />
                        Durante una sesión de reflexología podal, el terapeuta aplicará presión en puntos específicos del pie usando sus manos, dedos y herramientas especiales. La presión aplicada en cada punto se ajusta según las necesidades individuales del cliente, y se enfoca en aliviar la tensión muscular, mejorar la circulación sanguínea y linfática y estimular el sistema nervioso.
                        La reflexología podal puede ser especialmente beneficiosa para personas que sufren de dolores crónicos, problemas de circulación, estrés y ansiedad. Al aliviar la tensión muscular y reducir el estrés, la reflexología podal puede mejorar el bienestar general del cuerpo y la mente.
                    </p>
                    <h2>Beneficios de la Reflexología Podal</h2>
                    <ul>
                        <li>
                            Alivio del dolor: la reflexología podal puede ayudar a aliviar el dolor crónico y agudo en diferentes partes del cuerpo, como dolores de cabeza, dolor de espalda, dolor menstrual y artritis.

                        </li>
                        <li>
                            Mejora la circulación: la técnica de reflexología podal puede mejorar la circulación sanguínea y linfática, lo que ayuda a que los nutrientes y el oxígeno lleguen mejor a los tejidos y órganos del cuerpo, así como a eliminar las toxinas.

                        </li>
                        <li>
                            Reduce el estrés y la ansiedad: los masajes de reflexología podal pueden ayudar a reducir el estrés y la ansiedad, promoviendo la relajación y la calma.

                        </li>
                        <li>
                            Mejora la calidad del sueño: la reflexología podal puede ayudar a mejorar la calidad del sueño, haciendo que las personas se sientan más descansadas y rejuvenecidas al despertar.

                        </li>
                        <li>
                            Estimula el sistema inmunológico: al mejorar la circulación y el flujo de linfa en el cuerpo, la reflexología podal puede estimular el sistema inmunológico y mejorar la capacidad del cuerpo para combatir infecciones y enfermedades.

                        </li>
                        <li>
                            Equilibra el cuerpo y la mente: la reflexología podal ayuda a equilibrar el cuerpo y la mente, promoviendo una sensación general de bienestar y armonía.
                        </li>
                    </ul>
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        src="/reflexologia-podal1.png"
                        alt="Reflexología Podal"
                        width={400}
                        height={350}
                    />
                    <Image
                        src="/reflexologia-podal2.png"
                        alt="Reflexología Podal"
                        width={400}
                        height={350}
                    />
                     <Image
                        src="/reflexologia-podal3.png"
                        alt="Reflexología Podal"
                        width={400}
                        height={350}
                    />
                </div>
            </section>
            <div className={styles.bttns}>
                <button>
                    <Link href={'/components/Appointments'}>
                        ¿Interesado? ¡Agenda tu cita!
                    </Link>
                </button>
                <button>
                    <Link href={'/components/Treatments'}>
                        Todos nuestros tratamientos...
                    </Link>
                </button>
            </div>
        </>
    )
}

export default ReflexologiaPodal