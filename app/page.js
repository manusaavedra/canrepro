import { config } from "@/constants";
import { Button } from "@nextui-org/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { BsPhoneVibrate, BsWhatsapp } from "react-icons/bs";


export default function Home() {
    return (
        <main>
            <section>
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
                            <Button as={Link} size="lg" className="bg-black text-white" href={`tel://${config.contact.tel}`} variant="flat">
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
            <section id="contact">
                <div className="p-4 max-w-5xl mx-auto">
                </div>
            </section>
        </main>
    )
}
