"use client";

import React, { useState, useEffect } from "react"; // Added React import and hooks
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils"; // Added cn import

import { Switch } from "@/components/ui/switch"; // Added Switch import
import { Sun, Moon } from "lucide-react"; // Added Sun, Moon imports
import { Label } from "@/components/ui/label"; // Added Label import


interface NavItem {
  title: string;
  href?: string;
  description: string;
  items?: NavItem[];
}

function Header1() {
    const navigationItems: NavItem[] = [
        {
            title: "Home",
            href: "/",
            description: "",
        },
        {
            title: "About us",
            href: "/about",
            description: "",
        },

        {
            title: "Team",
            href: "/team",
            description: "",
        },
    ];

    const [isOpen, setOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true); // Added state for dark mode

    useEffect(() => { // Added useEffect for dark mode logic
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [isDarkMode]);

    return (
        <header className="z-40 fixed top-4 inset-x-4 max-w-7xl mx-auto bg-black/5 backdrop-blur-lg rounded-full border border-neutral-700">
            <div className="container relative mx-auto min-h-16 flex gap-4 flex-row lg:flex lg:justify-between items-center px-8 py-2">
                <div className="justify-start items-center gap-4 lg:flex flex-row">
                    <NavigationMenu className="flex justify-start items-start">
                        <NavigationMenuList className="flex justify-start gap-4 flex-row">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    {item.href ? (
                                        <>
                                            <NavigationMenuLink href={item.href}>
                                                <Button variant="ghost" className="text-white">{item.title}</Button>
                                            </NavigationMenuLink>
                                        </>
                                    ) : (
                                        <>
                                            <NavigationMenuTrigger className="font-medium text-sm text-white">
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="!w-[450px] p-4">
                                                <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                                                    <div className="flex flex-col h-full justify-between">
                                                        <div className="flex flex-col">
                                                            <p className="text-base">{item.title}</p>
                                                            <p className="text-muted-foreground text-sm">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                        <Button size="sm" className="mt-10">
                                                            Book a call today
                                                        </Button>
                                                    </div>
                                                    <div className="flex flex-col text-sm h-full justify-end">
                                                        {item.items?.map((subItem) => (
                                                            <NavigationMenuLink
                                                                href={subItem.href}
                                                                key={subItem.title}
                                                                className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                                                            >
                                                                <span>{subItem.title}</span>
                                                                <MoveRight className="w-4 h-4 text-muted-foreground" />
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            </NavigationMenuContent>
                                        </>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="flex justify-end gap-4">
                    <div className="flex items-center space-x-2">
                        <Sun className="h-4 w-4 text-white" />
                        <Switch
                            id="dark-mode-header"
                            checked={isDarkMode}
                            onCheckedChange={setIsDarkMode}
                        />
                        <Moon className="h-4 w-4 text-white" />
                        <Label htmlFor="dark-mode-header" className="sr-only">
                            Toggle dark mode
                        </Label>
                    </div>
                    <Button
                        className={cn(
                            "font-bold",
                            isDarkMode ? "bg-white text-black" : "bg-black text-white"
                        )}
                    >JOIN US</Button>
                </div>
                <div className="flex w-12 shrink lg:hidden items-end justify-end">
                    <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                    {isOpen && (
                        <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
                            {navigationItems.map((item) => (
                                <div key={item.title}>
                                    <div className="flex flex-col gap-2">
                                        {item.href ? (
                                            <Link
                                                href={item.href}
                                                className="flex justify-between items-center"
                                            >
                                                <span className="text-lg text-white">{item.title}</span>
                                                <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                                            </Link>
                                        ) : (
                                            <p className="text-lg text-white">{item.title}</p>
                                        )}
                                        {item.items &&
                                            item.items.map((subItem) => (
                                                subItem.href && (
                                                    <Link
                                                        key={subItem.title}
                                                        href={subItem.href}
                                                        className="flex justify-between items-center"
                                                    >
                                                        <span className="text-white">
                                                            {subItem.title}
                                                        </span>
                                                        <MoveRight className="w-4 h-4 stroke-1" />
                                                    </Link>
                                                )
                                            ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export { Header1 };