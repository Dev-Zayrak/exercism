module Port
  # TODO: define the 'IDENTIFIER' constant
  IDENTIFIER = :PALE

  def self.get_identifier(city)
    city.slice!(0..3).upcase!.to_sym
  end

  def self.get_terminal(ship_identifier)
    ship_id = ship_identifier.to_s
    ship_cargo = ship_id.slice(0..2)
    if ship_cargo == 'OIL' || ship_cargo == 'GAS'
      :A
    else
      :B
    end
  end
end
