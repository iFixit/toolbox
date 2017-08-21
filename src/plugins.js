import { plugins } from 'glamor';

/**
 * This prefixes `glamor` css selectors with `[data-reactroot]`
 * so that global styles don't override `glamor` styles.
 */
function specificityPlugin({ selector, style }) {
   const prefixedSelector = selector
      .split(',')
      .map(sel => `[data-reactroot] ${sel.trim()}`)
      .join(', ');
   return { selector: prefixedSelector, style };
}

plugins.add(specificityPlugin);
