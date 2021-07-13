/**
 * # ホームページ
 */
import React, { FC } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// @ts-ignore
import styles from './index.module.scss';
import HomepageFeatures from '../components/HomepageFeatures';

const HomepageHeader: FC = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">@NaokiKosuge のポートフォリオサイトへようこそ！</h1>
        </div>
      </header>
  );
};

/**
 * ## プロフィール・セクション
 */
const ProfileSection: FC = () => {
  return (
      <section>
        <div className="container">
          <h2>プロフィール</h2>
        </div>
      </section>
  );
};

const InfoSection: FC = () => {
  return (
      <section>
        <div className="container">
          <h2>このサイトについて</h2>
          <dl>
            <dt>名前</dt>
            <dd>小菅直樹</dd>
          </dl>
        </div>
      </section>
  );
}

const Home: FC = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
      <Layout
          title={`Hello from ${siteConfig.title}`}
          description="Description will go into a meta tag in <head />">
        <HomepageHeader />
        <main>
          <HomepageFeatures />
          {/*<ProfileSection />*/}
          {/*<InfoSection />*/}
        </main>
      </Layout>
  );
};

export default Home;
