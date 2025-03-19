class SimpleCalculator
  class UnsupportedOperation < StandardError
    end
    ALLOWED_OPERATIONS = ['+', '/', '*'].freeze

    def self.calculate(first_operand, second_operand, operation)    
      begin

        if !first_operand.is_a?(Integer) || !second_operand.is_a?(Integer)
          raise ArgumentError
        end
        
        if operation == '+'
          result = first_operand + second_operand
        elsif operation == '/'
          result = first_operand / second_operand
        elsif operation == '*'
          result = first_operand * second_operand
        else
          raise UnsupportedOperation
        end

        
        return "#{first_operand} #{operation} #{second_operand} = #{result}"
        
      rescue ZeroDivisionError
        return "Division by zero is not allowed."
    end
  end
end
