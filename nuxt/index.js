import { join } from "path";

export default function () {
  const { nuxt } = this

  // Make sure components is enabled
  if (!nuxt.options.components) {
    throw new Error('please set `components: true` inside `nuxt.config` and ensure using `nuxt >= 2.13.0`')
  }

  this.nuxt.hook("components:dirs", (dirs) => {
    /**
     * Add components dir to the list.
     *
     * With the prefix, components are available as e.g. 'PloneLayoutBase'.
     *
     * The plone-nuxt module defines components with level 2, we use level 1.
     * The default is '0' and the lowest level wins.
     */
    dirs.push({
      path: join(__dirname, "../src/components"),
      prefix: "Plone",
      level: 1,
    });
  });
}
