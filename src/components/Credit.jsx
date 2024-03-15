// This file defines a React component named `Credit`. 
// The component contains two helper functions `discordIcon` and `telegramIcon` which return SVG elements representing Discord and Telegram icons respectively.
// The SVG icons use the `fill` attribute to set their color, which is set to a CSS variable `--fg`.
// However, the `Credit` component itself doesn't render anything visible as it doesn't return any JSX from its body.
// To use the icons, the `discordIcon` and `telegramIcon` functions need to be called somewhere in the JSX that the `Credit` component returns.
import styled from "styled-components";
import CreditButton from "./CreditButton";
import Title from "./Title";

const Credit = () => {
  const discordIcon = () => (
    <svg width="32" height="31" viewBox="0 0 32 31" fill="none">
      <g clipPath="url(#clip0_82_14)">
        <path
          d="M27.0511 5.78955C25.0791 4.90024 22.9654 4.24293 20.755 3.86916C20.7353 3.86538 20.7149 3.86782 20.6967 3.87613C20.6784 3.88444 20.6632 3.89822 20.6532 3.91556C20.3825 4.39115 20.0809 5.01109 19.8696 5.50085C17.5252 5.15059 15.1419 5.15059 12.7976 5.50085C12.5622 4.95806 12.2967 4.42881 12.0024 3.91556C11.9924 3.89801 11.9773 3.88392 11.9591 3.87517C11.9409 3.86641 11.9205 3.86342 11.9006 3.86658C9.69145 4.24035 7.57773 4.89767 5.60449 5.78827C5.58751 5.79539 5.57312 5.80753 5.56325 5.82306C1.55233 11.7196 0.452932 17.4705 0.992962 23.1492C0.994465 23.1631 0.998782 23.1765 1.00565 23.1887C1.01252 23.2009 1.0218 23.2116 1.03292 23.22C3.37399 24.9245 5.98514 26.2228 8.75703 27.0608C8.77636 27.0668 8.79702 27.0668 8.81634 27.0608C8.83565 27.0548 8.85271 27.0431 8.8653 27.0273C9.46177 26.2296 9.99034 25.3833 10.4454 24.4973C10.4518 24.4852 10.4554 24.4719 10.4561 24.4582C10.4568 24.4446 10.4546 24.4309 10.4496 24.4182C10.4446 24.4055 10.4369 24.394 10.4271 24.3845C10.4172 24.3751 10.4055 24.3678 10.3926 24.3633C9.56 24.0497 8.75328 23.6714 7.97985 23.2316C7.96596 23.2237 7.95424 23.2125 7.94577 23.1989C7.9373 23.1853 7.93233 23.1698 7.93131 23.1539C7.93028 23.1379 7.93324 23.1219 7.93992 23.1074C7.94659 23.0928 7.95677 23.0802 7.96954 23.0705C8.13194 22.9507 8.29433 22.8257 8.449 22.7006C8.46292 22.6894 8.47969 22.6822 8.49744 22.68C8.51519 22.6777 8.53322 22.6804 8.54953 22.6877C13.6109 24.9613 19.0924 24.9613 24.0944 22.6877C24.1108 22.6799 24.129 22.6769 24.147 22.6789C24.165 22.681 24.1821 22.6881 24.1962 22.6993C24.3509 22.8257 24.512 22.9507 24.6757 23.0705C24.6886 23.08 24.6989 23.0925 24.7058 23.1069C24.7127 23.1213 24.7159 23.1372 24.7152 23.1532C24.7144 23.1691 24.7097 23.1847 24.7014 23.1983C24.6932 23.212 24.6817 23.2235 24.668 23.2316C23.8972 23.675 23.0956 24.0501 22.2539 24.362C22.241 24.3667 22.2292 24.3741 22.2194 24.3837C22.2096 24.3933 22.2019 24.4049 22.1969 24.4177C22.1919 24.4305 22.1897 24.4442 22.1904 24.4579C22.1911 24.4717 22.1948 24.4851 22.2011 24.4973C22.6651 25.3827 23.1961 26.2257 23.7799 27.026C23.7921 27.0425 23.809 27.0547 23.8284 27.0612C23.8477 27.0677 23.8686 27.068 23.8882 27.0621C26.6649 26.2265 29.2803 24.9275 31.6239 23.22C31.6354 23.2121 31.645 23.2017 31.6521 23.1897C31.6592 23.1777 31.6636 23.1643 31.6652 23.1504C32.3096 16.585 30.5851 10.8805 27.091 5.82564C27.0824 5.80922 27.0683 5.79641 27.0511 5.78955ZM11.202 19.6912C9.67857 19.6912 8.42193 18.3134 8.42193 16.6237C8.42193 14.9327 9.65408 13.5562 11.202 13.5562C12.7615 13.5562 14.0065 14.9443 13.9821 16.6237C13.9821 18.3147 12.7499 19.6912 11.202 19.6912V19.6912ZM21.4806 19.6912C19.9559 19.6912 18.7006 18.3134 18.7006 16.6237C18.7006 14.9327 19.9314 13.5562 21.4806 13.5562C23.0401 13.5562 24.2852 14.9443 24.2607 16.6237C24.2607 18.3147 23.0414 19.6912 21.4806 19.6912V19.6912Z"
          fill="rgb(var(--fg))"
        />
      </g>
      <defs>
        <clipPath id="clip0_82_14">
          <rect
            width="30.9326"
            height="30.9326"
            fill="rgb(var(--fg))"
            transform="translate(0.865234)"
          />
        </clipPath>
      </defs>
    </svg>
  );
  const telegramIcon = () => (
    <svg width="31" height="31" viewBox="0 0 31 31" fill="none">
      <path
        d="M28.921 5.9574L24.837 25.2177C24.5286 26.5768 23.7253 26.9152 22.5837 26.2753L16.3605 21.6895L13.3581 24.5778C13.0256 24.9104 12.7481 25.1878 12.1073 25.1878L12.5548 18.8505L24.0878 8.42911C24.5895 7.98252 23.9786 7.73409 23.3087 8.18164L9.05074 17.1598L2.91256 15.2381C1.57763 14.8215 1.55346 13.9032 3.19096 13.2623L27.1994 4.01252C28.3111 3.59589 29.2835 4.25998 28.921 5.95837V5.9574Z"
        fill="rgb(var(--fg))"
      />
    </svg>
  );

  return (
    <Div id="Credit" className="container">
      <Title text="Credit" />
      <Content>
        <A
          href="https://www.youtube.com/c/ErikDubois"
          target="_blank"
          rel="noreferrer"
        >
          <Crown width="191" height="101" viewBox="0 0 191 101" fill="none">
            <path
              d="M38 75V74.4406L37.5233 74.1478L9.02326 56.6478L7.97674 58.3522L36 75.5594V100V101H37H154.5H155.5V100V75.5662L182.514 59.3575L181.486 57.6425L153.986 74.1425L153.5 74.4338V75V99H38V75ZM28.5 42V42.5507L28.9654 42.8451L53 58.0507V70H55V57.5V56.9493L54.5346 56.6549L30.5 41.4493V28H28.5V42ZM78.5 52.5V51.9803L78.0746 51.6816L55 35.4803V17.5H53V36V36.5197L53.4254 36.8184L76.5 53.0197V70H78.5V52.5ZM114.425 51.6816L114 51.9803V52.5V70H116V53.0197L139.075 36.8184L139.5 36.5197V36V17.5H137.5V35.4803L114.425 51.6816ZM136.949 57.6654L136.5 57.9618V58.5V70H138.5V59.0382L163.051 42.8346L163.5 42.5382V42V28H161.5V41.4618L136.949 57.6654ZM98 70V9H96V70H98ZM4.5 59C6.433 59 8 57.433 8 55.5C8 53.567 6.433 52 4.5 52C2.567 52 1 53.567 1 55.5C1 57.433 2.567 59 4.5 59ZM29.5 27C31.433 27 33 25.433 33 23.5C33 21.567 31.433 20 29.5 20C27.567 20 26 21.567 26 23.5C26 25.433 27.567 27 29.5 27ZM53.5 16C55.433 16 57 14.433 57 12.5C57 10.567 55.433 9 53.5 9C51.567 9 50 10.567 50 12.5C50 14.433 51.567 16 53.5 16ZM96.5 8C98.433 8 100 6.433 100 4.5C100 2.567 98.433 1 96.5 1C94.567 1 93 2.567 93 4.5C93 6.433 94.567 8 96.5 8ZM138.5 16C140.433 16 142 14.433 142 12.5C142 10.567 140.433 9 138.5 9C136.567 9 135 10.567 135 12.5C135 14.433 136.567 16 138.5 16ZM162.5 27C164.433 27 166 25.433 166 23.5C166 21.567 164.433 20 162.5 20C160.567 20 159 21.567 159 23.5C159 25.433 160.567 27 162.5 27ZM186.5 59C188.433 59 190 57.433 190 55.5C190 53.567 188.433 52 186.5 52C184.567 52 183 53.567 183 55.5C183 57.433 184.567 59 186.5 59ZM137.5 78C139.433 78 141 76.433 141 74.5C141 72.567 139.433 71 137.5 71C135.567 71 134 72.567 134 74.5C134 76.433 135.567 78 137.5 78ZM115.5 78C117.433 78 119 76.433 119 74.5C119 72.567 117.433 71 115.5 71C113.567 71 112 72.567 112 74.5C112 76.433 113.567 78 115.5 78ZM96.5 78C98.433 78 100 76.433 100 74.5C100 72.567 98.433 71 96.5 71C94.567 71 93 72.567 93 74.5C93 76.433 94.567 78 96.5 78ZM77.5 78C79.433 78 81 76.433 81 74.5C81 72.567 79.433 71 77.5 71C75.567 71 74 72.567 74 74.5C74 76.433 75.567 78 77.5 78ZM53.5 78C55.433 78 57 76.433 57 74.5C57 72.567 55.433 71 53.5 71C51.567 71 50 72.567 50 74.5C50 76.433 51.567 78 53.5 78Z"
              stroke="#FFCFF2"
              strokeWidth="2"
            />
          </Crown>
          <Frame width="313" height="168" viewBox="0 0 313 168" fill="none">
            <path
              d="M5.375 67.4L11.625 61.1358V39.8377M11.625 39.8377V26.9962M11.625 39.8377L1.625 29.8151V17.6L14.4375 4.75849M117.25 156.664H181L188.5 164.181H275M307.188 57.6906L302.188 62.7019V99.3472L307.188 104.358M31.3125 156.664H56.3125L63.8125 149.147H183.188L190.688 156.664H299.688L307.188 149.147V112.815L295 100.6V61.7623L307.188 49.5472V34.8264L290 17.6H230L222.5 25.117H102.25L91 13.8415H56.3125L47.25 4.75849H31.3125L18.5 17.6V67.4L5.375 80.5547V129.728L31.3125 156.664ZM6.625 68.966C6.625 70.5229 5.3658 71.7849 3.8125 71.7849C2.2592 71.7849 1 70.5229 1 68.966C1 67.4092 2.2592 66.1472 3.8125 66.1472C5.3658 66.1472 6.625 67.4092 6.625 68.966ZM14.125 24.8038C14.125 26.1876 13.0057 27.3094 11.625 27.3094C10.2443 27.3094 9.125 26.1876 9.125 24.8038C9.125 23.4199 10.2443 22.2981 11.625 22.2981C13.0057 22.2981 14.125 23.4199 14.125 24.8038ZM17.875 3.50566C17.875 4.8895 16.7557 6.01132 15.375 6.01132C13.9943 6.01132 12.875 4.8895 12.875 3.50566C12.875 2.12182 13.9943 1 15.375 1C16.7557 1 17.875 2.12182 17.875 3.50566ZM117.875 156.351C117.875 157.735 116.756 158.857 115.375 158.857C113.994 158.857 112.875 157.735 112.875 156.351C112.875 154.967 113.994 153.845 115.375 153.845C116.756 153.845 117.875 154.967 117.875 156.351ZM279.375 164.494C279.375 165.878 278.256 167 276.875 167C275.494 167 274.375 165.878 274.375 164.494C274.375 163.111 275.494 161.989 276.875 161.989C278.256 161.989 279.375 163.111 279.375 164.494ZM311.25 56.7509C311.25 58.1348 310.131 59.2566 308.75 59.2566C307.369 59.2566 306.25 58.1348 306.25 56.7509C306.25 55.3671 307.369 54.2453 308.75 54.2453C310.131 54.2453 311.25 55.3671 311.25 56.7509ZM311.25 105.611C311.25 106.995 310.131 108.117 308.75 108.117C307.369 108.117 306.25 106.995 306.25 105.611C306.25 104.227 307.369 103.106 308.75 103.106C310.131 103.106 311.25 104.227 311.25 105.611Z"
              stroke="#FFCFF2"
              strokeWidth="2"
            />
          </Frame>
          Erik Dubois
        </A>
        <Connector />
        <CreditButtons>
          <CreditButton
            icon={discordIcon()}
            name="GamerKing64"
            url="https://github.com/gamerking64"
          />
          <CreditButton
            icon={discordIcon()}
            name="alan#1000"
            url="https://github.com/alannxq"
          />
          <CreditButton
            icon={telegramIcon()}
            name="RoyMarkham"
            url="https://t.me/RoyMarkham"
          />
          <CreditButton
            icon={discordIcon()}
            name="Ripl3yPlays"
            url="https://twitch.tv/ripl3yplays"
          />
        </CreditButtons>
      </Content>
    </Div>
  );
};

