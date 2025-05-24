import { redirect } from "next/navigation";
import { servicesData } from "../data";
import { SERVICE_DETAIL_ROUTE } from "../../RouteNames";

export default function ServicesPage() {
  return redirect(SERVICE_DETAIL_ROUTE(servicesData[0].link));
}
