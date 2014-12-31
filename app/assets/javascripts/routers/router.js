Trello.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.boards = options.boards;
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '': 'index',
    'boards/:id':'showBoard'
  },

  index: function() {
    var view = new Trello.Views.BoardsIndex({collection: this.boards});
    this.$rootEl.html(view.render().$el);
  },

  showBoard: function(id) {
    var board = this.boards.getOrFetch(id)
    var view = new Trello.Views.BoardShow({ model: board })
    this.$rootEl.html(view.render().$el);
  }

})
