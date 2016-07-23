import { configure } from '@kadira/storybook';

import '../css/main.css';

function loadStories() {
  require('../stories/Component.js');
}

configure(loadStories, module);
