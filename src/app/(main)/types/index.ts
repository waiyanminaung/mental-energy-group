import { ServiceTypeEnum } from "../constant";

export type ServiceType =
  | ServiceTypeEnum.MEDICAL_TOURISM
  | ServiceTypeEnum.TICKET
  | ServiceTypeEnum.JOB
  | ServiceTypeEnum.HOTEL
  | ServiceTypeEnum.TRAVEL
  | ServiceTypeEnum.CAR_RENTAL
  | ServiceTypeEnum.REAL_ESTATE
  | ServiceTypeEnum.OTHER
  | "contact";

export interface BaseMailData {
  subject: string;
}
