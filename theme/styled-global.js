const { createGlobalStyle } = require("styled-components");

const { ThemeColor } = require("@/enum");

const StyledGlobalTheme = createGlobalStyle`
  body.dark {
    --theme-color: ${ThemeColor.dark};
    .simplebar-scrollbar:before {
      background-color: #cacacad9; /* 深色模式，自定义滚动条颜色 */
    }
  }
  body.light {
    --theme-color: ${ThemeColor.light};
  }
`;

export default StyledGlobalTheme;
