import React, { useState } from "react"
import { Table, Collapse } from "react-bootstrap"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons"

import style from "../styles/comparisonTable.module.scss"



const ComparisonTableRow = ({ topic, democrat, republican  }) => {
  const [open, setOpen] = useState(false);

  return (
    <tr onClick={() => setOpen(!open)}>
      <td className={style.topic}>{topic}</td>
      <td className={`${style.dem}`} style={{ background: open ? "#0000ae" : "" }}>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <FontAwesomeIcon icon={open ? faCaretUp : faCaretDown} style={{fontSize:"2rem"}} />YES
        </div>
        <Collapse in={open}>
          <div>
            <p>{democrat}</p>
          </div>
        </Collapse>
      </td>
      <td className={`${style.rep}`} style={{ background: open ? "#ff0000" : "" }}>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          NO
        </div>
        <Collapse in={open}>
          <div>
            <p>{republican}</p>
          </div>
        </Collapse>
      </td>
    </tr>
  )
}

ComparisonTableRow.defaultProps = {
  topic: "Views",
  democrat: "Fusce suscipit, wisi nec facilisis facilisis, est dui fermentum leo, quis tempor ligula erat quis odio",
  republican: "Etiam vel tortor sodales tellus ultricies commodo. Nunc porta vulputate tellus."
}



const ComparisonChart = () => (
  <Table hover className={style.demRepComparison}>
    <thead>
      <tr>
        <th className={`${style.topicTitle} ${style.topic}`}><span>Supports</span></th>
        <th className={style.dem}>DEMOCRATS</th>
        <th className={style.rep}>REPUBLICANS</th>
      </tr>
    </thead>
    <tbody>
      <ComparisonTableRow topic="Science re. Covid-19 Testing"
                          democrat='The Democratic Obama/Biden Administration capably managed multiple outbreaks and as a result developed a “Playbook for Early Response to High-Consequence Emerging Infectious Disease Threats and Biological Incidents”.  The Global Health Security and Biodefense Unit — responsible for pandemic preparedness — was established in 2015 by the Obama/Biden Administration. Democrats have consistently endorsed social distancing, mask wearing, and the scientific consensus regarding Covid-19.'
                          republican="The Republican Trump/Pence Administration never read the Playbook and eliminated the Biodefense Unit placed under the NSC at the White House. As a result, the Republican led Trump Administration has denied the science regarding covid-19, has actively discouraged mask wearing and social distancing at Trump events. The U.S. has had the worst covid-19 response of any major western power with the highest rates of infection per capita. When asked about inadequate testing, Trump said “I don’t take responsibility at all." />
      <ComparisonTableRow topic="Minimum Wage increase"
                          democrat="Supports Increase minimum wages"
                          republican="Opposed to increasing minimum wage" />
      <ComparisonTableRow topic="Higher taxes on the rich"
                          democrat="Support progressive taxation, i.e., higher tax rates for the rich.  Significant concern that 1% of the wealthiest people in the U.S. own 40% of U.S. wealth and 10% of highest income families own 90% of U.S. wealth"
                          republican="Opposed to higher taxes on the wealthy. Tend to favor a 'flat tax'. Unconcerned regarding inequitable wealth distribution in the U.S. The wealthy typically receive massive tax breaks from the Republicans. (Trump / GOP tax break case in point)" />
      <ComparisonTableRow topic="Immigrant civil rights"
                          democrat="There is greater overall support in the Democratic party for a moratorium on deporting - or offering a pathway to citizenship to - certain undocumented immigrants. e.g. those with no criminal record, who have lived in the U.S. for 5+ years. Democrats support a strong border"
                          republican="Republicans are generally against amnesty for any undocumented immigrants. Separated children from families and put them in cages. They also oppose President Obama's executive order that put a moratorium on deporting certain workers. They broke up immigrant families at the border and put children in cages. Republicans support a strong border" />
      <ComparisonTableRow topic="LGBTQ rights, gay marriage"
                          democrat="Support (some Democrats disagree). An overall belief that gays should have every right that all American’s have."
                          republican="Oppose (some Republicans disagree). An overall belief that Gay men and women should have fewer rights than others." />
      <ComparisonTableRow topic="Women’s reproductive rights"
                          democrat="A woman’s right to choice should remain legal; support Roe v. Wade"
                          republican="A woman’s right to choice should not be legal. They support putting women and doctors into jails.  Republicans oppose Roe v. Wade" />
      <ComparisonTableRow topic="ACA and Healthcare"
                          democrat="Support universal healthcare; strong support of government involvement in healthcare, including Medicare and Medicaid. Supports both private company and public agency innovations. Supports the Affordable Care Act  and Obamacare."
                          republican="Private for-profit companies can provide healthcare services more efficiently than government-run programs. Oppose the Affordable Care Act and Obamacare while also seeking budget cuts to Medicare and Medicaid" />
      <ComparisonTableRow topic="Reasonable Gun Control"
                          democrat="Democrats support the 2nd Amendment in addition to a wide range of reasonable firearms regulatory laws intended to decrease gun violence"
                          republican="Republicans support the 2nd Amendment. Republicans oppose virtually all reasonable proposals to effectively regulate firearms or reduce gun violence, citing their support for the 2nd Amendment." />
      <ComparisonTableRow topic="Science re Global Warming"
                          democrat="Democrats support the science demonstrating the disastrous results of global warming on economies and worldwide eco-systems. Supports the U.S. commitment to the Paris Agreement the leading, global treaty to address climate change."
                          republican="Republicans deny and oppose the science of climate change resulting from global warming. Republicans opposed the Paris Agreement and abandoned the treaty and our International allies." />
      <ComparisonTableRow topic="Environmental protection"
                          democrat="Supports more effective government regulations needed to protect the environment and public health. Supports growing clean energy and sustainable technologies creating thousands of new jobs."
                          republican="Generally opposes government regulations for clean air, clean water, and environmental / economic sustainability. Belief that government regulations hinder free market and job growth." />
      <ComparisonTableRow topic="Arms Control Measure"
                          democrat="Supports arms control and force reduction treaties that are verifiable and consistent with U.S. security. Has always favored Presidential global leadership in nuclear arms control dating back to John F. Kennedy."
                          republican="Current Republican leadership opposes nuclear arms control, has failed to provide global leadership, and actively pulled the U.S. out of lawful agreements written to prevent nuclear war." />
      <ComparisonTableRow topic="US alliances like NATO"
                          democrat="In favor of longtime alliances such as NATO, NORAD, ANZUS and others including the United Nations and World Health Organization. Supports U.S. leadership of those alliances."
                          republican="Opposes NATO and other multi-lateral alliances including the U.N. and WHO. In favor of an “America First” policy resulting in a go-alone position while abdicating American leadership around the world." />
    </tbody>
  </Table>
)

export default ComparisonChart
