import { useState } from "react"
import { assets } from "../assets/assets";
const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "shantanau",
    image: assets.profile_pic,
    email: "shantanunirapal@gmail.com",
    phone: "+91 9284008059",
    address: {
      line1: "sadasdasdasd",
      line2: "here is some address"
    },
    gender: "male",
    dob: '2000-01-02'
  })
  const [isEdit, setIsEdit] = useState(false)
  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded" src={userData.image} alt="" />

      {
        isEdit ? <input className="bg-gray-50 text-3xl" type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} /> : <p>{userData.name}</p>
      }
      <hr />
      <div>
        <p>CONTACT INFORMATION</p>
        <div>
          <p>Email id : </p>
          <p>{userData.email}</p>
          <p>Phone : </p>
          {
            isEdit ? <input type="text" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} /> : <p>{userData.phone}</p>
          }
          <p>Address : </p>
          {
            isEdit ?
              <p>
                <input type="text" value={userData.address.line1}
                  onChange={e => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} />
                <br />
                <input type="text" value={userData.address.line2}
                  onChange={e => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} />

              </p> :
              <p>
                {userData.address.line1}<br />
                {userData.address.line2}
              </p>}

        </div>
      </div>
      <div>
        <p>basic information</p>
        <div>
          <p>Gender : </p>
          {
            isEdit ?
              <select onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}>
                <option value="Male" key="">Male</option>
                <option value="Female" key="">Female</option>
              </select>
              : <p>{userData.gender}</p>
          }
          <p>Birthday : </p>
          {
            isEdit ? <input type="date" value={userData.dob} onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} />
              : <p>{userData.dob}</p>
          }
        </div>
      </div>

      <div>
        {
          isEdit ? <button onClick={() => setIsEdit(false)}>Save Information</button>
            : <button onClick={() => setIsEdit(true)}>Edit</button>
        }
      </div>

    </div>

  )
}

export default MyProfile