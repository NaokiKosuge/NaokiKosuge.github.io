/**
 * @link https://github.com/shettypuneeth/react-codepen-embed/blob/master/src/index.js
 */
import React, {CSSProperties, FC} from 'react';

const DEFAULT_CODEPEN_USER = 'NaokiKosuge';
const SCRIPT_URL = 'https://static.codepen.io/assets/embed/ei.js';
const LOAD_STATE = {
  booting: '__booting__',
  error: '__error__',
  loading: '__loading__',
  loaded: '__loaded__',
};

const stylesBase: CSSProperties = {
  height: '300px',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid',
  margin: '1em 0',
  padding: '1em',
};

type CodepenProps = {
  title?: string,
  className?: string,
  height?: number,
  themeId?: string,
  defaultTab?:
      'html' | 'css' | 'js'
      | 'html,result' | 'css,result' | 'js,result'
      | 'result',
  slugHash: string,
  preview?: boolean,
  editable?: boolean,
  user?: string,
  styles?: CSSProperties,
  Loader?: FC<{
    isLoading: boolean,
    error: string,
  }>,
  children: never,
}

/**
 * Codepen の埋め込みコンポーネント
 */
export const Codepen: FC<CodepenProps> = (props) => {
  const [loadState, setLoadState] = React.useState(LOAD_STATE.booting);
  const [error, setError] = React.useState<string>();
  const _isMounted = React.useRef(false);

  const putScript = () => {
    const scriptId = '__codepen-embed-script__';

    const script = document.createElement('script');
    script.id = scriptId;
    script.async = true;
    script.src = SCRIPT_URL;
    script.onload = () => {
      // do not do anything if the component is already unmounted.
      if (!_isMounted.current) return;
      setLoadState(LOAD_STATE.loaded);
    };
    script.onerror = () => {
      if (!_isMounted.current) return;
      setLoadState(LOAD_STATE.error);
      setError('Failed to load the pen');
    };

    if (!document.getElementById(scriptId)) {
      document.body.appendChild(script);
    }
  };

  React.useEffect(() => {
    if (_isMounted.current === false) _isMounted.current = true;

    putScript();

    return () => {
      _isMounted.current = false;
    };
  }, []);

  const showLoader = loadState === LOAD_STATE.loading;
  const visibility = loadState === LOAD_STATE.loaded ? 'visible' : 'hidden';
  const penLink = `https://codepen.io/${props.user}/pen/${props.slugHash}/`;
  const userProfileLink = `https://codepen.io/${props.user}`;

  return (
      <>
        {showLoader && (
            props.Loader
                ? <props.Loader isLoading={loadState === LOAD_STATE.loading} error={error}/>
                : <div>Loading...</div>
        )}
        <p
            data-height={props.height}
            data-theme-id={props.themeId}
            data-slug-hash={props.slugHash}
            data-default-tab={props.defaultTab}
            data-user={props.user || DEFAULT_CODEPEN_USER}
            data-pen-title={props.title}
            data-preview={props.preview}
            data-editable={props.editable ?? true}
            className="codepen"
            style={{
              ...stylesBase,
              height: typeof props.height === 'undefined'
                  ? stylesBase.height
                  : `${props.height}px`,
              ...props.styles,
              visibility,
            }}
        >
          See the Pen <a href={penLink}>{props.title}</a>
          by {props.user} (<a href={userProfileLink}>@{props.user}</a>) on{' '}
          <a href="https://codepen.io">CodePen</a>.
        </p>
      </>
  );
};
