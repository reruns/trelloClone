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
    'click .really':'deleteBoard'
  },

  createBoard: function(event) {
    var view = new Trello.Views.NewBoard();
    this.$el.prepend(view.render().$el);
  },

  confirmDelete: function(event) {
    var $content = $('<p>Really delete?</p><button class="real">Really really</button>');
    modal.open({content: $content});
  }
})
