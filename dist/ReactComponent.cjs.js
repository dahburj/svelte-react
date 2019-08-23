'use strict';

var internal = require('svelte/internal');
var react = require('react');
var reactDom = require('react-dom');
var svelte = require('svelte');

/* ReactComponent.svelte generated by Svelte v3.9.1 */

function create_fragment(ctx) {
	var div;

	return {
		c() {
			div = internal.element("div");
		},

		m(target, anchor) {
			internal.insert(target, div, anchor);
			ctx.div_binding(div);
		},

		p: internal.noop,
		i: internal.noop,
		o: internal.noop,

		d(detaching) {
			if (detaching) {
				internal.detach(div);
			}

			ctx.div_binding(null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	

  let container;

  svelte.afterUpdate(() => {
    const children = $$props.children;
    const component = $$props.this;

    const props = Object.assign({}, $$props);
    delete props.children;
    delete props.this;

    reactDom.render(react.createElement(component, props, children), container);
  });

  svelte.onDestroy(() => {
    reactDom.unmountComponentAtNode(container);
  });

	function div_binding($$value) {
		internal.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			$$invalidate('container', container = $$value);
		});
	}

	$$self.$set = $$new_props => {
		$$invalidate('$$props', $$props = internal.assign(internal.assign({}, $$props), $$new_props));
	};

	return {
		container,
		div_binding,
		$$props: $$props = internal.exclude_internal_props($$props)
	};
}

class ReactComponent extends internal.SvelteComponent {
	constructor(options) {
		super();
		internal.init(this, options, instance, create_fragment, internal.safe_not_equal, []);
	}
}

module.exports = ReactComponent;
