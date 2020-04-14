/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core';
import MessagePanes from './components/MessagePanes';
import RevisionControls from './components/RevisionControls';
import { ReactComponent as GitHubIcon } from './icons/github.svg';
import { ReactComponent as EmailIcon } from './icons/email.svg';

const globalStyles = css`
  html {
    box-sizing: border-box;
  }

  body,
  html {
    color: #DBEDF3;
    background-color: #404b69;
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;

const containerStyle = css`
  max-width: 1240px;
  margin: 0 auto;
  padding-left: 18px;
  padding-right: 18px;
`;

const navBarStyle = css`
  background-color: #283149;
  padding: 10px 0;

  @media (min-width: 576px) {
    display: flex;
    padding: 0;
  }
`;

const linkStyle = css`
  display: flex;
  align-items: center;
  color: rgba(219, 237, 243, 0.7);
  padding: 12px;
  margin: 0 12px;
  text-decoration: none;
`;

const iconStyle = css`
  height: 24px;
  width: 24px;
  margin-right: 7px;
`

function App() {
  return (
    <main>
      <Global styles={globalStyles} />

      <header css={{ marginBottom: -70, backgroundColor: 'rgba(40, 49, 73, 0.7)' }}>
        <div css={navBarStyle}>
          <a href="/" css={[linkStyle, { marginRight: 'auto', fontWeight: 700 }]}>
            Text to Emoji
          </a>

          <a href="mailto:hello@juliantrueflynn.com" css={linkStyle}>
            <EmailIcon css={iconStyle} />
            hello@juliantrueflynn.com
          </a>

          <a
            href="https://github.com/juliantrueflynn/text-to-emoji-typescript"
            target="_blank"
            rel="noopener noreferrer"
            css={linkStyle}
          >
            <GitHubIcon css={iconStyle} />
            GitHub
          </a>
        </div>

        <RevisionControls css={[containerStyle, { paddingTop: 10, paddingBottom: 80 }]} />
      </header>

      <form css={containerStyle}>
        <MessagePanes />
      </form>
    </main>
  );
}

export default App;
