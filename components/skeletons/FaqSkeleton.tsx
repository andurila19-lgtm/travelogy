import React from 'react';

export default function FaqSkeleton() {
  return (
    <section className="faq-section" style={{ padding: '72px 0', background: 'var(--bg-surface)' }}>
      <div className="box1140" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px auto' }}>
          <div className="skeleton-shimmer skeleton-badge" style={{ margin: '0 auto 12px' }} />
          <div className="skeleton-shimmer skeleton-title" style={{ margin: '0 auto 10px', width: '360px' }} />
          <div className="skeleton-shimmer skeleton-text" style={{ margin: '0 auto', width: '280px' }} />
        </div>

        <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              style={{
                background: '#ffffff',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '20px 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div className="skeleton-shimmer" style={{ width: '70%', height: '20px', borderRadius: '4px' }} />
              <div className="skeleton-shimmer" style={{ width: '20px', height: '20px', borderRadius: '50%' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
