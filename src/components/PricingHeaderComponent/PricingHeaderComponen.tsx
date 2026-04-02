import { useContext } from "react"
import { ThemeContext } from "../../App"
import { APP_NAME } from "../../utils";

export default function PricingHeaderComponent () {

    const theme = useContext(ThemeContext);

    return (
        <>
            <div style = {{display: 'flex', flexDirection: 'column', textAlign: 'center', padding: '2%'}}>
            <div style = {{display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
            <h1>{APP_NAME} Pricing</h1>
            </div>
            <h1 style = {{marginTop: 0, textDecoration: 'underline', textDecorationColor: theme?.theme.colors.primary, textDecorationThickness: '7px', fontWeight: 800}}>Transparent & Simple Pricing</h1>
            <p style = {{margin: 0}}>Get access to modern payroll software and HR services. Or pair it with rich, nationwide employee health insurance from top carriers.</p>
            <p style = {{margin: 0}}>Not sure what plan is right for you? Get a personalized recommendation.</p>
            </div>
        </>
    )
}