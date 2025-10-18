import { useEffect, useState } from 'react';
import { contactDelete, contactList } from '../../lib/api/ContactApi';
import { alertConfirm, alertError, alertSuccess } from '../../lib/alert';
import { useLocalStorage } from 'react-use';
import ContactCard from '../../components/Contact/ContactCard';
import { Link } from 'react-router';

export default function ContactListPage() {
  const [token, _] = useLocalStorage('token', '');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [contacts, setContacts] = useState([]);
  const [inSearchVisible, setInSearchVisible] = useState(false);

  async function fetchContacts() {
    const response = await contactList(token, { name, phone, email, page });
    const responseBody = await response.json();
    console.log(responseBody);

    try {
      if (response.status == 200) {
        setContacts(responseBody.data);
        setTotalPage(parseInt(responseBody.paging.total_page, 10) || 10);
      } else {
        await alertError(responseBody.errors);
      }
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
      await alertError('Failed to fetch data.');
    }
  }

  async function handleContactDelete(id) {
    if (
      !(await alertConfirm('Are you sure you want to delete this contact?'))
    ) {
      return;
    }

    const response = await contactDelete(token, id);
    const responseBody = await response.json();
    console.log(responseBody);

    if (response.status === 200) {
      await alertSuccess('Contact deleted successfully');
      fetchContacts();
    } else {
      await alertError(responseBody.errors);
    }
  }

  function handleSearchContacts(e) {
    e.preventDefault();
    setPage(1);
    if (page === 1) {
      fetchContacts();
    }
  }

  function handlePageChange(newPage) {
    setPage(newPage);
  }

  function getPages() {
    return Array.from({ length: totalPage }, (_, i) => i + 1);
  }

  useEffect(() => {
    fetchContacts();
  }, [page]);

  return (
    <>
      {/* search page */}
      <div className="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 p-6 mb-8 animate-fade-in">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <i className="fas fa-search text-blue-400 mr-3"></i>
            <h2 className="text-xl font-semibold text-white">
              Search Contacts
            </h2>
          </div>
          <button
            type="button"
            id="toggleSearchForm"
            className="text-gray-300 hover:text-white hover:bg-gray-700 p-2 rounded-full focus:outline-none transition-all duration-200"
            onClick={() => setInSearchVisible(!inSearchVisible)}
          >
            <i
              className="fas fa-chevron-down text-lg"
              id="toggleSearchIcon"
            ></i>
          </button>
        </div>
        <div id="searchFormContent" className="mt-4">
          {inSearchVisible && (
            <form onSubmit={handleSearchContacts}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label
                    htmlFor="search_name"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-user text-gray-500"></i>
                    </div>
                    <input
                      type="text"
                      id="search_name"
                      name="search_name"
                      className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      placeholder="Search by name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="search_email"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-envelope text-gray-500"></i>
                    </div>
                    <input
                      type="text"
                      id="search_email"
                      name="search_email"
                      className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      placeholder="Search by email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="search_phone"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Phone
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-phone text-gray-500"></i>
                    </div>
                    <input
                      type="text"
                      id="search_phone"
                      name="search_phone"
                      className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      placeholder="Search by phone"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5 text-right">
                <button
                  type="submit"
                  className="px-5 py-3 bg-gradient text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5"
                >
                  <i className="fas fa-search mr-2"></i> Search
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* create contact */}
        <div className="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom overflow-hidden border-2 border-dashed border-gray-700 card-hover animate-fade-in">
          <Link to="/dashboard/contacts/create" className="block p-6 h-full">
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-20 h-20 bg-gradient rounded-full flex items-center justify-center mb-5 shadow-lg transform transition-transform duration-300 hover:scale-110">
                <i className="fas fa-user-plus text-3xl text-white"></i>
              </div>
              <h2 className="text-xl font-semibold text-white mb-3">
                Create New Contact
              </h2>
              <p className="text-gray-300">Add a new contact to your list</p>
            </div>
          </Link>
        </div>

        {/* contact list */}
        {contacts.map(contact => (
          <ContactCard
            key={contact.id}
            contact={contact}
            onDelete={handleContactDelete}
          />
        ))}
      </div>

      {/* pagination */}
      <div className="mt-10 flex justify-center">
        <nav className="flex items-center space-x-3 bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 p-3 animate-fade-in">
          {page > 1 && (
            <a
              href="#"
              onClick={() => handlePageChange(page - 1)}
              className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 flex items-center"
            >
              <i className="fas fa-chevron-left mr-2"></i> Previous
            </a>
          )}
          {getPages().map(value => {
            if (value === page) {
              return (
                <a
                  key={value}
                  href="#"
                  onClick={() => handlePageChange(value)}
                  className="px-4 py-2 bg-gradient text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-md"
                >
                  {value}
                </a>
              );
            } else {
              return (
                <a
                  key={value}
                  href="#"
                  onClick={() => handlePageChange(value)}
                  className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200"
                >
                  {value}
                </a>
              );
            }
          })}
          {page < totalPage && (
            <a
              href="#"
              onClick={() => handlePageChange(page + 1)}
              className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 flex items-center"
            >
              Next <i className="fas fa-chevron-right ml-2"></i>
            </a>
          )}
        </nav>
      </div>
    </>
  );
}
