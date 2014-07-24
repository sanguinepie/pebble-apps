var weather = weather || {};

weather.MiamiCollection = Backbone.Collection.extend({
  initialize: function() {
    this.changeLocation();
  },

  changeLocation: function() {
    console.log("Collection initialized");
  },

  model: weather.Model,
  url:"http://api.wunderground.com/api/f4de0f94a19a7665/alerts/almanac/astronomy/conditions/forecast10day/history/hourly/webcams/q/mn/minneapolis.json?callback=?"
});
