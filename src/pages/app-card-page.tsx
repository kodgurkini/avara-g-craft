import WidgetCard from "../components/widget-card";
import PageTitle from "../components/page-title";
import AppSymbol from "../components/app-symbol";
import { useAppCardStore } from "../store/app-card-store";
import "../styles/app-card.css";
import Input from "../components/input";
import { shapes } from "../components/shape-data";
import { Popover as BasePopover } from "@base-ui-components/react/popover";
import DropdownPopover from "../components/dropdown-popover";
import { HexColorPicker } from "react-colorful";

function AppCardPage() {
  return (
    <div className="page">
      <PageTitle
        title="Profile Card"
        subtitle="Try out our customizeable profile widget."
      />

      <section>
        <WidgetCard item={<AppPreviewCard />} settings={<AppCardSettings />} />
      </section>
    </div>
  );
}

export default AppCardPage;

const AppPreviewCard = () => {
  const { appName, symbolShape, symbolColor, size } = useAppCardStore();

  return (
    <div className={`app-card size-${size}`}>
      <div className="app-avatar-wrapper">
        <AppSymbol shapeKey={symbolShape} color={symbolColor} />
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

const AppCardSettings = () => {
  const { appName, symbolShape, symbolColor, setAppName } = useAppCardStore();

  return (
    <div className="app-card-settings">
      <div className="settings-section">
        <div className="setting-item">
          <div>
            <label className="setting-item-label">App Name</label>
            <Input value={appName} onChange={(value) => setAppName(value)} />
          </div>
          <div>
            <label className="setting-item-label">Symbol</label>
            <div style={{ display: "flex", gap: "8px" }}>
              <div style={{ flex: 1 }}>
                <DropdownPopover
                  buttonIcon={
                    <>
                      <div
                        style={{
                          width: "16px",
                          height: "16px",
                          borderRadius: "4px",
                          margin: "auto 8px",
                          backgroundColor: symbolColor,
                        }}
                        className="shape-popover-preview"
                      />
                      <span style={{ fontWeight: "400" }}>
                        {symbolColor.toUpperCase()}
                      </span>
                    </>
                  }
                >
                  <ColorContent />
                </DropdownPopover>
              </div>
              <div style={{ flex: 1 }}>
                <DropdownPopover
                  buttonIcon={
                    <>
                      <AppSymbol
                        shapeKey={symbolShape}
                        color={symbolColor}
                        shapeOnly={true}
                        className="shape-popover-preview"
                      />
                      <span style={{ fontWeight: "400" }}>
                        {shapes[symbolShape].name}
                      </span>
                    </>
                  }
                >
                  <SymbolGrid />
                </DropdownPopover>
              </div>
            </div>
          </div>
          <div></div>

          {/*  <label htmlFor="app-name">App Name</label>
          <input
            id="app-name"
            type="text"
            value={appName}
            onChange={(e) => setAppName(e.target.value)}
          />
        </div>

        <div className="setting-item">
          <label>Shape</label>
          <div className="shape-selector">
            {shapes.map((shape, index) => (
              <button
                key={index}
                className={`shape-button ${
                  index === symbolShape ? "active" : ""
                }`}
                onClick={() => setSymbolShape(index)}
                title={shape.name}
              >
                <AppSymbol shapeKey={index} color={symbolColor} />
              </button>
            ))}
          </div>
        </div>

        <div className="setting-item">
          <label>Color</label>
          <input
            type="color"
            value={symbolColor}
            onChange={(e) => setSymbolColor(e.target.value)}
          />
        </div>

        <div className="setting-item">
          <label>Size</label>
          <ExampleSelect
            items={[
              { value: "small", label: "Small" },
              { value: "medium", label: "Medium" },
              { value: "large", label: "Large" },
            ]}
            defaultValue={size}
            onValueChange={(value) =>
              setSize(value as "small" | "medium" | "large")
            }
          />*/}
        </div>
      </div>
    </div>
  );
};

const SymbolGrid = () => {
  const { symbolShape, setSymbolShape } = useAppCardStore();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "8px",
      }}
    >
      {shapes.map((shape, index) => (
        <BasePopover.Close
          className={`shape-button ${symbolShape === index ? "active" : ""}`}
        >
          <AppSymbol
            key={index}
            shapeKey={index}
            shapeOnly={true}
            onClick={() => setSymbolShape(index)}
          />
        </BasePopover.Close>
      ))}
    </div>
  );
};

// ... existing code ...
const ColorContent = () => {
  const { symbolColor, setSymbolColor } = useAppCardStore();

  return (
    <HexColorPicker
      color={symbolColor}
      onChange={setSymbolColor}
      style={{ cursor: "pointer" }}
    />
  );
};
