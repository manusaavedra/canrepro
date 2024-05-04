import { config } from "@/constants";
import { Button } from "@nextui-org/react";
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
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.426381222798!2d1.427837775811395!3d38.91423087172049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129946b8e6595d73%3A0x2a22df39f91f1fee!2sCarrer%20de%20Pere%20Franc%C3%A8s%2C%2042%2C%2007800%20Eivissa%2C%20Illes%20Balears!5e0!3m2!1ses!2ses!4v1714850185428!5m2!1ses!2ses"
                        width="600"
                        height="450"
                        style={{ border: "none" }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade" />
                </div>
            </section>
        </main>
    )
}
