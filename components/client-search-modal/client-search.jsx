import styled from "styled-components";

export default function ClientSearch({
  outStyle,
  placeholder = "搜索内容",
  ...inputProps
}) {
  return (
    <StyledClientSearch>
      <div className="container-input" style={outStyle}>
        <input
          type="text"
          placeholder={placeholder}
          name="text"
          className="input"
          {...inputProps}
        />
        <span className="iconfont icon-sousuo" style={{ fontSize: "1.2rem" }} />
      </div>
    </StyledClientSearch>
  );
}

const StyledClientSearch = styled.div`
  width: fit-content;
  margin: 0 auto;

  .container-input {
    position: relative;
  }

  .input {
    width: 10rem;
    padding: 0.625rem 0px 0.625rem 2.5rem;
    border-radius: 9999px;
    border: solid 1px #333;
    transition: all 0.2s ease-in-out;
    outline: none;
    opacity: 0.8;
    text-indent: 0.5rem;
    background: var(--search-background);
  }

  .container-input .icon-sousuo {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translate(0, -50%);
    color: var(--foreground);
  }

  .input:focus {
    opacity: 1;
    width: 16rem;
  }
`;
