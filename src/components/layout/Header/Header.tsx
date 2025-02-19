"use client";

import { FC, useEffect, useRef } from "react";
import scss from "./Header.module.scss";
import Image from "next/image";
import logo from "../../../assets/images/logo-Photoroom.png";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import BurgerMenu from "../ui/iconMenu";
import links from "@/constants/links";
import Menu from "../ui/Menu";
import { useStore } from "@/store/store";
import { AnimatePresence } from "framer-motion";

const Header: FC = () => {
  const { isOpen, setIsOpen } = useStore();

  const menuRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <Image src={logo} alt="logo" />
            <nav>
              {links.map((link, index) => (
                <Link key={index} href={link.link}>
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className={scss.right}>
            <div className={scss.rightBlock}>
              <div className={scss.btnBlock}>
                <button className={scss.icon}>
                  <IoLogoWhatsapp />
                </button>
                <button className={scss.icon}>
                  <AiFillInstagram />
                </button>
              </div>
              <h2>+996551902085</h2>
              <button className={scss.btn}>заказать уборку</button>
            </div>
            <div className={scss.rightBlockv2}>
              <button className={scss.btn}>заказать уборку</button>
              <div className={scss.btnBlock}>
                <button className={scss.icon}>
                  <IoLogoWhatsapp />
                </button>
                <button className={scss.icon}>
                  <AiFillInstagram />
                </button>
                <h2>+996551902085</h2>
              </div>
            </div>
            <div className={scss.menu}>
              <BurgerMenu />
              <AnimatePresence>
                {isOpen && <Menu ref={menuRef} />}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
