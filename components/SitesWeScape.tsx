"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Brand = {
  name: string;
  slug?: string; // Simple Icons slug, omit for text-only fallback
};

const allBrands: Brand[] = [
  { name: "Amazon" },
  { name: "Instagram", slug: "instagram" },
  { name: "LinkedIn" },
  { name: "Facebook", slug: "facebook" },
  { name: "X", slug: "x" },
  { name: "Walmart" },
  { name: "Uber", slug: "uber" },
  { name: "Airbnb", slug: "airbnb" },
  { name: "Booking.com", slug: "bookingdotcom" },
  { name: "Zillow", slug: "zillow" },
  { name: "DoorDash", slug: "doordash" },
  { name: "Uber Eats", slug: "ubereats" },
  { name: "Instacart", slug: "instacart" },
  { name: "Yelp", slug: "yelp" },
  { name: "Tripadvisor", slug: "tripadvisor" },
  { name: "Indeed", slug: "indeed" },
  { name: "Glassdoor", slug: "glassdoor" },
  { name: "Shopee", slug: "shopee" },
  { name: "Flipkart" },
  { name: "TikTok", slug: "tiktok" },
  { name: "Reddit", slug: "reddit" },
  { name: "YouTube", slug: "youtube" },
  { name: "eBay", slug: "ebay" },
  { name: "Etsy", slug: "etsy" },
  { name: "Target", slug: "target" },
  { name: "Costco" },
  { name: "Kroger" },
  { name: "Deliveroo", slug: "deliveroo" },
  { name: "Foodpanda" },
  { name: "Grab", slug: "grab" },
  { name: "DiDi" },
  { name: "Careem" },
  { name: "Yango" },
  { name: "inDrive" },
  { name: "Bolt" },
  { name: "OpenTable" },
  { name: "Expedia", slug: "expedia" },
  { name: "Kayak" },
  { name: "Priceline" },
  { name: "Rightmove" },
  { name: "Realtor.com" },
  { name: "Craigslist" },
  { name: "Shopify", slug: "shopify" },
  { name: "Shein" },
  { name: "AliExpress", slug: "aliexpress" },
  { name: "Lazada" },
  { name: "Rakuten", slug: "rakuten" },
  { name: "Robinhood", slug: "robinhood" },
];

// Deterministic shuffle
function seededShuffle(arr: Brand[], seed: number): Brand[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    seed = (seed * 16807) % 2147483647;
    const j = seed % (i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const row1 = seededShuffle(allBrands, 1).slice(0, 16);
const row2 = seededShuffle(allBrands, 2).slice(0, 16);
const row3 = seededShuffle(allBrands, 3).slice(0, 16);

function LogoPill({ brand }: { brand: Brand }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-2.5 rounded-lg border border-border/50 bg-card px-5 py-3 logo-grayscale hover:border-border transition-all mx-2">
      {brand.slug ? (
        <Image
          src={`https://cdn.simpleicons.org/${brand.slug}/white`}
          alt={brand.name}
          width={18}
          height={18}
          className="flex-shrink-0"
          unoptimized
        />
      ) : (
        <span className="w-[18px] h-[18px] rounded bg-white/10 flex items-center justify-center text-[10px] font-bold text-muted-foreground flex-shrink-0">
          {brand.name.charAt(0)}
        </span>
      )}
      <span className="text-sm font-medium text-muted whitespace-nowrap">
        {brand.name}
      </span>
    </div>
  );
}

function MarqueeRow({
  brands,
  direction = "left",
  speed = "normal",
}: {
  brands: Brand[];
  direction?: "left" | "right";
  speed?: "normal" | "slow";
}) {
  const doubled = [...brands, ...brands, ...brands];
  const animClass =
    direction === "left"
      ? speed === "slow"
        ? "animate-marquee-left-slow"
        : "animate-marquee-left"
      : "animate-marquee-right";

  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className={`flex ${animClass}`}>
        {doubled.map((brand, i) => (
          <LogoPill key={`${brand.name}-${i}`} brand={brand} />
        ))}
      </div>
    </div>
  );
}

export default function SitesWeScape() {
  return (
    <section className="py-28 sm:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            If it&apos;s on the web, we can scrape it.
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto">
            These are just a few of the thousands of sites our engine handles
            every day.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-4">
        <MarqueeRow brands={row1} direction="left" />
        <MarqueeRow brands={row2} direction="right" speed="slow" />
        <MarqueeRow brands={row3} direction="left" />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-muted mt-12 text-base"
      >
        ...and any other website, web app, or mobile app.{" "}
        <span className="text-foreground font-medium">
          No site is off limits.
        </span>
      </motion.p>
    </section>
  );
}
