"use client"
import { apiconnector } from "@/config/Apiconnector";
import { Clock, MapPin, Star, Upload } from "lucide-react";
import { useState } from "react";

const PlaceForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    description: "",
    openTime: "",
    closeTime: "",
    mapLink: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    rating: "",
    byAir: "",
    byBus: "",
    byTrain: "",
    byRoad: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, image1, image2, image3, image4, image5, image6, description, openTime, closeTime, mapLink, address, city, state, country, zipCode, rating, byAir, byBus, byTrain, byRoad } = formData;
    try {
        const response = await apiconnector("POST", '/api/place', {
            name, image1, image2, image3, image4, image5, image6, description, openTime, closeTime, mapLink, address, city, state, country, zipCode, rating, byAir, byBus, byTrain, byRoad})
      const data = response.data.data;
      if(response.data.success){
        alert("Place added successfully")
        setFormData({
          name: "",
          image1: "",
          image2: "",
          image3: "",
          image4: "",
          image5: "",
          image6: "",
          description: "",
          openTime: "",
          closeTime: "",
          mapLink: "",
          address: "",
          city: "",
          state: "",
          country: "",
          zipCode: "",
          rating: "",
          byAir: "",
          byBus: "",
          byTrain: "",
          byRoad: "",
        })
      }
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 via-gray-800 to-black py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-2xl">
        <h2 className="text-4xl font-bold font-mono text-center text-gray-800 mb-6 tracking-wide">
          Add <span className="text-yellow-500">Place Details</span>
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <label
              htmlFor="name"
              className="block text-left font-semibold text-gray-700 mb-2"
            >
              Place Name
            </label>

            <input
              type="text"
              PlaceForm="Enter place name"
              name="name"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              required
              onChange={handleChange}
            />
          </div>

          {["image1", "image2", "image3", "image4", "image5", "image6"].map(
            (imageField, index) => (
              <div key={index}>
                <label className="block text-xl font-semibold text-gray-700 mb-2">
                  Image {index + 1} URL
                </label>
                <div className="flex items-center space-x-2">
                  <Upload className="text-yellow-500" />
                  <input
                    type="text"

                    name={imageField}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder={`Enter Image ${index + 1} URL`}
              onChange={handleChange}

                  />
                </div>
              </div>
            )
          )}

          <div>
            <label
              htmlFor="description"
              className="block text-xl font-semibold text-gray-700 mb-2"
            >
              Description
            </label>
            <textarea
              name="description"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="Enter description"
              onChange={handleChange}

              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xl  font-semibold text-gray-700 mb-2">
                Opening TIme
                <Clock className="inline-block text-yellow-500" />
              </label>

              <input
                type="time"
                name="openTime"
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              onChange={handleChange}

                required
              />
            </div>

            <div>
              <label className="block text-xl  font-semibold text-gray-700 mb-2">
                Closing TIme
                <Clock className="inline-block text-yellow-500" />
              </label>

              <input
                type="time"
                name="closeTime"
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              onChange={handleChange}

                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xl  font-semibold text-gray-700 mb-2">
              Google Map Link
              <MapPin className="inline-block text-yellow-500" />
            </label>

            <input
              type="text"
              name="mapLink"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              onChange={handleChange}

              placeholder="Enter Google Map Link"
              required
            />
          </div>
          <div>
            <label className="block text-xl  font-semibold text-gray-700 mb-2">
              Address
            </label>

            <input
              type="text"
              name="address"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              onChange={handleChange}

              placeholder="Enter address"
              required
            />
          </div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xl  font-semibold text-gray-700 mb-2">
                  City
                </label>

                <input
                  type="text"
                  name="city"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Enter city"
              onChange={handleChange}

                  required
                />
              </div>

              <div>
                <label className="block text-xl  font-semibold text-gray-700 mb-2">
                  State
                </label>

                <input
                  type="text"
                  name="state"
                  placeholder="Enter state"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              onChange={handleChange}

                  required
                />
              </div>

              <div>
                <label className="block text-xl  font-semibold text-gray-700 mb-2">
                  Country
                </label>

                <input
                  type="text"
                  name="country"
                  placeholder="Enter country"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              onChange={handleChange}

                  required
                />
              </div>

              <div>
                <label className="block text-xl font-semibold text-gray-700 mb-2">
                  Zip Code
                </label>

                <input
                  type="text"
                  name="zipCode"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              onChange={handleChange}

                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xl font-semibold text-gray-700 mb-2">
              Rating <Star className="inline-block text-yellow-500" />
            </label>
            <input
              type="number"
              name="rating"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              onChange={handleChange}

              placeholder="Enter rating (1-5)"
              min="1"
              max="5"
              required
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Transportation Methods
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg text-gray-700">By Air</label>
                <input
                  type="text"
                  name="byAir"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Details for air travel"
              onChange={handleChange}

                />
              </div>

              <div>
                <label className="block text-lg text-gray-700">By Bus</label>
                <input
                  type="text"
                  name="byBus"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Details for bus travel"
              onChange={handleChange}

                />
              </div>

              <div>
                <label className="block text-lg text-gray-700">By Train</label>
                <input
                  type="text"
                  name="byTrain"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Details for train travel"
              onChange={handleChange}

                />
              </div>

              <div>
                <label className="block text-lg text-gray-700">By Road</label>
                <input
                  type="text"
                  name="byRoad"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Details for road travel"
              onChange={handleChange}

                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="bg-yellow-500 text-white py-2 px-4 rounded-lg">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlaceForm;