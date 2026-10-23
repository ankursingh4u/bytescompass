import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Photo Credits",
  description: "Attribution for photographs used across BytesCompass, sourced from Wikimedia Commons.",
  alternates: { canonical: "/photo-credits" },
};

const credits = [
  {
    file: "laptops.jpg",
    title: "Laptop on desk, book stacks",
    author: "Freddie Marriage (Unsplash)",
    license: "CC0",
    source: "https://commons.wikimedia.org/wiki/File:Laptop_on_desk_book_stacks_(Unsplash).jpg",
  },
  {
    file: "laptops-2.jpg",
    title: "Keycaps (LX20 laptop)",
    author: "tony_duell",
    license: "CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Keycaps_(LX20_laptop).jpg",
  },
  {
    file: "laptops-3.jpg",
    title: "Sony Xperia Z4 Tablet with Bluetooth keyboard",
    author: "Maurizio Pesce",
    license: "CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Sony_Xperia_Z4_Tablet_with_Bluetooth_keyboard_(16948902320).jpg",
  },
  {
    file: "laptops-4.jpg",
    title: "The New Office Backbone",
    author: "cogdogblog",
    license: "CC0",
    source: "https://commons.wikimedia.org/wiki/File:The_New_Office_Backbone_(3175512677).jpg",
  },
  {
    file: "phones.jpg",
    title: "Mobile phone power charging USB cable connectors",
    author: "Huwanglaimtangms",
    license: "CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:HK_mobile_Iphone_power_charging_USB_cable_connectors_Sept-2013_One_to_Many_n_Samsung.JPG",
  },
  {
    file: "phones-2.jpg",
    title: "Foldable smartphone (Android Marshmallow)",
    author: "Wikimedia Commons contributor",
    license: "CC BY 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Foldable_smartphone_(Android_Marshmallow).jpg",
  },
  {
    file: "audio.jpg",
    title: "Wireless earbud vendor at Shenzhen Huaqiang Electronic World",
    author: "Benlisquare",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Wireless_earbud_vendor_at_Shenzhen_Huaqiang_Electronic_World.jpg",
  },
  {
    file: "audio-2.jpg",
    title: "Bose QuietComfort 25 acoustic noise cancelling headphones with carry case",
    author: "Florian Fuchs",
    license: "CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Bose_QuietComfort_25_Acoustic_Noise_Cancelling_Headphones_with_Carry_Case.jpg",
  },
  {
    file: "audio-3.jpg",
    title: "Audio switch box with volume knobs",
    author: "Kevin B 3",
    license: "CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Audio_SwitchBoxTwo_(With_Volume_Knobs)_(2011-10-08_by_Kevin_B_3).jpg",
  },
  {
    file: "smarthome.jpg",
    title: "Amazon Echo Plus",
    author: "Asivechowdhury",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Amazon_Echo_Plus_02.jpg",
  },
  {
    file: "smarthome-2.jpg",
    title: "Google Home Hub on table",
    author: "Y2kcrazyjoker4",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Google_Home_Hub_on_table.jpg",
  },
  {
    file: "networking.jpg",
    title: "Ruckus Wireless ZoneFlex T710 outdoor access point antennas",
    author: "Sergklim",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:%D0%90%D0%BD%D1%82%D0%B5%D0%BD%D0%B8_Ruckus_Wireless_ZoneFlex_T710,_outdoor_access_point.jpg",
  },
  {
    file: "networking-2.jpg",
    title: "Mesh Wi-Fi system router",
    author: "Haydn Blackey",
    license: "CC BY-SA 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Mesh_WiFi_System_Router_(50551414866).jpg",
  },
  {
    file: "networking-3.jpg",
    title: "Peabird Ethernet switch",
    author: "Syced",
    license: "CC0",
    source: "https://commons.wikimedia.org/wiki/File:Peabird_Ethernet_switch_in_2003.jpg",
  },
  {
    file: "monitors.jpg",
    title: "Desk setup",
    author: "Luke Chesser (Unsplash)",
    license: "CC0",
    source: "https://commons.wikimedia.org/wiki/File:Desk_Setup_(Unsplash).jpg",
  },
  {
    file: "monitors-2.jpg",
    title: "Close-up display",
    author: "Wikidevnl",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Close-up_Display_Writer.JPG",
  },
  {
    file: "accessories.jpg",
    title: "Mechanical keyboard caps at Comic Fiesta 2024",
    author: "PeaceSeekers",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Mechanical_keyboard_caps_at_Comic_Fiesta_2024.jpg",
  },
  {
    file: "accessories-2.png",
    title: "USB-C connector and cable",
    author: "Deergirl",
    license: "CC0",
    source: "https://commons.wikimedia.org/wiki/File:USB-C-connector-and-cable.png",
  },
];

export default function PhotoCreditsPage() {
  return (
    <LegalLayout title="Photo Credits" updated="October 23, 2026">
      <p>
        Category and card photography across BytesCompass is sourced from Wikimedia Commons
        and used under the license each photographer chose. No photo on this site is presented
        as a product we have personally tested unless explicitly stated in that article&apos;s
        product card — these are representative category photos, not product endorsements.
      </p>

      <div className="not-prose mt-6 overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <thead>
            <tr className="bg-surface text-left">
              <th className="border-b border-border px-4 py-3 font-semibold text-muted">Photo</th>
              <th className="border-b border-border px-4 py-3 font-semibold text-muted">Author</th>
              <th className="border-b border-border px-4 py-3 font-semibold text-muted">License</th>
              <th className="border-b border-border px-4 py-3 font-semibold text-muted">Source</th>
            </tr>
          </thead>
          <tbody>
            {credits.map((c) => (
              <tr key={c.file}>
                <td className="border-b border-border px-4 py-3 text-foreground/90">{c.title}</td>
                <td className="border-b border-border px-4 py-3 text-foreground/90">{c.author}</td>
                <td className="border-b border-border px-4 py-3 text-foreground/90">{c.license}</td>
                <td className="border-b border-border px-4 py-3">
                  <a href={c.source} target="_blank" rel="noopener noreferrer" className="text-accent underline hover:text-accent-dark">
                    Wikimedia Commons
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </LegalLayout>
  );
}
