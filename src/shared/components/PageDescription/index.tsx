import Image from "next/image";
import { FC } from "react";
import Container from "../Container";
import RenderIf from "../RenderIf";
import styles from "./Description.module.scss";
import { IPageDescription } from "./model";
import { getImageUrl } from "@/shared/helper/getImageUrl";
import { resolve } from "@/shared/helper/renderProps";
interface IPageDesction {
  pageDescription: IPageDescription;
}
const PageDescription: FC<IPageDesction> = ({ pageDescription }) => {
  const imagePath = resolve(pageDescription.imagePath);
  const imageTitle = resolve(pageDescription.imageTitle);
  const imageDescription = resolve(pageDescription.imageDescription);
  const title = resolve(pageDescription.title);
  const description = resolve(pageDescription.description);

  return (
    <div className={styles.Description}>
      <div className={styles.DescriptionImage}>
        <RenderIf condition={!!imagePath}>
          <Image src={getImageUrl(imagePath)} alt="PHOTO" fill />
        </RenderIf>

        <RenderIf condition={imageTitle || imageDescription}>
          <Container>
            <div className={styles.DescriptionImageWrapper}>
              <div className={styles.DescriptionImageText}>
                <p>{imageTitle}</p>
                <span>{imageDescription}</span>
              </div>
            </div>
          </Container>
        </RenderIf>
      </div>

      <Container>
        <div className={styles.DescriptionText}>
          <p>{title}</p>
          <span>{description}</span>
        </div>
      </Container>
    </div>
  );
};
export default PageDescription;
