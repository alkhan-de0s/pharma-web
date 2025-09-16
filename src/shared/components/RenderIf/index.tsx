import {FC,PropsWithChildren} from 'react'
import { IRenderIfProps } from './models';


const RenderIf : FC<PropsWithChildren & IRenderIfProps> = ({children, condition,renderElse=""}) => {
  if (condition) return <>{children}</>;
  return <>{renderElse}</>;
}

export default RenderIf;