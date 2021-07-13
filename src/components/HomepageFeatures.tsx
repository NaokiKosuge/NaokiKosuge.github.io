import React, { FC, ReactElement } from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.scss';

const FeatureList: Array<{
  title: string;
  Svg: any;
  description: ReactElement;
  button?: {
    text: string;
    href: string;
  };
}> = [
  {
    title: 'プロフィール',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
        <>
          こんにちは。私はフロントエンドエンジニアを目指している @NaokiKosuge と申します。このサイトは私のポートフォリオサイトです。
        </>
    ),
  },
  {
    title: 'ウェブ技術に関するドキュメント',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
        <>
          私が学んだウェブ技術をこのサイトに記録しています。個人的な利用のためのノートですが、誰でも閲覧できるように公開しています。
        </>
    ),
  },
  {
    title: 'ブログ',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
        <>
          日記です。生活している中で体験したことや感じたことなどを気ままに綴ります。
        </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
      <div className={clsx('col col--4')}>
        <div className="text--center">
          <Svg className={styles.featureSvg} alt={title} />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
  );
}

const HomepageFeatures: FC = () => {
  return (
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
  );
};

export default HomepageFeatures;