import Image from "next/image";
import styles from "./Marquee.module.scss";
// import { getImageUrl } from "@/shared/helper/getImageUrl";
interface IMarqueeProps {
  data: { id: string; imagePath: string }[];
}
export default function Marquee({ data }: IMarqueeProps) {
  return (
    <div className={styles.marquee}>
      <ul className={styles.marqueeContent}>
        {data.map((item) => (
          <li key={`a-${item.id}`}>
            <Image
              key={item.id}
              src={item.imagePath}
              priority={false}
              alt="partner"
              width={300}
              height={200}
            />
          </li>
        ))}
      </ul>
      <ul className={styles.marqueeContent} aria-hidden="true">
        {data.map((item) => (
          <li key={`a-${item.id}`}>
            <Image
              key={item.id}
              src={item.imagePath}
              priority={false}
              alt="partner"
              width={300}
              height={200}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
