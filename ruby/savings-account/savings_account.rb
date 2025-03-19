module SavingsAccount
  def self.interest_rate(balance)
    if balance >= 0 && balance < 1000
      0.5
    elsif balance > 999 && balance < 5000
      1.621
    elsif balance > 4999
      2.475
    elsif balance < 0
      3.213
    end
  end

  def self.annual_balance_update(balance)
    balance == 0.0 ? 0.0 : (balance + (balance * (self.interest_rate(balance)/100)))
  end

  def self.years_before_desired_balance(current_balance, desired_balance)
    counter = 0
    balance = current_balance
    until balance >= desired_balance
      counter +=1
      balance = self.annual_balance_update(balance)
    end
    return counter
  end
end