import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import RegistrationFormFormik from './components/formikForm';


const App = () => {
  const [useFormik, setUseFormik] = useState(false);

  return (
    <div>
      <h1>Registration Form</h1>
      <button onClick={() => setUseFormik(!useFormik)}>
        Switch to {useFormik ? 'Controlled Component' : 'Formik'} Form
      </button>

      {useFormik ? <RegistrationFormFormik /> : <RegistrationForm />}
    </div>
  );
};

export default App;