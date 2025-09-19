"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { ArrowBreadCrumb } from "@/shared/icons";
import React from "react";
import Container from "../Container";
import styles from "./Breadcrumb.module.scss";
import { BreadcrumbProps } from "./model";

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => {


  const pathname = usePathname();

  return (
    <nav
      className={`${styles.breadcrumb} ${className || ""} bg-white border-t border-gray-200`}
      aria-label="Breadcrumb"
    >
      <Container>
        <ol className={styles.breadcrumbList}>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const isActive = pathname === item.href;

            return (
              <li key={item.href} className={styles.breadcrumbItem}>
                {!isLast && !isActive ? (
                  <Link href={item.href} className={styles.breadcrumbLink}>
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={`${styles.breadcrumbText} ${
                      isActive ? styles.active : ""
                    }`}
                  >
                    {item.label}
                  </span>
                )}

                {!isLast && (
                 <ArrowBreadCrumb/>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
};

export default Breadcrumb;
