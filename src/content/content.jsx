import { useState } from 'react'


function ContentPage() {
  const [btnState, setBtnState] = useState(true)

  function handleClick() {
    setBtnState(!btnState)
  }

  return (
    <>
    { btnState ? 
        (
          <div className="position-fixed bottom-0 end-0 m-3">
              <button type="button" className="btn btn-primary" onClick={handleClick}>
                  Click Me
              </button>
          </div>
        ) : (
          <div className="position-fixed bottom-0 end-0 m-3 bg-light border rounded p-3" style={{ width: '150px', height: '100px' }}>
              Small Box
          </div>
        )

    }   
    </>
  )
}

export default ContentPage;