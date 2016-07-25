import { configure } from '@kadira/storybook';

import '../css/main.css';

function loadStories() {
  require('../stories/Main.js');
}

configure(loadStories, module);
