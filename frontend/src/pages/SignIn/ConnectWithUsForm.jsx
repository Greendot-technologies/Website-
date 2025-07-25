
import React, { useState, useEffect } from 'react';

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
    selectedServices: [],
  });

  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Fetch permissions on component mount
  useEffect(() => {
    fetchPermissions();
  }, []);

  const fetchPermissions = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/permissions/all', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setPermissions(data.permissions || []);
      } else {
        throw new Error('Failed to fetch permissions');
      }
    } catch (error) {
      console.error('Error fetching permissions:', error);
      setMessage({ type: 'error', text: 'Failed to load services. Please refresh the page.' });
    } finally {
      setLoading(false);
    }
  };

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
      selectedServices: checked
        ? [...prev.selectedServices, value]
        : prev.selectedServices.filter((service) => service !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ 
          type: 'success', 
          text: 'Registration successful! Check your email for login credentials.' 
        });
        // Reset form
        setFormData({
          name: '',
          company_name: '',
          company_type: '',
          gstin: '',
          contact_number: '',
          email: '',
          password: '',
          address: '',
          pincode: '',
          selectedServices: [],
        });
      } else {
        throw new Error(data.error || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setMessage({ 
        type: 'error', 
        text: error.message || 'Registration failed. Please try again.' 
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
            Connect With Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our platform and unlock access to premium services tailored for your business needs
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 p-8">
            <h2 className="text-3xl font-bold text-white text-center">
              Registration Form
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="p-8 lg:p-12">
            {/* Message Display */}
            {message.text && (
              <div className={`mb-8 p-4 rounded-lg text-center font-medium ${
                message.type === 'success' 
                  ? 'bg-green-100 text-green-800 border border-green-300' 
                  : 'bg-red-100 text-red-800 border border-red-300'
              }`}>
                {message.text}
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Personal Information Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-200 pb-2">
                  Personal Information
                </h3>
                
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full p-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    name="contact_number"
                    className="w-full p-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    value={formData.contact_number}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full p-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">
                    Password *
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="w-full p-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a strong password"
                    required
                  />
                </div>
              </div>

              {/* Company Information Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-green-200 pb-2">
                  Company Information
                </h3>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    className="w-full p-4 text-lg border-2 border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                    value={formData.company_name}
                    onChange={handleChange}
                    placeholder="Your Company Pvt. Ltd."
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">
                    Company Type
                  </label>
                  <input
                    type="text"
                    name="company_type"
                    className="w-full p-4 text-lg border-2 border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                    value={formData.company_type}
                    onChange={handleChange}
                    placeholder="Private Limited, Partnership, etc."
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">
                    GSTIN
                  </label>
                  <input
                    type="text"
                    name="gstin"
                    className="w-full p-4 text-lg border-2 border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                    value={formData.gstin}
                    onChange={handleChange}
                    placeholder="22ABCDE1234F1Z5"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">
                    Pincode
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    className="w-full p-4 text-lg border-2 border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="400001"
                  />
                </div>
              </div>
            </div>

            {/* Address Section */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-purple-200 pb-2 mb-6">
                Address Information
              </h3>
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                  Complete Address
                </label>
                <textarea
                  name="address"
                  rows="4"
                  className="w-full p-4 text-lg border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 resize-none"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your complete business address..."
                ></textarea>
              </div>
            </div>

            {/* Services Section */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-orange-200 pb-2 mb-6">
                Select Services
              </h3>
              
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                  <span className="ml-4 text-lg text-gray-600">Loading services...</span>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {permissions.map((permission) => (
                    <label
                      key={permission.id}
                      className={`relative flex items-start p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        formData.selectedServices.includes(permission.permission_key)
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-300 hover:border-orange-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        value={permission.permission_key}
                        onChange={handleServiceChange}
                        checked={formData.selectedServices.includes(permission.permission_key)}
                        className="mt-1 h-5 w-5 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                      />
                      <div className="ml-3">
                        <div className="text-lg font-semibold text-gray-800">
                          {permission.permission_key}
                        </div>
                        {permission.description && (
                          <div className="text-sm text-gray-600 mt-1">
                            {permission.description}
                          </div>
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              )}
              
              {formData.selectedServices.length > 0 && (
                <div className="mt-4 p-4 bg-blue-50 rounded-xl">
                  <p className="text-lg font-semibold text-blue-800 mb-2">
                    Selected Services ({formData.selectedServices.length}):
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {formData.selectedServices.map((service) => (
                      <span
                        key={service}
                        className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="mt-12 text-center">
              <button
                type="submit"
                disabled={submitting || loading}
                className={`px-12 py-4 text-xl font-bold rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  submitting || loading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white shadow-lg'
                }`}
              >
                {submitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                    Registering...
                  </div>
                ) : (
                  'Complete Registration'
                )}
              </button>
            </div>

            {/* Footer Note */}
            <div className="mt-8 text-center text-gray-600">
              <p className="text-lg">
                By registering, you agree to our terms of service and privacy policy.
              </p>
              <p className="text-sm mt-2">
                Registration credentials will be sent to your email address.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUsForm;
