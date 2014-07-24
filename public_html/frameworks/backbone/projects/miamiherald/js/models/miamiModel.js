var weather = weather || {};

weather.MiamiModel = Backbone.Model.extend({
  initialize: function() {
    console.log("model initialized");
    this.on('change', function() {
      console.log("- values for this model has changed.");
    });
  }
});
