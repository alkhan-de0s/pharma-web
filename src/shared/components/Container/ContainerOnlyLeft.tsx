import { FC, PropsWithChildren } from "react";
import "./ContainerLeft.scss";

const ContainerLeft: FC<PropsWithChildren> = ({ children }) => {
  return <div className="container-left">{children}</div>;
};

export default ContainerLeft;
