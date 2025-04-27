const EntryHeader = ({ title }: { title: string }) => {
  return (
    <section className="page-header">
      <div
        className="page-header__bg"
        style={{
          backgroundImage: `url(/images/backgrounds/page-header-bg-1-1.jpg)`,
        }}
      ></div>
      <div className="container">
        <ul className="thm-breadcrumb list-unstyled">
          <li>
            <a href="\">Home</a>
          </li>
          <li>/</li>
          <li>
            <span>{title}</span>
          </li>
        </ul>
        <h2>{title}</h2>
      </div>
    </section>
  );
};

export default EntryHeader;
