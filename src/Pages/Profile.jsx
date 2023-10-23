import React, { useContext, useEffect, useState } from "react";
import TopBar from "../Components/TopBar/TopBar";
import { Label, TextInput } from "flowbite-react";
import Navbar from "../Components/Navbar";
import { Store } from "../Store";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Profile() {
  const { state, dispatch: ctxDisptach } = useContext(Store);
  const { userInfo } = state;
  const [item, setitem] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5454/api/users/profile`,
          {
            headers: {
              Authorization: `Bearer ${userInfo.jwt}`,
            },
          }
        );
        setitem(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(item);
  return (
    <div>
      <TopBar />
      <Navbar />
      {item ? (
        <div className=" flex justify-center items-center mt-12 mb-20">
          <form className="flex max-w-md flex-col  gap-4 w-96 f ">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Email" />
              </div>
              <TextInput id="email1" type="email" value={item.email} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="firstName" value="First Name" />
              </div>
              <TextInput id="firstName" type="text" value={item.firstName} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="lastName" value="Last Name" />
              </div>
              <TextInput id="lastName" type="text" value={item.lastName} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="role" value="Role " />
              </div>
              <TextInput id="firstroleName" type="text" value={item.role} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="mobile" value="Mobile " />
              </div>
              <TextInput id="mobile" type="text" value={item.mobile} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="add" value="Address " />
              </div>
              <TextInput id="add" type="text" value={item.address} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Password" />
              </div>
              <TextInput id="password1" type="password" value={item.password} />
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default Profile;
