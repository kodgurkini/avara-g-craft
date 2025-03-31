import { useAppCardStore } from "../store/app-card-store";
import Input from "./input";
import AppSymbol from "./app-symbol";
import { shapes } from "./shape-data";
import DropdownPopover from "./dropdown-popover";
import { HexColorPicker } from "react-colorful";
import { Popover as BasePopover } from "@base-ui-components/react/popover";
import useSound from "use-sound";
import swosh from "../assets/swosh_01.mp3";

const AppCardSettings = () => {
  const { appName, symbolShape, symbolColor, setAppName } = useAppCardStore();

  return (
    <div className="app-card-settings">
      <div className="settings-section">
        <div className="setting-item">
          <div>
            <label className="setting-item-label">
              App Name
              {appName.length > 15 && (
                <span className="max-chars-notice"> (max 16 characters)</span>
              )}
            </label>
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
        </div>
      </div>
    </div>
  );
};

export default AppCardSettings;

const SymbolGrid = () => {
  const { symbolShape, setSymbolShape } = useAppCardStore();
  const [swoshIt] = useSound(swosh);

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
            onClick={() => {
              setSymbolShape(index);
              swoshIt();
            }}
          />
        </BasePopover.Close>
      ))}
    </div>
  );
};

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
