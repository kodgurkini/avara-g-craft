import { RefreshIcon } from "./icons";
import { useAppCardStore } from "../store/app-card-store";
import Tooltip from "./tooltip";
import useSound from "use-sound";
import swosh from "../assets/swosh_11labs.mp3";
import SizeToggleGroup from "./size-toggle-group";
const WidgetCard = ({
  item,
  settings,
}: {
  item: React.ReactNode;
  settings: React.ReactNode;
}) => {
  const randomize = useAppCardStore((state) => state.randomize);
  const [swoshIt] = useSound(swosh);
  const randomizeMiddleware = () => {
    randomize();
    swoshIt();
  };
  return (
    <div className="widget-card">
      <div className="widget-card-main">
        <div style={{ position: "absolute", top: "16px", left: "16px" }}>
          <SizeToggleGroup />
        </div>
        <div style={{ position: "absolute", top: "16px", right: "16px" }}>
          <div onClick={randomizeMiddleware}>
            <Tooltip content="Randomize" className="icon-box">
              <RefreshIcon />
            </Tooltip>
          </div>
        </div>
        {item}
      </div>
      <div className="widget-card-footer">{settings}</div>
    </div>
  );
};

export default WidgetCard;
