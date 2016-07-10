import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/Foo.js');
}

configure(loadStories, module);
