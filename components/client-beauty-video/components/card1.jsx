import cls from "classnames";

import { Button5 as ClientPlayButton } from "../../uiverse-buttons";

export default function Card1({
  autoHidden,
  videoConfig,
  onClick = () => {},
  ...videoProps
}) {
  return (
    <div
      className={cls("h-full p-6", {
        ["auto-hidden-on-1080"]: autoHidden,
      })}
    >
      <div className={`mx-auto w-full ${videoConfig.aspect} beauty-card`}>
        <video
          id="beauty-video"
          className="h-full"
          src={videoConfig.src}
          controls
          loop
          {...videoProps}
        />
      </div>

      <div className="flex gap-6 justify-center mt-6">
        <ClientPlayButton text="换一位" onClick={onClick} />
      </div>
    </div>
  );
}
