import { RefreshIcon } from "./icons";
import { useAppCardStore } from "../store/app-card-store";

const WidgetCard = ({
  item,
  settings,
}: {
  item: React.ReactNode;
  settings: React.ReactNode;
}) => {
  const randomize = useAppCardStore((state) => state.randomize);

  return (
    <div className="widget-card">
      <div className="widget-card-main">
        <div style={{ position: "absolute", top: "16px", right: "16px" }}>
          <button className="icon-box" onClick={randomize}>
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
