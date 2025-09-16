import Image from "next/image";
import { MissionVisionProps } from "./model";
import Container from "../Container";
import { getImageUrl } from "@/shared/helper/getImageUrl";
import { ArrowMision } from "@/shared/icons";
import styles from "./MissionVision.module.scss";
import { useTranslations } from "next-intl";

const MissionVision: React.FC<MissionVisionProps> = ({
  missionImage,
  visionImage,
  missionDescription,
  visionDescription
}) => {
  const t = useTranslations("About")
  return (
    <div className={styles.Mission}>
      <div className={styles.MissionImages}>
        <div className={styles.MissionImageWrapper}>
          <Image src={getImageUrl(missionImage)} fill alt="mission_image" />
        </div>
        <div className={styles.VisionImageWrapper}>
          <Image src={getImageUrl(visionImage)} fill alt="vision_image" />
        </div>
      </div>
      <div className={styles.MissionContent}>
        <Container>
          <div className={styles.MissionContentWrapper}>
            <span>{t("our-mission")}</span>
            <div className={styles.WrapperText}>
              <ArrowMision />
              <p>
                {missionDescription}
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.VisionContent}>
        <Container>
          <div className={styles.VisionContentWrapper}>
            <span>{t("our-vission")}</span>
            <div className={styles.WrapperText}>
              <ArrowMision color="#0E0001" />
              <p>
                {visionDescription}
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MissionVision;


