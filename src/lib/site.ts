export const SITE = {
  name: "Steam Locomotive Insurance",
  domain: "steamlocomotiveinsurance.com",
  url: "https://steamlocomotiveinsurance.com",
  tagline: "Insurance for Heritage Steam Railroads",
  description: "Specialized insurance for heritage steam railroad operators — general liability, railroad (FELA) liability, passenger liability, rolling stock & equipment, boiler & machinery, commercial property, and workers comp. Licensed in all 50 states. Same-day quotes.",
  phone: "844-967-5247",
  phoneHref: "tel:+18449675247",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  statesLicensed: "All 50 states",
} as const;

export const SERVICES = [
  {
    slug: "general-liability-insurance",
    title: "General Liability Insurance",
    short: "Covers third-party bodily injury and property damage across your depot, grounds, and excursions — the foundation policy.",
    icon: "Shield",
    description:
      "General liability is the core policy for any heritage steam railroad. It protects against third-party claims of bodily injury and property damage — at the depot, on the platform, around the grounds, and across your public operations.",
    longDescription: `## General Liability for Heritage Steam Railroads

A steam excursion railroad, museum, or restoration operation is a public-facing business with constant foot traffic — visitors on platforms and grounds, families at the depot, spectators at the lineside. General liability insurance is the foundation that protects your organization when a member of the public is injured or their property is damaged in connection with your operation.

## What GL Covers

- **Bodily injury:** A visitor slips on a wet platform, trips on the depot steps, or is injured around the grounds
- **Property damage:** Your operation damages a third party's property
- **Premises liability:** Slip-and-fall and other accidents across platforms, parking, the gift shop, and museum grounds
- **Personal & advertising injury:** Libel, slander, and advertising-related claims
- **Medical payments:** Minor injuries handled without a lawsuit

## Why GL Alone Is Not Enough

General liability covers third-party premises and operations claims — but it does **not** cover injuries to fare-paying passengers in the way a dedicated passenger liability policy does, it does **not** address the federal **FELA** exposure for railroad employees, and it does **not** cover boiler failure or damage to your own rolling stock. Those gaps are filled by passenger liability, railroad (FELA) liability, boiler & machinery, and rolling stock coverage.

## Certificate & Host-Railroad Requirements

Host railroads (Class I and shortline track owners), municipalities, fairgrounds, and event venues routinely require proof of general liability with them named as additional insured before your train can operate or your event can run. We issue certificates same-day.

## Why Steam Operators Need a Specialist

A general business carrier rarely understands heritage rail. We place steam railroads with carriers that write railroad and museum risk and structure GL alongside FELA, passenger, boiler, and rolling stock coverage.`,
    coverages: [
      "Third-party bodily injury",
      "Property damage liability",
      "Depot & platform premises liability",
      "Personal & advertising injury",
      "Medical payments",
      "Additional insured for host railroads & venues",
    ],
    faqs: [
      {
        q: "Does general liability cover my passengers?",
        a: "Not fully. GL covers third parties and visitors on your premises, but fare-paying passengers riding the train are best protected by dedicated passenger liability coverage. Most steam operators carry both.",
      },
      {
        q: "Will a host railroad require proof of insurance?",
        a: "Yes. Track owners, municipalities, and event venues almost always require general liability with them named as additional insured before you can operate. We issue certificates and additional insured endorsements same-day.",
      },
    ],
  },
  {
    slug: "railroad-liability-insurance",
    title: "Railroad Liability (FELA) Insurance",
    short: "Covers the federal FELA liability you owe railroad employees — the exposure standard workers comp doesn't address.",
    icon: "TrainTrack",
    description:
      "Railroad liability addresses the Federal Employers' Liability Act (FELA) exposure unique to rail operations — the fault-based federal system that governs injuries to railroad workers instead of, or alongside, state workers compensation.",
    longDescription: `## Railroad Liability (FELA) for Steam Operators

Railroad work is governed by a special federal law. The **Federal Employers' Liability Act (FELA)** makes a railroad liable to its employees for on-the-job injuries caused by the railroad's negligence — a fault-based system that can produce far larger awards than the no-fault state workers compensation that covers most businesses. Heritage steam operations with covered railroad employees face this exposure, and railroad liability coverage is what responds.

## What It Covers

- **FELA bodily injury claims** by railroad employees (engineers, firemen, conductors, brakemen, shop crews)
- **Negligence-based awards** for pain, suffering, and lost earning capacity beyond comp benefits
- **Occupational disease and cumulative-trauma** claims under FELA
- **Legal defense** for covered claims

## FELA vs. State Workers Comp

This is the critical nuance for steam operators:

- **State workers comp** is no-fault and covers most employees with statutory benefits.
- **FELA** is fault-based, applies to "railroad employees," and exposes the operator to negligence suits with much higher potential damages.

Determining which workers fall under FELA versus state comp is complex and operation-specific. We help you sort the exposure and place railroad liability where FELA applies, coordinated with your workers compensation.

## Why Volunteers Complicate It

Many heritage railroads run on volunteers. Whether a volunteer is treated as a railroad "employee" for FELA, a covered worker for comp, or a participant can be a gray area. Proper classification and coverage structure protects both your people and your organization.`,
    coverages: [
      "FELA employee injury liability",
      "Negligence-based award coverage",
      "Occupational disease claims",
      "Engine, train & shop crew exposure",
      "Coordination with workers comp",
      "Legal defense costs",
    ],
    faqs: [
      {
        q: "What is FELA and why does it matter for a steam railroad?",
        a: "FELA is the Federal Employers' Liability Act — a fault-based federal system that governs injuries to railroad employees instead of standard no-fault workers comp. It can produce much larger awards, so railroads need dedicated FELA / railroad liability coverage.",
      },
      {
        q: "Do my volunteers fall under FELA?",
        a: "It depends on their role and how your operation is structured — it's a genuine gray area. We help classify your paid crews and volunteers correctly and place FELA and workers comp coverage so no one falls through a gap.",
      },
    ],
  },
  {
    slug: "passenger-liability-insurance",
    title: "Passenger Liability Insurance",
    short: "Covers injuries to fare-paying passengers riding your excursion, dinner, or tourist train.",
    icon: "Ticket",
    description:
      "Passenger liability covers bodily injury claims by the fare-paying passengers riding your train — boarding and alighting, in the coaches, on open-air cars, and during the excursion itself.",
    longDescription: `## Passenger Liability for Steam Excursions

Carrying the public is the heart of a heritage steam operation — and your single largest changing exposure. Every excursion, dinner train, and tourist run puts fare-paying passengers in your care, from the moment they board to the moment they step back onto the platform. Passenger liability covers bodily injury claims arising from that carriage.

## What It Covers

- **Boarding and alighting injuries** — steps, gaps, and platforms
- **In-transit injuries** in coaches and on open-air cars
- **Slips, falls, and burns** related to the ride experience
- **Special-event and dinner-train** passenger exposure
- **Legal defense** for covered claims

## Why It's Distinct From General Liability

General liability handles third parties and visitors on your grounds. Passenger liability specifically responds to the people you are **transporting for a fare** — a higher duty of care and a distinct, severity-prone exposure. As a common (or contract) carrier of passengers, you are held to an elevated standard, and dedicated passenger coverage is built for it.

## Setting Limits to Your Ridership

Your limit should reflect realistic excursion ridership and the worst-case multi-passenger incident. Operators running large dinner trains or peak-season excursions need higher limits, often supported by an umbrella. We size the limit to your trains and your busiest day.

## Releases Help, But Aren't Coverage

Signed waivers and ticket-back releases support your defense but pay nothing toward an injured passenger's claim. Pair them with passenger liability for real protection.`,
    coverages: [
      "Fare-paying passenger injury",
      "Boarding & alighting claims",
      "Open-air & coach car exposure",
      "Dinner-train & special-event riders",
      "Higher-limit & umbrella options",
      "Legal defense costs",
    ],
    faqs: [
      {
        q: "Isn't general liability enough to cover my passengers?",
        a: "No. GL covers third parties and visitors on your premises; fare-paying passengers you transport are an elevated, distinct exposure best covered by dedicated passenger liability. Most steam operators carry both.",
      },
      {
        q: "How much passenger liability coverage do I need?",
        a: "Enough to reflect your realistic ridership and a worst-case multi-passenger incident. Large dinner trains and peak excursions usually warrant higher limits supported by an umbrella. We size it to your trains.",
      },
    ],
  },
  {
    slug: "rolling-stock-equipment-insurance",
    title: "Rolling Stock & Equipment Insurance",
    short: "Physical-damage coverage for your locomotives, coaches, and rolling stock — the irreplaceable heart of your railroad.",
    icon: "TrainFront",
    description:
      "Rolling stock & equipment insurance covers physical damage to your locomotives, passenger coaches, freight cars, and maintenance-of-way equipment — the high-value, often irreplaceable assets that general and liability policies don't cover.",
    longDescription: `## Rolling Stock & Equipment for Heritage Railroads

Your steam locomotive, your heritage coaches, and your rolling stock are the irreplaceable core of your railroad — and they face derailment, fire, collision, and storm exposure that liability policies do nothing for. Rolling stock & equipment coverage (a specialized physical-damage form) protects the equipment itself.

## What's Covered

- **Derailment and collision damage** to locomotives and cars
- **Fire damage** — a constant exposure around live steam and fireboxes
- **Storm, flood, and falling-object damage** to stored and operating equipment
- **Vandalism and theft** of equipment and fittings
- **In-transit / interchange** damage when equipment moves over host track
- **Agreed-value settlement** for irreplaceable heritage equipment

## Why Standard Property Won't Respond

Commercial property policies are built for buildings and contents at a fixed location — not for self-propelled, moving heritage equipment. Rolling stock requires a purpose-built form that follows the equipment whether it's in the roundhouse, on your line, or interchanged onto a host railroad.

## Agreed Value Is Essential

A restored steam locomotive can represent years of labor and donations and has no real "market price." Insuring it at depreciated value would leave a catastrophic gap. We place rolling stock on an **agreed-value** basis so a loss pays the figure you and the carrier set in advance.

## Restoration Projects

Equipment under restoration has its own exposure — partial value, shop hazards, and components off-site. We schedule restoration projects so a fire or loss mid-rebuild is covered.`,
    coverages: [
      "Locomotive & coach physical damage",
      "Derailment & collision",
      "Fire damage",
      "In-transit / interchange coverage",
      "Restoration project coverage",
      "Agreed-value settlement",
    ],
    faqs: [
      {
        q: "Does commercial property cover my locomotive and coaches?",
        a: "No. Property policies cover buildings and contents at a fixed site, not moving heritage rolling stock. Locomotives, coaches, and cars need a dedicated rolling stock / equipment physical-damage form, ideally on an agreed-value basis.",
      },
      {
        q: "How is an irreplaceable restored locomotive valued?",
        a: "On an agreed-value basis — you and the carrier set the insured figure in advance so a loss pays that amount, rather than a depreciated 'market' value that would never reflect the restoration work. We structure this for heritage equipment.",
      },
    ],
  },
  {
    slug: "boiler-machinery-insurance",
    title: "Boiler & Machinery Insurance",
    short: "Covers sudden boiler failure and mechanical/electrical breakdown of the equipment your railroad runs on.",
    icon: "Flame",
    description:
      "Boiler & machinery (equipment breakdown) insurance covers sudden and accidental failure of your steam boiler and the mechanical and electrical equipment your operation depends on — including resulting damage and lost income.",
    longDescription: `## Boiler & Machinery for Steam Railroads

The boiler is the beating heart of a steam locomotive — and a pressure vessel carrying real catastrophic potential. Boiler & machinery insurance (also called equipment breakdown) covers sudden and accidental failure of the boiler and the mechanical and electrical systems your railroad runs on, an exposure that property and liability policies specifically exclude.

## What It Covers

- **Sudden boiler failure** — cracked sheets, stay failures, tube ruptures, low-water events
- **Mechanical breakdown** of running gear, valve gear, and machinery
- **Electrical breakdown** of shop and facility systems
- **Resulting damage** caused by a covered breakdown
- **Lost income / extra expense** when a breakdown halts excursions

## Why It's Separate From Property and Rolling Stock

Standard property and rolling stock forms exclude **breakdown** — internal failure from pressure, mechanical, or electrical causes. Boiler & machinery is the coverage written specifically for that internal-failure peril, and for a steam operation it is among the most important policies you can carry.

## Inspections Are Part of the Deal

Boiler & machinery carriers provide jurisdictional and insurance boiler inspections — valuable expertise that supports your FRA / state boiler compliance (the 1472 service-day rules, annual and periodic inspections). Strong maintenance records and inspection history improve both safety and pricing.

## Pairs With Rolling Stock and Business Income

Rolling stock covers external physical damage; boiler & machinery covers internal breakdown; business income replaces the revenue lost while a damaged locomotive is out of service. Together they protect the locomotive and the operation that depends on it.`,
    coverages: [
      "Sudden boiler failure",
      "Mechanical breakdown",
      "Electrical breakdown",
      "Resulting damage",
      "Lost income / extra expense",
      "Jurisdictional boiler inspections",
    ],
    faqs: [
      {
        q: "Doesn't my property or rolling stock policy cover boiler failure?",
        a: "No. Property and rolling stock forms exclude internal breakdown from pressure, mechanical, or electrical causes. Sudden boiler failure and machinery breakdown require dedicated boiler & machinery (equipment breakdown) coverage — essential for any steam operation.",
      },
      {
        q: "Do boiler & machinery carriers help with inspections?",
        a: "Yes. They provide jurisdictional and insurance boiler inspections that support your FRA/state boiler compliance. Good maintenance and inspection records improve both safety outcomes and your premium.",
      },
    ],
  },
  {
    slug: "commercial-property-insurance",
    title: "Commercial Property Insurance",
    short: "Protects your depot, roundhouse, shop, museum buildings, track, and contents against fire, storm, and theft.",
    icon: "Building2",
    description:
      "Commercial property insurance covers the fixed assets of your railroad — the depot, roundhouse, restoration shop, museum buildings, station, track infrastructure, and contents — against fire, storm, theft, and other covered perils.",
    longDescription: `## Commercial Property for Heritage Railroads

Beyond the locomotive itself, a steam operation runs on real estate and structures: the depot and station, the roundhouse, the restoration and machine shop, museum and display buildings, the gift shop, and track and lineside infrastructure. Commercial property insurance protects these fixed assets.

## What's Covered

- **Buildings:** depot, station, roundhouse, shop, museum, and gift shop
- **Shop machinery and tools:** lathes, presses, and restoration equipment
- **Contents and collections:** displays, archives, parts inventory, and merchandise
- **Track, structures, and signals** (as scheduled)
- **Perils:** fire, smoke, storm, theft, vandalism, and water damage
- **Business income:** lost revenue when a covered loss halts operations

## Fire Exposure Is Real

Live steam, fireboxes, hot ash, and welding and machining in the shop make fire a genuine and ever-present property exposure for steam railroads. Carriers look closely at your spark-arrestor practices, ash-handling, hot-work procedures, and lineside fire prevention — strong controls improve your terms.

## Business Income for a Seasonal Operation

Most heritage railroads earn heavily in a short season and around special events. If a fire or storm closes your depot or shops, business income coverage replaces lost ticket and event revenue and pays continuing expenses while you recover — timed to your season.

## Coordinating the Whole Program

Commercial property covers your buildings and contents; rolling stock covers the equipment; boiler & machinery covers breakdown. We coordinate all three so there are no overlaps or gaps.`,
    coverages: [
      "Depot, roundhouse & shop buildings",
      "Museum buildings & collections",
      "Shop machinery & tools",
      "Track & lineside structures",
      "Business income / interruption",
      "Fire, storm, theft & water perils",
    ],
    faqs: [
      {
        q: "Does commercial property cover my locomotive too?",
        a: "No. Commercial property covers your fixed buildings, shop machinery, and contents. Self-propelled, moving rolling stock (locomotives and cars) needs a separate rolling stock / equipment form, and internal breakdown needs boiler & machinery. We coordinate all three.",
      },
      {
        q: "Why is fire prevention so important to property underwriters?",
        a: "Live steam, fireboxes, hot ash, and shop hot-work make fire a real exposure for steam railroads. Documented spark-arrestor, ash-handling, hot-work, and lineside fire controls reduce risk and improve your property pricing.",
      },
    ],
  },
  {
    slug: "workers-compensation-insurance",
    title: "Workers Compensation Insurance",
    short: "Covers medical bills and lost wages when shop crews, station staff, and non-FELA employees are injured on the job.",
    icon: "HardHat",
    description:
      "Workers compensation covers medical expenses and lost wages when your shop crews, station staff, and other covered employees are injured on the job — coordinated with FELA railroad liability for employees the federal act covers.",
    longDescription: `## Workers Comp for Heritage Railroads

A steam operation is hands-on and hazardous — shop crews work around boilers, machinery, and heavy components; station and gift-shop staff are on their feet; grounds crews handle track and equipment. Workers compensation pays the medical bills and lost wages of injured employees, and in most states it's required by law once you have employees.

## What Workers Comp Covers

- **Medical expenses** for work-related injuries
- **Lost wage replacement** during recovery
- **Disability benefits** for lasting injuries
- **Employer liability** if an injured worker pursues a claim
- **Return-to-work / light duty** support

## The FELA Coordination Question

This is the defining nuance for railroads. Employees who are **railroad workers** (operating and certain shop crews) may fall under **FELA** — the fault-based federal system — rather than state workers comp. Station, retail, administrative, and museum staff typically remain under **state workers comp**. Getting each role into the right system is essential:

- Misclassifying a FELA-covered crew member as comp-only can leave a serious uninsured gap.
- We structure workers comp for your non-railroad staff and coordinate it with railroad (FELA) liability for covered crews.

## Volunteers

Heritage railroads run on volunteers, whose coverage status varies by state and role. We help you address volunteer exposure so an injured volunteer isn't left uncovered.

## Controlling Your Premium

- Maintain a documented safety program: shop, boiler, hot-work, and lineside protocols
- Return injured staff to light duty quickly to limit lost-time claims
- Classify payroll accurately across shop, operating, station, and clerical roles`,
    coverages: [
      "Medical expense coverage",
      "Lost wage replacement",
      "Disability benefits",
      "Employer liability",
      "Shop, station & grounds staff",
      "FELA coordination & return-to-work",
    ],
    faqs: [
      {
        q: "Do I need workers comp and railroad (FELA) liability both?",
        a: "Often yes. Railroad operating and certain shop crews may fall under federal FELA, while station, retail, and administrative staff fall under state workers comp. We place comp for non-railroad staff and coordinate FELA coverage for covered crews so there's no gap.",
      },
      {
        q: "Are our volunteers covered?",
        a: "It depends on state law and the volunteer's role — a common gray area for heritage railroads. We help you address volunteer exposure across comp, FELA, and participant coverage so an injured volunteer isn't left uncovered.",
      },
    ],
  },
] as const;

