import { ServiceTypeEnum } from "../constant";

export type ServiceType =
  | ServiceTypeEnum.MEDICAL_TOURISM
  | ServiceTypeEnum.TICKET
  | ServiceTypeEnum.JOB
  | ServiceTypeEnum.HOTEL
  | ServiceTypeEnum.TRAVEL
  | ServiceTypeEnum.CAR_RENTAL;

export interface BaseMailData {
  subject: string;
  serviceType: ServiceType;
  attachments?: {
    content: string;
    filename: string;
  }[];
}
