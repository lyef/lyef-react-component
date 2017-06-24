import { configure, addDecorator } from '@storybook/react';
import GithubCorner from '@personare/react-storybook-decorator-github-corner';

addDecorator(GithubCorner);

import '../css/main.css';

function loadStories() {
  require('../stories/Main.js');
}

configure(loadStories, module);
