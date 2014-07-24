var weather = weather || {};

weather.TropicalView = Backbone.View.extend({
  initialize: function() {
    console.log("Tropical View is Initialized");
    this.render();
  },

  template: _.template( $("#tropical-template").html() ),

  render: function() {
    this.element = $(this.el);
    this.json = this.model.toJSON();
    this.element.append(this.template(this.json));
    return this; 
  }
});
