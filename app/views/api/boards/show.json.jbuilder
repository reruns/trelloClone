# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list

json.extract! @board, :title, :user

#never do this
if @board.lists
  json.lists do
    json.array! @board.lists do |list|
      json.extract! list, :id, :title, :ord
      if list.cards
        json.cards do
          json.array! list.cards do |card|
            json.extract! card, :id, :title, :description, :ord
          end
        end
      end
    end
  end
end

#pls.
