import React, { useState } from "react";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const stats = [
    { title: "Total Rooms", value: 25 },
    { title: "Bookings", value: 120 },
    { title: "Available Rooms", value: 8 },
    { title: "Earnings", value: "$12,500" },
  ];

  const bookings = [
    {
      id: 1,
      name: "Ali Khan",
      room: "Deluxe",
      date: "2026-03-30",
      status: "Confirmed",
    },
    {
      id: 2,
      name: "Sara Ahmed",
      room: "Suite",
      date: "2026-04-01",
      status: "Pending",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}

      <div className="w-64 bg-blue-700 text-white p-5 hidden md:block">
        <h2 className="text-2xl font-bold mb-6">Hotel Panel</h2>

        <ul className="space-y-4">
          <li onClick={() => setActiveTab("dashboard")} className="cursor-pointer hover:text-gray-200">Dashboard</li>
          <li onClick={() => setActiveTab("rooms")} className="cursor-pointer hover:text-gray-200">Rooms</li>
          <li onClick={() => setActiveTab("booking")} className="cursor-pointer hover:text-gray-200">Bookings</li>
          <li onClick={() => setActiveTab("earnings")} className="cursor-pointer hover:text-gray-200">Earnings</li>
        </ul>
      </div>

      {/* Content */}

      <div className="flex-1 p-6">

        {/* Dashboard */}

        {activeTab === "dashboard" && (
          <div>
            <h1 className="text-3xl font-bold mb-6 text-blue-700">
              Dashboard Overview
            </h1>

            <div className="grid md:grid-cols-4 gap-6">
              {stats.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow">
                  <h3 className="text-gray-500">{item.title}</h3>
                  <p className="text-2xl font-bold text-blue-700">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Rooms */}

        {activeTab === "rooms" && (
          <div>
            <h1 className="text-2xl font-bold mb-4 text-blue-700">
              Manage Rooms
            </h1>

            <button className="mb-4 bg-blue-600 text-white px-4 py-2 rounded">
              + Add Room
            </button>

            <div className="bg-white p-4 rounded shadow">
              <p>Room list will appear here...</p>
            </div>
          </div>
        )}

        {/* Bookings */}

        {activeTab === "booking" && (
          <div>
            <h1 className="text-2xl font-bold mb-4 text-blue-700">
              Booking List
            </h1>

            <div className="overflow-x-auto bg-white rounded shadow">
              <table className="w-full text-left">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="p-3">Customer</th>
                    <th className="p-3">Room</th>
                    <th className="p-3">Date</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {bookings.map((b) => (
                    <tr key={b.id} className="border-b">
                      <td className="p-3">{b.name}</td>
                      <td className="p-3">{b.room}</td>
                      <td className="p-3">{b.date}</td>
                      <td className="p-3">{b.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Earnings */}

        {activeTab === "earnings" && (
          <div>
            <h1 className="text-2xl font-bold mb-4 text-blue-700">
              Earnings Overview
            </h1>

            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-xl font-semibold text-green-600">
                Total Earnings: $12,500
              </p>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}

export default Dashboard;