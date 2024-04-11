import { CSSProperties, FunctionComponent } from "react";

type FrameComponentProps = {
  from: string;
  vector: string;
  vector2: string;
  propFlex?: string;
  propPadding?: string;
  propMinWidth?: string;
  propMinHeight?: string;
};

const FrameComponent: FunctionComponent<FrameComponentProps> = ({
  from,
  vector,
  vector2,
  propFlex,
  propPadding,
  propMinWidth,
  propMinHeight,
}) => {
  const frameDivStyle: CSSProperties = {
    flex: propFlex,
    padding: propPadding,
    minWidth: propMinWidth,
  };

  return (
    <div className={`flex ${propFlex} ${propPadding}`} style={frameDivStyle}>
      <b className={`min-w-36 ${propMinWidth}`}>{from}</b>
      <button className="flex items-center cursor-pointer border-0 py-1 px-6 gap-1 bg-gray-300 rounded-md overflow-x-auto">
        <img
          className="h-6 w-6 flex-shrink-0"
          alt=""
          src={vector}
          style={{ minHeight: propMinHeight }}
        />
        <b className="relative font-bold text-xl">ETH</b>
        <img className="h-3 w-6 flex-shrink-0" alt="" src={vector2} />
      </button>
    </div>
  );
};

export default FrameComponent;
