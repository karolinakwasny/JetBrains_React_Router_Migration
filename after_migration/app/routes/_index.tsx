import React from 'react';
import '@rescui/typography/lib/font-jb-sans-auto.css';


import hljs from 'highlight.js/lib/core';
import kotlin from 'highlight.js/lib/languages/kotlin';
import 'highlight.js/styles/github.css';

import {ThemeProvider} from '@rescui/ui-contexts';

import {HeaderSection} from '../components/index/header-section';
import {LatestFromKotlinSection} from '../components/index/latest-from-kotlin-section';
import {WhyKotlinSection} from '../components/index/why-kotlin-section';
import {UsageSection} from '../components/index/usage-section';
import {StartSection} from '../components/index/start-section';

import '../components/index/index.scss';
import '../styles/grid.scss';
import '../styles/global.scss';

if (!hljs.getLanguage('kotlin')) {
  hljs.registerLanguage('kotlin', kotlin);
}

function OverviewPageContent() {
    return <div className="overview-page">
        <HeaderSection/>
        <LatestFromKotlinSection/>
        <WhyKotlinSection/>
        <UsageSection/>
        <StartSection/>
    </div>
}

export default function IndexRoute() {
  return (
    <ThemeProvider theme="dark">
      <OverviewPageContent />
    </ThemeProvider>
  );
}