import React from 'react';
import { ExternalLink, Heart, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-color)',
      padding: '2rem 1.5rem',
      backgroundColor: 'rgba(10, 13, 20, 0.9)',
      color: 'var(--text-muted)',
      fontSize: '0.85rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Shield size={16} color="#eb5424" />
          <span>Major League Hacking — Global Hack Week: Builders Week</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <a
            href="https://auth0.com/docs/quickstart/spa/react"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
          >
            <span>Auth0 React Docs</span>
            <ExternalLink size={12} />
          </a>
          <a
            href="https://ghw.mlh.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
          >
            <span>MLH Global Hack Week</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
