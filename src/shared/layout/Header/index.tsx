"use client";
import { Link } from "@/i18n/navigation";
import { Container, LanguageSwitcher } from "@/shared/components";
import { Urls } from "@/shared/constants/urls";
import { isUrlMatched } from "@/shared/helper/urlChecker";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Header.module.scss";
const Header = () => {
  const t = useTranslations("Header");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const pathname = usePathname() ?? "";
  const headerStyle = isUrlMatched(pathname) ? "dark" : "default";



  const toggleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const closeBurger = () => {
    setIsBurgerOpen(false);
  };

  const toggleMobileDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      <header className={`${styles.Header} ${styles[headerStyle]}`}>
        <Container>
          <div className={styles.HeaderInner}>
            <Link href={Urls.HOME}>
              <Image
                priority
                className={styles.HeaderInnerLogo}
                src="/logo/logo.png"
                alt="logo"
                width={150}
                height={100}
              />
            </Link>

            <nav className={styles.DesktopNav}>
              <ul className={styles.List}>
                <li
                  className={` ${pathname.includes("/") ? styles.active : ""}`}
                >
                  <Link href={Urls.CONTACT}>
                    <span>{t("home")}</span>
                  </Link>
                </li>
                <li
                  className={`${
                    pathname.includes("about-us") ? styles.active : ""
                  }`}
                >
                  <Link href={Urls.HALLS}>{t("about-us")}</Link>
                </li>

                <li
                  className={`${
                    pathname.includes("products") ? styles.active : ""
                  }`}
                >
                  <Link href={Urls.YOUR_VISIT}>
                    <span>{t("products")}</span>
                  </Link>
                </li>

                <li
                  className={`${
                    pathname.includes("gallery") ? styles.active : ""
                  }`}
                >
                  <Link href={Urls.FAQ}>
                    <span>{t("gallery")}</span>
                  </Link>
                </li>

                <li
                  className={` ${
                    pathname.includes("partners") ? styles.active : ""
                  }`}
                >
                  <Link href={Urls.CONTACT}>
                    <span>{t("partners")}</span>
                  </Link>
                </li>
                <li
                  className={` ${
                    pathname.includes("certificates") ? styles.active : ""
                  }`}
                >
                  <Link href={Urls.CONTACT}>
                    <span>{t("certificates")}</span>
                  </Link>
                </li>
                <li
                  className={` ${
                    pathname.includes("contact-us") ? styles.active : ""
                  }`}
                >
                  <Link href={Urls.CONTACT}>
                    <span>{t("contact-us")}</span>
                  </Link>
                </li>
              </ul>

              <div className={styles.Divider}></div>
              <LanguageSwitcher variant={headerStyle} />
            </nav>

            <button
            name="burger_button"
              className={`${styles.BurgerButton} ${styles[headerStyle]}`}
              onClick={toggleBurger}
              aria-label="Menu_open"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </Container>
      </header>

      <div
        className={`${styles.MobileMenu} ${styles[headerStyle]} ${
          isBurgerOpen ? styles.MobileMenuOpen : ""
        }`}
      >
        <div className={styles.MobileMenuHeader}>
          <Link href={Urls.HOME} onClick={closeBurger}>
            <Image
              priority
              className={styles.HeaderLogo}
              src="/logo/logo.png"
              alt="logo"
              width={100}
              height={72}
            />
          </Link>
          <div className={styles.Lang}>
            <div className={styles.MobileLanguageSwitcher}>
              <LanguageSwitcher variant="dark" />
            </div>
            <button name="close_button" className={styles.CloseButton} onClick={closeBurger}>
              <span>×</span>
            </button>
          </div>
        </div>

        <nav className={styles.MobileNav}>
          <div className={styles.MobileNavItem}>
            <Link href={Urls.CONTACT} onClick={closeBurger}>
              <span>{t("home")}</span>
            </Link>
          </div>

          <div className={styles.MobileNavItem}>
            <Link href={Urls.HALLS} onClick={closeBurger}>
              <span>{t("about-us")}</span>
            </Link>
          </div>

          <div className={styles.MobileNavItem}>
            <Link href={Urls.YOUR_VISIT} onClick={closeBurger}>
              <span>{t("products")}</span>
            </Link>
          </div>

          <div className={styles.MobileNavItem}>
            <Link href={Urls.FAQ} onClick={closeBurger}>
              <span>{t("gallery")}</span>
            </Link>
          </div>

          <div className={styles.MobileNavItem}>
            <Link href={Urls.CONTACT} onClick={closeBurger}>
              <span>{t("partners")}</span>
            </Link>
          </div>

          <div className={styles.MobileNavItem}>
            <Link href={Urls.CONTACT} onClick={closeBurger}>
              <span>{t("certificates")}</span>
            </Link>
          </div>

          <div className={styles.MobileNavItem}>
            <Link href={Urls.CONTACT} onClick={closeBurger}>
              <span>{t("contact-us")}</span>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
