import React, { useState } from 'react'
import ssip from './ssip.png'
import axios from 'axios'
const Footer = () => {
  const [password, setpassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const downloadfile = async () => {

    const config = { headers: { "Content-Type": "application/json" } };
    const { data: {isAdmin }} = await axios.post("/api/v1/verify", { password }, config);
console.log(isAdmin)
    if (isAdmin) {
      const tempLink = document.createElement('a');
      tempLink.href = '/api/v1/getdata';
      tempLink.click();
    }
  }

  return (
    <>
      <center>
        <div className='mt-6 bg-slate-800 text-light text-xs h-50 pt-5 '>
          <div> <img src={ssip} alt="SSIP" className='h-10 w-20' /></div>
          <div className='mt-3'>&copy; All Rights Reserved SSIP 2.0</div>
          <div className="mt-3 text-xs text-gray-400">This Website is made by SSIP Developer team</div>

          <button
            className="text-slate-800 hover:text-slate-800 py-2 px-4"
            onClick={openModal}
          >X
          </button>


        </div>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8 relative">
              <span
                className="absolute top-0 right-2 cursor-pointer text-blue-900"
                onClick={closeModal}
              >X
              </span>
              <input type="password" name="psw" className='h-7'  placeholder='......' value={password} onChange={(e) => setpassword(e.target.value)} required />
              <br />
              <button className='mt-3 bg-slate-800 px-4 text-white text-sm py-1' onClick={downloadfile}>Download</button>
            </div>
          </div>
        )}
      </center>
    </>
  )
}

export default Footer
