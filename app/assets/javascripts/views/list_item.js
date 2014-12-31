//yeah, yeah...
Trello.Views.ListItem = Backbone.View.extend({
  tagName: 'li',
  template: JST['list_item'],

  initialize: function() {
    this.listenTo(this.model.cards(), 'sync', this.render)
  },

  render: function() {
    var content = this.template({list: this.model});
    var that = this;
    that.$el.html(content);

    var tar = that.$el.find('ul.card-list');
    tar.sortable({
      connectWith: 'ul.card-list',
      update: function(event, ui) {
        var $list = $(ui.item.context.parentElement)
        var list_id = $list.data('list-id');
        var $cards = $list.find('li');
        $list.empty();

        $cards.each(function(idx){
          $list.append($cards[idx]);
          var card_id = $($cards[idx]).data('card-id');
          var card = new Trello.Models.Card({id: card_id})
          card.save({
            ord: idx,
            list_id: list_id
          })
        })
      }
    }).disableSelection();

    tar.attr('data-list-id', this.model.id);

    this.model.cards().each(function(card) {
      var view = new Trello.Views.CardItem({model: card});
      var $item = view.render().$el
      tar.append($item);
    })
    return this;
  },

  events: {
    'click .new-card':'createCard',
  },

  createCard: function(event) {
    var view = new Trello.Views.NewCard({model: this.model});
    this.$el.append(view.render().$el);
  },

  receiveCard: function(event, ui) {
    debugger;
  },

  removeCard: function(event, ui) {
    debugger;
  },

  saveCards: function(event, ui) {

  }
})
