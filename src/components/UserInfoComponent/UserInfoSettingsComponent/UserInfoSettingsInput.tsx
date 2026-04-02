import { Dispatch, SetStateAction } from "react";
import { PersonalInformation, User } from "../../../types/user";

interface UserInfoSettingsComponentProps {
    employee: User;
    setEmployee: Dispatch<SetStateAction<User>>;
    personalInfo: PersonalInformation
    edit: boolean;
    infoKey: keyof PersonalInformation
}

export default function UserInfoSettingInput({edit,employee,setEmployee,infoKey}:UserInfoSettingsComponentProps) {

    const splitIndex = infoKey.indexOf('Name');
    const capitalizedInfoKey = infoKey.charAt(0).toUpperCase() + infoKey.slice(1);
    const labelName = splitIndex !== -1 ? `${ infoKey.charAt(0).toUpperCase() + infoKey.slice(1,splitIndex)} Name` : capitalizedInfoKey
    return (
        <div>
        <div><label htmlFor = {infoKey}>{labelName}: </label></div>
        <input 
        id = {infoKey}
        value = {String(employee.personalInformation[infoKey])}
        disabled = {!edit}
        onChange={(e) => {setEmployee({...employee, personalInformation: {...employee.personalInformation, [infoKey]: e.target.value}})}}
        />
        </div>
    )
}