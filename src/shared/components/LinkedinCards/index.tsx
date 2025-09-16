import { getImageUrl } from '@/shared/helper/getImageUrl';
import { Linkedin } from '@/shared/icons';
import Image from 'next/image';
import Link from 'next/link';
import { Teams } from '../VirtualTour/model';
import styles from './TeamCards.module.scss';




interface TeamCardsProps {
  teams: Teams[] | undefined;
}
export default function TeamCards({teams}:TeamCardsProps) {
  return (
    <div className={styles.wrapper}>
      {teams?.map((member) => (
        <Link 
          key={member.id} 
          href={member.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardLink}
        >
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <Image
                src={getImageUrl(member.imagePath)}
                alt={member.id.toString()}
                width={320}
                height={240}
                className={styles.image}
                priority={false}
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.name}>{member.fullName}</h3>
              <p className={styles.role}>{member.position}</p>
              <div className={styles.linkedinIcon}>
                <Linkedin/>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}