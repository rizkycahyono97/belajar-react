import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useLocalStorage } from 'react-use';
import { contactCreate } from '../../lib/api/ContactApi';
import { alertError, alertSuccess } from '../../lib/alert';
import ContactForm from '../../components/Contact/ContactForm';

export default function ContactCreatePage() {
  const navigate = useNavigate();
  const [token, _] = useLocalStorage('token', '');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleCreateSubmit(formData) {
    setIsSubmitting(true);
    try {
      const response = await contactCreate(token, formData);
      const responseBody = await response.json();

      if (response.ok) {
        await alertSuccess('Contact Create Successfully');
        navigate({
          pathname: '/dashboard/contacts'
        });
      } else {
        await alertError(responseBody.errors);
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex items-center mb-6">
          <Link
            to="/dashboard"
            className="text-blue-400 hover:text-blue-300 mr-4 flex items-center transition-colors duration-200"
          >
            <i className="fas fa-arrow-left mr-2" /> Back to Contacts
          </Link>
          <h1 className="text-2xl font-bold text-white flex items-center">
            <i className="fas fa-user-plus text-blue-400 mr-3" /> Create New
            Contact
          </h1>
        </div>
        <div className="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 overflow-hidden max-w-2xl mx-auto animate-fade-in">
          <div className="p-8">
            {/* component */}
            <ContactForm
              onSubmit={handleCreateSubmit}
              buttonText="Create Contact"
              isSubmitting={isSubmitting}
            />
          </div>
        </div>
      </main>
    </>
  );
}
