import { useContext, useState } from "react";
import { User } from "../../types/user"
import SocialMediaRowComponent from "./SocialMediaRowComponent";
import SubCardComponent from "./SubCardComponent/SubCardComponent";
import { ThemeContext } from "../../App";
import { PictureInPicture } from "lucide-react";
import UserInfoComponent from "../UserInfoComponent";
import { UserRound } from "lucide-react";

interface UserCardComponentProps {
    user: User;
};

export default function UserCardComponent ({user}:UserCardComponentProps) {
    const theme = useContext(ThemeContext);
    const [hover,setHover] = useState(false);
    const [popupOpen,setPopupOpen] = useState(false);

    return (
        <div style = {{width: '400px', height: '600px', border: `1px solid ${theme?.theme.colors.border}`, borderRadius: 4,flexShrink: 0, overflowY: 'scroll', scrollbarWidth: 'thin', boxShadow: `10px 10px 10px ${theme?.theme.colors.shadow}30`}}>
            {user.personalInformation.avatarUrl ? <img style = {{width: '100%', height: '150px', borderBottom: `1px solid ${theme?.theme.colors.border}`, objectFit: 'cover', position: 'sticky', top: 0, backgroundColor: theme?.theme.colors.background}} src = {user.personalInformation.avatarUrl} /> : <UserRound size = {150} height={150} style = {{borderBottom: `1px solid ${theme?.theme.colors.border}`, objectFit: 'cover', position: 'sticky', top: 0, backgroundColor: theme?.theme.colors.background}}/> }
            <h1 style = {{padding: 0, marginBottom: 0, textAlign: 'center'}}>{user.personalInformation.firstName } {user.personalInformation.lastName}</h1>
            <div style = {{textAlign: 'center'}}><PictureInPicture 
            style = {{
               cursor: hover ? 'pointer' : 'default'
            }}
            onMouseEnter={() => {setHover(true)}}
            onMouseLeave={() => setHover(false)}
            onClick = {() => {setPopupOpen(true)}}/>
            </div>
            <p><span style = {{fontWeight: 'bold'}}>Phone: </span> <span style = {{color: theme?.theme.colors.primary, fontWeight: 'bolder'}}>{user.personalInformation.phone}</span></p>
            <p><span style = {{fontWeight: 'bold'}}>Email:</span> {user.personalInformation.email}</p>
            <p><span style = {{fontWeight: 'bold'}}>Birthday:</span> {user.personalInformation.birthday}</p>
            <p><span style = {{fontWeight: 'bold'}}>Office:</span> {user.employment.officeAddress.street}</p>
            <p style = {{fontWeight: 'bold', textAlign: 'center', textDecoration: 'underline'}}>Socials</p> 
            <SocialMediaRowComponent userSocialMedia = {user.personalInformation.socialMedia}/> 
            <div style = {{border: `1px solid ${theme?.theme.colors.border}`, margin: 10, padding: 4, borderRadius: '4px', height: '150px', overflowY: 'scroll', scrollbarWidth: 'thin'}}>
            {user.employment.manager.length > 1 && <>
            <h2>Manager</h2>
            {user.employment.manager.map((manager) => {return <SubCardComponent key = {manager.id} subUser={manager}/>})}
            </>}
            {user.employment.directReports.length > 0 && <><h2>Direct Reports</h2>
            {user.employment.directReports.map((reporter) => {return <SubCardComponent key = {reporter.id} subUser={reporter}/>})}
            </>}
            </div>
            {popupOpen && <UserInfoComponent 
                user = {user}
                open = {popupOpen}
                setOpen={setPopupOpen}
            />}
        </div>
    )
}