import cls from "classnames";

export default function Iphone1({
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
      <div
        className={`relative flex justify-center w-full border-4 border-black rounded-2xl bg-black`}
        style={{ boxShadow: "var(--iphone-shadow)" }}
      >
        {/* 手机内容 */}
        <div
          className={`${videoConfig.aspect} w-full rounded-xl overflow-hidden`}
        >
          <video
            id="beauty-video"
            className="h-full rounded-xl"
            src={videoConfig.src}
            controls
            loop
            {...videoProps}
          />
        </div>

        {/* 灵动岛 */}
        <span className="border border-black bg-black w-16 h-4 rounded-xl absolute top-0.5">
          <div
            className="bg-green-400 w-1 h-1 rounded-full absolute top-1/2 right-0"
            style={{
              transform: "translateY(-0.125rem) translateX(-0.25rem)",
            }}
          />
        </span>

        {/* 物理按键 */}
        <span className="absolute -right-2 top-14 border-4 border-black h-7 rounded-md"></span>
        <span className="absolute -right-2 bottom-36 border-4 border-black h-10 rounded-md"></span>
      </div>
    </div>
  );
}
