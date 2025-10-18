import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { useEffectOnce, useLocalStorage } from 'react-use';
import { contactDetail } from '../../lib/api/ContactApi';
import { addressCreate } from '../../lib/api/AddressApi';
import { alertError, alertSuccess } from '../../lib/alert';
import AddressForm from '../../components/Address/AddressForm';

export default function AddressCreatePage() {
  const { id } = useParams();
  const [token, _] = useLocalStorage('token', '');
  const [contact, setContact] = useState({});
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState('');

  useEffectOnce(() => {
    async function fetchContact() {
      const response = await contactDetail(token, id);
      const responseBody = await response.json();
      console.log(responseBody);
      if (response.ok) setContact(responseBody.data);
    }
    fetchContact();
  });

  async function handleCreateSubmit(formData) {
    setIsSubmitting(false);
    try {
      const response = await addressCreate(token, id, formData);
      const responseBody = await response.json();
      console.log(responseBody);

      if (response.ok) {
        await alertSuccess('Address created successfully');
        await navigate({
          pathname: `/dashboard/contacts/${id}`
        });
      } else {
        await alertError(responseBody.errors);
      }
    } catch (e) {
      console.log('Create address failed. ', e);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex items-center mb-6">
          <Link
            to={`/dashboard/contacts/${id}`}
            className="text-blue-400 hover:text-blue-300 mr-4 flex items-center transition-colors duration-200"
          >
            <i className="fas fa-arrow-left mr-2" /> Back to Contact Details
          </Link>
          <h1 className="text-2xl font-bold text-white flex items-center">
            <i className="fas fa-plus-circle text-blue-400 mr-3" /> Add New
            Address
          </h1>
        </div>
        <div className="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 overflow-hidden max-w-2xl mx-auto animate-fade-in">
          <div className="p-8">
            <div className="mb-6 pb-6 border-b border-gray-700">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 shadow-md">
                  <i className="fas fa-user text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {contact.first_name} {contact.last_name}
                  </h2>
                  <p className="text-gray-300 text-sm">
                    {contact.email} - {contact.phone}
                  </p>
                  <AddressForm
                    contactId={id}
                    onSubmit={handleCreateSubmit}
                    buttonText="Add Address"
                    isSubmitting={isSubmitting}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
