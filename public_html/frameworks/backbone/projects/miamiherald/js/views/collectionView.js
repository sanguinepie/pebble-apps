var weather = weather || {};

weather.MiamiCollectionView = Backbone.View.extend({
  initialize: function() {
    this.collection = new weather.MiamiCollection();
    console.log("Collection View is Initialized");
    this.fetch();
    this.listenTo(this.collection, "reset", this.render);
  },

  fetch: function() {
    this.collection.fetch({ reset: true });
    this.render();
  },

  render: function() {
    this.collection.each(function(item) {
      this.renderItem(item);
    }, this);
  },

  renderItem: function(item) {
    weather.alertView = new weather.AlertView({
      model: item,
      el: "#alert"
    });

    weather.forecastView = new weather.ForecastView({
      model: item,
      el: "#forecast"
    });

    weather.tropicalView = new weather.TropicalView({
      model: item,
      el: "#tropical"
    });

    weather.currentView = new weather.CurrentView({
      model: item,
      el: "#current"
    });
  }
});
