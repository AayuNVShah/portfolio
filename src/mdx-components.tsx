import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => <h2 className="mt-10 font-display text-3xl text-charcoal" {...props} />,
    p: (props) => <p className="leading-relaxed" {...props} />,
    strong: (props) => <strong className="font-semibold text-maroon" {...props} />,
    a: (props) => <a className="text-maroon underline" {...props} />,
    ...components,
  };
}
