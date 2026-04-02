import { User } from "../../../types/user"

interface UserJobInfoComponentProps {
    user: User;
}

export default function UserJobInfoComponent({user}:UserJobInfoComponentProps) {
    return (
        <div style = {{display: 'flex', flexDirection: 'column', textAlign: 'center', width: '100%'}}>
            <h2 style = {{margin: 0}}>Job Information:</h2>
            <p>Job Title: {user.employment.jobTitle}</p>
            <p>Department: {user.employment.department}</p>
            <p>Employment Type: {user.employment.employmentType}</p>
            <p>Start Date: {user.employment.startDate}</p>
            <div>
                <h2>Office Location:</h2>
            <p>{user.employment.officeAddress.city}, {user.employment.officeAddress.state}</p>
            <p>{user.employment.officeAddress.street}, {user.employment.officeAddress.zip}</p>
            </div>
        </div>
    )
}