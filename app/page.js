import Map from "@/components/Map";
import { config } from "@/constants";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { BsPhoneVibrate, BsWhatsapp } from "react-icons/bs";

import { Black_Han_Sans } from "next/font/google"

const blackHans = Black_Han_Sans({
    preload: true,
    subsets: ["latin"],
    weight: "400",
})

export default function Home() {
    return (
        <main>
            <section className="py-10">
                <div className="flex min-h-[400px] flex-col-reverse md:flex-row p-4 items-center gap-8 max-w-5xl mx-auto">
                    <div className="flex flex-col items-center md:items-start gap-6">
                        <div className="text-center md:text-left">
                            <h1 className={`${blackHans.className} text-4xl mb-4 sm:text-6xl`}>Copia de llaves de <span className="text-green-600">coches</span> y <span className="text-green-600">motos</span> en Ibiza</h1>
                        </div>
                        <div className="flex w-full overflow-x-hidden flex-wrap items-center justify-center md:justify-start gap-2">
                            {
                                config.otherServices.map((service) => (
                                    <p key={service} className="p-1 text-xs font-semibold min-w-fit rounded-md bg-gray-200">{service}</p>
                                ))
                            }
                        </div>
                        <div className="flex items-center gap-4 pt-2">
                            <Button as={Link} className="bg-green-600 text-white" size="lg" color="success" href={config.contact.whatsapp} variant="flat">
                                <BsWhatsapp size={24} />
                                Whatsapp
                            </Button>
                            <Button as={Link} size="lg" className="bg-gray-200 text-black" href={`tel://${config.contact.tel.value}`} variant="flat">
                                <BsPhoneVibrate size={24} />
                                Llamar
                            </Button>
                        </div>
                    </div>
                    <div>
                        <picture>
                            <img className="w-[320px] md:w-[420px]" src="https://static5.depositphotos.com/1000563/461/v/450/depositphotos_4617464-stock-illustration-five-car-keys-remote-control.jpg" alt="llaves de coche" />
                        </picture>
                    </div>
                </div>
            </section>
            <section className="py-10 bg-gray-50">
                <div className="min-h-[300px] p-4 max-w-5xl mx-auto">
                    <h2 className={`${blackHans.className} text-4xl mb-8 text-center`}>Otros Servicios</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {
                            config.services.map(({ name, image }) => (
                                <div className="bg-green-600 text-white overflow-hidden rounded-lg flex flex-col items-center justify-center text-center" key={name}>
                                    <picture className="grid place-items-center w-full h-[180px] rounded-sm overflow-hidden">
                                        <img className="w-full" src={image} alt={name} />
                                    </picture>
                                    <div className="px-4 py-4">
                                        <h4 className="text-xl font-semibold">{name}</h4>
                                    </div>
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
                        <a className="">{config.contact.address}</a>
                        <p>
                            <a className="hover:underline" href={`mailto://${config.contact.email}`}>{config.contact.email}</a>
                        </p>
                        <p>
                            <a className="hover:underline" href={`tel://${config.contact.tel.value}`}>{config.contact.tel.text}</a>
                        </p>
                    </div>
                    <div className="p-2 bg-green-600 rounded-lg">
                        <Map />
                    </div>
                </div>
            </section>
        </main>
    )
}
