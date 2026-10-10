export type PolicyBlock = { type: "paragraph"; text: string } | { type: "list"; items: string[] };
export type PolicySection = { id: string; title: string; blocks: PolicyBlock[] };

// Verbatim original policy; only source whitespace and bullet formatting are normalized.
export const policySections: PolicySection[] = [
  {
    id: "policy-introduction",
    title: "MY DAILY RITUAL CO PTY LTD – PRIVACY POLICY",
    blocks: [
      {
        type: "paragraph",
        text: "My Daily Ritual Co Pty Ltd (ABN 29 682 374 778) (we, us or our), understands that protecting your personal information is important. This Privacy Policy sets out our commitment to protecting the privacy of personal information provided to us, or collected by us, when interacting with you.",
      },
    ],
  },
  {
    id: "the-information-we-collect",
    title: "The information we collect",
    blocks: [
      {
        type: "paragraph",
        text: "Personal information: is information or an opinion, whether true or not and whether recorded in a material form or not, about an individual who is identified or reasonably identifiable.",
      },
      {
        type: "paragraph",
        text: "The types of personal information we may collect about you include:",
      },
      {
        type: "list",
        items: [
          "Identity Data including your name, age and date of birth.",
          "Contact Data including your telephone number and email.",
          "Financial Data including bank account and payment card details (through our third party payment processor, who stores such information and we do not have access to that information).",
          "Transaction Data including details about payments to you from us and from you to us and other details of products and services you have purchased from us or we have purchased from you.",
          "Technical and Usage Data when you access any of our websites, platforms or emails, details about your internet protocol (IP) address, login data, browser session and geo-location data, statistics on page views and sessions, device and network information, acquisition sources, search queries and/or browsing behaviour, access and use of our website (including through the use of Internet cookies, tracking pixels or analytics), and communications with our website.",
          "Profile Data including your username and password for My Daily Ritual, profile picture, content you post, send, receive and share through our platform, information you have shared with our social media platforms, and support requests you have made.",
          "Interaction Data including information you provide to us when you participate in any interactive features, including surveys, contests, promotions, activities or events.",
          "Marketing and Communications Data including your preferences in receiving marketing from us and our third parties and your communication preferences.",
          "Professional data including where you are a worker of ours or applying for a role with us, your professional history such as your previous positions and professional experience, or whether you hold required authorisations or licences.",
          "Sensitive information is a sub-set of personal information that is given a higher level of protection. Sensitive information means information relating to your racial or ethnic origin, political opinions, religion, trade union or other professional associations or memberships, philosophical beliefs, sexual orientation or practices, criminal records, health information or biometric information. In the course of working with you, we may collect, or come across such sensitive information in different situations, including when you provide it to us by inputting it into the My Daily Ritual app.",
        ],
      },
    ],
  },
  {
    id: "how-we-collect-personal-information",
    title: "How we collect personal information",
    blocks: [
      {
        type: "paragraph",
        text: "We collect personal information in a variety of ways, including:",
      },
      {
        type: "list",
        items: [
          "when you provide it directly to us, including face-to-face, over the phone, over email, or online;",
          "when you complete a form, such as registering for any events or newsletters, or responding to surveys;",
          "when you use any website we operate (including from any analytics and cookie providers or marketing providers. See the “Cookies” section below for more detail on the use of cookies);",
        ],
      },
      {
        type: "list",
        items: ["from third parties; and", "from publicly available sources."],
      },
    ],
  },
  {
    id: "why-we-collect-hold-use-and-disclose-personal-information",
    title: "Why we collect, hold, use and disclose personal information",
    blocks: [
      {
        type: "paragraph",
        text: "Personal information: We collect, hold, use and disclose your personal information for the following purposes:",
      },
      {
        type: "list",
        items: [
          "to enable you to access and use our app, including to provide you with a login;",
          "to work with you as a customer or supplier of our business;",
          "to contact and communicate with you about our business, including in response to any support requests you lodge with us or other enquiries you make with us;",
          "to contact and communicate with you about any enquiries you make with us via any website we operate;",
          "for internal record keeping, administrative, invoicing and billing purposes;",
          "for analytics, market research and business development, including to operate and improve our business, associated applications and associated social media platforms;",
          "for advertising and marketing, including to send you promotional information about our events and experiences and information that we consider may be of interest to you;",
        ],
      },
      {
        type: "list",
        items: [
          "to run promotions, competitions and/or offer additional benefits to you;",
          "if you have applied for employment with us, to consider your employment application; and",
          "to comply with our legal obligations or if otherwise required or authorised by law.",
        ],
      },
      {
        type: "paragraph",
        text: "Sensitive information: We only collect, hold, use and disclose sensitive information for the following purposes:",
      },
      {
        type: "list",
        items: [
          "any purposes you consent to;",
          "the primary purpose for which it is collected;",
          "secondary purposes that are directly related to the primary purpose for which it was collected, including disclosure to the below listed third parties as reasonably necessary to work with you as a customer or supplier of our business;",
          "to contact emergency services, or to speak with your family, partner or support person where we reasonably believe there is a serious risk to the life, health or safety of you or another person and it is impracticable for us to obtain your consent; and",
          "if otherwise required or authorised by law.",
        ],
      },
    ],
  },
  {
    id: "our-disclosures-of-personal-information-to-third-parties",
    title: "Our disclosures of personal information to third parties",
    blocks: [
      {
        type: "paragraph",
        text: "Personal information: We will only disclose personal information (excluding sensitive information) to third parties where it is necessary as part of our business, where we have your consent, or where permitted by law. This means that we may disclose personal information (excluding sensitive information) to:",
      },
      {
        type: "list",
        items: [
          "our employees, contractors and/or related entities;",
          "IT service providers, data storage, web-hosting and server providers;",
          "marketing or advertising providers;",
          "professional advisors, bankers, auditors, our insurers and insurance brokers;",
          "payment systems operators or processors;",
          "our existing or potential agents or business partners;",
          "sponsors or promoters of any promotions or competition we run;",
          "if we merge with, or are acquired by, another company, or sell all or a portion of our assets, your personal information may be disclosed to our advisers and any prospective purchaser’s advisers and may be among the assets transferred;",
          "courts, tribunals and regulatory authorities, in the event you fail to pay for goods or services we have provided to you;",
          "courts, tribunals, regulatory authorities and law enforcement officers, as required or authorised by law, in connection with any actual or prospective legal proceedings, or in order to establish, exercise or defend our legal rights;",
          "third parties to collect and process data, such as analytics providers and cookies; and",
          "any other third parties as required or permitted by law, such as where we receive a subpoena.",
        ],
      },
      {
        type: "paragraph",
        text: "Sensitive information: We will only disclose sensitive information with your consent or where permitted by law. This means that we may disclose sensitive information to:",
      },
      {
        type: "list",
        items: [
          "our employees, contractors and/or related entities;",
          "IT service providers, data storage, web-hosting and server providers;",
          "professional advisors;",
          "if we merge with, or are acquired by, another company, or sell all or a portion of our assets, your personal information may be disclosed to our advisers and any prospective purchaser’s advisers and may be among the assets transferred;",
          "courts, tribunals, regulatory authorities and law enforcement officers, as required or authorised by law, in connection with any actual or prospective legal proceedings, or in order to establish, exercise or defend our legal rights;",
          "third parties to collect and process data, such as analytics providers and cookies; and",
          "any other third parties as required or permitted by law, such as where we receive a subpoena.",
        ],
      },
    ],
  },
  {
    id: "overseas-disclosure",
    title: "Overseas disclosure",
    blocks: [
      {
        type: "paragraph",
        text: "We store your personal information in Australia. Where we disclose your personal information to third parties, those third parties may store, transfer or access personal information outside of Australia. We will only disclose your personal information overseas in accordance with the Australian Privacy Principles.",
      },
    ],
  },
  {
    id: "your-rights-and-controlling-your-personal-information",
    title: "Your rights and controlling your personal information",
    blocks: [
      {
        type: "paragraph",
        text: "Your choice: Please read this Privacy Policy carefully. If you provide personal information to us, you understand we will collect, hold, use and disclose your personal information in accordance with this Privacy Policy. You do not have to provide personal information to us, however, if you do not, it may affect our ability to work with you as a customer or supplier of our business.",
      },
      {
        type: "paragraph",
        text: "Information from third parties: If we receive personal information about you from a third party, we will protect it as set out in this Privacy Policy. If you are a third party providing personal information about somebody else, you represent and warrant that you have such person’s consent to provide the personal information to us.",
      },
      {
        type: "paragraph",
        text: "Restrict and unsubscribe: To object to processing for direct marketing/unsubscribe from our email database or opt-out of communications (including marketing communications), please contact us using the details below or opt-out using the opt-out facilities provided in the communication.",
      },
      {
        type: "paragraph",
        text: "Access: You may request access to the personal information that we hold about you. An administrative fee may be payable for the provision of such information. Please note, in some situations, we may be legally permitted to withhold access to your personal information. If we cannot provide access to your information, we will advise you as soon as reasonably possible and provide you with the reasons for our refusal and any mechanism available to complain about the refusal. If we can provide access to your information in another form that still meets your needs, then we will take reasonable steps to give you such access.",
      },
      {
        type: "paragraph",
        text: "Correction: If you believe that any information we hold about you is inaccurate, out of date, incomplete, irrelevant or misleading, please contact us using the details below. We will take reasonable steps to promptly correct any information found to be inaccurate, out of date, incomplete, irrelevant or misleading. Please note, in some situations, we may be legally permitted to not correct your personal information. If we cannot correct your information, we will advise you as soon as reasonably possible and provide you with the reasons for our refusal and any mechanism available to complain about the refusal.",
      },
      {
        type: "paragraph",
        text: "Complaints: If you wish to make a complaint, please contact us using the details below and provide us with full details of the complaint. We will promptly investigate your complaint and respond to you, in writing, setting out the outcome of our investigation and the steps we will take in response to your complaint. If you are not satisfied with our response, you may contact the Office of the Australian Information Commissioner.",
      },
    ],
  },
  {
    id: "storage-and-security",
    title: "Storage and security",
    blocks: [
      {
        type: "paragraph",
        text: "We are committed to ensuring that the personal information we collect is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures, to safeguard and secure personal information and protect it from misuse, interference, loss and unauthorised access, modification and disclosure.",
      },
      {
        type: "paragraph",
        text: "While we are committed to security, we cannot guarantee the security of any information that is transmitted to or by us over the Internet. The transmission and exchange of information is carried out at your own risk.",
      },
    ],
  },
  {
    id: "user-generated-content",
    title: "User-Generated Content",
    blocks: [
      {
        type: "paragraph",
        text: "We may enable you to post reviews, comments, photos and other user-generated content. Any content you choose to submit will be accessible by anyone, including third parties not associated with us. We have no control over how others may use or misuse information you make publicly available. We are not responsible for the privacy, security or accuracy of any user-generated content you choose to post or for the use or misuse of that information by any third parties.",
      },
    ],
  },
  {
    id: "cookies-and-analytics",
    title: "Cookies and Analytics",
    blocks: [
      {
        type: "paragraph",
        text: "We may use cookies, tracking pixels and similar technologies on our website and in our emails from time to time. Cookies are text files placed in your computer's browser to store your preferences. Tracking pixels are tiny, invisible images (typically the size of one pixel) embedded in web pages or emails. Cookies and tracking pixels, by themselves, do not tell us your email address or other personally identifiable information. However, they do recognise you when you return to our online website and allow third parties to cause our advertisements to appear on your social media and online media feeds as part of our retargeting campaigns. If and when you choose to provide our online website with personal information, this information may be linked to the data stored in the cookie or collected by tracking pixels. Unlike cookies, tracking pixels do not store any information on your device, but instead send information to our servers when the pixel is loaded.",
      },
      {
        type: "paragraph",
        text: "You can block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies.",
      },
      {
        type: "paragraph",
        text: "You can block tracking pixels by using ad-blocking or privacy-focused browser extensions. Some email providers allow you to block images by default, which can prevent tracking pixels in emails from loading.",
      },
      {
        type: "paragraph",
        text: "However, if you use your browser settings to block all cookies (including essential cookies) and tracking pixels you may not be able to access all or parts of our website and you may not receive personalised content.",
      },
      {
        type: "paragraph",
        text: "Google Analytics: We may use Google Analytics Advertising Features. We and third-party vendors may use first-party cookies (such as the Google Analytics cookie) or other first-party identifiers, and third-party cookies (such as Google advertising cookies) or other third-party identifiers together. These cookies and identifiers may collect Technical and Usage",
      },
      {
        type: "paragraph",
        text: "Data about you.",
      },
      {
        type: "paragraph",
        text: "You can opt-out of Google Analytics Advertising Features including using a Google Analytics Opt-out Browser add-on found [here.](https://tools.google.com/dlpage/gaoptout/) To opt-out of personalised ad delivery on the Google content network, please visit Google’s Ads Preferences Manager [here](http://www.google.com/ads/preferences) or if you wish to opt-out permanently even when all cookies are deleted from your browser you can install their plugin [here](https://support.google.com/ads/answer/7395996). To opt out of interest-based ads on mobile devices, please follow these instructions for your mobile device: On android open the Google Settings app on your device and select “ads” to control the settings. On iOS devices with iOS 6 and above use Apple’s advertising identifier. To learn more about limiting ad tracking using this identifier, visit the settings menu on your device.",
      },
      {
        type: "paragraph",
        text: "To find out how Google uses data when you use third party websites or applications, please see [here](https://policies.google.com/technologies/partner-sites).",
      },
      {
        type: "paragraph",
        text: "Facebook/Meta Analytics: We may use tools provided by Meta, such as the Meta Pixel, advanced matching, and Conversions API. These allow us to measure ad performance and deliver ads that may be relevant to you on Meta platforms based on your activity on our website/app. You can control whether we can join data from third party partners with your Meta account for ads by adjusting your preferences within Meta's settings. You can disconnect this data from your Meta account by changing your settings for [Off-Facebook activity](https://www.facebook.com/help/1224342157705160). For more information, please see Meta's Privacy Policy [here](https://www.facebook.com/privacy/policy/).",
      },
    ],
  },
  {
    id: "links-to-other-websites",
    title: "Links to other websites",
    blocks: [
      {
        type: "paragraph",
        text: "Our website may contain links to other party’s websites. We do not have any control over those websites and we are not responsible for the protection and privacy of any personal information which you provide whilst visiting those websites.",
      },
      {
        type: "paragraph",
        text: "Those websites are not governed by this Privacy Policy.",
      },
    ],
  },
  {
    id: "amendments",
    title: "Amendments",
    blocks: [
      {
        type: "paragraph",
        text: "We may, at any time and at our discretion, vary this Privacy Policy by publishing the amended Privacy Policy on our website. We recommend you check our website regularly to ensure you are aware of our current Privacy Policy.",
      },
      {
        type: "paragraph",
        text: "For any questions or notices, please contact us at:",
      },
      {
        type: "paragraph",
        text: "My Daily Ritual Co Pty Ltd (ABN 29 682 374 778)",
      },
      {
        type: "paragraph",
        text: "Email: [admin@dailyritualapp.com](mailto:admin@dailyritualapp.com)",
      },
      {
        type: "paragraph",
        text: "© LegalVision ILP Pty Ltd",
      },
    ],
  },
  {
    id: "privacy-collection-notice",
    title: "PRIVACY COLLECTION NOTICE",
    blocks: [
      {
        type: "paragraph",
        text: "This Privacy Collection Notice describes how My Daily Ritual Co Pty Ltd (ABN 29 682 374 778) ( **we**, **us** or **our**) collects and handles your personal information when you sign-up to the My Daily Ritual app and do business with us. We collect personal information from you and from third parties (such as our cookies and analytics providers) so that we can do business with you and for related purposes set out in our Privacy Policy, available on our website (or on request).",
      },
      {
        type: "paragraph",
        text: "We may disclose this personal information to third parties, including our personnel, related entities, any third parties engaged by us and acting on our behalf and as otherwise set out in our Privacy Policy.",
      },
      {
        type: "paragraph",
        text: "We store personal information in Australia. Where we disclose your personal information to third parties, those third parties may store, transfer or access personal information outside of Australia.",
      },
      {
        type: "paragraph",
        text: "If you do not provide your personal information to us, it may affect our ability to do business with you.",
      },
      {
        type: "paragraph",
        text: "Please see our Privacy Policy for more information about how we collect, store, use and disclose your personal information, including details about overseas disclosure, access, correction, how you can make a privacy-related complaint and our complaint-handling process.",
      },
      {
        type: "paragraph",
        text: "If you have questions about our privacy practices, please contact us by email at: [admin@dailyritualapp.com](mailto:admin@dailyritualapp.com) .",
      },
      {
        type: "paragraph",
        text: "By providing your personal information to us, you agree to the collection, use, storage and disclosure of that information as described in this privacy collection notice.",
      },
    ],
  },
];
