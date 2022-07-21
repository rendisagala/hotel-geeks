import Hotel from "../models/hotel.js";

export const hotelController = {
  getAllHotel: [
    async (req, res) => {
      try {
        const allHotel = await Hotel.find();
        res.json(allHotel);
      } catch (error) {
        res.status(500).json({
          message: error.message,
        });
      }
    },
  ],

  getHotelById: [
    async (req, res) => {
      try {
        const hotelById = await Hotel.findById(req.params.id);
        res.json(hotelById);
      } catch (error) {
        res.status(404).json({
          message: error.message,
        });
      }
    },
  ],

  addHotel: [
    async (req, res) => {
      try {
        //   check if user exist
        const hotelExist = await Hotel.find({ hotel: req.body.hotel });
        if (hotelExist.length > 0) {
          res.status(500).json({
            message: `Hotel already exist`,
          });
        } else {
          const saveHotel = await new Hotel({
            hotel: req.body.hotel,
            stars: req.body.stars,
            rating: 0,
            reviews: 0,
            price: req.body.price,
            facilities: req.body.facilities,
            food_and_drink: req.body.food_and_drink,
            hotel_services: req.body.hotel_services,
            in_room_facilities: req.body.in_room_facilities,
            business_facilities: req.body.business_facilities,
            nearby_facilities: req.body.nearby_facilities,
            public_facilities: req.body.public_facilities,
            general: req.body.general,
            things_to_do: req.body.things_to_do,
            accessibility: req.body.accessibility,
            connectivity: req.body.connectivity,
            transportation: req.body.transportation,
            kids_and_pets: req.body.kids_and_pets,
            sports_and_recreations: req.body.sports_and_recreations,
            shuttle_service: req.body.shuttle_service,
            description: req.body.description,
            image: req.body.image,
            city: req.body.city,
          }).save();
          res.status(201).json(saveHotel);
        }
      } catch (error) {
        res.status(500).json({
          message: error.message,
        });
      }
    },
  ],

  updateHotel: [
    async (req, res) => {
      try {
        const updateHotel = await Hotel.updateOne(
          { _id: req.params.id },
          { $set: req.body }
        );
        res.status(201).json(updateHotel);
      } catch (error) {
        res.status(404).json({
          message: error.message,
        });
      }
    },
  ],

  deleteHotel: [
    async (req, res) => {
      try {
        const deleteHotel = await Hotel.deleteOne({ _id: req.params.id });
        res.status(201).json(deleteHotel);
      } catch (error) {
        res.status(404).json({
          message: error.message,
        });
      }
    },
  ],
};
