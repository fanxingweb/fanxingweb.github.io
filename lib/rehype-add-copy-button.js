import { visit } from 'unist-util-visit';
import { h } from 'hastscript';

export default function rehypeAddCopyButton() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'pre') {
        const button = h('button', {type: 'button', className: 'copy-button'}, 'Copy');
        node.children.unshift(button);
      }
    });
  };
}
