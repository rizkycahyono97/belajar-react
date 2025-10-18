import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { useLocalStorage } from 'react-use';
import { contactDetail } from '../../lib/api/ContactApi';
import { addressDetail, addressUpdate } from '../../lib/api/AddressApi';
import { alertError, alertSuccess } from '../../lib/alert';
import AddressForm from '../../components/Address/AddressForm';

export default function AddressEditPage() {
  const { id, addressId } = useParams();
  const navigate = useNavigate();
  const [token] = useLocalStorage('token', '');
  const [contact, setContact] = useState({});
  const [address, setAddress] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const contactResp = await contactDetail(token, id);
        const contactRespBody = await contactResp.json();
        if (contactResp.ok) setContact(contactRespBody.data);

        const addrResp = await addressDetail(token, id, addressId);
        const addrRespBody = await addrResp.json();

        // PERBAIKAN UTAMA: Periksa 'addrResp.ok'
        if (addrResp.ok) {
          setAddress(addrRespBody.data);
        } else {
          await alertError('Failed to load address data.');
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
    fetchData();
  }, [id, addressId, token]);

  async function handleUpdateSubmit(formData) {
    setIsSubmitting(true);
    try {
      const response = await addressUpdate(token, id, {
        addressId,
        ...formData
      });
      const responseBody = await response.json();

      if (response.ok) {
        await alertSuccess('Address edited successfully');
        navigate(`/dashboard/contacts/${id}`);
      } else {
        await alertError(responseBody.errors);
      }
    } catch (error) {
      console.error('Update error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!address) {
    return <p className="text-white text-center">Loading address details...</p>;
  }

  return (
    <>
      <div className="flex items-center mb-6">
        <Link
          to={`/dashboard/contacts/${id}`}
          className="text-blue-400 hover:text-blue-300 mr-4 flex items-center transition-colors duration-200"
        >
          <i className="fas fa-arrow-left mr-2"></i> Back to Contact Details
        </Link>
        <h1 className="text-2xl font-bold text-white flex items-center">
          <i className="fas fa-map-marker-alt text-blue-400 mr-3"></i> Edit
          Address
        </h1>
      </div>

      <div className="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 overflow-hidden max-w-2xl mx-auto animate-fade-in">
        <div className="p-8">
          <div className="mb-6 pb-6 border-b border-gray-700">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 shadow-md">
                <i className="fas fa-user text-white"></i>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">
                  {contact.first_name} {contact.last_name}
                </h2>
                <p className="text-gray-300 text-sm">
                  {contact.email} • {contact.phone}
                </p>
              </div>
            </div>
          </div>

          <AddressForm
            contactId={id}
            initialData={address}
            onSubmit={handleUpdateSubmit}
            buttonText="Edit Address"
            isSubmitting={isSubmitting}
          />
        </div>
      </div>
    </>
  );
}
