import Link from 'next/link';
import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import { useState } from 'react';

import { AppConfig } from '../utils/AppConfig';

const joinClassNames = (...classNames: Array<string | undefined>) =>
  classNames.filter(Boolean).join(' ');

const mergeStyles = (
  baseStyle: CSSProperties,
  overrideStyle?: CSSProperties,
) => ({
  ...baseStyle,
  ...overrideStyle,
});

const themeVariables = {
  '--theme-bg': AppConfig.theme.background,
  '--theme-bg-soft': AppConfig.theme.backgroundSoft,
  '--theme-bg-muted': AppConfig.theme.backgroundMuted,
  '--theme-surface': AppConfig.theme.surface,
  '--theme-surface-alt': AppConfig.theme.surfaceAlt,
  '--theme-surface-strong': AppConfig.theme.surfaceStrong,
  '--theme-border': AppConfig.theme.border,
  '--theme-text': AppConfig.theme.text,
  '--theme-text-muted': AppConfig.theme.textMuted,
  '--theme-text-soft': AppConfig.theme.textSoft,
  '--theme-accent': AppConfig.theme.accent,
  '--theme-accent-soft': AppConfig.theme.accentSoft,
  '--theme-accent-strong': AppConfig.theme.accentStrong,
  '--theme-accent-warm': AppConfig.theme.accentWarm,
  '--theme-accent-warm-soft': AppConfig.theme.accentWarmSoft,
  '--theme-selection': AppConfig.theme.selection,
} as CSSProperties;

const themeStyles = {
  shell: {
    ...themeVariables,
    background:
      'linear-gradient(90deg, rgba(0, 97, 128, 0.05) 1px, transparent 1px), linear-gradient(180deg, rgba(0, 97, 128, 0.05) 1px, transparent 1px), radial-gradient(circle at top right, rgba(255, 239, 161, 0.5), transparent 24%), radial-gradient(circle at top left, rgba(253, 172, 236, 0.28), transparent 30%), var(--theme-bg)',
    backgroundSize: '40px 40px, 40px 40px, auto, auto, auto',
    color: 'var(--theme-text)',
  },
  header: {
    background: 'color-mix(in srgb, var(--theme-bg) 88%, white 12%)',
    borderColor: 'var(--theme-border)',
  },
  footer: {
    background: 'var(--theme-bg-soft)',
    borderColor: 'var(--theme-border)',
  },
  divider: {
    borderColor: 'var(--theme-border)',
  },
  heading: {
    color: 'var(--theme-text)',
    fontFamily: 'Quicksand, "Plus Jakarta Sans", sans-serif',
    letterSpacing: 0,
  },
  strongHeading: {
    color: 'var(--theme-text-soft)',
    fontFamily: 'Quicksand, "Plus Jakarta Sans", sans-serif',
    letterSpacing: 0,
  },
  body: {
    color: 'var(--theme-text-muted)',
  },
  accent: {
    color: 'var(--theme-accent)',
    fontFamily: '"Space Mono", monospace',
  },
  warmAccent: {
    color: 'var(--theme-accent-warm)',
  },
  strongBody: {
    color:
      'color-mix(in srgb, var(--theme-text-soft) 82%, var(--theme-accent-soft) 18%)',
  },
  highlight: {
    background:
      'linear-gradient(transparent 34%, var(--theme-selection) 34% 86%, transparent 86%)',
    color: 'var(--theme-text)',
  },
  card: {
    position: 'relative',
    background: 'var(--theme-surface)',
    borderColor: 'var(--theme-border)',
    borderRadius: '1rem',
    borderStyle: 'solid',
    borderWidth: 2,
    boxShadow: '6px 6px 0 var(--theme-accent-warm-soft)',
    color: 'var(--theme-text)',
  },
  softCard: {
    background: 'var(--theme-bg-soft)',
    borderColor: 'var(--theme-border)',
    borderRadius: '1rem',
    borderStyle: 'solid',
    borderWidth: 2,
    boxShadow: '4px 4px 0 var(--theme-selection)',
  },
  strongCard: {
    background: 'var(--theme-surface-strong)',
    borderColor: 'var(--theme-surface-strong)',
    borderRadius: '1rem',
    borderStyle: 'solid',
    borderWidth: 2,
    boxShadow: '8px 8px 0 var(--theme-accent-warm-soft)',
    color: 'var(--theme-text-soft)',
  },
  primaryButton: {
    background: 'var(--theme-accent)',
    border: '2px solid var(--theme-accent-strong)',
    boxShadow: '4px 4px 0 var(--theme-accent-warm-soft)',
    color: 'var(--theme-text-soft)',
  },
  secondaryButton: {
    background: 'var(--theme-surface)',
    border: '2px solid var(--theme-border)',
    boxShadow: '4px 4px 0 var(--theme-accent-warm-soft)',
    color: 'var(--theme-text)',
  },
  outlineButton: {
    border: '1px solid var(--theme-accent-warm)',
    color: 'var(--theme-text-soft)',
  },
} satisfies Record<string, CSSProperties>;

