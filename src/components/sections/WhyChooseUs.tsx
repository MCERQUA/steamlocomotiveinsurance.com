import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const REASONS = [
  { title: "Steam Railroad Specialists", desc: "We understand FELA railroad liability, boiler & machinery exposure, and the certificate demands host railroads and municipalities put on excursion operators." },
  { title: "Competitive Rates", desc: "Access to specialty carriers that understand heritage rail risk — not general business carriers charging inflated rates for steam locomotive operations." },
  { title: "Same-Day Certificates", desc: "Need a certificate of insurance for a host railroad, event venue, or municipality before your next run? We process certificates and additional-insured endorsements same-day." },
  { title: "Licensed in All 50 States", desc: "Whether your railroad runs in one state or crosses interchange trackage, we can bind coverage where you operate." },
  { title: "Founded in 2005", desc: "20+ years serving specialty operators. We've seen the market cycles and we know which carriers pay claims." },
  { title: "Claims Advocacy", desc: "When a claim happens, we're in your corner — not hiding behind carrier call centers. Direct advocate support." },
];

export function WhyChooseUs() {
  return (
    <section className="section-pad bg-warm-white">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/restoration-shop.jpg"
                alt="Steam locomotive undergoing restoration in the shop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-forest-green/20 to-transparent" />
            </div>
          </FadeIn>

          <div>
            <FadeIn>
              <p className="font-body text-sm font-bold text-ember-orange uppercase tracking-widest mb-3">Why Choose Us</p>
              <h2 className="font-heading text-3xl sm:text-4xl text-bark font-bold mb-4">
                Why Steam Railroad Operators Choose Us
              </h2>
              <p className="font-body text-muted leading-relaxed mb-8">
                We specialize in heritage steam railroad insurance. That means we know FELA railroad liability, passenger excursion risk, and boiler & machinery exposure — and what host railroads, municipalities, and event venues require on their certificates.
              </p>
            </FadeIn>

            <div className="space-y-5">
              {REASONS.map((r, i) => (
                <FadeIn key={r.title} delay={i * 0.05}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-forest-green rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div>
                      <p className="font-body font-bold text-bark text-sm mb-0.5">{r.title}</p>
                      <p className="font-body text-sm text-muted leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
