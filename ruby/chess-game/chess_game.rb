module Chess
  RANKS = (1..8)
  FILES = ('A'..'H')
  
  def self.valid_square?(rank, file)
    RANKS.include?(rank) && FILES.include?(file)
  end

  def self.nick_name(first_name, last_name)
    first_name.slice!(0..1).upcase + last_name.slice!(-2..-1).upcase
  end

  def self.move_message(first_name, last_name, square)
    nick_name = self.nick_name(first_name, last_name)
    (self.valid_square?(square[1].to_i, square[0]))? "#{nick_name} moved to #{square}" : "#{nick_name} attempted to move to #{square}, but that is not a valid square"
  end
end