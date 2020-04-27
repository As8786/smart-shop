import React, { createContext, useState } from 'react';


export const ProfileContext = createContext('')

const ProfileProvider = props => {

    let [userProfile, setUserProfile] = useState(defaultState)

    return <ProfileContext.Provider value={{ userProfile, setUserProfile }} >
        {props.children}
    </ProfileContext.Provider>
}

export default ProfileProvider


const defaultState = {
    name: "FirstName UserName",
    phone: "123 456 789",
    email: "helloooo@hellooo.com",
    address: "Tunis Tunisie",
    password: "oh oh"
}