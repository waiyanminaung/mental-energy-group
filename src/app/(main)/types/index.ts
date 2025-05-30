import { ServiceTypeEnum } from "../constant";

export type ServiceType =
  | ServiceTypeEnum.MEDICAL_TOURISM
  | ServiceTypeEnum.TICKET
  | ServiceTypeEnum.JOB
  | ServiceTypeEnum.HOTEL
  | ServiceTypeEnum.TRAVEL;

export interface BaseMailData {
  subject: string;
  serviceType: ServiceType;
  attachment?: {
    content: string;
    filename: string;
  };
}
