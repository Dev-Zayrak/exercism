module Blackjack

  SCORES = ['joker', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'ace'].freeze
  
  def self.parse_card(card)
    SCORES.index(card) || 10
  end

  def self.card_range(card1, card2)
    case parse_card(card1) + parse_card(card2)
      when 4..11 then 'low'
      when 12..16 then 'mid'
      when 17..20 then 'high'
      when 21 then 'blackjack'
    end
  end
  
  def self.first_turn(card1, card2, dealer_card)
    player_score = card_range(card1, card2)
    dealer_score = parse_card(dealer_card)
    case
      when card1 == 'ace' && card2 == 'ace' then 'P'
      when player_score == 'blackjack' && dealer_score < 10 then "W"
      when player_score == 'mid' && dealer_score > 6 || parse_card(card1) + parse_card(card2) < 12 then 'H'
    else 'S'
    end
  end
end