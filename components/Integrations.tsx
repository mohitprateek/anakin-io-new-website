import Image from "next/image";

type LogoItem = {
  name: string;
  icon: string;
};

const si = (slug: string) => `https://cdn.simpleicons.org/${slug}/white`;
const local = (name: string) => `/logos/${name}.png`;

const sdks: LogoItem[] = [
  { name: "Python", icon: si("python") },
  { name: "Node.js", icon: si("nodedotjs") },
  { name: "Go", icon: si("go") },
  { name: "cURL", icon: si("curl") },
];

const deliveryTargets: LogoItem[] = [
  { name: "BigQuery", icon: si("googlebigquery") },
  { name: "Snowflake", icon: si("snowflake") },
  { name: "Google Sheets", icon: si("googlesheets") },
  { name: "PostgreSQL", icon: si("postgresql") },
  { name: "MongoDB", icon: si("mongodb") },
  { name: "S3", icon: local("s3") },
];

const integrations: LogoItem[] = [
  { name: "Anthropic", icon: si("anthropic") },
  { name: "OpenAI", icon: si("openai") },
  { name: "LangChain", icon: si("langchain") },
  { name: "LlamaIndex", icon: local("llamaindex") },
  { name: "CrewAI", icon: si("crewai") },
  { name: "Cursor", icon: si("cursor") },
  { name: "Windsurf", icon: si("windsurf") },
  { name: "Dify", icon: local("dify") },
  { name: "Lindy.ai", icon: local("lindy") },
  { name: "Replit", icon: si("replit") },
  { name: "Zapier", icon: si("zapier") },
  { name: "Make", icon: si("make") },
  { name: "n8n", icon: si("n8n") },
  { name: "Notion", icon: si("notion") },
  { name: "Airtable", icon: si("airtable") },
  { name: "Supabase", icon: si("supabase") },
  { name: "Retool", icon: si("retool") },
  { name: "Slack", icon: local("slack") },
  { name: "RapidAPI", icon: local("rapidapi") },
  { name: "Clay", icon: local("clay") },
];

function LogoTile({ item, size = "md" }: { item: LogoItem; size?: "sm" | "md" }) {
  const iconSize = size === "sm" ? 28 : 36;
  return (
    <div className="flex flex-col items-center justify-center gap-2.5 rounded-xl border border-border bg-card p-5 hover:bg-card-hover transition-colors group" title={item.name}>
      <Image
        src={item.icon}
        alt={item.name}
        width={iconSize}
        height={iconSize}
        className="opacity-60 group-hover:opacity-100 transition-opacity"
        unoptimized
      />
      <span className="text-[11px] text-muted-foreground group-hover:text-muted transition-colors font-medium">
        {item.name}
      </span>
    </div>
  );
}

export default function Integrations() {
  return (
    <section className="py-20 sm:py-24" id="integrations">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Fits your stack. Powers your workflows.
          </h2>
          <p className="text-muted">
            SDKs for every language. Integrations with the tools you already use.
          </p>
        </div>

        {/* SDKs */}
        <div className="mb-10">
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-4 text-center">
            SDKs
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-lg mx-auto">
            {sdks.map((item) => (
              <LogoTile key={item.name} item={item} size="sm" />
            ))}
          </div>
        </div>

        {/* Delivery Targets */}
        <div className="mb-14">
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-4 text-center">
            Delivery Targets
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-2xl mx-auto">
            {deliveryTargets.map((item) => (
              <LogoTile key={item.name} item={item} size="sm" />
            ))}
          </div>
        </div>

        {/* Partner integrations -- big logo grid like ElevenLabs */}
        <div>
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-4 text-center">
            Integrations
          </p>
          <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-10 gap-3">
            {integrations.map((item) => (
              <LogoTile key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
