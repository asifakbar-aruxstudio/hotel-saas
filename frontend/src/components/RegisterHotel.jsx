import { useState } from "react";
import Navbar from "../components/Navbar";
import { getLocations, addLocation } from "../utils/locationHelper";
import { FaHotel } from "react-icons/fa";

const RegisterHotel = () => {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    hotelName: "",
    ownerName: "",
    email: "",
    phone: "",
    cnic: "",
    password: "",
    province: "",
    city: "",
    address: "",
    hotelType: "",
    rooms: "",
    price: "",
    amenities: []
  });

  const locations = getLocations();

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (value) => {
    setForm((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(value)
        ? prev.amenities.filter((a) => a !== value)
        : [...prev.amenities, value]
    }));
  };

  const handleRegister = () => {
    if (form.province && form.city) {
      addLocation(form.province, form.city);
    }

    alert("Hotel Registered Successfully 🎉");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-10">
        <div className="max-w-3xl mx-auto p-6">

          {/* Progress */}
          <div className="w-full bg-gray-700 h-2 mb-6 rounded">
            <div
              className="bg-green-500 h-2 rounded"
              style={{ width: `${(step / 5) * 100}%` }}
            ></div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl p-6 rounded-2xl text-white">

            <h2 className="text-3xl font-bold mb-6 text-center">
              <FaHotel className="inline mr-2" />
              Luxury Hotel Registration (Step {step}/5)
            </h2>

            {/* STEP 1 */}
            {step === 1 && (
              <>
                <input name="hotelName" placeholder="Hotel Name" onChange={handleChange} className="input" />
                <input name="ownerName" placeholder="Owner Name" onChange={handleChange} className="input" />
                <input name="email" placeholder="Email" onChange={handleChange} className="input" />
                <input name="phone" placeholder="Phone" onChange={handleChange} className="input" />
                <input name="cnic" placeholder="CNIC" onChange={handleChange} className="input" />
                <input name="password" type="password" placeholder="Password" onChange={handleChange} className="input" />
              </>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <>
                <select name="province" onChange={handleChange} className="input">
                  <option>Select Province</option>
                  {Object.keys(locations).map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>

                <select name="city" onChange={handleChange} className="input">
                  <option>Select City</option>
                  {form.province &&
                    locations[form.province]?.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                </select>

                <input name="address" placeholder="Full Address" onChange={handleChange} className="input" />
              </>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <>
                <select name="hotelType" onChange={handleChange} className="input">
                  <option>Hotel Type</option>
                  <option>Hotel</option>
                  <option>Guest House</option>
                  <option>Resort</option>
                  <option>Hostel</option>
                </select>

                <input name="rooms" placeholder="Total Rooms" onChange={handleChange} className="input" />
                <input name="price" placeholder="Price per Night" onChange={handleChange} className="input" />
              </>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <>
                <p className="mb-3 font-semibold">Amenities</p>
                {["WiFi", "AC", "Parking", "Restaurant", "Room Service", "Pool", "Gym"].map((item) => (
                  <label key={item} className="block">
                    <input type="checkbox" onChange={() => handleCheckbox(item)} /> {item}
                  </label>
                ))}
              </>
            )}

            {/* STEP 5 */}
            {step === 5 && (
              <>
                <input placeholder="Bank Name" className="input" />
                <input placeholder="Account Number" className="input" />
                <input placeholder="JazzCash / EasyPaisa" className="input" />

                <button
                  onClick={handleRegister}
                  className="bg-green-600 text-white p-3 rounded mt-4 w-full"
                >
                  Pay 5000 PKR & Register
                </button>
              </>
            )}

            {/* Buttons */}
            <div className="flex justify-between mt-6">
              {step > 1 && (
                <button onClick={handleBack} className="bg-gray-500 px-4 py-2 rounded">
                  Back
                </button>
              )}

              {step < 5 && (
                <button onClick={handleNext} className="bg-black text-white px-4 py-2 rounded">
                  Next
                </button>
              )}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-6 gap-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <div
                  key={s}
                  className={`w-8 h-8 flex items-center justify-center rounded-full 
                  ${step === s ? "bg-green-500 text-white" : "bg-gray-600"}`}
                >
                  {s}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterHotel;