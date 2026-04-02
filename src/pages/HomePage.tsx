import { useContext, useEffect, useState } from "react";
import { PageStyle } from "../styles/GeneralStyles";
import { ThemeContext } from "../App";
import { FakeCompanyType, getFakeCompanies } from "../utils/mockAPI";
import PartnershipComponent from "../components/PartnershipComponent/PartnershipComponent";
import PricingHeaderComponent from "../components/PricingHeaderComponent/PricingHeaderComponen";
import PricingCardComponent from "../components/PricingCardComponent/PricingCardComponent";
import { paymentPlans } from "../types/paymentplans";

export default function HomePage() {
  const theme = useContext(ThemeContext)
  const [companies,setCompanies] = useState<Array<FakeCompanyType>>([]);

  useEffect(() => {
    setCompanies(getFakeCompanies());
  },[])

  return (
    <div style = {PageStyle(theme?.theme!)}>
      <PricingHeaderComponent />
      <div style = {{display: 'flex', justifyContent: 'center', gap: 20}}>
        {paymentPlans.map((plan) => {
          return <>
          <PricingCardComponent plan = {plan}/>
          </>
        })}
      </div>
      <PartnershipComponent companies = {companies}/>
    </div>
  );
}

