Package.describe({
  summary: 'Bootstrap with less support',
  version: '3.3.5_1',
});

Package.onUse(function onUse(api) {
  //
  api.versionsFrom('1.2.0.2');
  // CORE PACKAGES
  api.use([
    'jquery',
    'less',
  ], 'client');
  // ATMOSPHERE PACKAGES
  /* api.use('iron:router@1.0.9', 'client', {
    weak: true,
  });*/
  //
  api.addFiles([
    'client/lib/js/affix.js',
    'client/lib/js/alert.js',
    'client/lib/js/button.js',
    'client/lib/js/carousel.js',
    'client/lib/js/collapse.js',
    'client/lib/js/dropdown.js',
    'client/lib/js/modal.js',
    'client/lib/js/tooltip.js',
    'client/lib/js/popover.js',
    'client/lib/js/scrollspy.js',
    'client/lib/js/tab.js',
    'client/lib/js/transition.js',
    //
    // 'client/config/router.js',
  ], 'client');
  //
  api.addFiles([
    // mixins
    'client/lib/less/mixins/alerts.less',
    'client/lib/less/mixins/background-variant.less',
    'client/lib/less/mixins/border-radius.less',
    'client/lib/less/mixins/buttons.less',
    'client/lib/less/mixins/center-block.less',
    'client/lib/less/mixins/clearfix.less',
    'client/lib/less/mixins/forms.less',
    'client/lib/less/mixins/gradients.less',
    'client/lib/less/mixins/grid-framework.less',
    'client/lib/less/mixins/grid.less',
    'client/lib/less/mixins/hide-text.less',
    'client/lib/less/mixins/image.less',
    'client/lib/less/mixins/labels.less',
    'client/lib/less/mixins/list-group.less',
    'client/lib/less/mixins/nav-divider.less',
    'client/lib/less/mixins/nav-vertical-align.less',
    'client/lib/less/mixins/opacity.less',
    'client/lib/less/mixins/pagination.less',
    'client/lib/less/mixins/panels.less',
    'client/lib/less/mixins/progress-bar.less',
    'client/lib/less/mixins/reset-filter.less',
    'client/lib/less/mixins/reset-text.less',
    'client/lib/less/mixins/resize.less',
    'client/lib/less/mixins/responsive-visibility.less',
    'client/lib/less/mixins/size.less',
    'client/lib/less/mixins/tab-focus.less',
    'client/lib/less/mixins/table-row.less',
    'client/lib/less/mixins/text-emphasis.less',
    'client/lib/less/mixins/text-overflow.less',
    'client/lib/less/mixins/vendor-prefixes.less',
    //
    'client/lib/less/alerts.less',
    'client/lib/less/badges.less',
    'client/lib/less/bootstrap.less',
    'client/lib/less/breadcrumbs.less',
    'client/lib/less/button-groups.less',
    'client/lib/less/buttons.less',
    'client/lib/less/carousel.less',
    'client/lib/less/close.less',
    'client/lib/less/code.less',
    'client/lib/less/component-animations.less',
    'client/lib/less/dropdowns.less',
    'client/lib/less/forms.less',
    'client/lib/less/glyphicons.less',
    'client/lib/less/grid.less',
    'client/lib/less/input-groups.less',
    'client/lib/less/jumbotron.less',
    'client/lib/less/labels.less',
    'client/lib/less/list-group.less',
    'client/lib/less/media.less',
    'client/lib/less/mixins.less',
    'client/lib/less/modals.less',
    'client/lib/less/navbar.less',
    'client/lib/less/navs.less',
    'client/lib/less/normalize.less',
    'client/lib/less/pager.less',
    'client/lib/less/pagination.less',
    'client/lib/less/panels.less',
    'client/lib/less/popovers.less',
    'client/lib/less/print.less',
    'client/lib/less/progress-bars.less',
    'client/lib/less/responsive-embed.less',
    'client/lib/less/responsive-utilities.less',
    'client/lib/less/scaffolding.less',
    'client/lib/less/tables.less',
    'client/lib/less/theme.less',
    'client/lib/less/thumbnails.less',
    'client/lib/less/tooltip.less',
    'client/lib/less/type.less',
    'client/lib/less/utilities.less',
    'client/lib/less/variables.less',
    'client/lib/less/wells.less',
  ], 'client', {
    isImport: true,
  });
});
