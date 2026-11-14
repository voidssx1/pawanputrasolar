import type { ReactNode } from "react";
import ImageReveal from "@/components/image-reveal";

type Meta = { label: string; value: string };

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  meta?: Meta[];
  image?: string;
  imageAlt?: string;
  captionLeft?: string;
  captionRight?: string;
  priority?: boolean;
};

export default function PageHero({
  eyebrow,
  title,
  lede,
  meta,
  image,
  imageAlt = "",
  captionLeft,
  captionRight,
  priority = false,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero__grid">
          <div className="page-hero__copy">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="page-hero__lede">{lede}</p>
          </div>
          {meta && meta.length > 0 && (
            <div className="page-hero__aside">
              <div className="page-meta">
                {meta.map((item) => (
                  <div key={item.label}>
                    <span>{item.label}</span>
                    <b>{item.value}</b>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {image && (
          <>
            <ImageReveal
              src={image}
              alt={imageAlt}
              sizes="(max-width: 760px) 100vw, 1440px"
              priority={priority}
              className="page-hero__media"
              delay={0.08}
            />
            {(captionLeft || captionRight) && (
              <div className="page-hero__caption">
                <span>{captionLeft}</span>
                <span>{captionRight}</span>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
