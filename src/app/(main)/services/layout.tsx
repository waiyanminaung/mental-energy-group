import EntryHeader from "../../components/EntryHeader";
import Sidebar from "./components/Sidebar";

export default async function ServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <EntryHeader title="Service Detail" />
      <section className="service-details">
        <div className="container">
          <div className="grid grid-cols-12 flex-wrap gap-7">
            <div className="col-span-4">
              <div className="service-sidebar h-full">
                <div className="service-sidebar__category">
                  <Sidebar />
                </div>
              </div>
            </div>
            <div className="col-span-8">
              <div className="service-details__content">{children}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
