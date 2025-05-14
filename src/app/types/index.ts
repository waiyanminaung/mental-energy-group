import { ServiceTypeEnum } from "../constant";

export type ServiceType =
  | ServiceTypeEnum.MEDICAL_TOURISM
  | ServiceTypeEnum.TICKET;

export interface BaseMailData {
  subject: string;
  serviceType: ServiceType;
  attachment?: {
    content: string;
    filename: string;
  };
}
