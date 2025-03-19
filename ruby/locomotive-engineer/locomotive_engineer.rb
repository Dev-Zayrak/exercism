class LocomotiveEngineer
  def self.generate_list_of_wagons(*arguments)= arguments
  
  def self.fix_list_of_wagons(each_wagons_id, missing_wagons)

    wagon1, wagon2, loco_id, *locomotive = each_wagons_id;
    locomotive.push(wagon1, wagon2)
    missing_wagons.push(locomotive)
    missing_wagons.unshift(loco_id).flatten
  end

  def self.add_missing_stops(hash_routage, **keyword_arguments)
    all_stops = keyword_arguments.values
    hash_routage.store(:stops, all_stops)
    return hash_routage
  end

  def self.extend_route_information(route, more_route_information)
    route.merge(more_route_information)
  end
end