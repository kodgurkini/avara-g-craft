type PageTitleProps = {
  title: string;
  subtitle?: string;
};

function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <div className="page-title">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

export default PageTitle;
