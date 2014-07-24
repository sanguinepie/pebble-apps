var weather = weather || {};

weather.CurrentView = Backbone.View.extend({
  initialize: function() {
    console.log("current view initialized");
    this.render();
    _.bind(this, "render");
    this.model.bind('change', this.render);
  },

  template: _.template($("#current-template").html()),

  render: function() {
    console.log("current view has been re-rendered");
    this.element = $(this.el);
    this.json = this.model.toJSON();
    this.element.append(this.template(this.json));
    return this; 
  }
});
