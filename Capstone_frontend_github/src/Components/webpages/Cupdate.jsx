import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Usernav from '../navFooter/UserNav';

const Cupdate = () => {
  const navigate = useNavigate();
  const [addressText, setAddressText] = useState(
    sessionStorage['addressText'] || ''
  );
  const [pinCode, setPinCode] = useState(sessionStorage['pinCode'] || '');

  const updateAddress = (e) => {
    e.preventDefault();

    if (sessionStorage['updateMode'] === 'true') {
      document.getElementById('updateAddressButton').classList.remove('btn-outline-primary');
      document.getElementById('updateAddressButton').classList.add('btn-outline-danger');

      document.getElementById('prevButton').disabled = true;
      document.getElementById('nextButton').disabled = true;

      document.getElementById('address').disabled = false;
      document.getElementById('pinCode').disabled = false;
      sessionStorage['updateMode'] = 'false';
    } else {
      document.getElementById('updateAddressButton').classList.add('btn-outline-primary');
      document.getElementById('updateAddressButton').classList.remove('btn-outline-danger');

      document.getElementById('prevButton').disabled = false;
      document.getElementById('nextButton').disabled = false;

      document.getElementById('address').disabled = true;
      document.getElementById('pinCode').disabled = true;

      // Update address
      const customerId = sessionStorage['id'];
      const url = `${URL}/customers/${customerId}/address`;
      const body = {
        addressText,
        pinCode,
      };
      axios
        .put(url, body)
        .then((response) => {
          const result = response.data;
          if (result.status === 'SUCCESS') {
            alert('Address successfully updated');
            sessionStorage['addressText'] = addressText;
            sessionStorage['pinCode'] = pinCode;
          } else {
            alert(result.message);
            setAddressText(sessionStorage['addressText']);
            setPinCode(sessionStorage['pinCode']);
          }
        })
        .catch((error) => {
          console.error(error);
          setAddressText(sessionStorage['addressText']);
          setPinCode(sessionStorage['pinCode']);
        });

      sessionStorage['updateMode'] = 'true';
    }
  };

  useEffect(() => {
    sessionStorage['updateMode'] = 'true';
  }, []);

  return (
    <>
    <Usernav />
    <div>
      <h3 className='mt-4'>Address</h3>

      <div className="row mt-5 col-6">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="address" className="label-control">
                Address
              </label>
              <textarea
                id="address"
                onChange={(e) => setAddressText(e.target.value)}
                value={addressText}
                className="form-control"
                disabled={true}
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="pinCode" className="label-control">
                Pincode
              </label>
              <input
                type="number"
                id="pinCode"
                onChange={(e) => setPinCode(e.target.value)}
                value={pinCode}
                className="form-control"
                disabled={true} />
            </div>

            <div className="mb-3">
              <button
                className="btn btn-primary"
                id="updateAddressButton"
                onClick={(e) => {
                  updateAddress(e);
                } }
                style={{background:"crimson"}}
              >
                Update Address
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>

      <div className="mt-4">
        <button
        type='reset'
          className="btn btn-outline-primary"
          id="resetButton"
        >
          Reset
        </button> &nbsp;
        <button
          className="btn btn-primary float-right"
          id="nextButton"
          onClick={() => {
            alert("Address Saved");
            navigate('/user-dashboard');
          } }
          style={{background:"crimson"}}
        >
          Save
        </button>
      </div>
    </div></>
  );
};

export default Cupdate;
