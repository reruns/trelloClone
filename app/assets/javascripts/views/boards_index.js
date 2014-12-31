Trello.Views.BoardsIndex = Backbone.View.extend({
  template: JST['boards_index'],
  tagName: "ul",

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    this.$el.html(this.template());
    var that = this;
    this.collection.each(function(board) {
      var itemView = new Trello.Views.BoardsListItem({model: board});
      that.$el.append(itemView.render().$el);
    })
    return this;
  },

  events: {
    'click .new-board':'createBoard',
    'click .delete':'confirmDelete'
  },

  createBoard: function(event) {
    var view = new Trello.Views.NewBoard();
    this.$el.prepend(view.render().$el);
  },

  confirmDelete: function(event) {
    var $tar = $(event.target)
    var $content = $('<div><p>Really delete?</p></div>');
    $content.append('<button class="real">Really really</button>')
    var id = $tar.data('board-id');
    $content.bind('click', '.real', this.deleteBoard.bind(id));
    modal.open({content: $content});
  },

  deleteBoard: function(event) {
    debugger;
    event.preventDefault();
    var board = Trello.boards.get(id);
    board.destroy();
    this.remove();
  }
})
