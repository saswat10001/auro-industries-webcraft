"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X, Phone, Mail } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onGetQuote: () => void;
}

const Header: React.FC<HeaderProps> = ({ onGetQuote }) => {
  const navigationItems = [
    {
      title: "Home",
      href: "#home",
    },
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Products",
      description: "Precision-engineered industrial components for all your manufacturing needs.",
      items: [
        { title: "Shafts & Gears", href: "#products" },
        { title: "Couplings & Transmission", href: "#products" },
        { title: "Material Handling", href: "#products" },
        { title: "Pulleys & Bearing Units", href: "#products" },
      ],
    },
    {
      title: "Gallery",
      href: "#gallery",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  const [isOpen, setOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <header className="w-full z-50 fixed top-0 left-0">
      {/* Top contact bar */}
      <div className="bg-slate-900 text-white py-2 hidden md:block w-full">
        <div className="container mx-auto px-4">
          <div className="flex justify-end space-x-6">
            <div className="flex items-center space-x-2 hover:text-primary transition-colors duration-300">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+91-7008566816</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-primary transition-colors duration-300">
              <Mail className="w-4 h-4" />
              <span className="text-sm">auro_industry@yahoo.in</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-background/95 backdrop-blur-md border-b border-border/40">
        <div className="container relative mx-auto min-h-16 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center px-4">
          {/* Desktop Navigation - Left */}
          <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
            <NavigationMenu className="flex justify-start items-start">
              <NavigationMenuList className="flex justify-start gap-2 flex-row">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.href ? (
                      <NavigationMenuLink asChild>
                        <Button
                          variant="ghost"
                          onClick={() => scrollToSection(item.href)}
                          className="text-foreground/80 hover:text-foreground"
                        >
                          {item.title}
                        </Button>
                      </NavigationMenuLink>
                    ) : (
                      <>
                        <NavigationMenuTrigger className="font-medium text-sm bg-transparent text-foreground/80 hover:text-foreground hover:bg-accent">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="!w-[450px] p-4">
                          <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                            <div className="flex flex-col h-full justify-between">
                              <div className="flex flex-col">
                                <p className="text-base font-semibold">{item.title}</p>
                                <p className="text-muted-foreground text-sm">
                                  {item.description}
                                </p>
                              </div>
                              <Button size="sm" className="mt-10" onClick={onGetQuote}>
                                Request Quote
                              </Button>
                            </div>
                            <div className="flex flex-col text-sm h-full justify-end">
                              {item.items?.map((subItem) => (
                                <NavigationMenuLink
                                  key={subItem.title}
                                  className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded cursor-pointer"
                                  onClick={() => scrollToSection(subItem.href)}
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

          {/* Logo - Center */}
          <div className="flex lg:justify-center">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('#home')}>
              <img
                src="/lovable-uploads/1b3a86a2-4367-48f8-8588-eaab18f3faf8.png"
                alt="Auro Industries Logo"
                className="h-10 w-auto"
              />
              <div className="text-xl font-bold">
                <span className="text-foreground">AURO</span>{" "}
                <span className="text-primary">INDUSTRIES</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons - Right */}
          <div className="flex justify-end w-full gap-4">
            <Button variant="ghost" className="hidden md:inline-flex" onClick={() => scrollToSection('#contact')}>
              Contact Us
            </Button>
            <div className="border-r border-border hidden md:inline"></div>
            <Button onClick={onGetQuote}>Get a Quote</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex w-12 shrink lg:hidden items-end justify-end">
            <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
            
            {/* Mobile Menu */}
            {isOpen && (
              <div className="absolute top-16 border-t border-border flex flex-col w-full right-0 bg-background shadow-lg py-4 px-4 gap-6">
                {navigationItems.map((item) => (
                  <div key={item.title}>
                    <div className="flex flex-col gap-2">
                      {item.href ? (
                        <button
                          onClick={() => scrollToSection(item.href)}
                          className="flex justify-between items-center w-full text-left"
                        >
                          <span className="text-lg font-medium">{item.title}</span>
                          <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                        </button>
                      ) : (
                        <>
                          <p className="text-lg font-medium">{item.title}</p>
                          {item.items?.map((subItem) => (
                            <button
                              key={subItem.title}
                              onClick={() => scrollToSection(subItem.href)}
                              className="flex justify-between items-center w-full text-left pl-2"
                            >
                              <span className="text-muted-foreground">
                                {subItem.title}
                              </span>
                              <MoveRight className="w-4 h-4 stroke-1" />
                            </button>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                ))}
                <Button className="w-full mt-2" onClick={() => { onGetQuote(); setOpen(false); }}>
                  Get a Quote
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
