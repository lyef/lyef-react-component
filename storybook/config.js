import { configure } from '@kadira/storybook';

import '../css/main.css';

function loadStories() {
  require('../stories/Counter.js');
}

configure(loadStories, module);
