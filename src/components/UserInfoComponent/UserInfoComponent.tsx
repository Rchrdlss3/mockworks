import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { User } from "../../types/user"
import { ThemeContext } from "../../App";
import UserInfoHeaderComponent from "./UserInfoHeaderComponent/UserInfoHeaderComponent";
import UserInfoNavigationComponent from "./UserInfoNavigationComponent/UserInfoNavigationComponent";
import UserTimeOffComponent from "./UserInfoBodyComponent/UserTimeOffComponent";
import UserPersonalComponent from "./UserPersonalComponent/UserPersonalComponent";
import UserJobInfoComponent from "./UserJobInfoComponent/UserJobInfoComponent";
import UserDirectReportComponent from "./UserDirectReportComponent/UserDirectReportComponent";
import UserNotesComponent from "./UserNotesComponent/UserNotesComponent";
import UserInfoSettingsComponent from "./UserInfoSettingsComponent/UserInfoSettingsComponent";

interface UserInfoComponentProps {
    user: User;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>
}

export const InfoNavigation = {
    personalInformation : 'Personal Information',
    jobInformation: 'Job Information',
    directReports: 'Direct Reports',
    timeOff: 'Time Off',
    notes: 'Notes',
    documents: 'Documents',
    settings: 'Settings'
};

export default function UserInfoComponent ({user,open,setOpen}:UserInfoComponentProps) {
    const theme = useContext(ThemeContext);
    const [currentInfo,setCurrentInfo] = useState(InfoNavigation.directReports);

    const UserInfoBody = () => {
        switch (currentInfo) {
            case 'Time Off':
                return UserTimeOffComponent
            case 'Personal Information':
                return UserPersonalComponent
            case 'Job Information':
                return UserJobInfoComponent
            case 'Direct Reports':
                return UserDirectReportComponent
            case 'Notes':
                return UserNotesComponent
            case 'Documents':
                return UserTimeOffComponent
            case 'Settings':
                return UserInfoSettingsComponent 
            default:
                setCurrentInfo(InfoNavigation.timeOff)
                return UserTimeOffComponent
        }
    }
    useEffect(() => {

    },[currentInfo])

    return (
          <div style = {{
            position: 'absolute', 
            minWidth: '100vw', 
            minHeight: '100vh', 
            width: '100%',
            height: '100%',
            backgroundColor: `${theme?.theme.colors.primary}90`,
            display: 'flex',
            justifyContent: 'center',
            zIndex: 100,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            }}> 
            <div style = {{
                width: '60%', 
                height: '60%',
                backgroundColor: theme?.theme.colors.background,
                margin: 'auto',
                justifyContent: 'center',
                overflow: 'hidden'
                }}>
            <UserInfoHeaderComponent user = {user} setOpen = {setOpen}/>
            <div style = {{display: 'flex', height: '100%'}}>
            <UserInfoNavigationComponent navigation={InfoNavigation} currentNavigation = {currentInfo} setCurrentNavigation={setCurrentInfo}/>
            {React.createElement(UserInfoBody(),{user})}
            </div>
           </div>
          </div> 
    )
}