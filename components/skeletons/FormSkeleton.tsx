import React from 'react';

export default function FormSkeleton() {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        padding: '36px 32px',
        boxShadow: '0 16px 40px rgba(27, 67, 50, 0.08)',
        border: '1px solid var(--border)'
      }}
    >
      <div className="skeleton-shimmer skeleton-badge" style={{ marginBottom: '12px' }} />
      <div className="skeleton-shimmer skeleton-title" style={{ width: '60%', marginBottom: '16px' }} />
      <div className="skeleton-shimmer skeleton-text" style={{ marginBottom: '24px' }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div className="skeleton-shimmer" style={{ height: '48px', borderRadius: '10px' }} />
          <div className="skeleton-shimmer" style={{ height: '48px', borderRadius: '10px' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div className="skeleton-shimmer" style={{ height: '48px', borderRadius: '10px' }} />
          <div className="skeleton-shimmer" style={{ height: '48px', borderRadius: '10px' }} />
        </div>
        <div className="skeleton-shimmer" style={{ height: '80px', borderRadius: '10px' }} />
        <div className="skeleton-shimmer" style={{ height: '50px', borderRadius: '30px', marginTop: '8px' }} />
      </div>
    </div>
  );
}
