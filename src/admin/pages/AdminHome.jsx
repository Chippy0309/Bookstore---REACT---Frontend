import React from "react";
import AdminHeader from "../components/AdminHeader";
import Footer from "../../components/Footer";
import AdminSidebar from "../components/AdminSidebar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const AdminHome = () => {
  // Sample chart data
  const barData = [
    { name: "Red", value: 12 },
    { name: "Blue", value: 19 },
    { name: "Green", value: 8 },
    { name: "Yellow", value: 15 },
    { name: "Purple", value: 9 },
  ];

  const pieData = [
    { name: "Blue", value: 50 },
    { name: "Orange", value: 10 },
    { name: "Green", value: 7 },
    { name: "Gray", value: 13 },
    { name: "Sky", value: 20 },
  ];

  const COLORS = ["#0088FE", "#FF8042", "#00C49F", "#888888", "#82ca9d"];

  return (
    <div>
      <AdminHeader />
      <div className="flex">
        <AdminSidebar />
        <div className="w-3/4 p-6">
          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-600 text-white p-6 rounded shadow">
              <h3 className="text-lg font-semibold">Total number of Books</h3>
              <p className="text-2xl mt-2">100 +</p>
            </div>
            <div className="bg-green-600 text-white p-6 rounded shadow">
              <h3 className="text-lg font-semibold">Total number of Users</h3>
              <p className="text-2xl mt-2">100 +</p>
            </div>
            <div className="bg-yellow-500 text-white p-6 rounded shadow">
              <h3 className="text-lg font-semibold">Total number of Employees</h3>
              <p className="text-2xl mt-2">100 +</p>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow p-4 rounded">
              <h3 className="text-lg font-semibold mb-4">Favourite Colour</h3>
              <BarChart width={300} height={250} data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </div>
            <div className="bg-white shadow p-4 rounded">
              <h3 className="text-lg font-semibold mb-4">Pie Chart</h3>
              <PieChart width={300} height={250}>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminHome;
