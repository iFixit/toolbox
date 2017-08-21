import { plugins } from 'glamor';

function specificityPlugin({ selector, style }) {
   const prefixedSelector = selector
      .split(',')
      .map(sel => `[data-reactroot] ${sel.trim()}`)
      .join(', ');
   return { prefixedSelector, style };
}

plugins.add(specificityPlugin);
