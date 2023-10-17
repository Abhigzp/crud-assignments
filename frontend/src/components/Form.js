import React, { useState } from 'react';
import './Form.css'; // Import the CSS file for styling
import { useForm, Controller } from 'react-hook-form';
const Form = ({ closeModal }) => {
  const { handleSubmit, control, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    closeModal();
  };
  const [formData, setFormData] = useState({
    AcID: '',
    AccountName: '',
    Under: '',
    CustomerType: '',
    Area: '',
    OpeningBalance: '',
    CRDR: '',
    Address: '',
    PhoneNumber: '',
    mobileNumber: '',
    CSTRegNo: '',
    OutofState: '',
    TaxfreeArea: '',
    salesMan: '',
    BankAcnumber: '',
    bankAType: '',
    Remark: '',
    ClAmmount: '',
    clDays: '',
    ContactPerson: '',
    photo: '',
  });

  const [entries, setEntries] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      photo: file,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setEntries([...entries, formData]);
    setFormData({
      AcID: '',
      AccountName: '',
      Under: '',
      CustomerType: '',
      Area: '',
      OpeningBalance: '',
      CRDR: '',
      Address: '',
      PhoneNumber: '',
      mobileNumber: '',
      CSTRegNo: '',
      OutofState: '',
      TaxfreeArea: '',
      salesMan: '',
      BankAcnumber: '',
      bankAType: '',
      Remark: '',
      ClAmmount: '',
      clDays: '',
      ContactPerson: '',
      photo: '',
    });
  };

  const handleDeleteEntry = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
  };

  const cancelButton=()=>{
    closeModal();
  }
  return (
    <div className="form-container">
      <h2>Customer Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <div className="form-group">
          <label htmlFor="AcID">A/c ID:</label>
          <input
            type="text"
            id="AcID"
            name="AcID"
            value={formData.AcID}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="AccountName">Account Name:</label>
          <input
            type="text"
            id="AccountName"
            name="AccountName"
            value={formData.AccountName}
            onChange={handleInputChange}
          />
        </div>
        {/* Other form inputs */}
        {/* ... */}

        <div className="form-group">
          <label htmlFor="photo">Photo:</label>
          <input
            type="file"
            id="photo"
            onChange={handleFileInputChange}
            accept="image/*"
          />
        </div>
        <div className="form-group">
          <label htmlFor="selectOption">Select Option:</label>
          <select
            id="selectOption"
            name="selectOption"
            value={formData.selectOption}
            onChange={handleInputChange}
          >
            <option value="">Select an option</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="textareaValue">Textarea:</label>
          <textarea
            id="textarea"
            name="textareaValue"
            value={formData.textareaValue}
            onChange={handleInputChange}
            rows="4"
            cols="50"
          />
        </div>
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <button class="btn btn-primary">Submit</button>
        <button type="button" class="btn btn-danger" onClick={()=>cancelButton()}>Cancel</button>
        </div>
        
      </form>

      {/* <h2>Entries</h2>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            <strong>Name:</strong> {entry.name}, <strong>Email:</strong> {entry.email},{' '}
            <strong>Option:</strong> {entry.selectOption}, <strong>Textarea:</strong>{' '}
            {entry.textareaValue}
            <button onClick={() => handleDeleteEntry(index)}>Delete</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Form;
