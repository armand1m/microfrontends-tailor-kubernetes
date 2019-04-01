# Layout Service

This is the service responsible for assembling fragments into single pages.

It is mainly backed up by `node-tailor` with some customizations for our own environment,
like a custom template fetcher and a custom fragment resolver.

This layout service inherently depends in a load balancer in front of it due to it's
custom fragment resolver and our willing to use this as a dynamic implementation,
thus making this deployable in any kind of environment without any configuration.
