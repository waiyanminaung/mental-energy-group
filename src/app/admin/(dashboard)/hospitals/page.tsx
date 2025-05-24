import { ADMIN_DASHBOARD_ROUTE } from "@/app/RouteNames";
import { redirect } from "next/navigation";

export default function HospitalsPage() {
  return redirect(ADMIN_DASHBOARD_ROUTE("hospitals/announcements"));
}
