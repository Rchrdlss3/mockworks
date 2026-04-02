import { ArrowBigRight } from "lucide-react"
import { useContext } from "react"
import { ThemeContext } from "../../App"
import { PricingPlan } from "../../types/paymentplans";

interface PricindCardComponentProps {
    plan: PricingPlan;
}

export default function PricingCardComponent ({plan}:PricindCardComponentProps) {

    const theme = useContext(ThemeContext);

    return (
        <div>
            {plan.badge && <div style = {{
                width: 372, 
                height: 30,
                backgroundColor: theme?.theme.colors.primary, 
                textAlign: 'center', 
                fontWeight: 600, 
                fontSize: '1.1em',
                borderRadius: `10px 10px 0px 0px`,
                position: 'absolute'
                }}>
                {plan.badge}
            </div>}
        <div style = {{
            display: 'flex',
            position: 'relative',
            flexDirection: 'column',
            width: 350,
            height: 500,
            boxShadow: `10px 5px 15px ${theme?.theme.colors.shadow}`,
            scrollbarWidth: 'thin',
            alignItems: 'center',
            borderRadius: 10,
            border: `1px solid ${theme?.theme.colors.border}10`,
            padding: 10
        }}>
            <h1 style = {{marginBottom: 0}}>{plan.name}</h1>
            <span>{plan.description}</span>
            <div style = {{display: 'flex', alignItems: 'center'}}><h1>${plan.pricePerMonth}</h1>{plan.pricePeriodLabel}</div>
            <h2>{plan.baseFee}</h2>
            <button style = {{
                backgroundColor: plan.isFeatured ? theme?.theme.colors.primary :  theme?.theme.colors.background ,
                border: `2px solid ${theme?.theme.colors.border}`,
                padding: '10px',
                width: '200px',
                height: 50,
                color: theme?.theme.colors.text.main,
                borderRadius: 5,
                fontWeight: 600
                }}>{plan.buttonLabel}</button>
            <h3 style = {{marginBottom: -1}}>Key Features</h3>
            <ul style = {{textDecoration: 'none'}}>
                {plan.features.map((feature) => {return <li>{feature}</li>})}
            </ul>
            <a>See all features <ArrowBigRight /></a>
        </div>
        </div>
    )
}