/**
 * Aselea Healthcare — shared domain types.
 * These mirror the shapes our future Node/Express + MongoDB backend will serve,
 * so the API layer in src/lib/api.ts can be swapped without touching UI code.
 */

export const HEALTHCARE_CATEGORIES = [
  "Hospital",
  "General Clinic",
  "Dental Clinic",
  "Dermatology",
  "Eye Care",
  "Physiotherapy",
  "Diagnostic Laboratory",
  "Pediatric Clinic",
  "Gynecology",
  "Other",
] as const;

export type HealthcareCategory = (typeof HEALTHCARE_CATEGORIES)[number];

export const WEBSITE_STATUSES = [
  "Draft",
  "In Progress",
  "Pending Approval",
  "Published",
  "Suspended",
] as const;

export type WebsiteStatus = (typeof WEBSITE_STATUSES)[number];

export type ClientStatus = "Active" | "Inactive";

export const SUBSCRIPTION_PLANS = ["Essential", "Professional", "Enterprise"] as const;
export type SubscriptionPlan = (typeof SUBSCRIPTION_PLANS)[number];

export type SubscriptionStatus = "Active" | "Past Due" | "Cancelled" | "Trial";

export const APPOINTMENT_STATUSES = ["Pending", "Confirmed", "Completed", "Cancelled"] as const;
export type AppointmentStatus = (typeof APPOINTMENT_STATUSES)[number];

export type SupportPriority = "Low" | "Normal" | "High" | "Urgent";
export type SupportStatus = "Open" | "In Progress" | "Resolved" | "Closed";

export interface Client {
  id: string;
  name: string;
  category: HealthcareCategory;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  logoText: string;
  websiteName: string;
  templateId: string;
  websiteStatus: WebsiteStatus;
  domain?: string;
  createdAt: string;
  status: ClientStatus;
  plan: SubscriptionPlan;
}

export interface Template {
  id: string;
  name: string;
  category: HealthcareCategory;
  description: string;
  image: string;
  active: boolean;
  createdAt: string;
}

export interface WebsiteActivity {
  id: string;
  type: "registration" | "published" | "setup" | "client" | "payment";
  message: string;
  clientName: string;
  at: string;
}

export interface Appointment {
  id: string;
  patient: string;
  clientName: string;
  service: string;
  doctor: string;
  date: string;
  time: string;
  status: AppointmentStatus;
  mode: "In-clinic" | "Video";
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  clientName: string;
  subject: string;
  message: string;
  receivedAt: string;
  read: boolean;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  qualifications: string;
  experienceYears: number;
  clientName: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  clientName: string;
}

export interface Subscription {
  id: string;
  clientName: string;
  plan: SubscriptionPlan;
  amountMonthly: number;
  status: SubscriptionStatus;
  nextBilling: string;
  memberSince: string;
}

export interface SupportTicket {
  id: string;
  subject: string;
  clientName: string;
  priority: SupportPriority;
  status: SupportStatus;
  createdAt: string;
  lastReply: string;
}

export interface DomainRecord {
  id: string;
  domain: string;
  clientName: string;
  status: "Connected" | "Pending DNS" | "Not Started" | "Action Needed";
  ssl: boolean;
  primary: boolean;
  addedAt: string;
}

export interface MediaItem {
  id: string;
  name: string;
  kind: "image" | "video" | "document";
  size: string;
  uploadedAt: string;
  tint: string;
}

/* ---------- Website builder types (multi-tenant website config) ---------- */

export interface WebsiteBranding {
  clinicName: string;
  tagline: string;
  logoText: string;
  brandColor: string;
  accentColor: string;
}

export interface WebsiteSectionState {
  id: string;
  label: string;
  visible: boolean;
}

export interface WebsiteContent {
  heroTitle: string;
  heroSubtitle: string;
  aboutTitle: string;
  aboutText: string;
  appointmentNote: string;
  testimonialQuote: string;
  testimonialAuthor: string;
  faq: { question: string; answer: string }[];
  contactAddress: string;
  contactPhone: string;
  contactHours: string;
  seoTitle: string;
  seoDescription: string;
}

export interface WebsiteConfig {
  clientId: string;
  templateId: string;
  branding: WebsiteBranding;
  sections: WebsiteSectionState[];
  content: WebsiteContent;
  status: WebsiteStatus;
  domain?: string;
  updatedAt: string;
}

/* ---------- API input shapes (future REST payloads) ---------- */

export interface NewClientInput {
  name: string;
  category: HealthcareCategory;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  logoText?: string;
  websiteName: string;
  templateId: string;
  plan?: SubscriptionPlan;
}
