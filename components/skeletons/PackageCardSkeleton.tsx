import React from 'react';

export default function PackageCardSkeleton() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image" />
      <div className="skeleton-content">
        <div className="skeleton-shimmer skeleton-badge" style={{ width: '80px', height: '20px' }} />
        <div className="skeleton-shimmer skeleton-title" style={{ width: '85%' }} />
        <div className="skeleton-shimmer skeleton-text" />
        <div className="skeleton-shimmer skeleton-text-short" />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
          <div className="skeleton-shimmer" style={{ width: '100px', height: '24px', borderRadius: '4px' }} />
          <div className="skeleton-shimmer" style={{ width: '90px', height: '36px', borderRadius: '20px' }} />
        </div>
      </div>
    </div>
  );
}