export const STATS = [
  { value: 20, suffix: "+", label: "Years Insuring Specialty Risk" },
  { value: 50, suffix: " States", label: "Licensed Nationwide" },
  { value: 100, suffix: "+", label: "Heritage Operations Insured" },
  { value: 24, suffix: " Hours", label: "Quote Turnaround" },
] as const;

export const FAQS = [
  {
    q: "What insurance does a heritage steam railroad need?",
    a: "At minimum: general liability and passenger liability for the public you carry, plus railroad (FELA) liability for covered employees. Most steam operators also carry rolling stock & equipment, boiler & machinery (equipment breakdown), commercial property for the depot and shops, and workers comp for non-railroad staff.",
  },
  {
    q: "What is FELA and why does it matter?",
    a: "The Federal Employers' Liability Act is a fault-based federal system governing injuries to railroad employees instead of no-fault state workers comp. It can produce much larger awards, so railroads need dedicated railroad (FELA) liability coverage coordinated with workers comp for non-railroad staff.",
  },
  {
    q: "Why do I need boiler & machinery coverage?",
    a: "Standard property and rolling stock policies exclude internal breakdown. Sudden boiler failure and mechanical or electrical breakdown — a real catastrophic exposure for steam — require dedicated boiler & machinery (equipment breakdown) coverage.",
  },
  {
    q: "How is my locomotive valued for insurance?",
    a: "On an agreed-value basis under a rolling stock / equipment form. You and the carrier set the insured figure in advance so a loss pays that amount rather than a depreciated value that would never reflect the restoration work.",
  },
  {
    q: "How much does heritage steam railroad insurance cost?",
    a: "It varies with ridership, operating miles, the value of your rolling stock, boiler and shop exposure, payroll, FELA exposure, and the limits you choose. A small museum operation pays far less than a large excursion railroad. We shop specialty rail and museum carriers for a competitive same-day quote.",
  },
  {
    q: "Can you provide certificates for host railroads and venues?",
    a: "Yes. We issue certificates of insurance and additional insured endorsements same-day — exactly what host (track-owning) railroads, municipalities, fairgrounds, and event venues require before you can operate.",
  },
] as const;

export const CREDENTIALS = [
  "Licensed in All 50 States",
  "NPN #8608479",
  "Founded 2005",
  "A.M. Best A+ Rated Carriers",
  "Heritage Railroad Specialists",
  "Same-Day Certificates",
] as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
