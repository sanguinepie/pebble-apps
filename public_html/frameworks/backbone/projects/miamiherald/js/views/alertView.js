var weather = weather || {};

weather.AlertView = Backbone.View.extend({
  initialize: function() {
    console.log("Alert View initialized");
    this.render();
  },

  template: _.template( $("#alert-template").html() ),

  render: function() {
    this.element = $(this.el);
    this.json = this.model.toJSON();
    this.element.append(this.template(this.json));
    return this; 
  }
});
