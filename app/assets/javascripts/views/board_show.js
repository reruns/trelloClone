Trello.Views.BoardShow = Backbone.View.extend({
  tagName: 'ul',
  template: JST['board_show'],

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.lists(), 'sync', this.render);
  },

  render: function() {
    var content = this.template({ board: this.model })
    var that = this;
    that.$el.html(content);

    this.model.lists().each(function(list) {
      var view = new Trello.Views.ListItem({model: list});
      that.$el.append(view.render().$el);
    })
    
    return this;
  },

  events: {
    'click .new-list':'createList'
  },

  createList: function(event) {
    var view = new Trello.Views.NewList({model: this.model});
    this.$el.prepend(view.render().$el);
  }
})
