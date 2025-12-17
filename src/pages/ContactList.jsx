import axios from "axios";
import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    contactData();
  }, []);

  const contactData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/contactUs/all"
      );

      console.log(response.data.data);

      setContacts(response.data.data);

    } catch (error) {
      console.log("Error fetching contact list:", error);
    }
  };

  return (
    <div className="p-4 mt-18">
      {/* <h2 className="text-xl font-semibold mb-4 text-green-800">Contact List</h2> */}

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Mobile</th>
              <th className="px-4 py-2 text-left">City</th>
              <th className="px-4 py-2 text-left">State</th>
              <th className="px-4 py-2 text-left">Gender</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {contacts?.map((contact) => (
              <tr
                key={contact._id}
                className="border-t text-green-300 hover:bg-gray-500 transition"
              >
                <td className="px-4 py-2">{contact.name}</td>
                <td className="px-4 py-2">{contact.email}</td>
                <td className="px-4 py-2">{contact.mobile}</td>
                <td className="px-4 py-2">{contact.city}</td>
                <td className="px-4 py-2">{contact.state}</td>
                <td className="px-4 py-2">{contact.gender}</td>
                <td className="px-4 py-2 text-center">
                  <button
                    onClick={() => onEdit(contact)}
                    className="text-blue-600 hover:text-blue-800 mr-3"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => onDelete(contact._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="grid gap-4 md:hidden">
        {contacts?.map((contact) => (
          <div key={contact._id} className="border rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">{contact.name}</h3>
              <div className="flex gap-3">
                <button onClick={() => onEdit(contact)} className="text-blue-600">
                  <FaEdit />
                </button>
                <button
                  onClick={() => onDelete(contact._id)}
                  className="text-red-600"
                >
                  <FaTrash />
                </button>
              </div>
            </div>

            <p className="text-sm text-gray-600">📧 {contact.email}</p>
            <p className="text-sm text-gray-600">📞 {contact.mobile}</p>
            <p className="text-sm text-gray-600">
              📍 {contact.city}, {contact.state}
            </p>
            <p className="text-sm text-gray-600">⚥ {contact.gender}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
