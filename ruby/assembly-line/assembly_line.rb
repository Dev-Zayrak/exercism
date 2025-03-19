class AssemblyLine

  @@car_by_hour = 221
  
  def initialize(speed)
    @speed = speed
  end

  def production_rate_per_hour
    if @speed < 5
      @@car_by_hour * @speed
    elsif @speed > 4 && @speed < 9
      (@@car_by_hour * @speed).to_f * 0.9
    elsif @speed == 9
      (@@car_by_hour * @speed).to_f * 0.8
    elsif @speed == 10
      (@@car_by_hour * @speed).to_f * 0.77
    end
  end

  def working_items_per_minute
    var = (production_rate_per_hour/60).floor
  end
end
