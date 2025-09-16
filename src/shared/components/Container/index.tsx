import { FC, PropsWithChildren } from "react";
import "./Container.scss";

interface ContainerProps extends PropsWithChildren {
 extendRight?: boolean;
}

const Container: FC<ContainerProps> = ({ children, extendRight = false }) => {
 return (
   <div className={`container ${extendRight ? 'container--extend-right' : ''}`}>
     {children}
   </div>
 );
};

export default Container;