import { User } from "../../../types/user"

interface UserDirectReportComponentProps {
    user: User
}

export default function UserDirectReportComponent ({user}:UserDirectReportComponentProps) {
    return (
        <div style = {{width: '100%'}}>
            <h1>Manager</h1>
            {user.employment.manager.map((manager) => {return <h2>{manager.personalInformation.firstName} {manager.personalInformation.lastName}</h2>})}
            <h1>Direct Reports</h1>
            {user.employment.directReports.map((dr) => {return <h2>{dr.personalInformation.firstName}</h2>})}
        </div>
    )
}