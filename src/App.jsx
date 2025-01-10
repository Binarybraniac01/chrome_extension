import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container p-3 bg-light rounded" style={{ maxWidth: '350px' }}>
      <div className="mb-3">
        {/* Email input */}
        <input 
          type="email" 
          className="form-control form-control-sm" 
          id="exampleFormControlInput1" 
          placeholder="name@example.com" 
        />
      </div>
      <div className="mb-3">
        {/* Textarea */}
        <textarea 
          className="form-control form-control-sm" 
          id="exampleFormControlTextarea1" 
          rows="3" 
          placeholder="Your message..." 
        ></textarea>
      </div>
      <div className="d-flex justify-content-center">
        {/* Submit Button */}
        <button 
          type="button" 
          className="btn btn-primary btn-sm" 
        >
          Submit
        </button>
      </div>
    </div>

  )
}

export default App
