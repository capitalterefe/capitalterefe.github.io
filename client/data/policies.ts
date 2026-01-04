export interface PolicySection {
  title: string;
  content: string;
}

export interface AppPolicy {
  id: string;
  name: string;
  version: string;
  lastUpdated: string;
  sections: Record<string, PolicySection>;
}

export const policies: Record<string, AppPolicy> = {
  zenfast: {
    id: "zenfast",
    name: "Zenfast",
    version: "1.0.0",
    lastUpdated: "January 4, 2024",
    sections: {
      privacy: {
        title: "Privacy Policy",
        content: `
# Privacy Policy - Zenfast

## Introduction
This Privacy Policy describes how your information is collected, used, and disclosed by ZenFast ('we', 'us', or 'our') when you use our mobile application (the 'App').

## Information We Collect
We do not collect any personally identifiable information from you. All fasting data you enter into the App is stored locally on your device and, if enabled by you, synced to your private iCloud account. We do not have access to this data.

Analytics: We use anonymized analytics to understand how our App is used, improve features, and fix bugs. This data does not identify you personally and cannot be linked back to you.

## How We Use Your Information
Since we do not collect any personal information, we do not use your information for any purpose other than to provide and improve the functionality of the App. Anonymized analytics data is used solely for product development and performance monitoring.

## Data Storage and Security
All your fasting sessions and personal settings are stored exclusively on your device. If you enable iCloud synchronization, your data is stored in your personal iCloud account, managed by Apple. We do not have access to your iCloud data. We implement reasonable security measures to protect the data stored on your device from unauthorized access.

## Third-Party Access
We do not share, sell, or rent your personal information to third parties, as we do not collect any. Anonymized analytics data may be processed by third-party services in compliance with their privacy policies, but this data does not contain any information that identifies you personally.

## Children's Privacy
Our App is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently received personal information from a child under 13, we will delete such information from our records.

## Changes to This Privacy Policy
We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy within the App. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted within the App.

## Contact Us
If you have questions or comments about this Privacy Policy, please contact us at:
privacy@terefe.us
        `,
      },
      terms: {
        title: "Terms of Service",
        content: `
# Terms of Service - Zenfast

## Acceptance of Terms
By accessing and using Zenfast, you accept and agree to be bound by and comply with these terms and conditions.

## User Responsibilities
- You are responsible for maintaining the confidentiality of your account
- You agree not to use Zenfast for any unlawful purposes
- You agree not to transmit any harmful or malicious code
- You will comply with all applicable laws and regulations

## Intellectual Property Rights
Zenfast and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by Terefe, its licensors, or other providers of such material and are protected by copyright, trademark, and other intellectual property laws.

## Limitation of Liability
In no event shall Terefe, nor its directors, employees, or agents, be liable to you for any direct, indirect, incidental, special, punitive, or consequential damages resulting from your use of or inability to use Zenfast.

## Governing Law
These Terms and Conditions are governed by and construed in accordance with the laws of your jurisdiction, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
        `,
      },
    },
  },
};
