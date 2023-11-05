import React, { useState } from "react";
import axios from "axios";

const PostForm = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    RegNo: "",
    phone_number: "",
    Course: "",
    email: "",
    Purpose: "",
    Date_Time: "",
    Destination: "",
  });

  // Function to update form data when input fields change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    // Replace with the actual URL of your Django backend
    const apiUrl = "http://127.0.0.1:8000/api/outlook/post/";

    try {
      const response = await axios.post(apiUrl, formData);

      // Handle the response, e.g., show a success message or redirect
      console.log("Response from the server:", response.data);
      setLoading(false);
      setSent(true)
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error("Error:", error);
      setLoading(false);
    }
  };

  return (
    <>
    
      {/* START CONTAINER */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {sent ? (<div className="bg-blue-50 border border-blue-200 rounded-md p-4" role="alert">
  <div className="flex">
    <div className="flex-shrink-0">
      <svg
        className="h-4 w-4 text-blue-600 mt-1"
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
      </svg>
    </div>
    <div className="ml-4">
      <h3 className="text-gray-800 font-semibold">
        Your Request Has Been Successfully Received
      </h3>
      <div className="mt-2 text-sm text-gray-600">
We will get back to you within few hours. Please check your email for the update
      </div>
      <div className="mt-4">
        <div className="flex space-x-3">
        </div>
      </div>
    </div>
  </div>
</div>

) : (  
        <div className="max-w-xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
              Leave Application
            </h1>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Fill in all the details correctly
            </p>
          </div>
          <div className="mt-12">
            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 lg:gap-6">
                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="hs-firstname-hire-us-2"
                      className="block text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full border  border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="hs-lastname-hire-us-2"
                      className="block text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Registration Number
                    </label>
                    <input
                      type="text"
                      name="RegNo"
                      id="RegNo"
                      value={formData.RegNo}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full border-gray-200 border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    />
                  </div>
                </div>
                {/* End Grid */}
                <div>
                  <label
                    htmlFor="hs-work-email-hire-us-2"
                    className="block text-sm text-gray-700 font-medium dark:text-white"
                  >
                    Work Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className="py-3 px-4 block w-full border-gray-200 border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="hs-work-email-hire-us-2"
                    className="block text-sm text-gray-700 font-medium dark:text-white"
                  >
                    Purpose
                  </label>
                  <input
                    type="text"
                    name="Purpose"
                    id="name"
                    value={formData.Purpose}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full border  border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="hs-work-email-hire-us-2"
                    className="block text-sm text-gray-700 font-medium dark:text-white"
                  >
                    Course
                  </label>
                  <input
                    type="text"
                    name="Course"
                    id="hs-work-email-hire-us-2"
                    value={formData.Course}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full border-gray-200 border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  />
                </div>
                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="hs-company-hire-us-2"
                      className="block text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleChange}
                      id="hs-company-hire-us-2"
                      className="py-3 px-4 block w-full border-gray-200 border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="hs-company-website-hire-us-2"
                      className="block text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Time and Date
                    </label>
                    <input
                      type="text"
                      name="Date_Time"
                      id="hs-company-website-hire-us-2"
                      value={formData.Date_Time}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full border-gray-200 border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    />
                  </div>
                </div>
                {/* End Grid */}
                <div>
                  <label
                    htmlFor="hs-about-hire-us-2"
                    className="block text-sm text-gray-700 font-medium dark:text-white"
                  >
                    Destination
                  </label>
                  <textarea
                    id="hs-about-hire-us-2"
                    name="Destination"
                    rows={4}
                    value={formData.Destination}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full border-gray-200 border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    defaultValue={""}
                  />
                </div>
              </div>
              {/* End Grid */}

              <div className="mt-6 grid">
                {loading ? (
                  <button
                    type="button"
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                  >
                    <span
                      className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full"
                      role="status"
                      aria-label="loading"
                    />
                    Loading
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                    value={handleSubmit}
                  >
                    Send inquiry
                  </button>
                )}
              </div>
              <div className="mt-3 text-center">
                <p className="text-sm text-gray-500">
                  Your request will be processed within few hours
                </p>
              </div>
            </form>
            {/* End Form */}
          </div>
        </div>
        )}
      </div>
      {/* End CONTAINER */}
  
    </>
        
  );
};

export default PostForm;
