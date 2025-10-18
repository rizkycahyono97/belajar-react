import { useEffect, useState } from 'react';
import { Link } from 'react-router';

export default function ContactForm({
  initialData,
  onSubmit,
  buttonText,
  inSubmitting
}) {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (initialData) {
      setFirstName(initialData.first_name || '');
      setLastName(initialData.last_name || '');
      setEmail(initialData.email || '');
      setPhone(initialData.phone || '');
    }
  }, [initialData]);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ first_name, last_name, email, phone });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div>
            <label
              htmlFor="first_name"
              className="block text-gray-300 text-sm font-medium mb-2"
            >
              First Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-user-tag text-gray-500" />
              </div>
              <input
                type="text"
                id="first_name"
                name="first_name"
                className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                placeholder="Enter first name"
                defaultValue="John"
                required
                value={first_name}
                onChange={e => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block text-gray-300 text-sm font-medium mb-2"
            >
              Last Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-user-tag text-gray-500" />
              </div>
              <input
                type="text"
                id="last_name"
                name="last_name"
                className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                placeholder="Enter last name"
                defaultValue="Doe"
                required
                value={last_name}
                onChange={e => setLastName(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-300 text-sm font-medium mb-2"
          >
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fas fa-envelope text-gray-500" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              placeholder="Enter email address"
              defaultValue="john.doe@example.com"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block text-gray-300 text-sm font-medium mb-2"
          >
            Phone
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fas fa-phone text-gray-500" />
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              placeholder="Enter phone number"
              defaultValue="+1 (555) 123-4567"
              required
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <Link
            to={
              initialData
                ? `/dashboard/contacts/${initialData.id}`
                : `/dashboard/contacts`
            }
            className="px-5 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 flex items-center shadow-md"
          >
            <i className="fas fa-times mr-2" /> Cancel
          </Link>
          <button
            type="submit"
            className="px-5 py-3 bg-gradient text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5 flex items-center"
            disabled={inSubmitting}
          >
            <i className="fas fa-save mr-2" />{' '}
            {inSubmitting ? 'Saving..' : buttonText}
          </button>
        </div>
      </form>
    </>
  );
}
