import Map from "@/components/Map";
import { config } from "@/constants";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { BsPhoneVibrate, BsWhatsapp } from "react-icons/bs";

//const Map = dynamic(import("../components/Map"), { ssr: false })

export default function Home() {
    return (
        <main>
            <section className="py-10">
                <div className="flex min-h-[400px] flex-col-reverse md:flex-row p-4 items-center gap-8 max-w-5xl mx-auto">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl mb-4 sm:text-5xl font-bold">Expertos en llaves y ECUs para tu coche</h1>
                            <h4 className="text-xl">Programación de llaves de tu coche en Ibiza</h4>
                        </div>
                        <div className="flex items-center gap-4">
                            <Button as={Link} className="bg-green-600 text-white" size="lg" color="success" href={config.contact.whatsapp} variant="flat">
                                <BsWhatsapp size={24} />
                                Whatsapp
                            </Button>
                            <Button as={Link} size="lg" className="bg-black text-white" href={`tel://${config.contact.tel.value}`} variant="flat">
                                <BsPhoneVibrate size={24} />
                                Llamar
                            </Button>
                        </div>
                    </div>
                    <div>
                        <picture>
                            <img width={320} src="/girls-keys.png" alt="Mujer con llaves de coche" />
                        </picture>
                    </div>
                </div>
            </section>
            <section className="py-10 bg-gradient-to-r from-green-600 to-green-500 text-white">
                <div className="min-h-[300px] p-4 max-w-5xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8 text-center">Nuestros Servicios</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {
                            config.services.map((service) => (
                                <div className="hover:border-green-900 border-green-800 p-4 py-6 border-3 rounded-lg flex items-center justify-center text-center" key={service}>
                                    <h4 className="text-xl font-semibold">{service}</h4>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section id="contact" className="py-10">
                <div className="min-h-[300px] grid grid-cols-1 md:grid-cols-2 gap-4 p-4 max-w-5xl mx-auto">
                    <div className="text-center md:text-left">
                        <h2 className="text-4xl font-bold mb-6">Contacto</h2>
                        <p>{config.contact.address}</p>
                        <p>{config.contact.email}</p>
                        <p>{config.contact.tel.text}</p>
                        <div className="flex items-center md:justify-start justify-center my-4 gap-4">
                            <Button as={Link} className="bg-green-600 text-white" size="lg" color="success" href={config.contact.whatsapp} variant="flat">
                                <BsWhatsapp size={24} />
                                Whatsapp
                            </Button>
                            <Button as={Link} size="lg" className="bg-black text-white" href={`tel://${config.contact.tel.value}`} variant="flat">
                                <BsPhoneVibrate size={24} />
                                Llamar
                            </Button>
                        </div>
                    </div>
                    <div>
                        <Map />
                    </div>
                </div>
            </section>
        </main>
    )
}
