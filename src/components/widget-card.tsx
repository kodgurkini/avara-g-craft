import { RefreshIcon } from "./icons";

const WidgetCard = ({
  item,
  settings,
}: {
  item: React.ReactNode;
  settings: React.ReactNode;
}) => {
  return (
    <div className="widget-card">
      <div className="widget-card-main">
        <div style={{ position: "absolute", top: "16px", right: "16px" }}>
          <button className="icon-box">
            <RefreshIcon />
          </button>
        </div>
        {item}
      </div>
      <div className="widget-card-footer">{settings}</div>
    </div>
  );
};

export default WidgetCard;
