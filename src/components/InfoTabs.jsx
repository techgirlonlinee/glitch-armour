import React, { useState } from "react";

const TABS = [
  {
    key: "ethos",
    label: "Ethos",
    content: (
      <>
        <p>
          Privacy isn't about perfection, it's about power. Inspired by glitch feminism, this toolkit embraces error and refusal to resist profiling by breaking patterns and refusing predictability.
        </p>
        <p>
            Privacy is collective care: share tips, help each other, build networks. The more we look out for each other, the less control these systems have. We appreciate feedback, requests, and contributions—<a href="mailto:araya@hey.com">email us</a> if you want to add something.
        </p>

      </>
    ),
  },
  {
    key: "criteria",
    label: "Criteria",
    content: (
      <>
        <p>
        Tools are chosen for being open, trustworthy, and simple to use—especially if you’re just starting out, moving away from big tech, or want everyday privacy without the hassle.
        </p>
        <ul>
        <li>Simple, intuitive design—works for everyone, not just techies</li>
        <li>Free or affordable</li>
        <li>Open code or clear about how it works</li>
        <li>Trusted by real communities and actively maintained</li>
        </ul>

      </>
    ),
  },
  {
    key: "glossary",
    label: "Glossary",
    content: (
      <dl>
        {/* ENCRYPTION & AUTHENTICATION */}
        <dt className="gloss-title">Encryption & Authentication</dt>
  
        <dt><span className="glossary-term">End-to-End Encryption (E2EE):</span></dt>
        <dd className="glossary-desc">
          Your data is locked on your device with a unique key and can only be unlocked by the intended recipient. No one else—not apps, servers, or hackers—can read it, even if they intercept or store a copy. This protects messages, files, and more, both in transit and at rest.
        </dd>
  
        <dt><span className="glossary-term">Encryption Key:</span></dt>
        <dd className="glossary-desc">
          A unique code used to lock (encrypt) and unlock (decrypt) your data. If you lose your key, your data stays scrambled—even to you. If someone else gets it, your privacy is gone.
        </dd>
  
        <dt><span className="glossary-term">Zero-Knowledge / Zero-Knowledge Proof:</span></dt>
        <dd className="glossary-desc">
          A cryptographic trick where you can prove something is true (like knowing a password or meeting a requirement) without revealing the secret itself. For example: proving you’re old enough for a service without sharing your exact age. In privacy apps, “zero-knowledge” often means the service can’t see your data at all—only you and those you choose can unlock it. True zero-knowledge proofs are used to check facts or permissions without exposing your private info.
        </dd>
  
        <dt><span className="glossary-term">Server-Side Encryption:</span></dt>
        <dd className="glossary-desc">
          Your data is encrypted, but the company holds the key. They can unlock it if needed—whether for themselves, law enforcement, or hackers who break in.
        </dd>
  
        <dt><span className="glossary-term">Two-Factor Authentication (2FA):</span></dt>
        <dd className="glossary-desc">
          A security step that asks for something extra after your password—like a code from your phone. Makes it much harder for someone to break in.
        </dd>
  
        {/* NETWORKS & INFRASTRUCTURE */}
        <dt className="gloss-title">Networks & Infrastructure</dt>
  
        <dt><span className="glossary-term">Decentralized:</span></dt>
        <dd className="glossary-desc">
          No single company or authority is in charge. Control and data are spread out across many people or servers. Makes it harder to censor or shut down.
        </dd>
  
        <dt><span className="glossary-term">Federated:</span></dt>
        <dd className="glossary-desc">
          A network made up of many independent servers that talk to each other. Each server sets its own rules, but they can still connect and share.
        </dd>
  
        <dt><span className="glossary-term">Peer-to-Peer (P2P):</span></dt>
        <dd className="glossary-desc">
          Devices connect directly, without a central server in the middle. Like handing a note straight to someone instead of mailing it.
        </dd>
  
        <dt><span className="glossary-term">Proxy:</span></dt>
        <dd className="glossary-desc">
          A server that passes your internet traffic along, hiding your real IP address from websites. Doesn’t encrypt your data—just hides where it’s coming from.
        </dd>
  
        <dt><span className="glossary-term">VPN (Virtual Private Network):</span></dt>
        <dd className="glossary-desc">
          Creates an encrypted tunnel for your internet traffic, hiding your location and activity from your internet provider and others. You have to trust the VPN provider not to watch you.
        </dd>
  
        <dt><span className="glossary-term">IP Address:</span></dt>
        <dd className="glossary-desc">
          A unique number given to your device on the internet. Used to identify and sometimes track you online—like a digital home address.
        </dd>
  
        {/* DATA, TRACKING & SURVEILLANCE */}
        <dt className="gloss-title">Data, Tracking & Surveillance</dt>
  
        <dt><span className="glossary-term">Metadata:</span></dt>
        <dd className="glossary-desc">
          Data about your data—like who you talk to, when, and where. Doesn’t include the content, but can still reveal a lot about your life.
        </dd>
  
        <dt><span className="glossary-term">Tracking:</span></dt>
        <dd className="glossary-desc">
          When companies or websites follow what you do online—what you click, where you go, what you buy. Used to build a profile on you for ads or surveillance.
        </dd>
  
        <dt><span className="glossary-term">Cookies:</span></dt>
        <dd className="glossary-desc">
          Small files websites store on your device to remember you. Sometimes helpful (like staying logged in), but often used to track you across the web.
        </dd>
  
        <dt><span className="glossary-term">Ad Blocker:</span></dt>
        <dd className="glossary-desc">
          A tool that stops ads and many trackers from loading on websites. Reduces surveillance and makes browsing less annoying.
        </dd>
  
        <dt><span className="glossary-term">Data Broker:</span></dt>
        <dd className="glossary-desc">
          A company that buys and sells your personal data—often without your knowledge. They collect, package, and sell your info to advertisers, insurers, or governments.
        </dd>
  
        <dt><span className="glossary-term">Surveillance Capitalism:</span></dt>
        <dd className="glossary-desc">
          The business model of making money by collecting, analyzing, and selling your personal data. Your clicks, searches, and habits become products for sale.
        </dd>
  
        {/* OPENNESS & COMMUNITY */}
        <dt className="gloss-title">Openness & Community</dt>
  
        <dt><span className="glossary-term">Open-Source:</span></dt>
        <dd className="glossary-desc">
          The code is public—anyone can inspect, use, or improve it. This makes it harder to hide backdoors or shady behavior.
        </dd>
      </dl>
    ),
  }
  
  
  
];

export default function InfoTabsFixed() {
  const [active, setActive] = useState(null);

  return (
    <div className="info-tabs-fixed">
      <div className="info-tabs-fixed-row">
        {TABS.map(tab => (
          <button
            key={tab.key}
            className={`info-tabs-fixed-tab${active === tab.key ? " active" : ""}`}
            onClick={() => setActive(prev => prev === tab.key ? null : tab.key)}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      {active && (
        <div className="info-tabs-fixed-content">
          {TABS.find(tab => tab.key === active)?.content}
        </div>
      )}
    </div>
  );
}