const A = styled.a`
  text-align: center;
  color: rgb(var(--fg2));
  font-weight: bold;
  font-size: var(--fz-2);
  position: relative;
  margin-inline-end: 0.85rem;
  white-space: nowrap;

  & > svg {
    transition: fill var(--transition-duration) var(--transition-timing-function);
    & path {
      transition: stroke var(--transition-duration) var(--transition-timing-function);
      stroke: rgb(var(--fg));
    }
  }

  &:hover > svg {
    fill: rgba(var(--bg2), 20%);
    & path {
      stroke: rgb(var(--fg2));
    }
  }
`;

const Crown = styled.svg`
  position: absolute;
  inset: -100% 0 auto 0;
  width: 65%;
  height: 200%;
  transform: translateY(-60%);
  margin-inline: auto;
`;

const Frame = styled.svg`
  position: absolute;
  inset: -1.65rem auto auto -6.25rem;
  height: 250%;
  width: 250%;
`;

const Connector = styled.div`
  border-block: 2px solid rgb(var(--fg));
  height: 2.75rem;
  flex: 1;
  min-width: 4rem;
`;

const Div = styled.div`
  padding-block: var(--padding-section);
  overflow-x: hidden;
  padding-inline-start: 5rem;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 1rem 0;
  max-width: 80%;
  margin-inline: auto;
}
`;

