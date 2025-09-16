import Image from "next/image";
import styles from "./Marquee.module.scss";
import { type Partners as PartnerType } from "@/modules/Home/model";
import { getImageUrl } from "@/shared/helper/getImageUrl";
interface IMarqueeProps {
  data: PartnerType[];
}
export default function Marquee({ data }: IMarqueeProps) {
  return (
    <div className={styles.marquee}>
      <ul className={styles.marqueeContent}>
        {data.map((item) => (
          <li key={`a-${item.id}`}>
            <Image
              key={item.id}
              src={getImageUrl(item.imagePath)}
              priority={false}
              alt="partner"
              width={200}
              height={100}
            />
          </li>
        ))}
      </ul>
      <ul className={styles.marqueeContent} aria-hidden="true">
        {data.map((item) => (
          <li key={`a-${item.id}`}>
            <Image
              key={item.id}
              src={getImageUrl(item.imagePath)}
              priority={false}
              alt="partner"
              width={200}
              height={100}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
