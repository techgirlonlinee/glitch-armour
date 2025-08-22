export const categories = [
  {
    name: "Messenger",
    description: `Messaging apps are the intimate threads connecting you to friends, family, and communities. Instagram Messenger isn't end-to-end encrypted, exposing conversations to Meta's data collection. Flip phones don't escape surveillance—cell networks still track your location and communication patterns. Even "encrypted" apps like WhatsApp and iMessage collect metadata about who, when, and where you chat. Surveillance chic. 
A privacy-focused messenger is like a soundproof room with no windows, where conversations happen without leaving a trace.`  },
  {
    name: "Browser",
    description: `Browsers are the windows into your online world, revealing your clicks, preferences, and digital behavior. It's a prime tracking territory for corporations to build comprehensive profiles of your digital existence for every click, site visit, and search. A privacy-focused browser is a tool that creates a secure, encrypted environment that basically says nope to tracking, blocks sketchy scripts, and limits digital surveillance. It's basically your personal privacy knight of the online window.`},
  {
    name: "Browser Add-on",
    description: `Add-ons are like armor for your browser—blocking ads, trackers, and other data leeches. Essential if you want to actually keep your browsing private.`
  },
  {
    name: "Search Engine",
    description: `Search engines are the gatekeepers of your digital curiosity. Google tracks every query, building a comprehensive profile of your interests, fears, and secrets. Your searches reveal more about you than you'd ever share intentionally. They build a profile to monetize your interests, control what information you see, and how you access it. A privacy-focused search engine blocks trackers so you can lurk in peace.` },
  {
    name: "VPN",
    description: `Your digital footprint starts with your IP address—a unique identifier that reveals your online movements, location, and browsing habits. A VPN is a network tool that creates a secure, encrypted tunnel that masks your real IP, making you invisible to internet providers, trackers, and digital surveillance. AKA it's like an invisibility cloak for your online life.` },
  {
    name: "Email",
    description: `Gmail isn't reading your diary word-for-word anymore, but they're still deeply in your business. They map your social graph—who you email, when, how often—and track everything else (location, clicks) to build a detailed profile and target you with ads. It's surveillance capitalism: less about reading your mail, more about surveilling your entire life.`
  },
  {
    name: "Password Manager",
    description: `Still using the same password after multiple data breaches? Girl, that’s wild. Password managers are digital dominatrixes for your logins—keeping them strong, unique, and under lock and key, and you won’t need to remember each one again. Handing your passwords to Google or Apple is like trusting a fox to guard the henhouse.`
  },
  {
    name: "Encrypted Storage",
    description: `Encrypted notes and file storage keep your documents under your control, like a digital safe deposit box. Big Tech says your files are private, but are they really? Encrypted storage is like a digital vault—keeping your data private, even from the storage provider, because Google Drive and Dropbox can access your unencrypted data unless you take extra steps.`
  },
  {
    name: "File Transfer",
    description: `File transfer services profit off your data and track your every move. Private file transfer services are like sending a secret message in a sealed envelope. WeTransfer encrypts your files in transit and at rest, but is still basically a billboard for advertisers.`
  },
  {
    name: "Knowledge System",
    description: `Note-taking apps are where you dump your brain—ideas, plans, to-do lists, the works. Secure ones don't sell you out. Think of them as digital fortresses for your thoughts. Notion encrypts your data while it's snoozing, but doesn't offer full end-to-end encryption.`
  },
  {
    name: "Collaborative Editor",
    description: `Secure document editors are like having a locked room for your thoughts. Google Docs encrypts your files while they're chilling on Google's servers, but they still get to peek unless you jump through extra hoops.`
  },
  {
    name: "File Manager",
    description: `Self-hosted file managers let you run your own cloud—no Big Tech middleman, no surveillance. For people who want total control over their files and sharing.`
  },
  {
    name: "Video Call",
    description: `Even with that shiny "end-to-end encryption," many platforms can still record and store your video calls. Encryption keeps the randos out, but the company hosting the call could still be taking notes and selling them. Google Meet might encrypt your video, but they're still scooping up your metadata (who, when, how long) and sniffing around for ad data. Zoom? They've leaked data and shared it with who-knows-who.`
  }
];

  
  export const tools = [
    // MESSENGERS
    {
      name: "Signal",
      category: "Messenger",
      labels: ["Free", "Open Source", "Centralized"],
      description:
        "Centralized, open-source messenger. Strong encryption, but all messages go through Signal’s servers. Easy, but you’re trusting one non-profit. Great for private, secure texting—less for collective autonomy.",
      pros: [
        "Simple, familiar interface, open-source, no ads"
      ],
      cons: [
        "Requires phone number, no federation"
      ],
      link: "https://signal.org"
    },
    {
      name: "Element",
      category: "Messenger",
      labels: ["Free", "Open Source", "Decentralized"],
      description:
        "Decentralized messenger built on Matrix. Anyone can run a server—no single company controls your chats. Good for group organizing, not just private texting. Collective power, not platform lock-in.",
      pros: [
        "Open protocol & federated: pick or run your own server & bridge to other platforms",
      ],
      cons: [
        "Setup can be confusing, less polished UI than mainstream apps"
      ],
      link: "https://element.io"
    },
    {
      name: "Session",
      category: "Messenger",
      labels: ["Free", "Open Source", "Decentralized"],
      description:
        "Private messaging app that protects your metadata, encrypts your communications, and makes sure your messaging activities leave no digital trail behind.",
      pros: [
        "No collection of identifying information (IP addresses, user agents, device identifiers) and no phone number, email, or real identity required to create an account",
      ],
      cons: [
        "Despite not needing a phone number to use the app, downloading it from the app store will expose users to some store related tracking. There is also smaller user base compared to mainstream messaging apps."
      ],
      link: "https://getsession.org/"
    },

    // BROWSERS
    {
      name: "Firefox",
      category: "Browser",
      labels: ["Free", "Open Source"],
      description:
        "Open-source browser with strong privacy features. Highly customizable—add-ons let you shape your own experience. Community-run, not ad-funded.",
      pros: [
        "Customizable, strong anti-tracking, open-source"
      ],
      cons: [
        "Can use lots of memory with many add-ons"
      ],
      link: "https://www.mozilla.org/firefox/"
    },
    {
      name: "Brave",
      category: "Browser",
      labels: ["Free", "Open Source"],
      description:
        "Blocks ads and trackers out of the box. Built-in Tor mode for extra privacy. More private than Chrome, but not as customizable as Firefox.",
      pros: [
        "Built-in ad and tracker blocking, Tor mode (hides your IP address), good performance."
      ],
      cons: [
        "Built on top of Chrome– gives Google significant influence over the browser and data tracking"
      ],
      link: "https://brave.com/"
    },
    {
      name: "Mullvad Browser",
      category: "Browser",
      labels: ["Free", "Open Source"],
      description:
        "Privacy-first browser built with Tor Project. Blocks data brokers, designed to leave no trace. Best paired with a VPN. Minimal features by design.",
      pros: [
        "Blocks data brokers, VPN-friendly"
      ],
      cons: [
        "Limited features, not for everyday browsing"
      ],
      link: "https://mullvad.net/en/browser"
    },
  
    // BROWSER ADD-ONS
    {
      name: "uBlock Origin",
      category: "Browser Add-on",
      labels: ["Free", "Open Source"],
      description:
        "Ad and tracker blocker. Lightweight, effective, and doesn’t sell your data. Essential for a less noisy web.",
      pros: [
        "Blocks ads and trackers, low resource use"
      ],
      cons: [
        "Can sometimes block site features"
      ],
      link: "https://ublockorigin.com/"
    },
    {
      name: "Privacy Badger",
      category: "Browser Add-on",
      labels: ["Free", "Open Source"],
      description:
        "Learns and blocks trackers automatically. Set-and-forget. Less manual than uBlock, but less customizable.",
      pros: [
        "Learns as you browse, blocks trackers"
      ],
      cons: [
        "Can break some sites, less granular control"
      ],
      link: "https://privacybadger.org/"
    },
    {
      name: "ClearURLs",
      category: "Browser Add-on",
      labels: ["Free", "Open Source"],
      description:
        "Removes tracking junk from links. Keeps your clicks clean. Works quietly in the background.",
      pros: [
        "Cleans URLs, easy to use"
      ],
      cons: [
        "None"
      ],
      link: "https://clearurls.xyz/"
    },
    {
      name: "Cookie AutoDelete",
      category: "Browser Add-on",
      labels: ["Free", "Open Source"],
      description:
        "Deletes cookies when you close a site. Leaves no trace. Good for privacy, but you’ll log in more often.",
      pros: [
        "Automatic cookie cleanup"
      ],
      cons: [
        "May require frequent logins"
      ],
      link: "https://cookieautodelete.com/"
    },
  
    // SEARCH ENGINES
    {
      name: "DuckDuckGo",
      category: "Search Engine",
      labels: ["Free", "No Tracking"],
      description:
        "No tracking, no data hoarding. Simple, privacy-respecting search. Results can be less comprehensive than Google.",
      pros: [
        "Doesn't track searches, simple"
      ],
      cons: [
        "Results not as deep as Google"
      ],
      link: "https://duckduckgo.com/"
    },
    {
      name: "Startpage",
      category: "Search Engine",
      labels: ["Free", "No Tracking"],
      description:
        "Google results, but without Google tracking you. Uses Google’s index as a privacy filter.",
      pros: [
        "Google results, no tracking"
      ],
      cons: [
        "Relies on Google infrastructure"
      ],
      link: "https://www.startpage.com/"
    },
    {
      name: "Kagi",
      category: "Search Engine",
      labels: ["Paid", "No Ads"],
      description:
        "Privacy-focused, customizable search. No targeted ads, auto-deletes your searches. Paid, but no data harvesting.",
      pros: [
        "Customizable, zero targeted ads"
      ],
      cons: [
        "Paid subscription for full access"
      ],
      link: "https://kagi.com/"
    },
    {
    name: "MetaGer",
    category: "Search Engine",
    labels: ["Non-Profit", "Open Source"],
    description:
      "A metasearch engine run by a non-profit that doesn't create user profiles and minimizes data collection. One of the most privacy-respecting search engines currently",
    pros: [
      "Operated by non-profit association SUMA-EV committed to free knowledge access",
      "No user profiling or creation of user profiles",
      "IP addresses and user agents are not saved or shared for core search functionality",
      "Anonymous statistics collected without cookies or tracking technologies",
      "Search queries only kept for a few hours for display purposes",
      "Transparent about all data collection practices",
      "Offers additional privacy tools like anonymizing proxy",
      "Clear explanation of user rights under GDPR",
      "Map service doesn't store location data or search queries",
      "Optional features are opt-in rather than default"
    ],
    cons: [
      "Search queries are transmitted to third-party partners for metasearch results",
      "Contact form data stored for 2 months",
      "Payment data stored for 10 years for tax purposes (necessary but still long retention)",
      "Website suma-ev.de stores IP, user-agent, and referrer for up to one week",
      "Search suggestions feature requires storing a hash of IP and user data if enabled",
      "Limited information about which third-party partners receive search queries"
    ],
    link: "https://metager.org/"
  },
    // PASSWORD MANAGERS
    {
      name: "Bitwarden",
      category: "Password Manager",
      labels: ["Free", "Open Source"],
      description:
        "Open-source, encrypted password manager. Free for personal use. Community-audited, not ad-funded.",
      pros: [
        "Open-source, cross-platform, free tier"
      ],
      cons: [
        "UI less polished than paid options"
      ],
      link: "https://bitwarden.com/"
    },
    {
      name: "1Password",
      category: "Password Manager",
      labels: ["Paid"],
      description:
        "Paid, user-friendly password manager. Great for families and less technical users. Closed-source, but widely trusted.",
      pros: [
        "Easy to use, strong security"
      ],
      cons: [
        "Paid subscription, not open-source"
      ],
      link: "https://1password.com/"
    },
  
    // EMAIL
    {
      name: "ProtonMail",
      category: "Email",
      labels: ["Free", "Encrypted"],
      description:
        "Encrypted, Swiss-based email. Free tier available. Good for privacy, but limited storage unless you pay.",
      pros: [
        "End-to-end encryption, Swiss privacy laws"
      ],
      cons: [
        "Limited storage on free tier"
      ],
      link: "https://proton.me/mail"
    },
    {
      name: "Tutanota",
      category: "Email",
      labels: ["Free", "Encrypted", "Sustainable"],
      description:
        "Encrypted email, eco-friendly. Focus on privacy and sustainability. Fewer features than ProtonMail.",
      pros: [
        "End-to-end encryption, green energy"
      ],
      cons: [
        "Limited features on free tier"
      ],
      link: "https://tutanota.com/"
    },
    {
      name: "Hey",
      category: "Email",
      labels: ["Paid"],
      description:
        "Paid email that blocks trackers and screens senders. Unique workflow—good for inbox control, but not traditional.",
      pros: [
        "Blocks trackers, screens emails"
      ],
      cons: [
        "Paid, non-traditional workflow"
      ],
      link: "https://hey.com/"
    },
  
    // VPN
    {
      name: "Mullvad",
      category: "VPN",
      labels: ["Paid", "No Logs"],
      description:
        "No personal info needed. Accepts cash. Privacy-first, no marketing BS. Fewer servers than big brands.",
      pros: [
        "No logs, accepts cash payments"
      ],
      cons: [
        "Fewer server locations"
      ],
      link: "https://mullvad.net/"
    },
    {
      name: "ProtonVPN",
      category: "VPN",
      labels: ["Free", "Encrypted"],
      description:
        "Strong encryption, free tier available. Swiss-based. Good for basic use, but free tier is slow.",
      pros: [
        "Strong encryption, free tier"
      ],
      cons: [
        "Free tier is limited"
      ],
      link: "https://protonvpn.com/"
    },
    {
      name: "NYM",
      category: "VPN",
      labels: ["Mixnet"],
      description:
        "Mixnet scrambles your traffic for next-level privacy. Not just a VPN—harder to trace, but can be slower.",
      pros: [
        "Enhanced privacy, mixnet tech, cheap"
      ],
      cons: [
        "Still in Beta, a bit buggy"
      ],
      link: "https://nymtech.net/"
    },
  
    // ENCRYPTED STORAGE
    {
      name: "ProtonDrive",
      category: "Encrypted Storage",
      labels: ["Free", "Encrypted"],
      description:
        "Encrypted cloud storage from Proton. Works with ProtonMail. Good for privacy, but limited free space.",
      pros: [
        "End-to-end encryption, ProtonMail integration"
      ],
      cons: [
        "Limited free storage"
      ],
      link: "https://proton.me/drive"
    },
    {
      name: "CryptDrive",
      category: "Encrypted Storage",
      labels: ["Free", "Decentralized"],
      description:
        "Decentralized, user-controlled encrypted storage. Build your own private cloud. More control, more complexity.",
      pros: [
        "Decentralized, user-controlled"
      ],
      cons: [
        "Setup can be complex"
      ],
      link: "https://cryptdrive.org/"
    },
    {
      name: "Internxt",
      category: "Encrypted Storage",
      labels: ["Free", "Open Source", "Zero-Knowledge"],
      description:
        "Open-source, zero-knowledge, EU-based. Only you can access your files. Free tier is small.",
      pros: [
        "Zero-knowledge, open-source"
      ],
      cons: [
        "1GB free storage is limited"
      ],
      link: "https://internxt.com/"
    },
  
    // FILE TRANSFER
    {
      name: "SwissTransfer",
      category: "File Transfer",
      labels: ["Free", "Privacy-Focused"],
      description:
        "Simple, privacy-focused file transfer. No frills, no tracking. Good for quick, one-off sends.",
      pros: [
        "Easy, privacy-focused"
      ],
      cons: [
        "Limited features"
      ],
      link: "https://www.swisstransfer.com/"
    },
    {
      name: "Syncthing",
      category: "File Transfer",
      labels: ["Free", "Open Source", "Decentralized"],
      description:
        "Decentralized, syncs files directly between your devices. No cloud, no central server. Good for techy folks.",
      pros: [
        "Decentralized, keeps data on your devices"
      ],
      cons: [
        "Setup can be complex"
      ],
      link: "https://syncthing.net/"
    },
    {
      name: "Wormhole",
      category: "File Transfer",
      labels: ["Free", "Encrypted"],
      description:
        "End-to-end encrypted, files auto-expire. No account needed. Good for quick, private sharing.",
      pros: [
        "Easy, encrypted, no account"
      ],
      cons: [
        "Files auto-expire"
      ],
      link: "https://wormhole.app/"
    },
  
    // KNOWLEDGE SYSTEMS / NOTES
    {
      name: "Obsidian",
      category: "Knowledge System",
      labels: ["Free", "Local", "Plugin Ecosystem"],
      description:
        "Personal wiki you can store locally or self-host. Customizable, secure. Good for power users.",
      pros: [
        "Local storage, plugins"
      ],
      cons: [
        "Setup can be complex"
      ],
      link: "https://obsidian.md/"
    },
    {
      name: "Notesnook",
      category: "Knowledge System",
      labels: ["Free", "Encrypted"],
      description:
        "Fully encrypted, simple note-taking. Bare bones, but private. Good for minimalists.",
      pros: [
        "Fully encrypted, simple"
      ],
      cons: [
        "Bare bones"
      ],
      link: "https://notesnook.com/"
    },
    {
      name: "AnyType",
      category: "Knowledge System",
      labels: ["Free", "Encrypted", "P2P"],
      description:
        "Fully encrypted, p2p sync, works offline. Notion vibes, but secure. Good for people who want it all.",
      pros: [
        "Encrypted, p2p sync, offline"
      ],
      cons: [
        "May be overkill for simple notes"
      ],
      link: "https://anytype.io/"
    },
  
    // COLLABORATIVE NOTES & FILES
    {
      name: "CryptPad",
      category: "Collaborative Editor",
      labels: ["Free", "Open Source", "Encrypted"],
      description:
        "Open-source, encrypted, real-time collaboration. Google Docs, but private. Good for group work.",
      pros: [
        "Encrypted, real-time, open-source"
      ],
      cons: [
        "Fewer features than mainstream editors"
      ],
      link: "https://cryptpad.org/"
    },
    {
      name: "Etherpad",
      category: "Collaborative Editor",
      labels: ["Free", "Open Source"],
      description:
        "Open-source, real-time collaborative editor. Self-host if you want. Simple, but not encrypted.",
      pros: [
        "Open-source, real-time"
      ],
      cons: [
        "Limited features, no encryption"
      ],
      link: "https://etherpad.org/"
    },
    {
      name: "Fileverse",
      category: "File Manager",
      labels: ["Free", "Open Source", "Self-Hosted"],
      description:
        "Open-source, self-hosted file manager. Run your own Google Drive. For people who want total control.",
      pros: [
        "Open-source, self-hosted"
      ],
      cons: [
        "Requires technical setup"
      ],
      link: "https://fileverse.io/"
    },
  
    // VIDEO CALLING
    {
      name: "Jitsi",
      category: "Video Call",
      labels: ["Free", "Open Source", "Encrypted"],
      description:
        "End-to-end encrypted, open-source video calls. No account needed. Community-audited, but can be glitchy.",
      pros: [
        "Strong encryption, no account, open-source"
      ],
      cons: [
        "Can be less reliable than mainstream services"
      ],
      link: "https://meet.jit.si/"
    },
    {
    name: "MiroTalk",
    category: "Video Call",
    labels: ["Free", "Peer-to-Peer"],
    description:
      "Peer-to-peer browser-based video calls with data from in call messaging and file sharing between users never routed through central servers.",
    pros: [
      "Easy to use with any OS, any connection-related data is removed when the call ends. If you decide to record your meeting, it will be stored locally in your browser, then downloaded to your device.",
    ],
    cons: [
      "Option for ChatGPT integration, which if used, would cancel out their peer-to-peer only claim and would send information to external servers.",
    ],
    link: "https://p2p.mirotalk.com"
  },
  {
    name: "Signal",
    category: "Video Call",
    labels: ["Free", "Open Source", "End-to-End Encrypted"],
    description:
      "Since 2024, Signal has offered call links, so you can invite other users to a call without having to create a group first. It's privacy-focused with end-to-end encryption.",
    pros: [
      "All calls and messages are end-to-end encrypted by default and all message histories are stored locally on user devices, not external servers.",
    ],
    cons: [
      "Only for Signal app users. Third-party service integrations like YouTube & Spotify introduce some loopholes, subjecting users to those significantly more sus privacy policies.",
    ],
    link: "https://signal.org/"
  }
  ];
 