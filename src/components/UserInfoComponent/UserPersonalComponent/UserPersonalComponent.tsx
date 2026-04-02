import { useContext } from "react";
import { ThemeContext } from "../../../App";
import { User } from "../../../types/user";
import SocialMediaRowComponent from "../../UserCardComponent/SocialMediaRowComponent";
import { UserRound } from "lucide-react";

interface UserPersonalComponentProps {
    user: User;
};

export default function UserPersonalComponent ({user}:UserPersonalComponentProps) {
    const theme = useContext(ThemeContext);
    return (
        <div style = {{ width: '100%', height: '100%', borderRight: `2px solid ${theme?.theme.colors.border}`, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1 style = {{margin: 0, padding: 0}}>{user.personalInformation.firstName} {user.personalInformation.lastName}</h1>
            <p style = {{margin: 0}}><span style = {{fontWeight: 'bold'}}>Pronouns: </span>{user.personalInformation.pronouns}</p>
           {user.personalInformation.avatarUrl ? <img src = {user.personalInformation.avatarUrl} style = {{width: '150px'}}/> : <UserRound style = {{ backgroundColor: theme?.theme.colors.background, borderRadius: '50%', margin: 10}}/>}
            <p><span style = {{fontWeight: 'bold'}}>Email:</span> {user.personalInformation.email}</p>
            <p><span style = {{fontWeight: 'bold'}}>Birthday:</span> {new Date(user.personalInformation.birthday).toUTCString()}</p>
            <p><span style = {{fontWeight: 'bold'}}>Phone: </span> <span style = {{color: theme?.theme.colors.primary, fontWeight: 'bolder'}}>{user.personalInformation.phone}</span></p>
            <SocialMediaRowComponent userSocialMedia={user.personalInformation.socialMedia}/>
        </div>
    )
};