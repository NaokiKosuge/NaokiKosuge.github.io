/**
 * # ホームページ
 */
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './index.module.scss';
import { PROFILE_PICTURE_URL } from '@site/src/constants';

/**
 * ## ヒーロー
 *
 * @see https://infima.dev/docs/components/hero
 */
const Hero = () => {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src={'/img/logo.svg'} alt="" width={100} />
        <h1 className="hero__title">Libra NK</h1>
        <p className="hero__subtitle">@NaokiKosuge のプロフィールサイトへようこそ！</p>
      </div>
    </header>
  );
};

/**
 * ## Feature セクション
 */
const FeaturesSection = () => {
  const featureList: Array<{
    title: string
    to: string
    toText: string
    Svg: any
    description: JSX.Element
    button?: {
      text: string
      href: string
    }
  }> = [
    {
      title: 'ウェブ技術に関するノート',
      to: './notes',
      toText: 'ノートを閲覧する',
      Svg: require('../../static/img/notes/undraw_docusaurus_tree.svg').default,
      description: (
        <>
          私が学んだウェブ技術をノートに記録しています。個人的な利用のためですが、誰でも閲覧できるように公開しています。
        </>
      ),
    },
    {
      title: 'ブログ',
      to: './blog',
      toText: 'ブログを閲覧する',
      Svg: require('../../static/img/notes/undraw_docusaurus_react.svg').default,
      description: (
        <>
          日記です。生活している中で体験したことや感じたことなどを気ままに綴ります。<Link
          to={'https://twitter.com/NaokiKosuge'}>Twitter</Link> で発信するにはボリュームが大きすぎる場合に載せています。
        </>
      ),
    },
  ];

  const Feature = ({ Svg, title, description, to, toText }) => {
    return (
      <div className={clsx('col')}>
        <div className="text--center">
          {/*<Svg className={styles.featureSvg} alt={title} />*/}
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className={'text--center'}>
          <Link className="button button--primary button--lg" to={to}>{toText}</Link>
        </div>
      </div>
    );
  };

  return (
    <section className={'padding-vert--xl'}>
      <div className="container">
        <div className="row">
          {featureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * ## 「プロフィール」セクション
 */
const ProfileSection = () => {
  return (
    <section id={'profile'} className={'padding-vert--md'}>
      <div className="container">
        <h2>プロフィール</h2>
        {/* avatar */}
        <div className="avatar">
          {/* photo */}
          <img
            className="avatar__photo avatar__photo--xl"
            src={PROFILE_PICTURE_URL}
            alt=""
          />
          {/* intro */}
          <div className="avatar__intro">
            {/* name */}
            <div className="avatar__name">Naoki Kosuge 🇯🇵</div>
            {/* subtitle */}
            <small className="avatar__subtitle">
              フロントエンド・デベロッパーをしています👨🏻‍💻 <br /><em>マインクラフト</em>のように、モダンな技術の採掘を日々行っており、学んだことは<Link to="notes">ノート</Link>に記すようにしています。
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * ## 「作品」セクション
 */
const WorksSection = () => {
  return (
    <section id={'works'} className={'padding-vert--md'}>
      {/* 作品1 */}
      <div className="container">
        <h2>作品</h2>
        <div className={'row'}>
          <div className="col">
            <div className={'card'}>
              <div className="card__header">
                <h3>PDF Viewer</h3>
                <div>
                  <Link to={'https://www.electronjs.org/'}><span className="badge badge--secondary margin-right--xs">Electron</span></Link>
                  <Link to={'https://ja.reactjs.org'}><span className="badge badge--secondary margin-right--xs">React</span></Link>
                </div>
              </div>
              <div className="card__body">
                <p>PDF を翻訳しながら閲覧できるデスクトップアプリケーション。</p>
              </div>
              <div className="card__footer">
                <Link className={'button button--primary'} to={'https://github.com/NaokiKosuge/pdf-viewer'}>ソースコード</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="@NaokiKosuge のプロフィールサイト">
      <Hero />
      <main>
        <FeaturesSection />
        <ProfileSection />
        <WorksSection />
      </main>
    </Layout>
  );
};

export default Home;
