window.Trello = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $('#main');
    this.boards = new Trello.Collections.Boards();
    this.boards.fetch();

    new Trello.Routers.Router({$rootEl: $rootEl, boards: this.boards});
    Backbone.history.start();
  }
};
