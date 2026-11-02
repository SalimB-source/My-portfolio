'use client';

import { useMemo, useState } from 'react';
import { useLang } from '@/app/providers';
import { CATEGORIES, PROJECTS, type Category } from '@/content/site';
import { T } from '@/lib/i18n';
import { ProjectCard } from './project-card';

export function WorkIndex() {
  const { lang } = useLang();
  const [filter, setFilter] = useState<Category | 'all'>('all');

  const list = useMemo(
    () => (filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.categories.includes(filter))),
    [filter],
  );

  return (
    <>
      <div className="filters" role="group" aria-label={T.work.filterLabel[lang]}>
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            type="button"
            className="filter"
            aria-pressed={filter === c.id}
            onClick={() => setFilter(c.id)}
          >
            {c.label[lang]}
            {c.id !== 'all' && (
              <span style={{ opacity: 0.5, marginLeft: '0.35rem' }}>
                {PROJECTS.filter((p) => p.categories.includes(c.id as Category)).length}
              </span>
            )}
          </button>
        ))}
        <span className="mono" style={{ marginLeft: 'auto', alignSelf: 'center' }}>
          {list.length.toString().padStart(2, '0')} {T.work.count[lang]}
        </span>
      </div>

      {list.length === 0 ? (
        <p className="lead">{T.work.empty[lang]}</p>
      ) : (
        <div className="work-grid" key={filter}>
          {list.map((p, i) => (
            <ProjectCard key={p.slug} project={p} priority={i < 2} delay={i * 55} />
          ))}
        </div>
      )}
    </>
  );
}
