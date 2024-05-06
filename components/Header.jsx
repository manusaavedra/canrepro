"use client"

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    Snippet
} from "@nextui-org/react";
import Logo from "./Logo.jsx";
import { config } from "@/constants.js";
import Link from "next/link.js";
import { BsPhoneVibrate } from "react-icons/bs";

export default function Header() {

    return (
        <Navbar className="py-2 text-black">
            <NavbarContent>
                <NavbarBrand>
                    <Logo />
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                <Snippet hideSymbol hideCopyButton as={Link} href={`tel://${config.contact.tel.value}`}>
                    <div className="flex items-center gap-2">
                        <BsPhoneVibrate size={24} />
                        {config.contact.tel.text}
                    </div>
                </Snippet>
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
