import type { Wireframe, WireBlock } from '@/content/site';
import type { Lang } from '@/lib/i18n';

/**
 * A structural diagram of a shipped site: browser chrome, banded sections and
 * the items each band actually holds. Deliberately grey and untinted — it
 * describes the layout, not the visual design, so it reads as a wireframe.
 */

function Band({ block }: { block: WireBlock }) {
  const { kind, label, meta, items = [] } = block;

  if (kind === 'hero') {
    return (
      <div className="wf-band wf-band--hero">
        <div className="wf-band__head">
          <span className="wf-label">{label}</span>
          {meta && <span className="wf-meta">{meta}</span>}
        </div>
        <div className="wf-hero">
          <div className="wf-hero__copy">
            <span className="wf-bar wf-bar--pill" />
            <span className="wf-bar wf-bar--h1" />
            <span className="wf-bar wf-bar--h1 wf-bar--short" />
            <span className="wf-bar wf-bar--text" />
            <span className="wf-bar wf-bar--text wf-bar--shorter" />
            <div className="wf-hero__ctas">
              <span className="wf-bar wf-bar--btn" />
              <span className="wf-bar wf-bar--btn" />
            </div>
          </div>
          <div className="wf-hero__aside">
            {items.map((it) => (
              <span className="wf-tag" key={it.title}>
                {it.title}
                {it.note && <em>{it.note}</em>}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (kind === 'strip') {
    return (
      <div className="wf-band wf-band--strip">
        <div className="wf-band__head">
          <span className="wf-label">{label}</span>
          {meta && <span className="wf-meta">{meta}</span>}
        </div>
        <div className="wf-strip">
          {items.map((it) => (
            <span className="wf-chip" key={it.title}>
              {it.title}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (kind === 'split') {
    return (
      <div className="wf-band">
        <div className="wf-band__head">
          <span className="wf-label">{label}</span>
          {meta && <span className="wf-meta">{meta}</span>}
        </div>
        <div className="wf-split">
          <div className="wf-box wf-box--lead">
            <span className="wf-box__title">{items[0]?.title}</span>
            {items[0]?.note && <span className="wf-box__note">{items[0].note}</span>}
          </div>
          <div className="wf-split__stack">
            {items.slice(1).map((it) => (
              <div className="wf-box" key={it.title}>
                <span className="wf-box__title">{it.title}</span>
                {it.note && <span className="wf-box__note">{it.note}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (kind === 'grid') {
    return (
      <div className="wf-band">
        <div className="wf-band__head">
          <span className="wf-label">{label}</span>
          {meta && <span className="wf-meta">{meta}</span>}
        </div>
        <div className={`wf-grid wf-grid--${Math.min(items.length, 4)}`}>
          {items.map((it) => (
            <div className="wf-box wf-box--card" key={it.title}>
              <span className="wf-box__thumb" />
              <span className="wf-box__title">{it.title}</span>
              {it.note && <span className="wf-box__note">{it.note}</span>}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (kind === 'reels') {
    return (
      <div className="wf-band">
        <div className="wf-band__head">
          <span className="wf-label">{label}</span>
          {meta && <span className="wf-meta">{meta}</span>}
        </div>
        <div className="wf-reels">
          {items.map((it) => (
            <div className="wf-box wf-box--reel" key={it.title}>
              <span className="wf-box__thumb wf-box__thumb--portrait" />
              <span className="wf-box__title">{it.title}</span>
              {it.note && <span className="wf-box__note">{it.note}</span>}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (kind === 'cta') {
    return (
      <div className="wf-band wf-band--cta">
        <div className="wf-band__head">
          <span className="wf-label">{label}</span>
          {meta && <span className="wf-meta">{meta}</span>}
        </div>
        <div className="wf-cta">
          <span className="wf-bar wf-bar--h1 wf-bar--short" />
          <span className="wf-bar wf-bar--btn wf-bar--accent" />
        </div>
      </div>
    );
  }

  // 'band' — full-width block with its own content
  return (
    <div className="wf-band">
      <div className="wf-band__head">
        <span className="wf-label">{label}</span>
        {meta && <span className="wf-meta">{meta}</span>}
      </div>
      <div className="wf-full">
        {items.map((it) => (
          <span className="wf-tag" key={it.title}>
            {it.title}
            {it.note && <em>{it.note}</em>}
          </span>
        ))}
      </div>
    </div>
  );
}

export function WireframeView({ wire, lang }: { wire: Wireframe; lang: Lang }) {
  return (
    <div className="wf">
      <div className="wf__chrome">
        <span className="wf__dots" aria-hidden="true">
          <i /> <i /> <i />
        </span>
        <span className="wf__url">{wire.url}</span>
      </div>

      <nav className="wf__nav" aria-label="Sections">
        {wire.nav.map((n) => (
          <span className="wf__navitem" key={n}>
            {n}
          </span>
        ))}
      </nav>

      <div className="wf__body">
        {wire.blocks.map((b, i) => (
          <Band block={b} key={`${b.label}-${i}`} />
        ))}
      </div>

      <div className="wf__footer">
        {wire.footer.map((f) => (
          <span className="wf__footitem" key={f}>
            {f}
          </span>
        ))}
      </div>

      <p className="wf__caption">{wire.intro[lang]}</p>
    </div>
  );
}
