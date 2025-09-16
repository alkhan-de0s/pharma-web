'use client';
import Image from 'next/image';
import  React, {useEffect,useRef,useState} from 'react'
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { ArrowDown } from '@/shared/icons';
import styles from './LanguageSwitcher.module.scss';

const locales = [
  { code: 'uz', label: 'UZ', flag: '/flags/uz.svg' },
  { code: 'ru', label: 'RU', flag: '/flags/rus.png' },
];

export default function LanguageSwitcher({variant}:{variant:'default'|'dark'}) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleChange = (newLocale: string) => {
    setOpen(false);
    router.replace(pathname, { locale: newLocale });
  };

  const current = locales.find((l) => l.code === locale);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
    
     onMouseEnter={()=>setOpen((true))}
        onMouseLeave={()=>setOpen((false))}className={styles.languageSwitcher} ref={dropdownRef}>
      <button
        className={`${styles.trigger} ${styles[variant]}`}>
        <Image src={current?.flag as string} alt='language' width={20} height={16}/>
        <span>{current?.label}</span>
        <ArrowDown variant={variant} />
      </button>
      {open && (
        <ul className={styles.dropdown}>
          {locales
            .filter((l) => l.code !== locale)
            .map((l) => (
              <li
                key={l.code}
                onClick={() => handleChange(l.code)}
                className={styles.item}
              >
                <Image src={l.flag}  width={20} height={16} alt='language' />
                <span>{l.label}</span>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

