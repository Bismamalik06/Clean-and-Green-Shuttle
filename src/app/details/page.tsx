
import { AnimatedSection } from '@/components/home/animated-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CheckCircle, DollarSign, Globe, Shield, Users, FileText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BackButton } from '@/components/back-button';

export default function DetailsPage() {
  return (
    <>
      <AnimatedSection as="header" animation="fade-in" parallax staggerChildren className="hero">
        <Image
          src="/images/image copy.png"
          alt="Strategic Analysis Hero Image"
          data-ai-hint="future bus"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay" />
        <div className="relative z-10 p-4 max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-primary-foreground/80">Campus Transportation: Sustainability and Efficiency</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            Strategic Analysis of the Clean & Green Shuttle Service
          </h1>
        </div>
      </AnimatedSection>

      <div className="bg-background">
        <div className="page-container">
          
          <AnimatedSection as="div" id="introduction" animation="fade-up" staggerChildren className="mb-12">
            <h2 className="section-title">1. Introduction and Strategic Mandate</h2>
            <h3 className="subsection-title">1.1. Background and Problem Statement</h3>
            <p className="text-muted-foreground mb-4">
              Higher Education Institutions (HEIs) are no longer merely centers of knowledge, but are at the forefront of the transition towards models of environmental responsibility and operational efficiency. Globally, campus sustainability is viewed as a "living laboratory," and sustainable transit solutions are central to this transformation. The objective of this research is to propose a strategic intervention in the form of the "Clean and Green Shuttle Service," which addresses the systemic challenges of campus mobility through the deployment of a dedicated fleet of Electric Low-Speed Vehicles (LSVs).
            </p>
            <p className="text-muted-foreground mb-6">
              In the Pakistani urban context, transportation is not just a logistical issue but a critical factor in social inclusion and quality of life. Inefficient public transport primarily affects low-income groups and women, resulting in reduced participation in activities. The existing transportation system leads to three major systemic deficiencies that not only affect operational efficiency but also compromise student well-being:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="lift-card hover:bg-destructive/10">
                <CardHeader>
                  <DollarSign className="h-8 w-8 text-destructive mb-2" />
                  <CardTitle>A. Socio-Economic Burden</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Travel costs are a decisive factor in students' choice of travel mode, and these expenses force many students to restrict their essential daily activities. Since the government heavily invests in providing higher education to break the cycle of poverty, it is essential to reduce the financial burden of campus access to fulfill educational objectives.</p>
                </CardContent>
              </Card>
              <Card className="lift-card hover:bg-primary/10">
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>B. Safety and Public Health Hazards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Reliance on external public transport causes serious health hazards. In densely populated urban areas like Pakistan, congestion, inadequate ventilation, and poor sanitation exacerbate these risks, leading to stress and reduced air quality among commuters.</p>
                </CardContent>
              </Card>
              <Card className="lift-card hover:bg-accent/10">
                <CardHeader>
                  <Users className="h-8 w-8 text-accent mb-2" />
                  <CardTitle>C. The Last-Mile Connectivity Gap</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Logistically, the last-mile gap is a major obstacle. There is a perceptible distance between nearby public transit stations (such as Bus Rapid Transit—BRT) and central academic facilities, which hinders timely and equitable educational access for students.</p>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="bg-secondary">
        <div className="page-container">
          <AnimatedSection as="div" id="tbl" animation="fade-up" staggerChildren className="mb-12">
              <h3 className="subsection-title">1.2. Strategic Intervention: The Triple Bottom Line Framework</h3>
              <p className="text-muted-foreground mb-4">
                  The "Clean and Green Shuttle Service" offers a solution to all these challenges through a full electric utility-grade golf cart fleet. The success of this project will be measured under the Triple Bottom Line (TBL) framework, which comprises three key, interrelated dimensions:
              </p>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <Card className="text-center lift-card hover:shadow-xl hover:bg-blue-900/40">
                <CardHeader className="items-center">
                  <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    <Users className="h-10 w-10 text-blue-500" />
                  </div>
                  <CardTitle className="mt-4 text-xl">People (Well-being)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Enhancing student well-being, safety, and providing equitable access for all, including those with disabilities.</p>
                </CardContent>
              </Card>
              <Card className="text-center lift-card hover:shadow-xl hover:bg-green-900/40">
                <CardHeader className="items-center">
                  <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-full">
                    <Globe className="h-10 w-10 text-green-500" />
                  </div>
                  <CardTitle className="mt-4 text-xl">Planet (Sustainability)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Reducing our carbon footprint and contributing to a sustainable campus environment for future generations.</p>
                </CardContent>
              </Card>
              <Card className="text-center lift-card hover:shadow-xl hover:bg-orange-500/20">
                <CardHeader className="items-center">
                  <div className="p-4 bg-yellow-100 dark:bg-yellow-900/30 rounded-full">
                    <DollarSign className="h-10 w-10 text-yellow-500" />
                  </div>
                  <CardTitle className="mt-4 text-xl">Profit (Financial Stability)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Creating a financially stable, efficient, and scalable service that reduces long-term operational costs.</p>
                </CardContent>
              </Card>
            </div>
              <p className="text-muted-foreground mt-8">
                  This project is viewed as a strategic asset that reduces long-term costs. Traditional fuel-based transport is a volatile cost center with high operating expenses (OPEX). In contrast, the LSV infrastructure, combined with government incentives (low duty and reduced electricity tariffs), becomes a long-term, subsidized asset that aligns with the University's Environmental, Social, and Governance (ESG) objectives. This positioning improves the project's ability to attract external funding (such as UN Sustainable Development funds or specific HEC grants).
              </p>
          </AnimatedSection>
        </div>
      </div>
      
      <div className="bg-background">
        <div className="page-container">
          <AnimatedSection as="div" id="analysis" className="mb-12">
              <h2 className="section-title">2. Analysis of Systemic Challenges and Electric Mobility Validation</h2>
              
              <h3 className="subsection-title">2.1. The Student Well-being Deficit and Social Impact</h3>
              <p className="text-muted-foreground mb-4">There is a need to understand the social impact of transportation failures in Pakistani universities more closely. The financial burden of travel is a core issue that dictates students' travel mode choices , forcing poor students to reduce personal activities, which affects social inclusion.</p>
              
              <Card className="mb-4 lift-card hover:bg-primary/10">
                  <CardHeader>
                      <CardTitle>Gender-Based Disadvantage and Safety</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <p className="text-muted-foreground">Reliance on public transport reinforces gender inequality. In the Pakistani urban context, women suffer from insecurity and unplanned mobility on public transport, often forcing them to rely on personal vehicles or limited access. Establishing an institutional, secure, and controlled LSV service directly reduces this disadvantage. Such a service supports social equity goals by increasing the mobility of female students.</p>
                  </CardContent>
              </Card>

              <Card className="lift-card hover:bg-primary/10">
                  <CardHeader>
                      <CardTitle>Access for Students with Disabilities</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <p className="text-muted-foreground">HEC has allocated a 2% quota in scholarships for students with different abilities to encourage them to pursue university education without a financial burden. However, public transport systems generally fail to provide adequate access for persons with disabilities. Due to their small size, low speed, and low ground clearance, LSVs can be easily adapted to accommodate students with disabilities, thus complying not only with HEC guidelines but also with global accessibility standards.</p>
                  </CardContent>
              </Card>
          </AnimatedSection>
        </div>
      </div>

      <div className="bg-secondary">
        <div className="page-container">
          <AnimatedSection as="div" id="validation" className="mb-12">
              <h3 className="subsection-title">2.2. Validation of Low-Speed Electric Vehicles (LSV)</h3>
              <p className="text-muted-foreground mb-4">LSVs, particularly utility-grade golf carts, offer an ideal solution for educational institutions, and global market trends support this. These vehicles ensure pedestrian safety due to their low operating speed, reduce noise pollution (a non-financial benefit that reduces student stress on campus) , and are eco-friendly due to zero tailpipe emissions.</p>

              <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                      <h4 className="text-xl font-bold mb-3">Global and Regional Precedents:</h4>
                      <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                          <li>
                              <span className="font-semibold text-foreground">Global Market Growth:</span> The electric golf cart industry is expected to grow at a CAGR of 8.03% from 2025 to 2034, primarily driven by the increasing demand for eco-friendly transport at airports, resorts, and universities.
                          </li>
                          <li>
                              <span className="font-semibold text-foreground">Successful Pakistani Model:</span> The Aga Khan University Hospital (AKUH), Karachi, successfully implemented its locally manufactured solar-cum-electric shuttle service in 2013, earning it a CSR award.
                          </li>
                          <li>
                              <span className="font-semibold text-foreground">International Educational Case Studies:</span> At Princess Nourah Bint Abdulrahman University (PNU) in Riyadh, Saudi Arabia, research demonstrated that the cost of battery replacement could account for up to 75% of the operating cost, validating the long-term financial logic of investing in higher quality Li-ion batteries.
                          </li>
                      </ul>
                  </div>
                  <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-lg group">
                      <Image src="/images/image copy 7.png" alt="Aga Khan University Hospital Shuttle" data-ai-hint="solar shuttle" data-animate="scale" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
              </div>
          </AnimatedSection>
        </div>
      </div>
      
      <div className="bg-background">
        <div className="page-container">
          <AnimatedSection as="div" id="financial" className="mb-12">
              <h2 className="section-title">3. Financial Planning and Lifecycle Cost Modeling</h2>
              <p className="text-muted-foreground mb-4">The financial success of the project depends on viewing the Initial Capital Expenditure (CAPEX) not merely as a cost but as a long-term asset, whose value is assessed through Life Cycle Cost (LCC) analysis.</p>

              <h3 className="subsection-title">3.1. Analysis of Initial Capital Expenditure (CAPEX)</h3>
              <p className="text-muted-foreground mb-4">For the pilot phase, the initial CAPEX is estimated at PKR 17–20 million (for 4 LSVs).</p>
              <Card className="lift-card hover:bg-accent/10">
                  <CardHeader>
                      <CardTitle>Table 1: Estimated Capital Expenditure (CAPEX) for the Pilot Phase</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <Table>
                          <TableHeader>
                              <TableRow>
                                  <TableHead>Component</TableHead>
                                  <TableHead>Unit Quantity</TableHead>
                                  <TableHead>Estimated Cost (PKR Million)</TableHead>
                                  <TableHead>Description/Source</TableHead>
                              </TableRow>
                          </TableHeader>
                          <TableBody>
                              <TableRow><TableCell>LSV Utility Cart (4–8 Seater, Li-ion)</TableCell><TableCell>4 Units</TableCell><TableCell>4.9 – 6.4</TableCell><TableCell>LSV Supplier Data</TableCell></TableRow>
                              <TableRow><TableCell>Level 2 AC Charger (7-11 kW)</TableCell><TableCell>2 Units</TableCell><TableCell>0.70 – 0.90</TableCell><TableCell>Local CI Price</TableCell></TableRow>
                              <TableRow><TableCell>Solar Energy/Li-ion Battery Premium</TableCell><TableCell>4 Units</TableCell><TableCell>4.0 – 5.5</TableCell><TableCell>Strategic Cost for LCC/OPEX Reduction</TableCell></TableRow>
                              <TableRow><TableCell>Telematics/GPS and Fleet Management</TableCell><TableCell>One-time</TableCell><TableCell>1.0 – 1.5</TableCell><TableCell>Operational Control and SDG 9 Requirements</TableCell></TableRow>
                              <TableRow><TableCell>Import, Duty (1-10%), Contingency Fund</TableCell><TableCell>One-time</TableCell><TableCell>6.4 – 5.7</TableCell><TableCell>Consistent with user's PKR 17–20M estimate</TableCell></TableRow>
                              <TableRow className="font-bold bg-secondary"><TableCell>Total Estimated LSV CAPEX</TableCell><TableCell></TableCell><TableCell>17.0 – 20.0</TableCell><TableCell>Consistent with the initial abstract</TableCell></TableRow>
                          </TableBody>
                      </Table>
                  </CardContent>
              </Card>
          </AnimatedSection>
        </div>
      </div>
      
      <div className="bg-secondary">
        <div className="page-container">
          <AnimatedSection as="div" id="opex" className="mb-12">
              <h3 className="subsection-title">3.2. Operational Expenditures (OPEX) and LCC Advantage</h3>
              <Card className="lift-card hover:bg-accent/10">
                  <CardHeader>
                      <CardTitle>Table 2: LSV vs. Traditional Diesel Transport: Comparative LCC Drivers</CardTitle>
                  </CardHeader>
                  <CardContent>
                       <Table>
                          <TableHeader>
                              <TableRow>
                                  <TableHead>Cost Category</TableHead>
                                  <TableHead>LSV (Electric Golf Cart)</TableHead>
                                  <TableHead>Traditional Diesel Transport</TableHead>
                                  <TableHead>Strategic Implications</TableHead>
                              </TableRow>
                          </TableHeader>
                          <TableBody>
                              <TableRow><TableCell>Fuel/Energy Cost</TableCell><TableCell>Very Low (Subsidized tariff PKR 39.70/unit)</TableCell><TableCell>High, Volatile</TableCell><TableCell>Financial Predictability; Alignment with SDG 7.</TableCell></TableRow>
                              <TableRow><TableCell>Maintenance</TableCell><TableCell>Low (Fewer mechanical parts)</TableCell><TableCell>High (Engine, complex systems)</TableCell><TableCell>Reduction in system downtime and OPEX fluctuation.</TableCell></TableRow>
                              <TableRow><TableCell>Acquisition Duty/Tax</TableCell><TableCell>Low (1% to 10%)</TableCell><TableCell>Variable, generally high</TableCell><TableCell>Policy-driven advantage for rapid fleet deployment.</TableCell></TableRow>
                              <TableRow><TableCell>Primary Risk Factor</TableCell><TableCell>Battery replacement cost</TableCell><TableCell>Fuel price instability</TableCell><TableCell>Risk mitigation through Lithium/Solar investment.</TableCell></TableRow>
                          </TableBody>
                      </Table>
                  </CardContent>
              </Card>
          </AnimatedSection>
        </div>
      </div>

      <div className="bg-background">
        <div className="page-container">
          <AnimatedSection as="div" id="revenue" className="mb-12">
              <h3 className="subsection-title">3.3. Revenue Generation and Financial Stability</h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                      <p className="text-muted-foreground mb-4">The project should not only be a subsidized operation but also generate a sustainable revenue stream (Profit TBL).</p>
                      <h4 className="text-xl font-bold mb-2">Multi-Level Revenue Model:</h4>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                          <li><span className="font-semibold text-foreground">Fixed Semester Pass (Subscription Model):</span> A premium, predictable subscription model targeting long-term students.</li>
                          <li><span className="font-semibold text-foreground">Tiered Pay-per-Ride System (Transactional Model):</span> A flexible system for visitors or infrequent users.</li>
                          <li><span className="font-semibold text-foreground">Advertising and Sponsorship:</span> Utilizing LSVs for on-campus and external corporate advertising.</li>
                          <li><span className="font-semibold text-foreground">Carbon Credit Revenue:</span> Leveraging CO2 reduction for a measurable carbon asset.</li>
                      </ul>
                  </div>
                  <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-lg group">
                      <Image
                        src="/images/image copy 6.png"
                        alt="Financial chart showing growth"
                        data-ai-hint="market growth chart"
                        fill
                        className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
                      />
                  </div>
              </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="bg-secondary">
        <div className="page-container">
          <AnimatedSection as="div" id="operations" className="mb-12">
              <h2 className="section-title">4. Operational Strategy and Transport Management</h2>
              <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-card">
                      <CardHeader><CardTitle>4.1. Route Optimization and Demand Mapping</CardTitle></CardHeader>
                      <CardContent><p className="text-muted-foreground">The service will operate on a clear hub and spoke model, connecting external public transport nodes to central academic, administrative, and residential zones to effectively solve the last-mile problem.</p></CardContent>
                  </Card>
                  <Card className="bg-card">
                      <CardHeader><CardTitle>4.2. Technology Integration and Service Quality</CardTitle></CardHeader>
                      <CardContent><p className="text-muted-foreground">Mandatory integration of GPS tracking and telematics into the LSV fleet is essential for monitoring battery health, real-time vehicle location, and usage metrics.</p></CardContent>
                  </Card>
              </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="bg-background">
        <div className="page-container">
          <AnimatedSection as="div" id="sdgs" className="mb-12">
              <h2 className="section-title">5. Alignment with UN Sustainable Development Goals (SDGs)</h2>
               <Card className="lift-card hover:bg-accent/10">
                  <CardHeader>
                      <CardTitle>Table 3: Clean and Green Shuttle Service: SDG Alignment and Impact Measurement</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <Table>
                          <TableHeader>
                              <TableRow>
                                  <TableHead>SDG Focus</TableHead>
                                  <TableHead>Strategic Objective</TableHead>
                                  <TableHead>Target Indicator (UNECE/SDGs)</TableHead>
                                  <TableHead>Pilot Phase Metric</TableHead>
                                  <TableHead>Baseline/Benchmark</TableHead>
                              </TableRow>
                          </TableHeader>
                          <TableBody>
                              <TableRow><TableCell>SDG 7 (Clean Energy)</TableCell><TableCell>Promote affordable, reliable, sustainable energy.</TableCell><TableCell>Change in energy consumption</TableCell><TableCell>Utilization on subsidized EV tariff of PKR 39.70/unit</TableCell><TableCell>Cost per km for Diesel vs. Electric.</TableCell></TableRow>
                              <TableRow><TableCell>SDG 9 (Infrastructure)</TableCell><TableCell>Build resilient infrastructure and promote innovation.</TableCell><TableCell>Passenger volumes, by mode of transport (9.1.2)</TableCell><TableCell>Daily student ridership volume and LSV utilization rate</TableCell><TableCell>Current public transport mode share (16–20%).</TableCell></TableRow>
                              <TableRow><TableCell>SDG 11 (Communities)</TableCell><TableCell>Ensure safe, affordable, accessible transport.</TableCell><TableCell>Proportion of population with convenient access to public transport (11.2.1)</TableCell><TableCell>Reduction in travel time/cost burden; accessibility rate</TableCell><TableCell>Pre-pilot survey on student travel costs and dissatisfaction.</TableCell></TableRow>
                              <TableRow><TableCell>SDG 13 (Climate Action)</TableCell><TableCell>Take action to combat climate change.</TableCell><TableCell>CO2 reduction in the transport sector.</TableCell><TableCell>Total tonnage of CO2 equivalent saved annually</TableCell><TableCell>AKUH Benchmark: 7.1 tons of CO2 saved per vehicle annually.</TableCell></TableRow>
                          </TableBody>
                      </Table>
                  </CardContent>
              </Card>
          </AnimatedSection>
        </div>
      </div>

      <div className="bg-secondary">
        <div className="page-container">
          <AnimatedSection as="div" id="roadmap" className="mb-12">
              <h2 className="section-title">6. Strategic Recommendations, Risk Analysis, and Implementation Roadmap</h2>
              <h3 className="subsection-title">6.2. Phased Implementation and Scalability (Roadmap)</h3>
              <div className="flex flex-col gap-6 mt-6">
                  <Card className="lift-card hover:bg-blue-500/10">
                      <CardHeader>
                          <div className="flex items-center gap-4">
                              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30">
                                  <FileText className="h-6 w-6 text-blue-500" />
                              </div>
                              <CardTitle className="text-xl">Phase I: Pilot Program (12 Months)</CardTitle>
                          </div>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground">Deploy 4 LSVs on high-demand routes, establishing baseline metrics for cost, utilization, and student satisfaction.</p>
                      </CardContent>
                  </Card>
                  <Card className="lift-card hover:bg-green-500/10">
                      <CardHeader>
                          <div className="flex items-center gap-4">
                              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30">
                                  <Globe className="h-6 w-6 text-green-500" />
                              </div>
                              <CardTitle className="text-xl">Phase II: Expansion (Years 2-3)</CardTitle>
                          </div>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground">Scale the fleet, implement a full multi-level revenue model, and research solar integration.</p>
                      </CardContent>
                  </Card>
                  <Card className="lift-card hover:bg-yellow-500/10">
                      <CardHeader>
                          <div className="flex items-center gap-4">
                              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30">
                                  <DollarSign className="h-6 w-6 text-yellow-500" />
                              </div>
                              <CardTitle className="text-xl">Phase III: Sustainable Integration (Year 4+)</CardTitle>
                          </div>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground">Achieve financial self-sufficiency and explore local manufacturing partnerships.</p>
                      </CardContent>
                  </Card>
              </div>
          </AnimatedSection>
        </div>
      </div>
      
      <div className="bg-background">
        <div className="page-container">
          <AnimatedSection as="div" id="references">
              <h2 className="section-title">References</h2>
              <Card className="lift-card hover:bg-secondary">
                <CardContent className="pt-6 text-sm text-muted-foreground break-words space-y-2">
                  <p><Link href="https://www.mdpi.com/2071-1050/15/4/3406" target="_blank" className="text-primary hover:underline">https://www.mdpi.com/2071-1050/15/4/3406</Link></p>
                  <p><Link href="http://eprints.lse.ac.uk/65025/1/__lse.ac.uk_storage_LIBRARY_Secondary_libfile_shared_repository_Content_Adeel,%20M_Transportation%20disadvantage_Adeel_Transportation%20disadvantage_2016.pdf" target="_blank" className="text-primary hover:underline">http://eprints.lse.ac.uk/.../Adeel_Transportation%20disadvantage_2016.pdf</Link></p>
                  <p><Link href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9561432/" target="_blank" className="text-primary hover:underline">https://pmc.ncbi.nlm.nih.gov/articles/PMC9561432/</Link></p>
                  <p><Link href="https://www.hec.gov.pk/english/news/AnnualReports/Annual%20Report%202019-20.pdf" target="_blank" className="text-primary hover:underline">https://www.hec.gov.pk/.../Annual%20Report%202019-20.pdf</Link></p>
                  <p><Link href="https://docs.google.com/forms/d/e/1FAIpQLScEElRLx_ScF-mgaWwTfVnbDqKSgoUPqiiTPuBJhCKVYQv65g/viewform?usp=dialog" target="_blank" className="text-primary hover:underline">Comprehensive Project Survey</Link></p>
                </CardContent>
              </Card>
          </AnimatedSection>
        </div>
      </div>

      <div className="py-12 text-center">
        <BackButton />
      </div>
    </>
  );
}
