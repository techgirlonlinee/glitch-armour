import React, {useState, useRef, useEffect} from "react";

const TABS = [
  {
    key: "ethos",
    label: "Ethos",
    content: (
      <>
        <p>
          Privacy isn't about perfection; it's about power. Drawing from Glitch
          Feminism, this toolkit helps us weaponize unpredictability, scramble
          patterns, and refuse to be profiled. A collective act of defiance that
          turns our data into a source of community strength instead of
          corporate control.
        </p>
        <p>
          Transparency is a core part of this project. The digital landscape
          shifts constantly and we've done our best to vet these tools as
          accessible entry points. This is a living document, so please consider
          this a guide written in pencil, not stone. Our goal is to foster
          awareness and choice because knowledge is power. We welcome feedback
          and will continually update our list as things develop.
        </p>
        <p>
          Privacy is collective care: share tips, help each other, build
          networks. The more we look out for each other, the less control these
          systems and frameworks have. We appreciate feedback, requests, and
          contributions—
          <a href='mailto:araya@hey.com'>email us</a> if you want to add
          something.
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
          Tools are chosen for being open, trustworthy, and simple to
          use—especially if you’re just starting out, moving away from big tech,
          or want everyday privacy without the hassle.
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
        {/* INSPIRATION */}
        <dt className='gloss-title'>Inspiration & Motivation</dt>
        <dt>
          <span className='glossary-term'>Glitch Feminism:</span>
        </dt>
        <dd className='glossary-desc'>
          A manifesto and framework by Legacy Russell arguing that in a world
          where the digital and physical are fused, the "glitch" aka a break or
          error in the system, is a site of liberation. It demands that we use
          digital space to perform and explore identity beyond oppressive norms,
          turning the error or glitch into a powerful revolution against
          categorization and control.
        </dd>
        <dt className='gloss-title'>Encryption & Authentication</dt>
        {/* ENCRYPTION & AUTHENTICATION */}
        <dt>
          <span className='glossary-term'>End-to-End Encryption (E2EE):</span>
        </dt>
        <dd className='glossary-desc'>
          Your data is locked on your device with a unique key and can only be
          unlocked by the intended recipient. No one else—not apps, servers, or
          hackers—can read it, even if they intercept or store a copy. This
          protects messages, files, and more, both in transit and at rest.
        </dd>

        <dt>
          <span className='glossary-term'>Pretty Good Privacy (PGP):</span>
        </dt>
        <dd className='glossary-desc'>
          An open-source encryption standard that uses a system of two keys: a
          public key to lock (encrypt) data and a private key to unlock
          (decrypt) it. You share your public key freely, but keep your private
          key secret. This allows anyone to send you secure messages that only
          you can read, and vice versa. It’s the foundational protocol that
          enables end-to-end encryption in many email and messaging tools.
        </dd>

        <dt>
          <span className='glossary-term'>Encryption Key:</span>
        </dt>
        <dd className='glossary-desc'>
          A unique code used to lock (encrypt) and unlock (decrypt) your data.
          If you lose your key, your data stays scrambled—even to you. If
          someone else gets it, your privacy is gone.
        </dd>

        <dt>
          <span className='glossary-term'>
            Zero-Knowledge / Zero-Knowledge Proof:
          </span>
        </dt>
        <dd className='glossary-desc'>
          A cryptographic trick where you can prove something is true (like
          knowing a password or meeting a requirement) without revealing the
          secret itself. For example: proving you’re old enough for a service
          without sharing your exact age. In privacy apps, “zero-knowledge”
          often means the service can’t see your data at all—only you and those
          you choose can unlock it. True zero-knowledge proofs are used to check
          facts or permissions without exposing your private info.
        </dd>

        <dt>
          <span className='glossary-term'>Server-Side Encryption:</span>
        </dt>
        <dd className='glossary-desc'>
          Your data is encrypted, but the company holds the key. They can unlock
          it if needed—whether for themselves, law enforcement, or hackers who
          break in.
        </dd>

        <dt>
          <span className='glossary-term'>
            Two-Factor Authentication (2FA):
          </span>
        </dt>
        <dd className='glossary-desc'>
          A security step that asks for something extra after your password—like
          a code from your phone. Makes it much harder for someone to break in.
        </dd>

        {/* NETWORKS & INFRASTRUCTURE */}
        <dt className='gloss-title'>Networks & Infrastructure</dt>

        <dt>
          <span className='glossary-term'>Decentralized:</span>
        </dt>
        <dd className='glossary-desc'>
          No single company or authority is in charge. Control and data are
          spread out across many people or servers. Makes it harder to censor or
          shut down.
        </dd>

        <dt>
          <span className='glossary-term'>Federated:</span>
        </dt>
        <dd className='glossary-desc'>
          A network made up of many independent servers that talk to each other.
          Each server sets its own rules, but they can still connect and share.
        </dd>

        <dt>
          <span className='glossary-term'>Peer-to-Peer (P2P):</span>
        </dt>
        <dd className='glossary-desc'>
          Devices connect directly, without a central server in the middle. Like
          handing a note straight to someone instead of mailing it.
        </dd>

        <dt>
          <span className='glossary-term'>Proxy:</span>
        </dt>
        <dd className='glossary-desc'>
          A server that passes your internet traffic along, hiding your real IP
          address from websites. Doesn’t encrypt your data—just hides where it’s
          coming from.
        </dd>

        <dt>
          <span className='glossary-term'>VPN (Virtual Private Network):</span>
        </dt>
        <dd className='glossary-desc'>
          Creates an encrypted tunnel for your internet traffic, hiding your
          location and activity from your internet provider and others. You have
          to trust the VPN provider not to watch you.
        </dd>

        <dt>
          <span className='glossary-term'>IP Address:</span>
        </dt>
        <dd className='glossary-desc'>
          A unique number given to your device on the internet. Used to identify
          and sometimes track you online—like a digital home address.
        </dd>

        {/* DATA, TRACKING & SURVEILLANCE */}
        <dt className='gloss-title'>Data, Tracking & Surveillance</dt>

        <dt>
          <span className='glossary-term'>Metadata:</span>
        </dt>
        <dd className='glossary-desc'>
          Data about your data—like who you talk to, when, and where. Doesn’t
          include the content, but can still reveal a lot about your life.
        </dd>

        <dt>
          <span className='glossary-term'>Tracking:</span>
        </dt>
        <dd className='glossary-desc'>
          When companies or websites follow what you do online—what you click,
          where you go, what you buy. Used to build a profile on you for ads or
          surveillance.
        </dd>

        <dt>
          <span className='glossary-term'>Cookies:</span>
        </dt>
        <dd className='glossary-desc'>
          Small files websites store on your device to remember you. Sometimes
          helpful (like staying logged in), but often used to track you across
          the web.
        </dd>

        <dt>
          <span className='glossary-term'>Ad Blocker:</span>
        </dt>
        <dd className='glossary-desc'>
          A tool that stops ads and many trackers from loading on websites.
          Reduces surveillance and makes browsing less annoying.
        </dd>

        <dt>
          <span className='glossary-term'>Data Broker:</span>
        </dt>
        <dd className='glossary-desc'>
          A company that buys and sells your personal data—often without your
          knowledge. They collect, package, and sell your info to advertisers,
          insurers, or governments.
        </dd>

        <dt>
          <span className='glossary-term'>Surveillance Capitalism:</span>
        </dt>
        <dd className='glossary-desc'>
          The business model of making money by collecting, analyzing, and
          selling your personal data. Your clicks, searches, and habits become
          products for sale.
        </dd>

        {/* OPENNESS & COMMUNITY */}
        <dt className='gloss-title'>Openness & Community</dt>

        <dt>
          <span className='glossary-term'>Open-Source:</span>
        </dt>
        <dd className='glossary-desc'>
          The code is public—anyone can inspect, use, or improve it. This makes
          it harder to hide backdoors or shady behavior.
        </dd>

        {/* SOURCES */}
        <dt className='gloss-title'>TL;DR / Sources & Long Reads</dt>

        <dd className='glossary-desc'>
          For anyone interested in digging deeper. Here's a curated list of
          reports and articles focusing on the real-world impact of digital
          surveillance. All sources are either non-profits (aka refuse industry
          money,) academic journals, or public bodies. None are marketing sites
          or subsidiaries of ad-tech conglomerates. US and EU based.
        </dd>

        <dt class='gloss-tldr'>
          <a
            class='tldr'
            href='https://edri.org/our-work/all-eyes-on-my-period-period-tracking-apps-and-the-future-of-privacy-in-a-post-roe-world/'
            target='_blank'
            rel='noopener'
          >
            EDRI: All Eyes on my Period?
          </a>
        </dt>
        <dd>
          Privacy International's 2024 technical investigation into eight
          popular period-tracking apps. It found that while direct sharing of
          menstrual data with Facebook had stopped, many apps still integrated
          third-party services that risked device fingerprinting and user
          identification, leaving users vulnerable in a post-Roe world.
        </dd>

        <dt class='gloss-tldr'>
          <a
            class='tldr'
            href='https://journal.policy-perspectives.org/articles/volume_31/10_4079_pp_v31i0_14.pdf'
            target='_blank'
            rel='noopener'
          >
            From Menstruation to Regulation
          </a>{" "}
          (PDF)
        </dt>
        <dd>
          An analysis of the weak U.S. data privacy landscape, explaining why
          period trackers are not covered by HIPAA and how app data can be
          subpoenaed by law enforcement or sold to third parties, creating risks
          for abortion seekers.
        </dd>

        <dt class='gloss-tldr'>
          <a
            class='tldr'
            href='https://www.edpb.europa.eu/system/files/2025-04/edpb-annual-report-2024_en.pdf'
            target='_blank'
            rel='noopener'
          >
            EDPB Annual Report 2024
          </a>{" "}
          (PDF)
        </dt>
        <dd>
          The official annual report from the European Data Protection Board,
          detailing its activities, including issuing guidelines on the ePrivacy
          Directive and processing based on legitimate interests, and providing
          statements on new EU legislation like the AI Act.
        </dd>

        <dt class='gloss-tldr'>
          <a
            class='tldr'
            href='https://algorithmwatch.org/en/open-letter-ban-biometric-surveillance/'
            target='_blank'
            rel='noopener'
          >
            Open Letter: Ban Biometric Surveillance
          </a>
        </dt>
        <dd>
          A call from 177+ civil society groups for a global ban on biometric
          recognition technologies in public spaces, arguing they enable mass
          and discriminatory surveillance that undermines human rights and
          cannot be fixed with safeguards.
        </dd>

        <dt class='gloss-tldr'>
          <a
            class='tldr'
            href='https://epic.org/issues/democracy-free-speech/privacy-and-racial-justice/'
            target='_blank'
            rel='noopener'
          >
            EPIC: Privacy & Racial Justice
          </a>
        </dt>
        <dd>
          Documents how data abuse and surveillance disproportionately target
          and harm Black and Brown communities, detailing the use of flawed
          facial recognition, automated decision-making tools, and social media
          monitoring against racial justice activists and marginalized groups.
        </dd>

        <dt class='gloss-tldr'>
          <a
            class='tldr'
            href='https://www.hhrjournal.org/2020/12/08/perspective-the-trojan-horse-digital-health-human-rights-and-global-health-governance/'
            target='_blank'
            rel='noopener'
          >
            The Trojan Horse: Digital Health & Human Rights
          </a>
        </dt>
        <dd>
          Argues that the rapid scale-up of digital health tools, often promoted
          by UN agencies, can act as a "trojan horse" for expanded state
          surveillance, malicious targeting, corporate data exploitation, and
          unsupervised experimentation, often in low and middle-income
          countries.
        </dd>

        <dt class='gloss-tldr'>
          <a
            class='tldr'
            href='https://www.sciencedirect.com/science/article/pii/S2352340925001398'
            target='_blank'
            rel='noopener'
          >
            The RightNets Dataset: Digital Campaigning in the 2024 European
            Elections
          </a>
        </dt>
        <dd>
          Presents a dataset of 10,000 tweets and 411 Facebook posts from the
          Italian digital political sphere, collected to enable research on
          misinformation, foreign interference, and voter engagement patterns
          during the European elections.
        </dd>

        <dt class='gloss-tldr'>
          <a
            class='tldr'
            href='https://www.sciencedirect.com/science/article/pii/S0267364922000528'
            target='_blank'
            rel='noopener'
          >
            The GDPR and Online Algorithmic Pricing: A Critical Look
          </a>
        </dt>
        <dd>
          Analyzes a major loophole in EU data protection law, finding that
          "affinity-based" personalized pricing often circumvents the GDPR,
          leaving consumers vulnerable to privacy invasion and discrimination
          with little recourse.
        </dd>

        <dt class='gloss-tldr'>
          <a
            class='tldr'
            href='https://fightchatcontrol.eu/'
            target='_blank'
            rel='noopener'
          >
            The EU (still) wants to scan your private messages and photos
          </a>
        </dt>
        <dd>
          Every photo, every message, every file you send will be automatically
          scanned—without your consent or suspicion. It is mass surveillance
          imposed on all 450 million citizens of the European Union, while EU
          politicians exempt themselves from this surveillance under
          "professional secrecy" rules.
        </dd>
      </dl>
    ),
  },
];

export default function InfoTabsFixed() {
  const [active, setActive] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setActive(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  return (
    <div className='info-tabs-fixed' ref={containerRef}>
      <div className='info-tabs-fixed-row'>
        {TABS.map((tab) => (
          <button
            key={tab.key}
            className={`info-tabs-fixed-tab${
              active === tab.key ? " active" : ""
            }`}
            onClick={() =>
              setActive((prev) => (prev === tab.key ? null : tab.key))
            }
            type='button'
          >
            {tab.label}
          </button>
        ))}
      </div>
      {active && (
        <div className='info-tabs-fixed-content'>
          {TABS.find((tab) => tab.key === active)?.content}
        </div>
      )}
    </div>
  );
}
