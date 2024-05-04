"use client"

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Button
} from "@nextui-org/react";
import { BsWhatsapp } from "react-icons/bs"
import Logo from "./Logo.jsx";
import { useState } from "react";
import Link from "next/link.js";
import { config } from "@/constants.js";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        {
            name: "Inicio",
            url: "/"
        },
        {
            name: "Contacto",
            url: "/#contact"
        },
    ];

    return (
        <Navbar className="px-4 py-2 text-black" onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Logo />
                </NavbarBrand>
            </NavbarContent>
            {
                /*
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    {
                        menuItems.map(({ url, name }) => (
                            <NavbarItem key={name}>
                                <Link href={url}>
                                    {name}
                                </Link>
                            </NavbarItem>
                        ))
                    }
                </NavbarContent>
                */
            }

            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} size="md" className="bg-green-600 text-white" href={config.contact.whatsapp} variant="flat">
                        <BsWhatsapp size={24} />
                        Contactar
                    </Button>
                </NavbarItem>
            </NavbarContent>

            {
                /*
                <NavbarMenu className="py-2">
                    {menuItems.map(({ url, name }) => (
                        <NavbarMenuItem key={name}>
                            <Link
                                color="foreground"
                                className="w-full"
                                href={url}
                                size="lg"
                            >
                                {name}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            */
            }
        </Navbar>
    );
}
