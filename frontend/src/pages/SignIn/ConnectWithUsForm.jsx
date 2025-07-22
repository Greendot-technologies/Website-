import React, { useState } from 'react';

const ConnectWithUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company_name: '',
    company_type: '',
    gstin: '',
    contact_number: '',
    email: '',
    password: '',
    address: '',
    pincode: '',
    services: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      services: checked
        ? [...prev.services, value]
        : prev.services.filter((service) => service !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add your submission logic here (e.g. axios POST)
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-xl rounded-2xl">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Connect With Us</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
        
        <div>
          <label className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Company Name</label>
          <input
            type="text"
            name="company_name"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={formData.company_name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Company Type</label>
          <input
            type="text"
            name="company_type"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={formData.company_type}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">GSTIN</label>
          <input
            type="text"
            name="gstin"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={formData.gstin}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Contact Number</label>
          <input
            type="tel"
            name="contact_number"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={formData.contact_number}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Password</label>
          <input
            type="password"
            name="password"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Pincode</label>
          <input
            type="text"
            name="pincode"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={formData.pincode}
            onChange={handleChange}
          />
        </div>

        <div className="md:col-span-2">
          <label className="block font-semibold mb-1">Address</label>
          <textarea
            name="address"
            rows="3"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={formData.address}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="md:col-span-2">
          <label className="block font-semibold mb-2">Select Service</label>
          <div className="flex gap-6 items-center">
            <label className="flex items-center gap-2 text-lg">
              <input
                type="checkbox"
                value="Drone Service"
                onChange={handleServiceChange}
                checked={formData.services.includes('Drone Service')}
              />
              Drone Service
            </label>
            <label className="flex items-center gap-2 text-lg">
              <input
                type="checkbox"
                value="Insurance Service"
                onChange={handleServiceChange}
                checked={formData.services.includes('Insurance Service')}
              />
              Insurance Service
            </label>
          </div>
        </div>

        <div className="md:col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-xl rounded-full shadow-lg transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConnectWithUsForm;
