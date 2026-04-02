import React, { Dispatch, SetStateAction, useContext, useState } from 'react'
import {User} from '../../../types/user'
import { ThemeContext } from '../../../App'
import { Building, CircleX, UserRound } from 'lucide-react'
import { UserInfoHeaderArray } from '../../../utils/constants';

interface UserInfoHeaderComponentProps {
    user: User;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function UserInfoHeaderComponent ({user,setOpen}:UserInfoHeaderComponentProps) {

    const theme = useContext(ThemeContext);
    const [hover,setHover] = useState(false);

    return (
        <div style = {{width: '100%'}}>
            <div style = {{ backgroundColor: theme?.theme.colors.primary, height: '120px', display: 'flex', borderBottom: `1px solid ${theme?.theme.colors.border}`}}>
                {user.personalInformation.avatarUrl ? <img style = {{
                width: '130px', 
                height: '130px', 
                borderRadius: '50%', 
                margin: 10,
                backgroundColor: theme?.theme.colors.background,
                }} src = {user.personalInformation.avatarUrl}/> : <UserRound size = {130} height={130} style = {{ backgroundColor: theme?.theme.colors.background, borderRadius: '50%', margin: 10}}/>}
                <div>
                <h1 style = {{marginBottom: 0}}>{user.personalInformation.firstName} {user.personalInformation.lastName}</h1>
                <h2 style = {{margin: 0}}>{user.employment.jobTitle}</h2>
                <div style = {{display: 'flex', gap: 10}}>
                    <h3 style = {{ display: 'flex',margin: 0, fontSize: '1em', alignItems:'center'}}> <Building size={20} /> {user.employment.officeAddress.city} Office</h3>
                    {UserInfoHeaderArray.map((header) => {return <div 
                    style = {{
                        fontSize: '0.9em',
                        fontWeight: 600,
                        color: theme?.theme.colors.text.inverse
                    }}
                    > {React.createElement(header.icon, {size: 12})} {header.name}</div>})}
                </div>
                </div>
                <CircleX 
                size={30}
                style = {{
                    color: theme?.theme.colors.text.inverse,
                    cursor: hover ? 'pointer' : undefined
                }} 
                onClick = {() => {setOpen(false)}}
                onMouseEnter={() => {setHover(true)}}
                onMouseLeave={() => setHover(false)}
                />
            </div>
        </div>
    )
}