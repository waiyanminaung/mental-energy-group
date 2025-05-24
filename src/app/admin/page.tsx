import { redirect, RedirectType } from "next/navigation";

export default function AdminPage() {
  return redirect("/admin/hospitals/announcements", RedirectType.replace);
}
