import WidgetCard from "../components/widget-card";
import PageTitle from "../components/page-title";
import "../styles/app-card.css";
import AppPreviewCard from "../components/app-preview-card";
import AppCardSettings from "../components/app-settings";
import DashedDivider from "../components/dashed-divider";

function AppCardPage() {
  return (
    <div className="page">
      <PageTitle title="App Card" subtitle="Create a custom app card." />
      <DashedDivider />
      <WidgetCard item={<AppPreviewCard />} settings={<AppCardSettings />} />
    </div>
  );
}

export default AppCardPage;