type ThemeElement =
  | 'a'
  | 'article'
  | 'dd'
  | 'div'
  | 'dl'
  | 'dt'
  | 'footer'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'header'
  | 'p'
  | 'section'
  | 'span';

type ThemeElementProps = HTMLAttributes<HTMLElement> & {
  as?: ThemeElement;
  children: ReactNode;
  href?: string;
};

type ThemeTextVariant =
  | 'accent'
  | 'body'
  | 'heading'
  | 'highlight'
  | 'strongBody'
  | 'strongHeading'
  | 'warmAccent';

type ThemedTextProps = ThemeElementProps & {
  variant: ThemeTextVariant;
};

type SurfaceVariant = 'card' | 'softCard' | 'strongCard';

type ThemedSurfaceProps = ThemeElementProps & {
  variant?: SurfaceVariant;
};

type ThemedSectionProps = ThemeElementProps & {
  divider?: 'bottom' | 'top' | 'vertical';
};

type ThemedButtonLinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
  variant?: 'highlight' | 'outline' | 'primary' | 'secondary';
};

type ThemedNavLinkProps = {
  active?: boolean;
  children: ReactNode;
  className?: string;
  href: string;
};

const themedTextStyles: Record<ThemeTextVariant, CSSProperties> = {
  accent: themeStyles.accent,
  body: themeStyles.body,
  heading: themeStyles.heading,
  highlight: themeStyles.highlight,
  strongBody: themeStyles.strongBody,
  strongHeading: themeStyles.strongHeading,
  warmAccent: themeStyles.warmAccent,
};

const surfaceStyles: Record<SurfaceVariant, CSSProperties> = {
  card: themeStyles.card,
  softCard: themeStyles.softCard,
  strongCard: themeStyles.strongCard,
};

const buttonStyles = {
  highlight: themeStyles.highlight,
  outline: themeStyles.outlineButton,
  primary: themeStyles.primaryButton,
  secondary: themeStyles.secondaryButton,
};

const buttonHoverStyles: Record<
  NonNullable<ThemedButtonLinkProps['variant']>,
  CSSProperties
> = {
  highlight: {
    opacity: 0.9,
  },
  outline: {
    background: 'rgba(255, 255, 255, 0.1)',
  },
  primary: {
    background: 'var(--theme-accent-strong)',
    boxShadow: '3px 3px 0 var(--theme-accent-warm-soft)',
    transform: 'translate(1px, 1px)',
  },
  secondary: {
    background: 'var(--theme-selection)',
    boxShadow: '3px 3px 0 var(--theme-accent-warm-soft)',
    transform: 'translate(1px, 1px)',
  },
};

const getDividerClassName = (divider?: ThemedSectionProps['divider']) => {
  if (divider === 'bottom') {
    return 'border-b';
  }

  if (divider === 'top') {
    return 'border-t';
  }

  if (divider === 'vertical') {
    return 'border-y';
  }

  return undefined;
};

const ThemedShell = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen antialiased" style={themeStyles.shell}>
    {children}
  </div>
);

const ThemedText = ({
  as: Component = 'p',
  children,
  className,
  style,
  variant,
  ...props
}: ThemedTextProps) => (
  <Component
    className={className}
    style={mergeStyles(themedTextStyles[variant], style)}
    {...props}
  >
    {children}
  </Component>
);

const ThemedSurface = ({
  as: Component = 'div',
  children,
  className,
  style,
  variant = 'card',
  ...props
}: ThemedSurfaceProps) => (
  <Component
    className={className}
    style={mergeStyles(surfaceStyles[variant], style)}
    {...props}
  >
    {children}
  </Component>
);

const ThemedSection = ({
  as: Component = 'section',
  children,
  className,
  divider,
  style,
  ...props
}: ThemedSectionProps) => {
  const dividerClassName = getDividerClassName(divider);

  return (
    <Component
      className={joinClassNames(dividerClassName, className)}
      style={mergeStyles(themeStyles.divider, style)}
      {...props}
    >
      {children}
    </Component>
  );
};

const ThemedButtonLink = ({
  children,
  className,
  href,
  variant = 'primary',
}: ThemedButtonLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const sharedProps = {
    className,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    style: mergeStyles(
      buttonStyles[variant],
      isHovered ? buttonHoverStyles[variant] : undefined,
    ),
  };

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...sharedProps}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} {...sharedProps}>
      {children}
    </a>
  );
};

const ThemedNavLink = ({
  active = false,
  children,
  className,
  href,
}: ThemedNavLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className={joinClassNames(active ? 'underline' : undefined, className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        color: active || isHovered ? 'var(--theme-accent)' : undefined,
        textDecorationColor: active ? 'var(--theme-selection)' : undefined,
        textDecorationThickness: active ? 4 : undefined,
        textUnderlineOffset: active ? 4 : undefined,
        transition: 'color 150ms ease',
      }}
    >
      {children}
    </Link>
  );
};

export {
  ThemedButtonLink,
  ThemedNavLink,
  ThemedSection,
  ThemedShell,
  ThemedSurface,
  ThemedText,
  themeStyles,
};
