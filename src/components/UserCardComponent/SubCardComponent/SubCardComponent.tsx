import { useContext } from "react";
import { User } from "../../../types/user"
import { ThemeContext } from "../../../App";
import { UserRound } from "lucide-react";

interface SubCardComponentProps {
    subUser: User;
}

export default function SubCardComponent ({subUser}:SubCardComponentProps) {
    const theme = useContext(ThemeContext);

    return (
        <div style = {{display: 'flex', alignItems: 'center', gap: 10}}>
            {subUser.personalInformation.avatarUrl ? <img src = {subUser.personalInformation.avatarUrl} style = {{backgroundColor: theme?.theme.colors.background, height: '50px', width: '50px', borderRadius: '50%'}} /> : <UserRound size = {50} height={50} style = {{borderBottom: `1px solid ${theme?.theme.colors.border}`, objectFit: 'cover', position: 'sticky', top: 0, backgroundColor: theme?.theme.colors.background}}/>}
            <h3 style = {{color: theme?.theme.colors.primary}}>{subUser.personalInformation.firstName} {subUser.personalInformation.lastName}</h3>
        </div>
    )
}