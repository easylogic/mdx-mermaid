/**
 * Copyright (c) Samuel Wall.
 *
 * This source code is licensed under the MIT license found in the
 * license file in the root directory of this source tree.
 */

import type mermaidAPI from 'mermaid/mermaidAPI'

/**
 * mdx-mermaid config
 */
export type Config = {
  /**
   * Theme to use.
   *
   * For available themes, see: https://github.com/mermaid-js/mermaid/blob/develop/src/themes/index.js.
   *
   * If set, this `theme` member overrides anything set by `mermaid.theme`.
   */
  theme?: {
    /**
     * Theme to use when HTML data theme is 'light'.
     *
     * Defaults to `DEFAULT_LIGHT_THEME`.
     */
    light: mermaidAPI.Theme

    /**
     * Theme to use when HTML data theme is 'dark'.
     *
     * Defaults to `DEFAULT_DARK_THEME`.
     */
    dark: mermaidAPI.Theme
  };

  /**
   * Mermaid configuration.
   */
  mermaid?: mermaidAPI.Config

  /**
   * What format to output into the mdast tree as.
   *
   * ast - ast format where a `Mermaid` component must be supplied in the parser.
   * svg - Converts the diagram to a jsx component that renders the svg.
   *
   * @default 'ast'
   */
  output?: 'ast' | 'svg'
};
