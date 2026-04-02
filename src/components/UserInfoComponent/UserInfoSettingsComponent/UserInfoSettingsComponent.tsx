import { useContext, useState } from "react";
import { User } from "../../../types/user"
import { Pencil, Send } from "lucide-react";
import { ThemeContext } from "../../../App";
import UserInfoSettingInput from "./UserInfoSettingsInput";
import { employeePronouns } from "../../../utils/constants";
import { updateUser } from "../../../utils/usersAPI";
import { UserContext } from "../../../pages/SearchPage";

interface UserInfoSettingsComponentProps {
    user: User;
}

export default function UserInfoSettingsComponent ({user}:UserInfoSettingsComponentProps) {
    const theme = useContext(ThemeContext);
    const [employee,setEmployee] = useState(user);
    const [edit,setEdit] = useState(false);
    const userContext = useContext(UserContext);

    return (
        <div style = {{textAlign: 'center', width: '100%'}}>
            <div style = {{display: 'flex', flexDirection: 'column', justifyContent: 'center', justifyItems: 'center', alignContent: 'center', alignItems: 'center'}}>
            <form>
                <UserInfoSettingInput employee={employee} setEmployee={setEmployee} personalInfo={employee.personalInformation} edit = {edit} infoKey= "birthday" />
                <UserInfoSettingInput employee={employee} setEmployee={setEmployee} personalInfo={employee.personalInformation} edit = {edit} infoKey= "email" />
                <UserInfoSettingInput employee={employee} setEmployee={setEmployee} personalInfo={employee.personalInformation} edit = {edit} infoKey= "firstName" />
                <UserInfoSettingInput employee={employee} setEmployee={setEmployee} personalInfo={employee.personalInformation} edit = {edit} infoKey= "lastName" />
                <UserInfoSettingInput employee={employee} setEmployee={setEmployee} personalInfo={employee.personalInformation} edit = {edit} infoKey= "phone" />
            <div><label htmlFor="pronouns">Pronouns</label></div>
            <select 
            id = "pronouns" 
            value = {employee.personalInformation.pronouns}
            onChange={(e) => {
                setEmployee({...employee,personalInformation: {...employee.personalInformation, pronouns: e.target.value}})
            }}
            >
                {employeePronouns.map((pronoun) => {return <option>{pronoun}</option>})}
            </select>
            </form>
            </div>
            <div>
            <Pencil 
            style = {{color: edit ? theme?.theme.colors.primary : theme?.theme.colors.shadow}}
            onClick = {() => {setEdit(!edit)}}
            />
            {edit && <Send
            style = {{color: theme?.theme.colors.primary}} 
            onClick = {() => {
                updateUser(employee).then((res) => {
                    if (!userContext?.users) return
                    const updateIndex = userContext!.users.findIndex(target => target.id === user.id)

                    if (updateIndex !== -1) {
                    const newArray =[...userContext.users]
                    newArray[updateIndex] = res
                    userContext?.setUsers(newArray)
                    }
                })
            }}
            />}
            {edit && <h2 style = {{margin: 0}}>Edit Mode</h2>}
            </div>
        </div>
    )
}