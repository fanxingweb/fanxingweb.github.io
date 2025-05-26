import styled from "styled-components";

import { ThemeMode } from "@/enum";
import { useGlobalActions, useGlobalState } from "@/store/globalStore";

export default function ClientThemeSwitcher() {
  const globalState = useGlobalState();
  const { setGlobalState } = useGlobalActions();

  return (
    <StyledThemeSwitcher>
      <label className="switch">
        <input
          type="checkbox"
          defaultChecked={
            globalState.themeMode === ThemeMode.Dark ? false : true
          }
          onClick={(e) => {
            setGlobalState({
              ...globalState,
              themeMode: e.target?.checked ? ThemeMode.Light : ThemeMode.Dark,
            });
          }}
        />
        <span className="slider" />
      </label>
    </StyledThemeSwitcher>
  );
}

const StyledThemeSwitcher = styled.div`
  font-size: var(--theme-btn-size);

  .switch {
    position: relative;
    display: inline-block;
    width: 3.5em;
    height: 2em;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    // --background: #28096b;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--background);
    transition: 0.5s;
    border-radius: 30px;
    box-shadow: 0 0 5px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1.4em;
    width: 1.4em;
    border-radius: 50%;
    left: 10%;
    bottom: 15%;
    box-shadow: inset 8px -4px 0px 0px #fff000;
    background: var(--background);
    transition: 0.5s;
  }

  input:checked + .slider {
    // background-color: #522ba7;
    background-color: #fff;
  }

  input:checked + .slider:before {
    transform: translateX(100%);
    box-shadow: inset 15px -4px 0px 15px #fff000;
  }
`;
