import { configure } from '@kadira/storybook';

import '../css/main.css';

function loadStories() {
  require('../stories/Foo.js');
}

configure(loadStories, module);
