### Library types

A library type is:

- a logical way **to provide a library name with extra semantic value**
- represented by a **library name prefix**

The [Enterprise Angular Monorepo Patterns](https://go.nrwl.io/angular-enterprise-monorepo-patterns-new-book) book defines and recommends the following types:

- `data-access`: contains services and utilities for **interacting with back-end systems** and all code related to **state management**
- `feature`: contain **smart UI** (with injected services) for specific business use-cases or pages in an application
- `ui`: contains only **presentational components** (that rely only on inputs and outputs)
- `util`: contains common utilities and **services used by other libraries and applications**

This list of scopes and types provides us with the following possible combinations:

####

    # -----------------------------------------------------------------
    # SCOPE: shared
    # Contains libraries that can be consumed by
    # - apps: all apps
    # - libs: all libs
    # -----------------------------------------------------------------

- /libs/**shared**/**data-access**-{lib-name}
- /libs/**shared**/**feature**-{lib-name}
- /libs/**shared**/**ui**-{lib-name}
- /libs/**shared**/**util**-{lib-name}

####

    # -----------------------------------------------------------------
    # SCOPE: website
    # Contains libraries that can be consumed by
    # - apps: insurance-website, org-website
    # - libs: other libs in /libs/web
    # -----------------------------------------------------------------

- /libs/**website**/**data-access**-{lib-name}
- /libs/**website**/**feature**-{lib-name}
- /libs/**website**/**ui**-{lib-name}
- /libs/**website**/**util**-{lib-name}

####

    # -----------------------------------------------------------------
    # SCOPE: mobile
    # Contains libraries that can be consumed by
    # - apps: insurance-mobile
    # - libs: other libs in /libs/mobile
    # -----------------------------------------------------------------

- /libs/**mobile**/**data-access**-{lib-name}
- /libs/**mobile**/**feature**-{lib-name}
- /libs/**mobile**/**ui**-{lib-name}
- /libs/**mobile**/**util**-{lib-name}

For example:

- the `shared/util-auth` library can be consumed by all applications and by all libraries
- the `mobile/ui-icons` library can be consumed by the `insurance-mobile` app, but not by any application or library outside of the `mobile` scope such as the `insurance-website` or `org-website` apps or the `website/feature-dashboard` library
