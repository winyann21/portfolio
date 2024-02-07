// image types
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";

declare module "*.svg" {
  const src: string;
  export default src;
}
//doc type
declare module "*.pdf";
