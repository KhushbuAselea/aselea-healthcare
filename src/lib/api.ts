/**
 * API integration layer.
 *
 * UI components never import mock data directly — they call these async
 * functions. Today the functions resolve from an in-memory store seeded with
 * sample data; when the Node/Express + MongoDB backend is ready, swap the
 * bodies for `fetch` calls to VITE_API_BASE_URL without changing any caller.
 */
import type {
  Appointment,
  Client,
  DomainRecord,
  Doctor,
  Inquiry,
  MediaItem,
  NewClientInput,
  ServiceItem,
  Subscription,
  SupportTicket,
  Template,
  WebsiteActivity,
  WebsiteConfig,
} from "@/types";
import {
  seedActivity,
  seedAppointments,
  seedClients,
  seedDomains,
  seedDoctors,
  seedInquiries,
  seedMedia,
  seedServices,
  seedSubscriptions,
  seedTemplates,
  seedTickets,
  seedWebsiteConfig,
} from "@/data/mock";

/**
 * Future REST backend base URL. When empty the layer serves from the local
 * in-memory store; the rest of the app is unaffected either way.
 */
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

const latency = () => new Promise((r) => setTimeout(r, 60));

/* ---------- in-memory store (stands in for MongoDB collections) ---------- */

const store = {
  clients: [...seedClients],
  templates: [...seedTemplates],
  activity: [...seedActivity],
  appointments: [...seedAppointments],
  inquiries: [...seedInquiries],
  doctors: [...seedDoctors],
  services: [...seedServices],
  subscriptions: [...seedSubscriptions],
  tickets: [...seedTickets],
  domains: [...seedDomains],
  media: [...seedMedia],
  websiteConfigs: [seedWebsiteConfig],
};

const nextId = (prefix: string) =>
  `${prefix}-${Math.random().toString(36).slice(2, 8)}`;

/* ---------- clients ---------- */

export async function listClients(): Promise<Client[]> {
  await latency();
  return [...store.clients];
}

export async function getClient(id: string): Promise<Client | undefined> {
  await latency();
  return store.clients.find((c) => c.id === id);
}

export async function createClient(input: NewClientInput): Promise<Client> {
  await latency();
  const client: Client = {
    id: nextId("cl"),
    name: input.name,
    category: input.category,
    contactPerson: input.contactPerson,
    email: input.email,
    phone: input.phone,
    address: input.address,
    city: input.city,
    state: input.state,
    country: input.country,
    logoText:
      input.logoText ??
      input.name
        .split(/\s+/)
        .slice(0, 2)
        .map((w) => w[0]?.toUpperCase() ?? "")
        .join(""),
    websiteName: input.websiteName,
    templateId: input.templateId,
    websiteStatus: "Draft",
    createdAt: new Date().toISOString().slice(0, 10),
    status: "Active",
    plan: input.plan ?? "Essential",
  };
  store.clients.unshift(client);
  return client;
}

export async function updateClient(
  id: string,
  patch: Partial<Client>,
): Promise<Client> {
  await latency();
  const idx = store.clients.findIndex((c) => c.id === id);
  if (idx === -1) throw new Error(`Client ${id} not found`);
  store.clients[idx] = { ...store.clients[idx], ...patch };
  return store.clients[idx];
}

/* ---------- templates ---------- */

export async function listTemplates(): Promise<Template[]> {
  await latency();
  return [...store.templates];
}

export async function createTemplate(
  input: Pick<Template, "name" | "category" | "description" | "image">,
): Promise<Template> {
  await latency();
  const tpl: Template = {
    id: nextId("tpl"),
    name: input.name,
    category: input.category,
    description: input.description,
    image: input.image,
    active: true,
    createdAt: new Date().toISOString().slice(0, 10),
  };
  store.templates.unshift(tpl);
  return tpl;
}

export async function duplicateTemplate(id: string): Promise<Template> {
  await latency();
  const src = store.templates.find((t) => t.id === id);
  if (!src) throw new Error(`Template ${id} not found`);
  const copy: Template = {
    ...src,
    id: nextId("tpl"),
    name: `${src.name} (Copy)`,
    active: false,
    createdAt: new Date().toISOString().slice(0, 10),
  };
  store.templates.unshift(copy);
  return copy;
}

export async function setTemplateActive(
  id: string,
  active: boolean,
): Promise<Template> {
  await latency();
  const idx = store.templates.findIndex((t) => t.id === id);
  if (idx === -1) throw new Error(`Template ${id} not found`);
  store.templates[idx] = { ...store.templates[idx], active };
  return store.templates[idx];
}

/* ---------- websites & domains ---------- */

export async function listActivity(): Promise<WebsiteActivity[]> {
  await latency();
  return [...store.activity];
}

export async function listDomains(): Promise<DomainRecord[]> {
  await latency();
  return [...store.domains];
}

export async function getWebsiteConfig(
  clientId: string,
): Promise<WebsiteConfig | undefined> {
  await latency();
  return store.websiteConfigs.find((c) => c.clientId === clientId);
}

export async function saveWebsiteConfig(
  config: WebsiteConfig,
): Promise<WebsiteConfig> {
  await latency();
  const idx = store.websiteConfigs.findIndex((c) => c.clientId === config.clientId);
  const next = { ...config, updatedAt: new Date().toISOString().slice(0, 10) };
  if (idx === -1) store.websiteConfigs.push(next);
  else store.websiteConfigs[idx] = next;
  return next;
}

export async function setWebsiteStatus(
  clientId: string,
  status: WebsiteConfig["status"],
): Promise<WebsiteConfig> {
  await latency();
  const idx = store.websiteConfigs.findIndex((c) => c.clientId === clientId);
  if (idx === -1) throw new Error(`Website config for ${clientId} not found`);
  store.websiteConfigs[idx] = {
    ...store.websiteConfigs[idx],
    status,
    updatedAt: new Date().toISOString().slice(0, 10),
  };
  return store.websiteConfigs[idx];
}

/* ---------- operations data ---------- */

export async function listAppointments(): Promise<Appointment[]> {
  await latency();
  return [...store.appointments];
}

export async function listInquiries(): Promise<Inquiry[]> {
  await latency();
  return [...store.inquiries];
}

export async function listDoctors(): Promise<Doctor[]> {
  await latency();
  return [...store.doctors];
}

export async function listServices(): Promise<ServiceItem[]> {
  await latency();
  return [...store.services];
}

export async function listSubscriptions(): Promise<Subscription[]> {
  await latency();
  return [...store.subscriptions];
}

export async function listTickets(): Promise<SupportTicket[]> {
  await latency();
  return [...store.tickets];
}

export async function listMedia(): Promise<MediaItem[]> {
  await latency();
  return [...store.media];
}
