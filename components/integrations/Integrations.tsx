"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { BackgroundGrid, GradientBlob } from "@/components/common/Decorators";
import { IntegrationCard, BenefitCard } from "@/components/common/Cards";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Clock,
  Activity,
  Zap,
  Mail,
  Database,
  ArrowRight,
} from "lucide-react";

export default function Integrations() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "Facebook":
        return (
          <svg viewBox="0 0 256 256" className="size-3.5 shrink-0 select-none">
            <path d="M256,128 C256,57.3075 198.6925,0 128,0 C57.3075,0 0,57.3075 0,128 C0,191.8885 46.80775,244.8425 108,254.445 L108,165 L75.5,165 L75.5,128 L108,128 L108,99.8 C108,67.72 127.1095,50 156.3475,50 C170.35175,50 185,52.5 185,52.5 L185,84 L168.8595,84 C152.95875,84 148,93.86675 148,103.98925 L148,128 L183.5,128 L177.825,165 L148,165 L148,254.445 C209.19225,244.8425 256,191.8885 256,128" fill="#1877F2" />
            <path d="M177.825,165 L183.5,128 L148,128 L148,103.98925 C148,93.86675 152.95875,84 168.8595,84 L185,84 L185,52.5 C185,52.5 170.35175,50 156.3475,50 C127.1095,50 108,67.72 108,99.8 L108,128 L75.5,128 L75.5,165 L108,165 L108,254.445 C114.51675,255.4675 121.196,256 128,256 C134.804,256 141.48325,255.4675 148,254.445 L148,165 L177.825,165" fill="#FFFFFF" />
          </svg>
        );
      case "IndiaMART":
        return (
          <svg viewBox="0 0 100 100" className="size-3.5 select-none">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#E2E8F0" strokeWidth="2" opacity="0.1" />
            <path d="M 50,5 A 45,45 0 0,1 95,50 L 50,50 Z" fill="#FF8A1D" />
            <path d="M 95,50 A 45,45 0 0,1 50,95 L 50,50 Z" fill="#007AFF" />
            <path d="M 50,95 A 45,45 0 0,1 5,50 L 50,50 Z" fill="#25D366" />
            <path d="M 5,50 A 45,45 0 0,1 50,5 L 50,50 Z" fill="#FFC857" />
            <circle cx="50" cy="50" r="25" fill="#161C29" />
            <text x="50" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="900" fontFamily="system-ui, sans-serif">iM</text>
          </svg>
        );
      case "WhatsApp":
        return (
          <svg viewBox="0 0 24 24" className="size-3.5 shrink-0 select-none fill-[#25D366]">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        );
      case "Gmail":
        return (
          <svg viewBox="0 0 256 193" className="size-3.5 shrink-0 select-none">
            <path d="M58.1818182,192.049515 L58.1818182,93.1404244 L27.5066233,65.0770089 L0,49.5040608 L0,174.59497 C0,184.253152 7.82545455,192.049515 17.4545455,192.049515 L58.1818182,192.049515 Z" fill="#4285F4" />
            <path d="M197.818182,192.049515 L238.545455,192.049515 C248.203636,192.049515 256,184.224061 256,174.59497 L256,49.5040608 L224.844415,67.3422767 L197.818182,93.1404244 L197.818182,192.049515 Z" fill="#34A853" />
            <polygon fill="#EA4335" points="58.1818182 93.1404244 54.0077618 54.4932827 58.1818182 17.5040608 128 69.8676972 197.818182 17.5040608 202.487488 52.4960089 197.818182 93.1404244 128 145.504061" />
            <path d="M197.818182,17.5040608 L197.818182,93.1404244 L256,49.5040608 L256,26.2313335 C256,4.64587897 231.36,-7.65957557 214.109091,5.28587897 L197.818182,17.5040608 Z" fill="#FBBC04" />
            <path d="M0,49.5040608 L26.7588051,69.5731646 L58.1818182,93.1404244 L58.1818182,17.5040608 L41.8909091,5.28587897 C24.6109091,-7.65957557 0,4.64587897 0,26.2313335 L0,49.5040608 Z" fill="#C5221F" />
          </svg>
        );
      case "Website":
        return (
          <svg viewBox="0 0 24 24" className="size-3.5 shrink-0 select-none" fill="none" stroke="#5DA8FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="7" y1="14" x2="13" y2="14" />
            <line x1="7" y1="17" x2="17" y2="17" />
          </svg>
        );
      case "Zapier":
        return (
          <svg viewBox="0 0 64 64" className="size-3.5 shrink-0 select-none">
            <path d="M63.207 26.418H44.432l13.193-13.193c-1.015-1.522-2.03-2.537-3.045-4.06a29.025 29.025 0 0 1-4.059-3.552L37.33 18.807V.54a17.252 17.252 0 0 0-5.074-.507A15.629 15.629 0 0 0 27.18.54v18.775l-13.7-13.7A13.7 13.7 0 0 0 9.42 9.166c-1.015 1.522-2.537 2.537-3.552 4.06L19.06 26.418H.794l-.507 5.074a15.629 15.629 0 0 0 .507 5.074H19.57l-13.7 13.7a27.198 27.198 0 0 0 7.611 7.611l13.193-13.193V63.46a17.252 17.252 0 0 0 5.074.507 15.629 15.629 0 0 0 5.074-.507V44.686L50.014 57.88a13.7 13.7 0 0 0 4.059-3.552 29.025 29.025 0 0 0 3.552-4.059L44.432 37.074h18.775A17.252 17.252 0 0 0 63.715 32a19.028 19.028 0 0 0-.507-5.582zm-23.342 5.074a25.726 25.726 0 0 1-1.015 6.597 15.223 15.223 0 0 1-6.597 1.015 25.726 25.726 0 0 1-6.597-1.015 15.223 15.223 0 0 1-1.015-6.597 25.726 25.726 0 0 1 1.015-6.597 15.223 15.223 0 0 1 6.597-1.015 25.726 25.726 0 0 1 6.597 1.015 29.684 29.684 0 0 1 1.015 6.597z" fill="#FF4F00" />
          </svg>
        );
      case "Housing":
        return (
          <svg viewBox="0 0 100 100" className="size-3.5 shrink-0 select-none">
            <path d="M 50,12 L 92,54 L 78,68 L 50,40 L 22,68 L 8,54 Z" fill="#FC2A47" />
            <path d="M 50,46 L 76,72 L 62,86 L 50,74 L 38,86 L 24,72 Z" fill="#FC2A47" opacity="0.85" />
          </svg>
        );
      case "99acres":
        return (
          <svg viewBox="0 0 100 100" className="size-3.5 shrink-0 select-none">
            <rect x="5" y="5" width="90" height="90" rx="14" fill="#0054A6" />
            <text x="50" y="52" textAnchor="middle" fill="#FFFFFF" fontSize="42" fontWeight="900" fontFamily="system-ui, sans-serif">99</text>
            <text x="50" y="80" textAnchor="middle" fill="#FFD54F" fontSize="16" fontWeight="bold" fontFamily="system-ui, sans-serif" letterSpacing="0.5">ACRES</text>
          </svg>
        );
      case "MagicBricks":
        return (
          <svg viewBox="0 0 100 100" className="size-3.5 shrink-0 select-none">
            <rect x="5" y="5" width="90" height="90" rx="12" fill="#D32F2F" />
            <path d="M 50 20 L 80 45 L 80 80 L 20 80 L 20 45 Z" fill="none" stroke="#FFFFFF" strokeWidth="6" strokeLinejoin="round" />
            <line x1="20" y1="50" x2="80" y2="50" stroke="#FFFFFF" strokeWidth="4" />
            <line x1="20" y1="65" x2="80" y2="65" stroke="#FFFFFF" strokeWidth="4" />
            <line x1="38" y1="50" x2="38" y2="65" stroke="#FFFFFF" strokeWidth="4" />
            <line x1="62" y1="50" x2="62" y2="65" stroke="#FFFFFF" strokeWidth="4" />
            <line x1="50" y1="65" x2="50" y2="80" stroke="#FFFFFF" strokeWidth="4" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" className="size-3.5 stroke-primary fill-none" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4l3 3" />
          </svg>
        );
    }
  };

  const [liveLog, setLiveLog] = useState([
    { id: 1, title: "Facebook Lead Received", time: "2 sec ago", desc: "Aman Gupta (Score: 92) auto routed", platform: "Facebook", type: "success" },
    { id: 2, title: "IndiaMART Inquiry Synced", time: "45 sec ago", desc: "Premium catalog bulk request mapped", platform: "IndiaMART", type: "success" },
    { id: 3, title: "WhatsApp Message Logged", time: "1 min ago", desc: "Template confirmation sent to Priya", platform: "WhatsApp", type: "success" },
    { id: 4, title: "Gmail Email Logged", time: "2 min ago", desc: "Follow-up conversation auto captured", platform: "Gmail", type: "success" },
    { id: 5, title: "Website Form Submitted", time: "4 min ago", desc: "Demo request from Vertex Inc. sync", platform: "Website", type: "success" },
  ]);

  const sectionRef = useRef<HTMLDivElement>(null);

  // Live simulation: dynamically rotate logs every 8 seconds
  useEffect(() => {
    const logs = [
      { title: "Zapier Task Triggered", desc: "Pushed conversion state to Slack", platform: "Zapier", type: "info" },
      { title: "Housing.com Lead Synced", desc: "Buyer query for Sector 62 mapped", platform: "Housing", type: "success" },
      { title: "99acres Callback Scheduled", desc: "Logged call registration: Rohan Sharma", platform: "99acres", type: "success" },
      { title: "MagicBricks Sync Active", desc: "Buyer inquiries ingested to sales reps", platform: "MagicBricks", type: "success" },
    ];

    const timer = setInterval(() => {
      const randomLog = logs[Math.floor(Math.random() * logs.length)];
      setLiveLog((prev) => [
        {
          id: Date.now(),
          title: randomLog.title,
          time: "Just now",
          desc: randomLog.desc,
          platform: randomLog.platform,
          type: randomLog.type,
        },
        ...prev.slice(0, 4),
      ]);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Reveal network diagram
      gsap.from(".network-diagram-trigger", {
        scrollTrigger: {
          trigger: ".network-diagram-trigger",
          start: "top 80%",
        },
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      // 2. Stagger reveal connector cards
      gsap.from(".connector-card-item", {
        scrollTrigger: {
          trigger: ".connector-grid-trigger",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: "power2.out",
      });

      // 3. Stagger reveal workflow steps
      gsap.from(".integration-workflow-node", {
        scrollTrigger: {
          trigger: ".integration-workflow-trigger",
          start: "top 85%",
        },
        scale: 0.9,
        opacity: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: "back.out(1.5)",
      });

      // 4. Stagger reveal benefits cards
      gsap.from(".integration-benefit-card", {
        scrollTrigger: {
          trigger: ".integration-benefits-trigger",
          start: "top 85%",
        },
        y: 35,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const categories = ["All", "Lead Sources", "Communication", "Data", "Automation", "Website"];

  const connectors = [
    {
      name: "Facebook Lead Ads",
      category: "Lead Sources",
      connectionType: "Webhook",
      statusText: "Connected",
      connected: true,
      description: "Direct instant sync from Facebook Forms. Auto routing enabled.",
      icon: (
        <svg viewBox="0 0 256 256" className="size-5 shrink-0 select-none">
          <path d="M256,128 C256,57.3075 198.6925,0 128,0 C57.3075,0 0,57.3075 0,128 C0,191.8885 46.80775,244.8425 108,254.445 L108,165 L75.5,165 L75.5,128 L108,128 L108,99.8 C108,67.72 127.1095,50 156.3475,50 C170.35175,50 185,52.5 185,52.5 L185,84 L168.8595,84 C152.95875,84 148,93.86675 148,103.98925 L148,128 L183.5,128 L177.825,165 L148,165 L148,254.445 C209.19225,244.8425 256,191.8885 256,128" fill="#1877F2" />
          <path d="M177.825,165 L183.5,128 L148,128 L148,103.98925 C148,93.86675 152.95875,84 168.8595,84 L185,84 L185,52.5 C185,52.5 170.35175,50 156.3475,50 C127.1095,50 108,67.72 108,99.8 L108,128 L75.5,128 L75.5,165 L108,165 L108,254.445 C114.51675,255.4675 121.196,256 128,256 C134.804,256 141.48325,255.4675 148,254.445 L148,165 L177.825,165" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      name: "IndiaMART Connector",
      category: "Lead Sources",
      connectionType: "API Sync",
      statusText: "Connected",
      connected: true,
      description: "Maps catalog bulk trade inquiries directly into active lead stages.",
      icon: (
        <svg viewBox="0 0 100 100" className="size-5 shrink-0 select-none">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#E2E8F0" strokeWidth="2" opacity="0.1" />
          <path d="M 50,5 A 45,45 0 0,1 95,50 L 50,50 Z" fill="#FF8A1D" />
          <path d="M 95,50 A 45,45 0 0,1 50,95 L 50,50 Z" fill="#007AFF" />
          <path d="M 50,95 A 45,45 0 0,1 5,50 L 50,50 Z" fill="#25D366" />
          <path d="M 5,50 A 45,45 0 0,1 50,5 L 50,50 Z" fill="#FFC857" />
          <circle cx="50" cy="50" r="25" fill="#161C29" />
          <text x="50" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="900" fontFamily="system-ui, sans-serif">iM</text>
        </svg>
      ),
    },
    {
      name: "Housing.com Portal",
      category: "Lead Sources",
      connectionType: "Webhook",
      statusText: "Connected",
      connected: true,
      description: "Sync direct customer inquiries from real estate listings automatically.",
      icon: (
        <svg viewBox="0 0 100 100" className="size-5 shrink-0 select-none">
          <path d="M 50,12 L 92,54 L 78,68 L 50,40 L 22,68 L 8,54 Z" fill="#FC2A47" />
          <path d="M 50,46 L 76,72 L 62,86 L 50,74 L 38,86 L 24,72 Z" fill="#FC2A47" opacity="0.85" />
        </svg>
      ),
    },
    {
      name: "99acres Portal",
      category: "Lead Sources",
      connectionType: "API Sync",
      statusText: "Connected",
      connected: true,
      description: "Bridge property customer logs, leads, and callbacks in real-time.",
      icon: (
        <svg viewBox="0 0 100 100" className="size-5 shrink-0 select-none">
          <rect x="5" y="5" width="90" height="90" rx="14" fill="#0054A6" />
          <text x="50" y="52" textAnchor="middle" fill="#FFFFFF" fontSize="42" fontWeight="900" fontFamily="system-ui, sans-serif">99</text>
          <text x="50" y="80" textAnchor="middle" fill="#FFD54F" fontSize="16" fontWeight="bold" fontFamily="system-ui, sans-serif" letterSpacing="0.5">ACRES</text>
        </svg>
      ),
    },
    {
      name: "MagicBricks Sync",
      category: "Lead Sources",
      connectionType: "API Sync",
      statusText: "Connected",
      connected: true,
      description: "Automate buyer inquiry alerts directly into active lead pipelines.",
      icon: (
        <svg viewBox="0 0 100 100" className="size-5 shrink-0 select-none">
          <rect x="5" y="5" width="90" height="90" rx="12" fill="#D32F2F" />
          <path d="M 50 20 L 80 45 L 80 80 L 20 80 L 20 45 Z" fill="none" stroke="#FFFFFF" strokeWidth="6" strokeLinejoin="round" />
          <line x1="20" y1="50" x2="80" y2="50" stroke="#FFFFFF" strokeWidth="4" />
          <line x1="20" y1="65" x2="80" y2="65" stroke="#FFFFFF" strokeWidth="4" />
          <line x1="38" y1="50" x2="38" y2="65" stroke="#FFFFFF" strokeWidth="4" />
          <line x1="62" y1="50" x2="62" y2="65" stroke="#FFFFFF" strokeWidth="4" />
          <line x1="50" y1="65" x2="50" y2="80" stroke="#FFFFFF" strokeWidth="4" />
        </svg>
      ),
    },
    {
      name: "WhatsApp Business",
      category: "Communication",
      connectionType: "Real-Time",
      statusText: "Syncing",
      connected: true,
      description: "Automate messaging, auto-responses, and updates to client profiles.",
      icon: (
        <svg viewBox="0 0 24 24" className="size-5 shrink-0 select-none fill-[#25D366]">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
    },
    {
      name: "Gmail Business",
      category: "Communication",
      connectionType: "API Sync",
      statusText: "Connected",
      connected: true,
      description: "Track incoming operations emails directly inside client logs.",
      icon: (
        <svg viewBox="0 0 256 193" className="size-5 shrink-0 select-none">
          <path d="M58.1818182,192.049515 L58.1818182,93.1404244 L27.5066233,65.0770089 L0,49.5040608 L0,174.59497 C0,184.253152 7.82545455,192.049515 17.4545455,192.049515 L58.1818182,192.049515 Z" fill="#4285F4" />
          <path d="M197.818182,192.049515 L238.545455,192.049515 C248.203636,192.049515 256,184.224061 256,174.59497 L256,49.5040608 L224.844415,67.3422767 L197.818182,93.1404244 L197.818182,192.049515 Z" fill="#34A853" />
          <polygon fill="#EA4335" points="58.1818182 93.1404244 54.0077618 54.4932827 58.1818182 17.5040608 128 69.8676972 197.818182 17.5040608 202.487488 52.4960089 197.818182 93.1404244 128 145.504061" />
          <path d="M197.818182,17.5040608 L197.818182,93.1404244 L256,49.5040608 L256,26.2313335 C256,4.64587897 231.36,-7.65957557 214.109091,5.28587897 L197.818182,17.5040608 Z" fill="#FBBC04" />
          <path d="M0,49.5040608 L26.7588051,69.5731646 L58.1818182,93.1404244 L58.1818182,17.5040608 L41.8909091,5.28587897 C24.6109091,-7.65957557 0,4.64587897 0,26.2313335 L0,49.5040608 Z" fill="#C5221F" />
        </svg>
      ),
    },
    {
      name: "Google Sheets",
      category: "Data",
      connectionType: "Real-Time",
      statusText: "Connected",
      connected: true,
      description: "Auto-export leads spreadsheet rows into active workspace stages.",
      icon: (
        <svg viewBox="0 0 24 24" className="size-5 shrink-0 select-none fill-[#0F9D58]">
          <path d="M11.318 12.545H7.91v-1.909h3.41v1.91zM14.728 0v6h6l-6-6zm1.363 10.636h-3.41v1.91h3.41v-1.91zm0 3.273h-3.41v1.91h3.41v-1.91zM20.727 6.5v15.864c0 .904-.732 1.636-1.636 1.636H4.909a1.636 1.636 0 0 1-1.636-1.636V1.636C3.273.732 4.005 0 4.909 0h9.318v6.5h6.5zm-3.273 2.773H6.545v7.909h10.91v-7.91zm-6.136 4.636H7.91v1.91h3.41v-1.91z" />
        </svg>
      ),
    },
    {
      name: "Zapier",
      category: "Automation",
      connectionType: "Webhook",
      statusText: "Connected",
      connected: true,
      description: "Connect to 5,000+ business applications with zero manual setup.",
      icon: (
        <svg viewBox="0 0 64 64" className="size-5 shrink-0 select-none">
          <path d="M63.207 26.418H44.432l13.193-13.193c-1.015-1.522-2.03-2.537-3.045-4.06a29.025 29.025 0 0 1-4.059-3.552L37.33 18.807V.54a17.252 17.252 0 0 0-5.074-.507A15.629 15.629 0 0 0 27.18.54v18.775l-13.7-13.7A13.7 13.7 0 0 0 9.42 9.166c-1.015 1.522-2.537 2.537-3.552 4.06L19.06 26.418H.794l-.507 5.074a15.629 15.629 0 0 0 .507 5.074H19.57l-13.7 13.7a27.198 27.198 0 0 0 7.611 7.611l13.193-13.193V63.46a17.252 17.252 0 0 0 5.074.507 15.629 15.629 0 0 0 5.074-.507V44.686L50.014 57.88a13.7 13.7 0 0 0 4.059-3.552 29.025 29.025 0 0 0 3.552-4.059L44.432 37.074h18.775A17.252 17.252 0 0 0 63.715 32a19.028 19.028 0 0 0-.507-5.582zm-23.342 5.074a25.726 25.726 0 0 1-1.015 6.597 15.223 15.223 0 0 1-6.597 1.015 25.726 25.726 0 0 1-6.597-1.015 15.223 15.223 0 0 1-1.015-6.597 25.726 25.726 0 0 1 1.015-6.597 15.223 15.223 0 0 1 6.597-1.015 25.726 25.726 0 0 1 6.597 1.015 29.684 29.684 0 0 1 1.015 6.597z" fill="#FF4F00" />
        </svg>
      ),
    },
    {
      name: "Webhooks console",
      category: "Automation",
      connectionType: "Real-Time",
      statusText: "Connected",
      connected: true,
      description: "Ingest custom payloads directly with standard REST webhooks.",
      icon: (
        <svg viewBox="0 0 24 24" className="size-5 shrink-0 select-none" fill="none" stroke="#FF8A1D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4h-1" />
          <path d="M6 8H5a4 4 0 0 0-4 4v1a4 4 0 0 0 4 4h1" />
          <rect x="6" y="6" width="12" height="12" rx="2" fill="rgba(255,138,29,0.08)" />
          <line x1="10" y1="12" x2="14" y2="12" />
        </svg>
      ),
    },
    {
      name: "Website Forms",
      category: "Website",
      connectionType: "Webhook",
      statusText: "Connected",
      connected: true,
      description: "Capture demo inquiries and registrations automatically.",
      icon: (
        <svg viewBox="0 0 24 24" className="size-5 shrink-0 select-none" fill="none" stroke="#5DA8FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="7" y1="14" x2="13" y2="14" />
          <line x1="7" y1="17" x2="17" y2="17" />
        </svg>
      ),
    },
  ];

  const filteredConnectors = selectedCategory === "All"
    ? connectors
    : connectors.filter((c) => c.category === selectedCategory);

  const workflowSteps = [
    { num: "01", name: "Lead Captured", desc: "Facebook Ads or website Form syncs" },
    { num: "02", name: "Lead Scored", desc: "Auto qualifying metrics checked" },
    { num: "03", name: "Auto Routed", desc: "Assigns sales reps immediately" },
    { num: "04", name: "Reminder Sent", desc: "WhatsApp confirmation scheduled" },
    { num: "05", name: "Invoice Sent", desc: "Generates accounts balance automatically" },
    { num: "06", name: "Converted", desc: "Logged to CRM performance charts" },
  ];

  const benefits = [
    { title: "Real-Time Synchronization", desc: "Zero delay. incoming leads are mapped and routed to reps instantly.", icon: <Clock className="size-5 text-primary" /> },
    { title: "Automatic Lead Routing", desc: "Auto-routes inquiries based on scoring and shift availability.", icon: <TrendingUp className="size-5 text-primary" /> },
    { title: "Zero Manual Copying", desc: "Ditch data entry. Mapped connections copy leads with 100% precision.", icon: <Zap className="size-5 text-primary" /> },
    { title: "Unified CRM Database", desc: "Keeps conversation histories, emails, invoices, and logs in one block.", icon: <Database className="size-5 text-primary" /> },
    { title: "Instant WhatsApp Alerts", desc: "Send notifications and follow-up templates dynamically to client screens.", icon: <Mail className="size-5 text-primary" /> },
    { title: "Operational Flow sync", desc: "Aligns your sales staff, HR roster checklists, and finance metrics.", icon: <Activity className="size-5 text-primary" /> },
  ];

  return (
    <Section
      id="integrations"
      className="relative overflow-hidden py-24 lg:py-32 bg-[#0A0D14]"
    >
      {/* Background Decorators */}
      <BackgroundGrid />
      <div className="absolute top-1/4 right-1/4 -translate-y-1/2 -z-10">
        <GradientBlob color="bg-primary" size="w-[500px] h-[500px]" className="opacity-[0.04]" />
      </div>

      <div ref={sectionRef}>
        <Container>
        {/* Header Block */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <SectionHeader
            label="Universal Connectors"
            title="Unified Pipeline Ingestion. Connected to All Channels."
            description="FlowCRM links with lead portals, communications networks, cloud sheets, and webhook triggers to pull your customer activities into one command dashboard."
          />
        </div>

        {/* 1. Symmetrical Network Node Centerpiece & Activity Feed */}
        <div className="network-diagram-trigger grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-24 relative">
          
          {/* Symmetrical Network Node SVG Diagram (8 Columns) */}
          <div className="lg:col-span-8 relative h-[380px] md:h-[450px] bg-[#161C29]/40 border border-white/5 rounded-dashboard overflow-hidden w-full">
            
            {/* Ambient Lighting background mesh */}
            <div className="absolute inset-0 bg-[#0A0D14]/80 opacity-60 -z-20" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[180px] bg-primary/10 rounded-full filter blur-[40px] -z-10" />

            {/* SVG Connector Lines and animateMotion Particles */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.02)" />
                  <stop offset="100%" stopColor="rgba(255,138,29,0.15)" />
                </linearGradient>
              </defs>
              
              {/* Path 1: Facebook to FlowCRM */}
              <path id="path1" d="M 15 18 L 50 50" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle r="1.5" fill="#FF8A1D" filter="drop-shadow(0 0 2px #FF8A1D)">
                <animateMotion dur="2.8s" repeatCount="indefinite" path="M 15 18 L 50 50" />
              </circle>
              <circle r="1" fill="#FFFFFF" opacity="0.6">
                <animateMotion dur="4.5s" repeatCount="indefinite" path="M 15 18 L 50 50" />
              </circle>

              {/* Path 2: WhatsApp to FlowCRM */}
              <path id="path2" d="M 10 50 L 50 50" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle r="1.5" fill="#FF8A1D" filter="drop-shadow(0 0 2px #FF8A1D)">
                <animateMotion dur="2.2s" repeatCount="indefinite" path="M 10 50 L 50 50" />
              </circle>
              <circle r="1" fill="#FFFFFF" opacity="0.6">
                <animateMotion dur="3.8s" repeatCount="indefinite" path="M 10 50 L 50 50" />
              </circle>

              {/* Path 3: Gmail to FlowCRM */}
              <path id="path3" d="M 15 82 L 50 50" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle r="1.5" fill="#FF8A1D" filter="drop-shadow(0 0 2px #FF8A1D)">
                <animateMotion dur="3.1s" repeatCount="indefinite" path="M 15 82 L 50 50" />
              </circle>
              <circle r="1" fill="#FFFFFF" opacity="0.6">
                <animateMotion dur="5.0s" repeatCount="indefinite" path="M 15 82 L 50 50" />
              </circle>

              {/* Path 4: IndiaMART to FlowCRM */}
              <path id="path4" d="M 85 18 L 50 50" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle r="1.5" fill="#FF8A1D" filter="drop-shadow(0 0 2px #FF8A1D)">
                <animateMotion dur="2.5s" repeatCount="indefinite" path="M 85 18 L 50 50" />
              </circle>
              <circle r="1" fill="#FFFFFF" opacity="0.6">
                <animateMotion dur="4.2s" repeatCount="indefinite" path="M 85 18 L 50 50" />
              </circle>

              {/* Path 5: Google Sheets to FlowCRM */}
              <path id="path5" d="M 90 50 L 50 50" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle r="1.5" fill="#FF8A1D" filter="drop-shadow(0 0 2px #FF8A1D)">
                <animateMotion dur="3s" repeatCount="indefinite" path="M 90 50 L 50 50" />
              </circle>
              <circle r="1" fill="#FFFFFF" opacity="0.6">
                <animateMotion dur="4.8s" repeatCount="indefinite" path="M 90 50 L 50 50" />
              </circle>

              {/* Path 6: Zapier to FlowCRM */}
              <path id="path6" d="M 85 82 L 50 50" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle r="1.5" fill="#FF8A1D" filter="drop-shadow(0 0 2px #FF8A1D)">
                <animateMotion dur="2.6s" repeatCount="indefinite" path="M 85 82 L 50 50" />
              </circle>
              <circle r="1" fill="#FFFFFF" opacity="0.6">
                <animateMotion dur="4.0s" repeatCount="indefinite" path="M 85 82 L 50 50" />
              </circle>
            </svg>

            {/* Central Node: FlowCRM Core */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-28 rounded-full bg-[#161C29]/85 backdrop-blur-md border-2 border-primary/40 flex flex-col items-center justify-center text-center shadow-[0_0_40px_rgba(255,138,29,0.25)] z-30 select-none group">
              <div className="absolute inset-0 rounded-full bg-primary/5 animate-pulse" />
              <span className="font-extrabold text-xs text-white tracking-widest font-mono uppercase">FlowCRM</span>
              <span className="text-[7px] text-[#42D392] uppercase font-bold tracking-widest mt-1.5 flex items-center gap-1 justify-center">
                <span className="size-1 bg-[#42D392] rounded-full animate-ping" /> ALL CONNECTED
              </span>
            </div>
            
            {/* Symmetrical rings */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-40 rounded-full border border-primary/10 animate-ping opacity-70 pointer-events-none" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-48 rounded-full border border-primary/5 pointer-events-none" style={{ animation: "spin 25s linear infinite" }} />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-60 rounded-full border border-primary/5 pointer-events-none" />

            {/* Outer Symmetrical Nodes Layout */}
            {/* Left Column Brand Nodes */}
            <div className="absolute left-[10%] top-[10%] bg-[#1A2030] border border-white/10 rounded-card p-2 flex items-center gap-2.5 hover:scale-[1.05] transition-transform duration-300 pointer-events-auto">
              <div className="size-8 bg-[#1877F2]/10 border border-[#1877F2]/20 flex items-center justify-center rounded-lg">
                <svg viewBox="0 0 256 256" className="size-5 shrink-0 select-none">
                  <path d="M256,128 C256,57.3075 198.6925,0 128,0 C57.3075,0 0,57.3075 0,128 C0,191.8885 46.80775,244.8425 108,254.445 L108,165 L75.5,165 L75.5,128 L108,128 L108,99.8 C108,67.72 127.1095,50 156.3475,50 C170.35175,50 185,52.5 185,52.5 L185,84 L168.8595,84 C152.95875,84 148,93.86675 148,103.98925 L148,128 L183.5,128 L177.825,165 L148,165 L148,254.445 C209.19225,244.8425 256,191.8885 256,128" fill="#1877F2" />
                  <path d="M177.825,165 L183.5,128 L148,128 L148,103.98925 C148,93.86675 152.95875,84 168.8595,84 L185,84 L185,52.5 C185,52.5 170.35175,50 156.3475,50 C127.1095,50 108,67.72 108,99.8 L108,128 L75.5,128 L75.5,165 L108,165 L108,254.445 C114.51675,255.4675 121.196,256 128,256 C134.804,256 141.48325,255.4675 148,254.445 L148,165 L177.825,165" fill="#FFFFFF" />
                </svg>
              </div>
              <span className="text-[10px] font-semibold text-white tracking-wide">Facebook</span>
            </div>

            <div className="absolute left-[3%] top-1/2 -translate-y-1/2 bg-[#1A2030] border border-white/10 rounded-card p-2 flex items-center gap-2.5 hover:scale-[1.05] transition-transform duration-300 pointer-events-auto">
              <div className="size-8 bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center rounded-lg">
                <svg viewBox="0 0 24 24" className="size-5 shrink-0 select-none fill-[#25D366]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <span className="text-[10px] font-semibold text-white tracking-wide">WhatsApp</span>
            </div>

            <div className="absolute left-[10%] bottom-[10%] bg-[#1A2030] border border-white/10 rounded-card p-2 flex items-center gap-2.5 hover:scale-[1.05] transition-transform duration-300 pointer-events-auto">
              <div className="size-8 bg-[#EA4335]/10 border border-[#EA4335]/20 flex items-center justify-center rounded-lg">
                <svg viewBox="0 0 256 193" className="size-5 shrink-0 select-none">
                  <path d="M58.1818182,192.049515 L58.1818182,93.1404244 L27.5066233,65.0770089 L0,49.5040608 L0,174.59497 C0,184.253152 7.82545455,192.049515 17.4545455,192.049515 L58.1818182,192.049515 Z" fill="#4285F4" />
                  <path d="M197.818182,192.049515 L238.545455,192.049515 C248.203636,192.049515 256,184.224061 256,174.59497 L256,49.5040608 L224.844415,67.3422767 L197.818182,93.1404244 L197.818182,192.049515 Z" fill="#34A853" />
                  <polygon fill="#EA4335" points="58.1818182 93.1404244 54.0077618 54.4932827 58.1818182 17.5040608 128 69.8676972 197.818182 17.5040608 202.487488 52.4960089 197.818182 93.1404244 128 145.504061" />
                  <path d="M197.818182,17.5040608 L197.818182,93.1404244 L256,49.5040608 L256,26.2313335 C256,4.64587897 231.36,-7.65957557 214.109091,5.28587897 L197.818182,17.5040608 Z" fill="#FBBC04" />
                  <path d="M0,49.5040608 L26.7588051,69.5731646 L58.1818182,93.1404244 L58.1818182,17.5040608 L41.8909091,5.28587897 C24.6109091,-7.65957557 0,4.64587897 0,26.2313335 L0,49.5040608 Z" fill="#C5221F" />
                </svg>
              </div>
              <span className="text-[10px] font-semibold text-white tracking-wide">Gmail</span>
            </div>

            {/* Right Column Brand Nodes */}
            <div className="absolute right-[10%] top-[10%] bg-[#1A2030] border border-white/10 rounded-card p-2 flex items-center gap-2.5 hover:scale-[1.05] transition-transform duration-300 pointer-events-auto">
              <div className="size-8 bg-primary/10 border border-primary/20 flex items-center justify-center rounded-lg">
                <svg viewBox="0 0 100 100" className="size-5.5 select-none">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#E2E8F0" strokeWidth="2" opacity="0.1" />
                  <path d="M 50,5 A 45,45 0 0,1 95,50 L 50,50 Z" fill="#FF8A1D" />
                  <path d="M 95,50 A 45,45 0 0,1 50,95 L 50,50 Z" fill="#007AFF" />
                  <path d="M 50,95 A 45,45 0 0,1 5,50 L 50,50 Z" fill="#25D366" />
                  <path d="M 5,50 A 45,45 0 0,1 50,5 L 50,50 Z" fill="#FFC857" />
                  <circle cx="50" cy="50" r="25" fill="#1A2030" />
                  <text x="50" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="900" fontFamily="system-ui, sans-serif">iM</text>
                </svg>
              </div>
              <span className="text-[10px] font-semibold text-white tracking-wide">IndiaMART</span>
            </div>

            <div className="absolute right-[3%] top-1/2 -translate-y-1/2 bg-[#1A2030] border border-white/10 rounded-card p-2 flex items-center gap-2.5 hover:scale-[1.05] transition-transform duration-300 pointer-events-auto">
              <div className="size-8 bg-[#0F9D58]/10 border border-[#0F9D58]/20 flex items-center justify-center rounded-lg">
                <svg viewBox="0 0 24 24" className="size-5 shrink-0 select-none fill-[#0F9D58]">
                  <path d="M11.318 12.545H7.91v-1.909h3.41v1.91zM14.728 0v6h6l-6-6zm1.363 10.636h-3.41v1.91h3.41v-1.91zm0 3.273h-3.41v1.91h3.41v-1.91zM20.727 6.5v15.864c0 .904-.732 1.636-1.636 1.636H4.909a1.636 1.636 0 0 1-1.636-1.636V1.636C3.273.732 4.005 0 4.909 0h9.318v6.5h6.5zm-3.273 2.773H6.545v7.909h10.91v-7.91zm-6.136 4.636H7.91v1.91h3.41v-1.91z" />
                </svg>
              </div>
              <span className="text-[10px] font-semibold text-white tracking-wide">G-Sheets</span>
            </div>

            <div className="absolute right-[10%] bottom-[10%] bg-[#1A2030] border border-white/10 rounded-card p-2 flex items-center gap-2.5 hover:scale-[1.05] transition-transform duration-300 pointer-events-auto">
              <div className="size-8 bg-[#FF4F00]/10 border border-[#FF4F00]/20 flex items-center justify-center rounded-lg">
                <svg viewBox="0 0 64 64" className="size-5 select-none">
                  <path d="M63.207 26.418H44.432l13.193-13.193c-1.015-1.522-2.03-2.537-3.045-4.06a29.025 29.025 0 0 1-4.059-3.552L37.33 18.807V.54a17.252 17.252 0 0 0-5.074-.507A15.629 15.629 0 0 0 27.18.54v18.775l-13.7-13.7A13.7 13.7 0 0 0 9.42 9.166c-1.015 1.522-2.537 2.537-3.552 4.06L19.06 26.418H.794l-.507 5.074a15.629 15.629 0 0 0 .507 5.074H19.57l-13.7 13.7a27.198 27.198 0 0 0 7.611 7.611l13.193-13.193V63.46a17.252 17.252 0 0 0 5.074.507 15.629 15.629 0 0 0 5.074-.507V44.686L50.014 57.88a13.7 13.7 0 0 0 4.059-3.552 29.025 29.025 0 0 0 3.552-4.059L44.432 37.074h18.775A17.252 17.252 0 0 0 63.715 32a19.028 19.028 0 0 0-.507-5.582zm-23.342 5.074a25.726 25.726 0 0 1-1.015 6.597 15.223 15.223 0 0 1-6.597 1.015 25.726 25.726 0 0 1-6.597-1.015 15.223 15.223 0 0 1-1.015-6.597 25.726 25.726 0 0 1 1.015-6.597 15.223 15.223 0 0 1 6.597-1.015 25.726 25.726 0 0 1 6.597 1.015 29.684 29.684 0 0 1 1.015 6.597z" fill="#FF4F00" />
                </svg>
              </div>
              <span className="text-[10px] font-semibold text-white tracking-wide">Zapier</span>
            </div>

          </div>

          {/* Real-Time Activity Feed Logs (4 Columns) */}
          <div className="lg:col-span-4 bg-[#161C29] border border-white/5 rounded-dashboard p-5 flex flex-col gap-4 self-stretch justify-between">
            <div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2.5 mb-4">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Real-Time Ingestion</h4>
                <Badge variant="success" className="text-[8px] h-4">Stream Active</Badge>
              </div>
              
              <div className="flex flex-col gap-4">
                {liveLog.map((log) => (
                  <div key={log.id} className="flex items-start gap-3 relative before:absolute before:left-3.5 before:top-8 before:bottom-0 before:w-px before:bg-white/5 animate-fade-in last:before:hidden">
                    <div className="relative shrink-0">
                      <div className="size-7 bg-[#0A0D14] border border-white/5 rounded-lg flex items-center justify-center">
                        {getPlatformIcon(log.platform)}
                      </div>
                      <span className="absolute -top-0.5 -right-0.5 size-2 bg-[#42D392] rounded-full border border-[#0A0D14] animate-pulse" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] text-white font-semibold leading-none">{log.title}</span>
                        <span className="text-[8px] text-muted-foreground font-mono leading-none">{log.time}</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground mt-0.5 leading-normal">{log.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-[10px] text-muted-foreground border-t border-white/5 pt-3 leading-relaxed">
              Consolidated lead syncing latency checks average <span className="text-primary font-bold">1.4 seconds</span> across webhook channels.
            </div>
          </div>

        </div>

        {/* 2. Interactive Connector Cards List */}
        <div className="mb-24">
          
          {/* Category Select Buttons */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[10px] font-bold uppercase tracking-widest px-4.5 py-2 rounded-full border transition-all duration-300 scale-hover cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-primary to-[#FF9F43] text-white border-primary shadow-[0_0_15px_rgba(255,138,29,0.3)] scale-[1.03]"
                    : "bg-transparent text-muted-foreground border-white/10 hover:border-white/25 hover:text-white hover:scale-[1.02]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Connector Cards Grid */}
          <div className="connector-grid-trigger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredConnectors.map((connector, index) => (
              <div key={index} className="connector-card-item">
                <IntegrationCard
                  name={connector.name}
                  icon={connector.icon}
                  statusText={connector.statusText}
                  connected={connector.connected}
                  description={connector.description}
                  connectionType={connector.connectionType}
                />
              </div>
            ))}
          </div>
        </div>

        {/* 3. Automation Workflow steps */}
        <div className="integration-workflow-trigger text-center mb-24">
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-10">
            <Badge variant="outline" className="text-[9px] font-semibold text-primary border-primary/20 bg-primary/5 uppercase tracking-widest px-3 py-0.5 rounded-full mb-3">Sync Route Pipeline</Badge>
            <h3 className="text-2xl font-bold text-white tracking-tight">Automated Verification Pathway</h3>
            <p className="text-xs text-muted-foreground mt-2">Observe the direct flow of operations from incoming form sync to finalized customer dashboards.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 items-center justify-center relative">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="integration-workflow-node flex flex-col items-center relative">
                <div className="w-full bg-[#161C29] border border-white/5 rounded-card p-4 flex flex-col gap-1.5 text-center shadow-premium group hover:border-primary/20 transition-all duration-200">
                  <span className="text-[10px] font-bold text-primary font-mono">{step.num}</span>
                  <span className="text-xs font-bold text-white group-hover:text-primary transition-colors duration-200">{step.name}</span>
                  <span className="text-[9px] text-muted-foreground leading-tight mt-0.5">{step.desc}</span>
                </div>
                {idx < 5 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-white/10 pointer-events-none select-none">
                    <ArrowRight className="size-3.5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 4. Automation Benefits Grid */}
        <div className="integration-benefits-trigger">
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-white tracking-tight">Enterprise Synchronization Benefits</h3>
            <p className="text-xs text-muted-foreground mt-2">Scale collections, coordinate HR rosters, and track lead conversion rates with compliant synchronization.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="integration-benefit-card">
                <BenefitCard
                  title={benefit.title}
                  description={benefit.desc}
                  icon={benefit.icon}
                />
              </div>
            ))}
          </div>
        </div>

      </Container>
      </div>
    </Section>
  );
}
