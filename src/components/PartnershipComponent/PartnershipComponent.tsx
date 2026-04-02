import { useContext } from "react"
import { FakeCompanyType } from "../../utils/mockAPI"
import { ThemeContext } from "../../App"

interface PartnershipComponentProps {
    companies: Array<FakeCompanyType>
}

export default function PartnershipComponent ({companies}:PartnershipComponentProps) {

    const theme = useContext(ThemeContext);

    return (
        <>
        <div style = {{margin: 20}}>
        <h1 style = {{marginTop: 0,  textAlign: 'center', textDecoration: 'underline', textDecorationColor: theme?.theme.colors.primary, textDecorationThickness: '7px', fontWeight: 800}}>Trusted Mockworks Partners</h1>
        <div style = {{display: 'flex', gap: 20, justifyContent: 'center', textAlign: 'center'}}>
            {companies.map((company) => {
               return <div>
                    <div style = {{
                        width: '200px', 
                        height: '200px',
                        backgroundColor: theme?.theme.colors.surface,
                        borderRadius: '5px',
                        boxShadow: `5px 10px 10px ${theme?.theme.colors.shadow}70`
                        }}><img src = {company.logo_url} style = {{width: '200px'}} /></div>
                        <h2>{company.name}</h2>
                </div>
            })}
        </div>
        </div>
        </>
    )
}