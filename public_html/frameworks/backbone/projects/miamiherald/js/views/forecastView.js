var weather = weather || {};

weather.ForecastView = Backbone.View.extend({
  initialize: function() {
    console.log("forecast View initialized");
    this.render();
  },

  template: _.template( $("#forecast-template").html() ),

  render: function() {
    this.element = $(this.el);
    this.json = this.model.toJSON();
    this.element.append(this.template(this.json));
    return this; 
  }
});
