import React from 'react';

export default function Loading() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', paddingTop: '80px' }}>
      {/* Hero Skeleton */}
      <section
        style={{
          minHeight: '60vh',
          backgroundColor: '#0c201a',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px',
          gap: '16px'
        }}
      >
        {/* Eyebrow Skeleton */}
        <div
          className="skeleton-shimmer"
          style={{ width: '220px', height: '24px', borderRadius: '20px', opacity: 0.3 }}
        />

        {/* Title Skeleton */}
        <div
          className="skeleton-shimmer"
          style={{ width: 'min(90%, 540px)', height: '48px', borderRadius: '8px', opacity: 0.4 }}
        />

        {/* Subtitle Skeleton */}
        <div
          className="skeleton-shimmer"
          style={{ width: 'min(80%, 420px)', height: '18px', borderRadius: '4px', opacity: 0.3 }}
        />

        {/* Buttons Skeleton */}
        <div style={{ display: 'flex', gap: '14px', marginTop: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div
            className="skeleton-shimmer"
            style={{ width: '190px', height: '48px', borderRadius: '30px', opacity: 0.4 }}
          />
          <div
            className="skeleton-shimmer"
            style={{ width: '190px', height: '48px', borderRadius: '30px', opacity: 0.3 }}
          />
        </div>
      </section>

      {/* Grid Content Skeleton */}
      <div style={{ maxWidth: '1240px', margin: '60px auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div
            className="skeleton-shimmer skeleton-badge"
            style={{ margin: '0 auto 12px' }}
          />
          <div
            className="skeleton-shimmer skeleton-title"
            style={{ margin: '0 auto 10px', width: '300px' }}
          />
        </div>

        {/* 3 Cards Skeleton */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px'
          }}
        >
          {[1, 2, 3].map((n) => (
            <div key={n} className="skeleton-card">
              <div className="skeleton-image" />
              <div className="skeleton-content">
                <div className="skeleton-shimmer skeleton-badge" />
                <div className="skeleton-shimmer skeleton-title" />
                <div className="skeleton-shimmer skeleton-text" />
                <div className="skeleton-shimmer skeleton-text-short" />
                <div className="skeleton-shimmer skeleton-button" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
