import { FC, PropsWithChildren } from "react";
import "./Container.scss";

interface ContainerProps extends PropsWithChildren {
 extendRight?: boolean;
 classname?:string
}

const Container: FC<ContainerProps> = ({ children, extendRight = false,classname }) => {
 return (
   <div className={`container ${classname} ${extendRight ? 'container--extend-right' : ''}`}>
     {children}
   </div>
 );
};

export default Container;