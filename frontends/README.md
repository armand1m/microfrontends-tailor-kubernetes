# Microfrontends in Kubernetes - Frontends

These are the frontend services deployed in this example.

Here we use lerna to manage dependencies through the same project.

This is **not** a common modern architecture and it introduces a few techniques
that were used in the past but not widely adopted, such as RequireJS.

There is a F.A.Q. section at the end where you can actually find some answers
to some questions that I believe you might have.

## F.A.Q.

### How does the pages get assembled?

This is `node-tailor` job.

He is used in the `layout-service` as the common aggregator between our fragments.

`node-tailor` requests the fragments specified in the templates and injects
their static responses directly in the final html result. Any other requests to these fragments
must return the reference to the bundled static js assets as a Link header so `tailor`
can inject their loaders in the final html result.

All the fragments are bundled as AMD bundles that specify their external dependencies
through the `external` property in their webpack.config.js

### How we handle the same dependencies through different fragments? Like `react`?

In this example we have a `fragment-common` which handles those.

It maps all our common fragment dependencies into a single one that
exposes the other ones through Named Exports in AMD.

The fragments download their own version during development time, but we flag those
as external dependencies in the webpack.config.js file in each one of them.