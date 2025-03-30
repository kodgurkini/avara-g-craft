import PageTitle from "../components/page-title";

function ProfilePage() {
  return (
    <div className="page">
      <PageTitle
        title="Profile Card"
        subtitle="Try out our customizeable profile widget."
      />

      <section>
        <p>Some interactive thingy here</p>
      </section>
    </div>
  );
}

export default ProfilePage;
