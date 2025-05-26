import cls from "classnames";
import styled from "styled-components";

/**
 * https://uiverse.io/Rodrypaladin/plastic-otter-67
 */
export default function Iphone2({
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
      <StyledIphone2>
        <div
          className="card relative bg-black w-full p-1 rounded-[1.75rem]"
          style={{ border: "2px solid rgb(40, 40, 40)" }}
        >
          <div className="btn1 top-[28%] h-10"></div>
          <div className="btn2 top-[18%] h-7"></div>
          <div className="btn3 top-[32%] h-7"></div>
          <div className="btn4"></div>
          <div className="card-int h-full rounded-3xl overflow-hidden">
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
          </div>
          <div className="top h-4 rounded-lg top-2">
            <div className="camera top-1 bg-green-400 w-1 h-1 absolute"></div>
            <div className="speaker top-[-0.32rem]"></div>
          </div>

          <div
            className="btn-home bg-black w-3 h-3 rounded-full absolute bottom-1 left-1/2 translate-x-[-50%]"
            title="换一位"
            onClick={onClick}
          />
        </div>
      </StyledIphone2>
    </div>
  );
}

const StyledIphone2 = styled.div`
  .card {
    box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.486);
  }

  .top {
    position: absolute;
    right: 50%;
    transform: translate(50%, 0%);
    width: 35%;
    background-color: black;
  }

  .speaker {
    position: absolute;
    right: 50%;
    transform: translate(50%, 0%);
    width: 40%;
    height: 2px;
    border-radius: 2px;
    background-color: rgba(20, 20, 20, 0.75);
  }

  .camera {
    position: absolute;
    border-radius: 50%;
    top: 50%;
    right: 15%;
    transform: translate(50%, -50%);
  }

  .btn-home {
    cursor: pointer;
    box-shadow: 0px 0px 3px #595959 inset;
    transition: all 0.5s;
  }

  .btn-home:hover {
    transform: translateX(-50%) scale(1.3);
  }

  .btn1,
  .btn2,
  .btn3,
  .btn4 {
    position: absolute;
    width: 2px;
  }

  .btn1,
  .btn2,
  .btn3 {
    right: -4px;
    background-image: linear-gradient(
      to right,
      #111111,
      #222222,
      #333333,
      #464646,
      #595959
    );
  }

  .btn2,
  .btn3 {
    transform: scale(-1);
    left: -4px;
    transform: scale(-1);
  }
`;
