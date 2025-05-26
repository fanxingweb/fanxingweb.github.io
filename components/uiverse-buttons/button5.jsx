import styled from "styled-components";

function Button5({ text, ...buttonProps }) {
  return (
    <StyledButton>
      <button className="btn" {...buttonProps}>
        {text}
      </button>
    </StyledButton>
  );
}

export default Button5;

const StyledButton = styled.div`
  .btn {
    padding: 0.5rem 2rem;
    font-size: 1em;
    cursor: pointer;
    background-color: var(--button5-bg);
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    transition: all 0.4s;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
  }

  .btn:hover {
    border-radius: 5px;
    transform: translateY(-10px);
    box-shadow: 0 7px 0 -2px #f85959, 0 15px 0 -4px #39a2db,
      0 16px 10px -3px #39a2db;
  }

  .btn:active {
    transition: all 0.2s;
    transform: translateY(-5px);
    box-shadow: 0 2px 0 -2px #f85959, 0 8px 0 -4px #39a2db,
      0 12px 10px -3px #39a2db;
  }
`;
