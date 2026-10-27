import ambikaLogo from "@/assets/Logos/Website Logo/Ambika.webp";
import doctorSoapLogo from "@/assets/Logos/Website Logo/DoctorSoap.png";
import dreamlandLogo from "@/assets/Logos/Website Logo/Dreamland.png";
import gdGoenkaLogo from "@/assets/Logos/Website Logo/GD Goinka.png";
import growmoreLogo from "@/assets/Logos/Website Logo/Growmore.png";
import hiranandaniLogo from "@/assets/Logos/Website Logo/HouseOfHiraNandini.jpg";
import jeetLogo from "@/assets/Logos/Website Logo/jeet-logo.webp";
import jetLogo from "@/assets/Logos/Website Logo/Jet.jpg";
import kdLogo from "@/assets/Logos/Website Logo/kdlogo.png";
import mantoraLogo from "@/assets/Logos/Website Logo/mantoralogo.png";
import methodistLogo from "@/assets/Logos/Website Logo/Methodist.gif";
import mohaniTeaLogo from "@/assets/Logos/Website Logo/Mohani Tea.webp";
import nirmanLogo from "@/assets/Logos/Website Logo/Nirman.png";
import palomaLogo from "@/assets/Logos/Website Logo/Paloma.jpg";
import protechLogo from "@/assets/Logos/Website Logo/Protrch.jpg";
import psitLogo from "@/assets/Logos/Website Logo/PSIT.jpg";
import radiantLogo from "@/assets/Logos/Website Logo/Radiant.png";
import rsacUpLogo from "@/assets/Logos/Website Logo/RSAUP.png";
import saharaGanjLogo from "@/assets/Logos/Website Logo/Sahara Ganj.png";
import shooliniLogo from "@/assets/Logos/Website Logo/Shoolini.png";
import shreeSanatanLogo from "@/assets/Logos/Website Logo/ShreeSanatam.webp";
import sriSriLogo from "@/assets/Logos/Website Logo/Sri Sri.png";
import stMarysLogo from "@/assets/Logos/Website Logo/St. Mary's Orthodox.jpg";
import superhouseLogo from "@/assets/Logos/Website Logo/superhousegroup.png";
import upsrtcLogo from "@/assets/Logos/Website Logo/UPSRTC.png";
import uttarayanLogo from "@/assets/Logos/Website Logo/Uttarayan.png";

export interface ClientItem {
  name: string;
  logo: string;
  category?: string;
  scale?: string;
}

export const CLIENT_LOGOS: ClientItem[] = [
  { name: "Superhouse Group", logo: superhouseLogo, category: "Conglomerate & Manufacturing", scale: "scale-[1.2]" },
  { name: "UPSRTC", logo: upsrtcLogo, category: "Government & Transport", scale: "scale-[1.1]" },
  { name: "House of Hiranandani", logo: hiranandaniLogo, category: "Real Estate & Infrastructure", scale: "scale-[1.75]" },
  { name: "G.D. Goenka Public School", logo: gdGoenkaLogo, category: "Education", scale: "scale-[1.5]" },
  { name: "Mohani Tea Leaves", logo: mohaniTeaLogo, category: "FMCG & Beverages", scale: "scale-[1.15]" },
  { name: "PSIT Kanpur", logo: psitLogo, category: "Higher Education", scale: "scale-[1.3]" },
  { name: "Sahara Ganj Mall", logo: saharaGanjLogo, category: "Retail & Commercial", scale: "scale-[1.35]" },
  { name: "RSAC-UP", logo: rsacUpLogo, category: "Government & Research", scale: "scale-[1.15]" },
  { name: "JET Knitwear Ltd.", logo: jetLogo, category: "Textiles & Apparel", scale: "scale-[1.3]" },
  { name: "Growmore International Ltd.", logo: growmoreLogo, category: "Manufacturing & Exports", scale: "scale-[1.3]" },
  { name: "Doctor Soap", logo: doctorSoapLogo, category: "FMCG", scale: "scale-[1.25]" },
  { name: "Mantora Oils", logo: mantoraLogo, category: "Manufacturing & FMCG", scale: "scale-[1.4]" },
  { name: "Shoolini University", logo: shooliniLogo, category: "Education", scale: "scale-[1.25]" },
  { name: "Sri Sri Tattva", logo: sriSriLogo, category: "Wellness & FMCG", scale: "scale-[1.25]" },
  { name: "St. Mary's Orthodox School", logo: stMarysLogo, category: "Education", scale: "scale-[1.35]" },
  { name: "Methodist High School", logo: methodistLogo, category: "Education", scale: "scale-[1.3]" },
  { name: "Ambika Group", logo: ambikaLogo, category: "Commercial", scale: "scale-[1.4]" },
  { name: "Dreamland", logo: dreamlandLogo, category: "Retail & Services", scale: "scale-[1.25]" },
  { name: "Jeet", logo: jeetLogo, category: "Manufacturing", scale: "scale-[1.35]" },
  { name: "KD Group", logo: kdLogo, category: "Enterprise", scale: "scale-[1.3]" },
  { name: "Nirman", logo: nirmanLogo, category: "Infrastructure", scale: "scale-[1.45]" },
  { name: "Paloma", logo: palomaLogo, category: "Hospitality & Retail", scale: "scale-[1.7]" },
  { name: "Protech", logo: protechLogo, category: "Engineering", scale: "scale-[1.45]" },
  { name: "Radiant", logo: radiantLogo, category: "Services", scale: "scale-[1.1]" },
  { name: "Shree Sanatan", logo: shreeSanatanLogo, category: "Enterprise", scale: "scale-[1.3]" },
  { name: "Uttarayan", logo: uttarayanLogo, category: "Art & Culture", scale: "scale-[1.35]" },
];