const CreditButtons = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(1, 1fr);
  gap: 3rem 0;
  position: relative;

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
  }
  &::before {
    inset: 0 0 auto 0;
    transform: translate(-60%, -90%);
  }
  &::after {
    inset: auto 0 0;
    transform: translate(-60%, 90%);
  }

  & > div:nth-child(1)::after,
  & > div:nth-child(3)::after,
  & > div::before,
  & > div::before {
    content: "";
    height: 3px;
    background-color: rgb(var(--fg));
    position: absolute;
  }

  & > div::before,
  & > div::before {
    width: 2rem;
    inset: 35% 0 auto -.3rem ;
    transform: translate(-235%, -50%);
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    & > div:nth-child(2)::before,
    & > div:nth-child(4)::before {
      display: none;
    }

    & > div:nth-child(1)::after,
    & > div:nth-child(3)::after {
      width: 1.75rem;
      inset: 35% -.3rem 0 auto;
      transform: translate(100%, -50%);
    }
  }

  border-inline-start: 2px solid rgb(var(--fg));
   &::after,
      &::before {
        content: "";
        position: absolute;
        width: .75rem;
        height: .75rem;
        border: 2px solid rgb(var(--fg));
        border-radius: 50%;
      }
      &::before {
        inset: 0 0 auto 0;
        transform: translate(-60%, -90%);
      }
      &::after {
        inset: auto 0 0;
        transform: translate(-60%, 90%);
      }
    }
`;

export default Credit;
