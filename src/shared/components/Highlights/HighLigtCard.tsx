import { FC } from 'react';
import Image from 'next/image';
import { IPropsCard } from './models';
import styles from './Highlight.module.scss';
import { Link } from '@/i18n/navigation';
import { Urls } from '@/shared/constants/urls';



const HighlightCard:FC<IPropsCard> = ({ date, title, imageSrc, backgroundColorClass, textColorClass,titleId,orderClass }) => {
  return (
    <div style={{background:backgroundColorClass}} className={`${styles.HighlightCard} ${orderClass}`}>
      <Link href={`${Urls.HIGHLIGHTS}/${titleId}`}>
      <span style={{color:textColorClass}}>{date}</span>
      <span style={{color:textColorClass}}>{title}</span>
      <div className={styles.Image}>
        <Image src={imageSrc} fill   sizes="(max-width: 768px)
        100vw, (max-width: 1200px) 50vw, 25vw" priority={false} style={{objectFit:'cover'}} alt="card_image" />
      </div>
      </Link>
    </div>
  );
};

export default HighlightCard;