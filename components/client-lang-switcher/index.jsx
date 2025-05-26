import styled from "styled-components";

import { LocalEnum } from "@/enum";
import { useGlobalActions, useI18nextLng } from "@/store/globalStore";

export default function ClientLanguageSwitcher() {
  const i18nextLng = useI18nextLng();
  const { setI18nextLng } = useGlobalActions();

  return (
    <StyledLanguageSwitcher>
      <div className="toggle-button-cover">
        <div id="button-3" className="button r">
          <input
            className="checkbox"
            type="checkbox"
            defaultChecked={i18nextLng === LocalEnum.zh ? false : true}
            onClick={(e) => {
              setI18nextLng(e.target?.checked ? LocalEnum.en : LocalEnum.zh);
            }}
          />
          <div className="knobs"></div>
          <div className="layer"></div>
        </div>
      </div>
    </StyledLanguageSwitcher>
  );
}

const StyledLanguageSwitcher = styled.div`
  font-size: var(--theme-btn-size);

  .toggle-button-cover {
    display: table-cell;
    position: relative;
    box-sizing: border-box;
  }

  .button-cover {
    height: 100px;
    margin: 20px;
    background-color: #fff;
    box-shadow: 0 10px 20px -8px #c5d6d6;
    border-radius: 4px;
  }

  .button-cover:before {
    counter-increment: button-counter;
    content: counter(button-counter);
    position: absolute;
    right: 0;
    bottom: 0;
    color: #d7e3e3;
    font-size: 12px;
    line-height: 1;
    padding: 5px;
  }

  .button-cover,
  .knobs,
  .layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .button {
    position: relative;
    width: 4em;
    height: 2em;
    overflow: hidden;
    box-shadow: 0 0 5px;
  }

  .checkbox {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    z-index: 3;
  }

  .knobs {
    z-index: 2;
  }

  .layer {
    width: 100%;
    // background-color: #ebf7fc;
    background-color: var(--background);
    transition: 0.3s ease all;
    z-index: 1;
  }

  .button.r,
  .button.r .layer {
    border-radius: 100px;
  }

  #button-3 .knobs:before {
    content: "中";
    position: absolute;
    top: 2px;
    left: 4px;
    width: 20px;
    height: 20px;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 2px;
    padding: 9px 4px;
    // background-color: #03a9f4;
    background-color: var(--theme-color);
    border-radius: 50%;
    transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
  }

  #button-3 .checkbox:active + .knobs:before {
    width: 46px;
    border-radius: 100px;
  }

  #button-3 .checkbox:checked:active + .knobs:before {
    margin-left: -26px;
  }

  #button-3 .checkbox:checked + .knobs:before {
    content: "英";
    left: 24px;
    background-color: #f44336;
  }

  #button-3 .checkbox:checked ~ .layer {
    // background-color: #fcebeb;
    background-color: var(--background);
  }
`;
