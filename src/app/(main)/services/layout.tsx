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
          <div className="grid grid-cols-12 flex-wrap lg:gap-7 gap-y-7">
            <div className="lg:col-span-4 col-span-12">
              <div className="service-sidebar h-full">
                <div className="service-sidebar__category lg:pe-5">
                  <Sidebar />
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 col-span-full">
              <div className="service-details__content">{children}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
