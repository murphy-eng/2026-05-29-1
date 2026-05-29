/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId = 'home' | 'web-design' | 'brand-cis' | 'marketing' | 'cases' | 'about' | 'knowledge' | 'quote';

export interface NavSubItem {
  id: string;
  title: string;
  description?: string;
  pageId: PageId;
  tabId?: string;
  external?: boolean;
}

export interface NavItem {
  title: string;
  badge?: string;
  subItems?: NavSubItem[];
  pageId?: PageId;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: 'web-design' | 'brand-cis' | 'marketing' | 'all';
  imageUrl: string;
  tags: string[];
  client: string;
  year: string;
  metrics: {
    label: string;
    value: string;
    change: string;
    subLabel?: string;
  }[];
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface ServiceDetail {
  title: string;
  iconName: string;
  items: string[];
  description: string;
}

export interface Article {
  id: string;
  category: 'web' | 'seo' | 'video' | 'brand';
  categoryLabel: string;
  title: string;
  excerpt: string;
  content: string;
  publishDate: string;
  readTime: string;
  imageUrl: string;
}

export interface QuoteRequest {
  services: string[];
  budget: string;
  timeline: string;
  companyName: string;
  contactName: string;
  phone: string;
  email: string;
  message?: string;
}
