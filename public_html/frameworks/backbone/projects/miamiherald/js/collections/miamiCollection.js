var weather = weather || {};

weather.MiamiCollection = Backbone.Collection.extend({
  initialize: function() {
    console.log("miami collection has been initialized");
  },

  model: weather.MiamiModel,
  url:"http://api.wunderground.com/api/f4de0f94a19a7665/alerts/almanac/astronomy/conditions/forecast10day/history/hourly/webcams/q/nv/ely.json?callback=?"
});
