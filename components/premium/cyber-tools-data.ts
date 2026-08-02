export interface CyberTool {
  id: string;
  name: string;
  category: string;
  description: string;
  purpose: string;
  usedIn: string;
  brandColor: string;
  // Simple Icons CDN slug — used to load the OFFICIAL logo
  // https://cdn.simpleicons.org/{simpleIconSlug}
  simpleIconSlug?: string;
  // Fallback SVG string for tools NOT on Simple Icons
  fallbackSvg: string;
}

export const CEH_TOOLS_DATA: CyberTool[] = [
  {
    id: "nmap",
    name: "Nmap",
    category: "Network Pentesting",
    description: "Network scanning and host discovery",
    purpose: "Port scanning, OS fingerprinting, service detection, and network topology mapping.",
    usedIn: "CEH Specialization • Network Scanning",
    brandColor: "#00A8FF",
    simpleIconSlug: "nmap",
    fallbackSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect width="100" height="100" rx="18" fill="#0a0f1e"/>
      <circle cx="50" cy="50" r="36" fill="none" stroke="#00A8FF" stroke-width="3.5"/>
      <circle cx="50" cy="50" r="22" fill="none" stroke="#4FD1FF" stroke-width="2.5"/>
      <circle cx="50" cy="50" r="9" fill="#00A8FF"/>
      <path d="M50 14 C28 14 10 50 10 50 S28 86 50 86 90 50 90 50 72 14 50 14" fill="none" stroke="#00A8FF" stroke-width="3"/>
      <line x1="14" y1="50" x2="86" y2="50" stroke="#00A8FF" stroke-width="1.5" opacity="0.4"/>
      <line x1="50" y1="14" x2="50" y2="86" stroke="#00A8FF" stroke-width="1.5" opacity="0.4"/>
    </svg>`
  },
  {
    id: "burpsuite",
    name: "Burp Suite",
    category: "Web Security",
    description: "Web application security testing platform",
    purpose: "HTTP proxy interception, automated scanner, fuzzer and web vulnerability exploitation.",
    usedIn: "CEH Specialization • Web Application Hacking",
    brandColor: "#FF6633",
    simpleIconSlug: "burpsuite",
    fallbackSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect width="100" height="100" rx="18" fill="#1a0800"/>
      <path d="M53 10L16 55h28L30 90l54-47H57L68 10z" fill="#FF6633"/>
    </svg>`
  },
  {
    id: "wireshark",
    name: "Wireshark",
    category: "Network Pentesting",
    description: "Network protocol analyzer",
    purpose: "Deep packet inspection, live traffic capture, protocol dissection and network forensics.",
    usedIn: "CEH Specialization • Sniffing & Evasion",
    brandColor: "#1679A7",
    simpleIconSlug: "wireshark",
    fallbackSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect width="100" height="100" rx="18" fill="#001428"/>
      <path d="M12 75C22 75 28 40 38 22 C43 40 48 60 52 46 C57 32 63 56 72 66 C78 73 84 60 88 60" fill="none" stroke="#1679A7" stroke-width="5.5" stroke-linecap="round"/>
      <line x1="12" y1="82" x2="88" y2="82" stroke="#1679A7" stroke-width="3"/>
    </svg>`
  },
  {
    id: "nessus",
    name: "Nessus",
    category: "Vulnerability Assessment",
    description: "Vulnerability scanner and assessment",
    purpose: "Compliance auditing, CVE detection, patch verification and configuration baseline checks.",
    usedIn: "CEH Specialization • Vulnerability Analysis",
    brandColor: "#00A3E0",
    simpleIconSlug: "tenable",
    fallbackSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect width="100" height="100" rx="18" fill="#001428"/>
      <polygon points="50,10 88,32 88,68 50,90 12,68 12,32" fill="none" stroke="#00A3E0" stroke-width="4"/>
      <circle cx="50" cy="50" r="20" fill="none" stroke="#4FD1FF" stroke-width="3" stroke-dasharray="6 4"/>
      <circle cx="50" cy="50" r="9" fill="#00A3E0"/>
    </svg>`
  },
  {
    id: "zenmap",
    name: "Zenmap",
    category: "Network Pentesting",
    description: "Official Nmap GUI front-end",
    purpose: "Visual network topology, interactive scan management and host comparison.",
    usedIn: "CEH Specialization • Network Scanning",
    brandColor: "#00C8FF",
    simpleIconSlug: "nmap",
    fallbackSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect width="100" height="100" rx="18" fill="#001a2e"/>
      <circle cx="50" cy="50" r="36" fill="none" stroke="#00C8FF" stroke-width="3" stroke-dasharray="8 5"/>
      <circle cx="50" cy="50" r="20" fill="none" stroke="#00A8FF" stroke-width="2.5"/>
      <circle cx="50" cy="50" r="8" fill="#00C8FF"/>
      <circle cx="22" cy="50" r="4" fill="#4FD1FF"/>
      <circle cx="78" cy="50" r="4" fill="#4FD1FF"/>
    </svg>`
  },
  {
    id: "hashcat",
    name: "Hashcat",
    category: "Password & Cracking",
    description: "Advanced GPU-accelerated password cracker",
    purpose: "Hash cracking via brute-force, dictionary, rule-based and combinator attacks for NTLM, MD5, SHA.",
    usedIn: "CEH Specialization • Password Cracking",
    brandColor: "#4EAA25",
    simpleIconSlug: "hashcat",
    fallbackSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect width="100" height="100" rx="18" fill="#0a1a00"/>
      <line x1="32" y1="15" x2="22" y2="85" stroke="#4EAA25" stroke-width="11" stroke-linecap="round"/>
      <line x1="68" y1="15" x2="58" y2="85" stroke="#4EAA25" stroke-width="11" stroke-linecap="round"/>
      <line x1="17" y1="37" x2="83" y2="37" stroke="#4EAA25" stroke-width="8" stroke-linecap="round"/>
      <line x1="14" y1="63" x2="80" y2="63" stroke="#4EAA25" stroke-width="8" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: "thc-hydra",
    name: "THC Hydra",
    category: "Password & Cracking",
    description: "Fast network login cracker",
    purpose: "Brute-force login credentials against SSH, FTP, HTTP, RDP, SMB and 50+ protocols.",
    usedIn: "CEH Specialization • Password Auditing",
    brandColor: "#4169E1",
    simpleIconSlug: undefined,
    fallbackSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect width="100" height="100" rx="18" fill="#000a1e"/>
      <text x="50" y="28" text-anchor="middle" fill="#4169E1" font-family="monospace" font-weight="bold" font-size="11">THC</text>
      <path d="M50 80 Q50 55 28 44" fill="none" stroke="#4169E1" stroke-width="5" stroke-linecap="round"/>
      <path d="M50 80 Q50 52 50 40" fill="none" stroke="#4169E1" stroke-width="5" stroke-linecap="round"/>
      <path d="M50 80 Q50 55 72 44" fill="none" stroke="#4169E1" stroke-width="5" stroke-linecap="round"/>
      <circle cx="28" cy="40" r="7" fill="#4169E1"/>
      <circle cx="50" cy="37" r="7" fill="#4169E1"/>
      <circle cx="72" cy="40" r="7" fill="#4169E1"/>
      <text x="50" y="93" text-anchor="middle" fill="#4169E1" font-family="monospace" font-size="10">HYDRA</text>
    </svg>`
  },
  {
    id: "metasploit",
    name: "Metasploit",
    category: "Exploitation",
    description: "Penetration testing framework",
    purpose: "Exploit development, payload delivery, post-exploitation, session management and pivoting.",
    usedIn: "CEH Specialization • System Hacking",
    brandColor: "#2B65EC",
    simpleIconSlug: "metasploit",
    fallbackSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect width="100" height="100" rx="18" fill="#000d28"/>
      <path d="M50 10L88 35V65L50 90L12 65V35Z" fill="none" stroke="#2B65EC" stroke-width="4"/>
      <path d="M25 75V30L50 57L75 30V75" fill="none" stroke="white" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    id: "openvas",
    name: "OpenVAS",
    category: "Vulnerability Assessment",
    description: "Open-source vulnerability scanner",
    purpose: "Network vulnerability scanning, security configuration auditing and patch management.",
    usedIn: "CEH Specialization • Vulnerability Analysis",
    brandColor: "#659B29",
    simpleIconSlug: "greenbone",
    fallbackSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect width="100" height="100" rx="18" fill="#0a1400"/>
      <circle cx="50" cy="50" r="36" fill="none" stroke="#659B29" stroke-width="4"/>
      <path d="M30 42C40 26 60 26 70 42C80 58 60 76 50 84C40 76 20 58 30 42Z" fill="#659B29" fill-opacity="0.35" stroke="#8FE33B" stroke-width="3"/>
      <circle cx="50" cy="50" r="11" fill="#659B29"/>
    </svg>`
  },
  {
    id: "nikto",
    name: "Nikto",
    category: "Web Security",
    description: "Web server vulnerability scanner",
    purpose: "Scanning for dangerous files, misconfigurations, outdated software and known CVEs on web servers.",
    usedIn: "CEH Specialization • Web Server Hacking",
    brandColor: "#00A8FF",
    simpleIconSlug: undefined,
    fallbackSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect width="100" height="100" rx="18" fill="#001428"/>
      <rect x="14" y="20" width="72" height="56" rx="6" fill="none" stroke="#00A8FF" stroke-width="4"/>
      <line x1="14" y1="35" x2="86" y2="35" stroke="#00A8FF" stroke-width="3"/>
      <circle cx="24" cy="27" r="3" fill="#FF5555"/>
      <circle cx="35" cy="27" r="3" fill="#FFB800"/>
      <circle cx="46" cy="27" r="3" fill="#4EAA25"/>
      <text x="50" y="58" text-anchor="middle" fill="#4FD1FF" font-family="monospace" font-weight="bold" font-size="14">NIKTO</text>
      <line x1="24" y1="68" x2="58" y2="68" stroke="#00A8FF" stroke-width="2" stroke-linecap="round"/>
      <line x1="50" y1="76" x2="50" y2="84" stroke="#00A8FF" stroke-width="2.5"/>
      <line x1="35" y1="84" x2="65" y2="84" stroke="#00A8FF" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: "john",
    name: "John the Ripper",
    category: "Password & Cracking",
    description: "Offline password hash cracker",
    purpose: "Dictionary, brute-force and hybrid attacks against Unix, Windows, ZIP, PDF and database hashes.",
    usedIn: "CEH Specialization • Cryptanalysis",
    brandColor: "#E8C84A",
    simpleIconSlug: undefined,
    fallbackSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect width="100" height="100" rx="18" fill="#1a1400"/>
      <path d="M15 54 Q25 36 50 34 Q75 36 85 54 L80 60 Q20 60 15 54Z" fill="#E8C84A"/>
      <path d="M30 34 C30 20 40 13 50 13 C60 13 70 20 70 34" fill="none" stroke="#E8C84A" stroke-width="5.5" stroke-linecap="round"/>
      <path d="M68 20 L80 12" stroke="#E8C84A" stroke-width="3.5" stroke-linecap="round"/>
      <rect x="32" y="58" width="36" height="24" rx="3" fill="#E8C84A" fill-opacity="0.2" stroke="#E8C84A" stroke-width="3"/>
      <circle cx="50" cy="70" r="4.5" fill="#E8C84A"/>
    </svg>`
  },
  {
    id: "owasp-zap",
    name: "OWASP ZAP",
    category: "Web Security",
    description: "Web application security proxy",
    purpose: "Intercepting proxy, active/passive scanning, fuzzing and automated security testing for OWASP Top 10.",
    usedIn: "CEH Specialization • Web Application Hacking",
    brandColor: "#007BFF",
    simpleIconSlug: "owasp",
    fallbackSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect width="100" height="100" rx="18" fill="#000a1e"/>
      <circle cx="50" cy="50" r="36" fill="#007BFF" fill-opacity="0.15" stroke="#007BFF" stroke-width="4"/>
      <path d="M52 14L22 56h23L37 86l41-42H55Z" fill="#00A8FF" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
    </svg>`
  },
  {
    id: "ettercap",
    name: "Ettercap",
    category: "Network Pentesting",
    description: "Man-in-the-Middle attack suite",
    purpose: "ARP poisoning, SSL stripping, live packet filtering and credential sniffing on LAN.",
    usedIn: "CEH Specialization • Sniffing & MITM",
    brandColor: "#00BFFF",
    simpleIconSlug: undefined,
    fallbackSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect width="100" height="100" rx="18" fill="#001020"/>
      <ellipse cx="50" cy="45" rx="24" ry="20" fill="#00BFFF" fill-opacity="0.25" stroke="#00BFFF" stroke-width="3"/>
      <circle cx="40" cy="40" r="5" fill="#4FD1FF"/>
      <circle cx="60" cy="40" r="5" fill="#4FD1FF"/>
      <path d="M30 60 Q25 75 30 82" stroke="#00BFFF" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <path d="M38 63 Q35 78 38 85" stroke="#00BFFF" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <path d="M50 64 Q50 80 50 87" stroke="#00BFFF" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <path d="M62 63 Q65 78 62 85" stroke="#00BFFF" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <path d="M70 60 Q75 75 70 82" stroke="#00BFFF" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: "set",
    name: "SET",
    category: "Social Engineering",
    description: "Social Engineer Toolkit",
    purpose: "Spear-phishing, credential harvesting, payload delivery via social engineering vectors.",
    usedIn: "CEH Specialization • Social Engineering",
    brandColor: "#3776AB",
    simpleIconSlug: undefined,
    fallbackSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect width="100" height="100" rx="18" fill="#001028"/>
      <path d="M50 12 L82 30 L82 68 L50 86 L18 68 L18 30 Z" fill="none" stroke="#3776AB" stroke-width="3.5"/>
      <path d="M50 20 L76 36 L76 65 L50 78 L24 65 L24 36 Z" fill="#3776AB" fill-opacity="0.2"/>
      <text x="50" y="50" text-anchor="middle" dominant-baseline="middle" fill="white" font-family="monospace" font-weight="bold" font-size="17">SET</text>
      <text x="50" y="64" text-anchor="middle" fill="#3776AB" font-family="sans-serif" font-size="8">TrustedSec</text>
    </svg>`
  },
  {
    id: "docker",
    name: "Docker",
    category: "Infrastructure",
    description: "Container platform for isolated labs",
    purpose: "Spin up vulnerable targets, isolated pentesting environments and reproducible security sandboxes.",
    usedIn: "CEH Specialization • Lab Environments",
    brandColor: "#2496ED",
    simpleIconSlug: "docker",
    fallbackSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect width="100" height="100" rx="18" fill="#001428"/>
      <rect x="12" y="34" width="14" height="12" rx="2" fill="#2496ED"/>
      <rect x="30" y="34" width="14" height="12" rx="2" fill="#2496ED"/>
      <rect x="48" y="34" width="14" height="12" rx="2" fill="#2496ED"/>
      <rect x="66" y="34" width="14" height="12" rx="2" fill="#2496ED"/>
      <rect x="30" y="18" width="14" height="12" rx="2" fill="#2496ED"/>
      <rect x="48" y="18" width="14" height="12" rx="2" fill="#2496ED"/>
      <path d="M8 53 C8 53 18 46 36 53 C54 60 72 50 92 62 C97 67 92 82 72 82 C42 82 12 76 8 53Z" fill="#2496ED"/>
      <circle cx="78" cy="61" r="3.5" fill="white"/>
    </svg>`
  },
  {
    id: "maltego",
    name: "Maltego",
    category: "OSINT",
    description: "OSINT and link-analysis platform",
    purpose: "Threat actor profiling, infrastructure mapping, data correlation and visual relationship graphs.",
    usedIn: "CEH Specialization • Reconnaissance",
    brandColor: "#0072B1",
    simpleIconSlug: "maltego",
    fallbackSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect width="100" height="100" rx="18" fill="#001028"/>
      <circle cx="50" cy="20" r="9" fill="#0072B1"/>
      <circle cx="20" cy="72" r="9" fill="#0072B1"/>
      <circle cx="80" cy="72" r="9" fill="#0072B1"/>
      <circle cx="50" cy="54" r="7" fill="#4499CC"/>
      <line x1="50" y1="29" x2="50" y2="47" stroke="#0072B1" stroke-width="3"/>
      <line x1="26" y1="66" x2="43" y2="57" stroke="#0072B1" stroke-width="3"/>
      <line x1="74" y1="66" x2="57" y2="57" stroke="#0072B1" stroke-width="3"/>
    </svg>`
  },
  {
    id: "aircrack-ng",
    name: "Aircrack-ng",
    category: "Wireless Security",
    description: "Wireless network security suite",
    purpose: "WEP/WPA/WPA2 key cracking, packet injection, 802.11 frame capture and wireless auditing.",
    usedIn: "CEH Specialization • Wireless Hacking",
    brandColor: "#4FD1FF",
    simpleIconSlug: "aircrackng",
    fallbackSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect width="100" height="100" rx="18" fill="#001428"/>
      <path d="M14 32 C34 14 66 14 86 32" fill="none" stroke="#4FD1FF" stroke-width="7" stroke-linecap="round"/>
      <path d="M24 46 C36 33 64 33 76 46" fill="none" stroke="#4FD1FF" stroke-width="7" stroke-linecap="round"/>
      <path d="M36 60 C42 52 58 52 64 60" fill="none" stroke="#4FD1FF" stroke-width="7" stroke-linecap="round"/>
      <circle cx="50" cy="76" r="8" fill="#4FD1FF"/>
    </svg>`
  },
  {
    id: "sqlmap",
    name: "SQLMap",
    category: "Web Security",
    description: "Automated SQL injection tool",
    purpose: "Blind/error-based SQL injection, database fingerprinting, data extraction and OS shell access.",
    usedIn: "CEH Specialization • SQL Injection",
    brandColor: "#CC0000",
    simpleIconSlug: undefined,
    fallbackSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect width="100" height="100" rx="18" fill="#1a0000"/>
      <ellipse cx="50" cy="26" rx="32" ry="11" fill="#CC0000" fill-opacity="0.35" stroke="#CC0000" stroke-width="4"/>
      <path d="M18 26 L18 50 C18 57 30 62 50 62 C70 62 82 57 82 50 L82 26" fill="none" stroke="#CC0000" stroke-width="4"/>
      <path d="M18 50 L18 74 C18 81 30 86 50 86 C70 86 82 81 82 74 L82 50" fill="none" stroke="#CC0000" stroke-width="4"/>
      <path d="M58 46 C55 38 60 30 68 32 C64 22 50 20 44 30 L52 28 Z" fill="#FF4444"/>
    </svg>`
  }
];
