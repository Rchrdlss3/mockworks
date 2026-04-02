import { useContext } from "react"
import { User } from "../../../types/user"
import { ThemeContext } from "../../../App"
import { Calculator, ArrowLeftRight, Clock } from "lucide-react";

interface UserInfoBodyComponentProps {
    user: User
};

export default function UserTimeOffComponent ({user}:UserInfoBodyComponentProps) {

    const theme = useContext(ThemeContext);

    return (
        <div style = {{display: 'flex', flexDirection: 'column', width: '100%', minHeight: '100%', gap: 10, padding: 10}}>

            <div style = {{border: `1px solid ${theme?.theme.colors.border}`, borderRadius: `4px`}}>
            <div style = {{
                display: 'flex',
                height: '50px',
                borderBottom: `1px solid ${theme?.theme.colors.border}`, 
                justifyContent: 'center', 
                alignContent: 'center', 
                alignItems: 'center',
                justifyItems: 'center',
                textAlign: 'center', 
                gap: 20,
                fontWeight: 500,
                color: theme?.theme.colors.primary
                }}>
                <div><Calculator size={15} /> Calculate balance</div> <div> <ArrowLeftRight size={15} /> Make adjustments</div> <div> <Clock size={15}/>  Record time off</div>
            </div>
            </div>

            <div style = {{border: `1px solid ${theme?.theme.colors.border}`, borderRadius: `4px`}}>
                <div style = {{backgroundColor: theme?.theme.colors.surface, height: '30px',borderBottom: `1px solid ${theme?.theme.colors.border}`, fontWeight: 800}}>Policies</div>
            </div>

            <div style = {{border: `1px solid ${theme?.theme.colors.border}`, borderRadius: `4px`}}>
                <div style = {{backgroundColor: theme?.theme.colors.surface, height: '30px',borderBottom: `1px solid ${theme?.theme.colors.border}`, fontWeight: 800}}>Upcoming time off</div>
            </div>
        </div>
    )
}