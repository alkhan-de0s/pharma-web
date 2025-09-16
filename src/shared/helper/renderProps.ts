import { Renderable } from "../components/PageDescription/model";

export const resolve = <T,>(val: Renderable<T> | undefined): T | undefined => {
  return typeof val === "function" ? (val as () => T)() : val;
};
