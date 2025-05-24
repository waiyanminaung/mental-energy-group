"use client";

import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import firebase_app from "@/lib/firebase";
import Button from "../components/Button";
import classNames from "@/utils/classNames";
import { ADMIN_DASHBOARD_ROUTE } from "@/app/RouteNames";

const menuItems = [
  { label: "Hospitals", href: "/admin/hospitals" },
  { label: "Jobs", href: "/admin/jobs" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const auth = getAuth(firebase_app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace(ADMIN_DASHBOARD_ROUTE("login"));
      }
    });

    return () => unsubscribe();
  }, [auth, router]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      router.replace(ADMIN_DASHBOARD_ROUTE("login"));
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-between">
              <div>
                <div className="flex space-x-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={classNames(
                        "rounded-md px-3 py-2 text-sm font-medium text-white",
                        pathname.startsWith(item.href)
                          ? "bg-gray-900 text-white"
                          : "text-gray-400 hover:bg-gray-700 hover:text-white"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
