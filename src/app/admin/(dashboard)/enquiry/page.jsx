'use client';

import { useEffect, useState } from 'react';

// const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_URL = 'https://thinktree-carsdoor-backend.onrender.com/api';
export default function EnquiriesList() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEnquiries = async () => {
      setLoading(true);
      setError('');

      try {
        const token = localStorage.getItem('token');

        const res = await fetch(`${API_URL}/enquiries`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (!res.ok || !data.success) {
          throw new Error(data.message || 'Failed to load enquiries');
        }

        setEnquiries(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEnquiries();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <p className="text-gray-500">Loading enquiries...</p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <p className="text-red-600">{error}</p>
      </div>
    );

  if (enquiries.length === 0)
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <p className="text-gray-500">No enquiries yet.</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="mb-6 text-2xl font-semibold text-gray-900">Enquiries</h1>
      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm text-gray-900">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">Number</th>
              <th className="px-4 py-3 font-medium">Requirement</th>
              <th className="px-4 py-3 font-medium">Message</th>
              <th className="px-4 py-3 font-medium">Received</th>
            
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {enquiries.map((enquiry) => (
              <tr key={enquiry._id} className="align-top hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">{enquiry.name}</td>
                <td className="px-4 py-3 text-gray-700">{enquiry.email}</td>
                <td className="px-4 py-3 text-gray-700">{enquiry.number}</td>
                <td className="px-4 py-3 text-gray-700">{enquiry.requirement}</td>
                <td className="max-w-xs px-4 py-3 text-gray-600">
                  {enquiry.message || <span className="text-gray-300">—</span>}
                </td>
                <td className="px-4 py-3 text-gray-500">
                  {new Date(enquiry.createdAt).toLocaleString()}
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}