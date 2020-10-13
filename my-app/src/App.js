import React,{ useState } from 'react';
import SignUp from './Components/SignUp';
import FormSuccess from './Components/FormSuccess';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div>
        {!isSubmitted ? (
          <SignUp submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
    </div>
  );
}

export default App;
