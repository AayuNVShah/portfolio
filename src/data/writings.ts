export type WritingCategory =
  | "Backend engineering"
  | "System design"
  | "Distributed systems"
  | "Networking"
  | "Databases"
  | "AI/ML";

export type Writing = {
  slug: string;
  title: string;
  category: WritingCategory;
  kind: "linkedin" | "note" | "video";
  date: string;
  summary: string;
  href?: string;
  mdx?: boolean;
};

export const writings: Writing[] = [
  {
    slug: "caching-strategies",
    title: "Caching strategies: how data moves between cache and database",
    category: "Databases",
    kind: "linkedin",
    date: "2026-10-12",
    summary:
      "Cache-aside, read-through, write-through and their trade-offs — caching as a movement of data, not a magic box.",
    href: "https://www.linkedin.com/posts/aayushi-shah-310706270_cache-aside-pattern-geeksforgeeks-activity-7515285300248707072-jSze",
    mdx: true,
  },
  {
    slug: "designing-dns",
    title: "Designing DNS at internet scale",
    category: "System design",
    kind: "linkedin",
    date: "2026-10-08",
    summary:
      "Name resolution looks simple until it has to be distributed, cached, and almost never down.",
    href: "https://www.linkedin.com/posts/aayushi-shah-310706270_systemdesign-dns-distributedsystems-activity-7513825999344664576-UjBU",
    mdx: true,
  },
  {
    slug: "routing-protocols",
    title: "How the internet decides where a packet goes",
    category: "Networking",
    kind: "linkedin",
    date: "2026-10-02",
    summary:
      "Distance vector, link state, and the absence of a central traffic controller.",
    href: "https://www.linkedin.com/posts/aayushi-shah-310706270_computernetworks-networking-routing-activity-7511654399488798720-QoMl",
    mdx: true,
  },
  {
    slug: "packetization",
    title: "Packetization: an HTTP request down the stack",
    category: "Networking",
    kind: "linkedin",
    date: "2026-10-01",
    summary:
      "From JSON payload to TCP segments and QUIC frames — encapsulation as a backend concern.",
    href: "https://www.linkedin.com/posts/aayushi-shah-310706270_computerscience-networking-backendengineering-activity-7511295945217851392-Ivpj",
    mdx: true,
  },
  {
    slug: "https-quic",
    title: "How request data travels: HTTP, TLS, and QUIC",
    category: "Backend engineering",
    kind: "linkedin",
    date: "2026-09-29",
    summary:
      "Plaintext versus encryption, handshake cost, and head-of-line blocking.",
    href: "https://www.linkedin.com/posts/aayushi-shah-310706270_networking-cybersecurity-webdevelopment-activity-7510572330000240640-yaka",
    mdx: true,
  },
  {
    slug: "what-happens-when-you-type-a-url",
    title: "What happens when you type a URL",
    category: "Distributed systems",
    kind: "linkedin",
    date: "2026-09-25",
    summary:
      "DNS, TCP/TLS versus QUIC, and the milliseconds between Enter and a page.",
    href: "https://www.linkedin.com/posts/aayushi-shah-310706270_computerscience-networking-backendengineering-activity-7509125483159236610-d2-X",
    mdx: true,
  },
];

export const writingCategories: WritingCategory[] = [
  "Backend engineering",
  "System design",
  "Distributed systems",
  "Networking",
  "Databases",
  "AI/ML",
];

export function getWriting(slug: string) {
  return writings.find((item) => item.slug === slug);
}
