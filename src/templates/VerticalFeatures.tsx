import { siteContent } from '../content/siteContent';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const { verticalFeatures } = siteContent.starterTemplates;

const VerticalFeatures = () => (
  <Section
    title={verticalFeatures.title}
    description={verticalFeatures.description}
  >
    {verticalFeatures.items.map((feature) => (
      <VerticalFeatureRow
        key={`${feature.title}-${feature.image}`}
        title={feature.title}
        description={feature.description}
        image={feature.image}
        imageAlt={feature.imageAlt}
        reverse={feature.reverse}
      />
    ))}
  </Section>
);

export { VerticalFeatures };
