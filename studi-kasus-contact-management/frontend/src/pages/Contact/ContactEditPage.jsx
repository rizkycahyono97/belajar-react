import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { useEffectOnce, useLocalStorage } from 'react-use';
import { contactDetail, contactUpdate } from '../../lib/api/ContactApi';
import { alertError, alertSuccess } from '../../lib/alert';
import ContactForm from '../../components/Contact/ContactForm';

export default function ContactEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [token, _] = useLocalStorage('token', '');
  const [contact, setContact] = useState('');
  const [isSubmitting, setIsSubmitting] = useState('');

  useEffectOnce(() => {
    async function fetchContact() {
      const response = await contactDetail(token, id);
      const responseBody = await response.json();
      console.log(responseBody);

      if (response.status == 200) {
        setContact(responseBody.data);
      } else {
        await alertError(responseBody.errors);
      }
    }
    fetchContact();
  }, [id, token]);

  async function handleUpdateSubmit(formData) {
    setIsSubmitting(true);
    try {
      const response = await contactUpdate(token, { id, ...formData });
      const responseBody = await response.json();

      if (response.ok) {
        await alertSuccess('Contact fetched successfully');
        navigate({
          pathname: `/dashboard/contacts/${id}`
        });
      } else {
        await alertError(responseBody.errors);
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!contact) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex items-center mb-6">
          <Link
            to="/dashboard/contacts"
            className="text-blue-400 hover:text-blue-300 mr-4 flex items-center transition-colors duration-200"
          >
            <i className="fas fa-arrow-left mr-2" /> Back to Contacts
          </Link>
          <h1 className="text-2xl font-bold text-white flex items-center">
            <i className="fas fa-user-edit text-blue-400 mr-3" /> Edit Contact
          </h1>
        </div>
        <div className="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 overflow-hidden max-w-2xl mx-auto animate-fade-in">
          <div className="p-8">
            {/* component */}
            <ContactForm
              initialData={contact}
              onSubmit={handleUpdateSubmit}
              buttonText="Save Changes"
              isSubmitting={isSubmitting}
            />
          </div>
        </div>
      </main>
    </>
  );
}
