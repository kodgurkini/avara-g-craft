import AppSymbol from "./app-symbol";
import { useAppCardStore } from "../store/app-card-store";

const AppPreviewCard = () => {
  const { appName, symbolShape, size } = useAppCardStore();

  return (
    <div className={`app-card size-${size}`}>
      <div className="app-avatar-wrapper">
        <AppSymbol shapeKey={symbolShape} />
      </div>
      <div className="app-card-content">
        <h3
          className="app-card-title"
          style={{
            color: appName ? "var(--color-gray-900)" : "var(--color-gray-500)",
          }}
        >
          {appName || "No name"}
        </h3>
        <p className="app-card-subtitle">310 000 users</p>
      </div>
    </div>
  );
};

export default AppPreviewCard;
