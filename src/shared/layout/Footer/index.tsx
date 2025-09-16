"use client";
import { Link } from "@/i18n/navigation";
import {  Container, RenderIf } from "@/shared/components";
import { Urls } from "@/shared/constants/urls";
import { ArrowDown, ArrowRight } from "@/shared/icons";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./Footer.module.scss";
import ScroolToTop from "./scrollTop";
import { useRouter } from "next/navigation";

const Footer = () => {
  const t = useTranslations("Footer");
  const [openMenu, setOpenMenu] = useState<null | "about" | "events">(null);
  const dropdownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = (menu: "about" | "events") => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };
  const router = useRouter();
  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterWrapper}>
        <Container>
          <section className={styles.Info}>
            <p>{t("interested-in-learning")}</p>
            <button onClick={() => router.push(Urls.CONTACT)}>
              {t("contact-us")} <ArrowRight />
            </button>
          </section>
        </Container>
      </div>

      <section className={styles.FooterContent}>
        <Container>
          <div className={styles.FooterContentLogoNav}>
            <div className={styles.LogoNavContent}>
              <div
                style={{
                  position: "relative",
                  width: "78px",
                  height: "78px",
                  cursor: "pointer",
                }}
              >
                <Image src="/logo.webp" alt="PHOTO" width={85} height={85} />
              </div>
              {/* <p>
                Quisquam voluptatem dolorem. Et ab corporis aut necessitatibus
                error voluptatem. Sed ut ut esse officiis ipsum voluptatem sunt
                laboriosam.
              </p> */}
            </div>
            <ul className={styles.List} ref={dropdownRef}>
              <li className={styles.DropdownItem}>
                <button onClick={() => toggleMenu("about")}>
                  <span>{t("about-us")}</span>
                  <ArrowDown
                    variant="default"
                    className={`${styles.ArrowIcon} ${
                      openMenu === "about" ? styles.ArrowOpen : ""
                    }`}
                  />
                </button>
                <RenderIf condition={openMenu === "about"}>
                  <div className={styles.Dropdown}>
                    <Link href={Urls.OUR_HISTORY}>{t("our-history")}</Link>
                    <Link href={Urls.TICKET_INFO}>{t("ticket-info")}</Link>
                    <Link href={Urls.RULES}>
                      {" "}
                      {t.rich("rules", {
                        span: (chunks) => (
                          <span className="ampersand">{chunks}</span>
                        ),
                      })}
                    </Link>
                    <Link href={Urls.CATERING_INFORMATION}>
                      {t("catering-information")}
                    </Link>
                  </div>
                </RenderIf>
              </li>

              <li>
                <Link href={Urls.HALLS}>{t("halls")}</Link>
              </li>

              <li className={styles.DropdownItem}>
                <button onClick={() => toggleMenu("events")}>
                  <span>{t("events")}</span>
                  <ArrowDown
                    variant="default"
                    className={`${styles.ArrowIcon} ${
                      openMenu === "events" ? styles.ArrowOpen : ""
                    }`}
                  />
                </button>
                <RenderIf condition={openMenu === "events"}>
                  <div className={styles.Dropdown}>
                    <Link href={Urls.HIGHLIGHTS}>{t("highlights")}</Link>
                    <Link href={Urls.EVENT_MEMORIES}>{t("memories")}</Link>
                  </div>
                </RenderIf>
              </li>

              <li>
                <Link href={Urls.YOUR_VISIT}>{t("plan-your-visit")}</Link>
              </li>
              <li>
                <Link href={Urls.FAQ}>{t("faq")}</Link>
              </li>
            </ul>
          </div>

          <div className={styles.FooterContentCopyright}>
            <span>
              © {t("copywrite")}{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://crocusoft.com/"
              >
                Crocusoft
              </Link>
            </span>
            <ul className={styles.ListSocial}>
              <li>
                <Link
                  href="https://www.facebook.com/BakuCrystalHallofficial/?locale=az_AZ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("facebook")}
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/baku_crystal_hall/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("instagram")}
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/channel/UCi67h_brm0BoIDAcoMEjAoA/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("twitter")}
                </Link>
              </li>
            </ul>
          </div>

          <ScroolToTop />
        </Container>

        <div className={styles.img} style={{ cursor: "pointer" }}>
          <Image src="/footer_bg.webp" alt="PHOTO" fill />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
