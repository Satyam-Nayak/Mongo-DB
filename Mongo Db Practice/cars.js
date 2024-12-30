// create a cars_dealer dataset
// insode the cars_dealer create 'cars' collecction
// async. db.createCollection("cars")

// insert database like makers:'tata', model: 'nexon', fule_type: 'petrol', engine: {eno:1769,etype:'turboboost',milage:10}, features:{[heated_seat,informent_system,]},ccolor: 'red'

db.cars.insertOne({
    makers: "tata",
    model: "nexon",
    fuel_type: "petrol",
    engine: {
        eno: 1769,
        etype: "turboboost",
        mileage: 10
    },
    features: ["heated_seat", "infotainment_system"],
    color: "red"
});

// inserMany


db.cars.insertMany([
    {
        makers: "tata",
        model: "harrier",
        fuel_type: "diesel",
        engine: { eno: 1770, etype: "turboboost", mileage: 12 },
        features: ["panoramic_sunroof", "automatic_transmission"],
        color: "white"
    },
    {
        makers: "hyundai",
        model: "creta",
        fuel_type: "petrol",
        engine: { eno: 1769, etype: "turboboost", mileage: 14 },
        features: ["wireless_charging", "infotainment_system"],
        color: "black"
    },
    {
        makers: "hyundai",
        model: "venue",
        fuel_type: "diesel",
        engine: { eno: 1781, etype: "ecoboost", mileage: 16 },
        features: ["bluetooth_connectivity", "reverse_parking_camera"],
        color: "blue"
    },
    {
        makers: "maruti",
        model: "swift",
        fuel_type: "petrol",
        engine: { eno: 1768, etype: "turboboost", mileage: 15 },
        features: ["keyless_entry", "infotainment_system"],
        color: "yellow"
    },
    {
        makers: "maruti",
        model: "baleno",
        fuel_type: "petrol",
        engine: { eno: 1799, etype: "ecoboost", mileage: 18 },
        features: ["projector_headlights", "automatic_climate_control"],
        color: "silver"
    },
    {
        makers: "tata",
        model: "altroz",
        fuel_type: "petrol",
        engine: { eno: 1777, etype: "turboboost", mileage: 20 },
        features: ["cruise_control", "infotainment_system"],
        color: "blue"
    },
    {
        makers: "toyota",
        model: "innova",
        fuel_type: "diesel",
        engine: { eno: 1782, etype: "turboboost", mileage: 12 },
        features: ["captain_seats", "infotainment_system"],
        color: "grey"
    },
    {
        makers: "mahindra",
        model: "xuv700",
        fuel_type: "diesel",
        engine: { eno: 1785, etype: "turboboost", mileage: 13 },
        features: ["ADAS", "dual_zone_climate_control"],
        color: "black"
    },
    {
        makers: "mahindra",
        model: "thar",
        fuel_type: "petrol",
        engine: { eno: 1792, etype: "ecoboost", mileage: 11 },
        features: ["removable_roof", "4x4_drive"],
        color: "red"
    }
]);
