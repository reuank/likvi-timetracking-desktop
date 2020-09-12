export interface DateObject {
  date: string;
  timezone_type: number;
  timezone: string;
}

export interface User {
  readonly id: number;
  readonly two_factor_enabled: boolean;
  first_name: string;
  last_name: string;
  email: string;
  readonly current_team_id: number;
  readonly avatar_url: string;
}

export interface Team {
  readonly id: number;
  name: string;
  vat_number: string;
  tax_number: string;
  registration_number: string;
  managers: string[];
  legal_form: string;
  readonly owner_id: number;
  readonly stripe_id: string;
  readonly card_brand: string;
  readonly card_last_four: string;
  readonly trial_ends_at: DateObject;
  readonly on_trial: boolean;
  readonly subscribed: boolean;
  readonly subscription_tax_rate: number;
  readonly created_at: DateObject;
  readonly updated_at: DateObject;
  readonly role_id: number;
}

export interface TeamSetting {
  readonly team_id: number;
  readonly watermark_url: string;
  readonly watermark_upload_url: string;
  readonly logo_url: string;
  readonly logo_upload_url: string;
  default_currency: string;
  current_invoice_number: string;
  invoice_number_format: string;
  current_quote_number: string;
  quote_number_format: string;
  current_customer_number: string;
  customer_number_format: string;
  default_email_address_id: number;
  default_address_id: number;
  default_phone_number_id: number;
  default_bank_details_id: number;
  is_small_business: boolean;
  default_invoice_template_id: number;
  default_quote_template_id: number;
  default_payment_deadline: number;
  default_quote_deadline: number;
  readonly pdf_template_upload_url: string;
  readonly pdf_template_set: boolean;
  pdf_settings: object;
  reset_invoice_numbers: number;
  reset_quote_numbers: number;
  current_accounts_payable_number: string;
  current_accounts_receivable_number: string;
  wants_monthly_repost: boolean;
}

export interface Address {
  readonly id: number;
  readonly owner_id: number;
  readonly owner_type: string;
  readonly team_id: string;
  label: string;
  country_code: string;
  area: string;
  locality: string;
  dependent_locality: string;
  postal_code: string;
  sorting_code: string;
  address_line_1: string;
  address_line_2: string;
  locale: string;
  readonly formatted_address: string;
  readonly created_at: DateObject;
  readonly updated_at: DateObject;
  readonly deleted_at: DateObject;
}

export interface BankDetails {
  readonly id: number;
  readonly owner_id: number;
  readonly owner_type: string;
  readonly team_id: number;
  label: string;
  account_owner: string;
  account_number: string;
  bank_name: string;
  bank_identifier: string;
  created_at: DateObject;
  updated_at: DateObject;
  deleted_at: DateObject;
}

export interface PhoneNumber {
  readonly id: number;
  readonly owner_id: number;
  readonly owner_type: string;
  readonly team_id: number;
  label: string;
  number: string;
  created_at: DateObject;
  updated_at: DateObject;
  deleted_at: DateObject;
}

export interface EmailAddress {
  readonly id: number;
  readonly owner_id: number;
  readonly owner_type: string;
  readonly team_id: number;
  label: string;
  email: string;
  created_at: DateObject;
  updated_at: DateObject;
  deleted_at: DateObject;
}

export enum BusinessPartnerType {
  CUSTOMER = "customer",
  SUPPLIER = "supplier",
  CUSTOMER_AND_SUPPLIER = "customer_and_supplier",
  OTHER = "other",
}

export interface Company {
  readonly id: number;
  readonly team_id: number;
  readonly user_id: number;
  customer_number: string;
  name: string;
  vat_number: string;
  tax_number: string;
  readonly logo_url: string;
  readonly logo_upload_url: string;
  industry: string;
  website: string;
  language: string;
  default_email_address_id: number;
  default_address_id: number;
  default_phone_number_id: number;
  default_payment_deadline: number;
  default_bank_details_id: number;
  accounts_payable_number: string;
  accounts_receivable_number: string;
  business_partner_type: BusinessPartnerType;
  created_at: DateObject;
  updated_at: DateObject;
  deleted_at: DateObject;
}

export interface Person {
  readonly id: number;
  readonly team_id: number;
  readonly user_id: number;
  company_id: number;
  customer_number: string;
  department: string;
  position: string;
  salutation: string;
  title: string;
  first_name: string;
  last_name: string;
  language: string;
  website: string;
  readonly image_url: string;
  readonly image_upload_url: string;
  default_email_address_id: number;
  default_address_id: number;
  default_phone_number_id: number;
  default_payment_deadline: number;
  default_bank_details_id: number;
  accounts_payable_number: string;
  accounts_receivable_number: string;
  business_partner_type: BusinessPartnerType;
  created_at: DateObject;
  updated_at: DateObject;
  deleted_at: DateObject;
}

export enum ProjectType {
  TIME_AND_MATERIALS = "time_and_materials",
  FIXED_FEE = "fixed_fee",
  NON_BILLABLE = "non_billable",
}

export interface Project {
  readonly id: number;
  readonly team_id: number;
  customer_id: number;
  name: string;
  active: boolean;
  billable: boolean;
  estimated_hours: boolean;
  rate: number;
  color_hex: string;
  start_date: DateObject;
  end_date: DateObject;
  project_type: ProjectType;
  budget: number;
  created_at: DateObject;
  updated_at: DateObject;
  deleted_at: DateObject;
}

export interface TimeEntry {
  readonly id: number;
  readonly team_id: number;
  customer_id: number | null;
  readonly user_id: number;
  project_id: number | null;
  invoice_id: number | null;
  description: string;
  billable: boolean;
  billed: boolean;
  started_at: DateObject;
  stopped_at: DateObject | null;
  readonly duration: number;
  created_at: DateObject | null;
  updated_at: DateObject | null;
  deleted_at: DateObject | null;
  project?: ApiResponse<Project>;
  user?: ApiResponse<User>;
  customer?: ApiResponse<Person> | ApiResponse<Company>;
}

export interface ApiResponse<T> {
  data: T;
}