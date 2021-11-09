import { atom } from "recoil";
import { TBio } from "../constant-enum-type/Strapi";
import KEYS from "./key";

export const BioState = atom({
  key: KEYS.BIO_DATA,
  default: {} as TBio,
});