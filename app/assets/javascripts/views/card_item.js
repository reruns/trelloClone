Trello.Views.CardItem = Backbone.View.extend({
  tagName: 'li',
  template: JST['card_item'],

  render: function() {
    var content = this.template({card: this.model});
    this.$el.html(content);
    this.$el.sortable();
    this.$el.disableSelection();
    this.$el.addClass('card');
    return this;
  },

  attributes: function() {
    return {
      'data-card-id': this.model.id
    };
  },

  events: {
    'click .delete-card':'deleteCard'
  },

  deleteCard: function(event) {
    event.preventDefault();
    this.model.destroy();
    this.remove();
  }
})
