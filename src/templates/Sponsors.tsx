import Image from 'next/image';

import { siteContent } from '@/content/siteContent';
import { Section } from '@/layout/Section';

const { sponsors } = siteContent.starterTemplates;
const sponsorRows = [sponsors.items.slice(0, 3), sponsors.items.slice(3, 6)];

const Sponsors = () => (
  <Section title={sponsors.title} description={sponsors.description}>
    <table className="mx-auto border-collapse">
      <tbody>
        {sponsorRows.map((row) => (
          <tr
            key={row.map((sponsor) => sponsor.imageAlt).join('-')}
            className="h-56"
          >
            {row.map((sponsor) => (
              <td
                key={sponsor.imageAlt}
                className="border-2 border-gray-300 p-3"
              >
                <a href={sponsor.href} target="_blank">
                  <Image
                    src={sponsor.image}
                    alt={sponsor.imageAlt}
                    width={260}
                    height={224}
                  />
                </a>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </Section>
);

export { Sponsors };
