import React from 'react';
import { ShieldCheck, Settings, FileCheck, ExternalLink, Lock } from 'lucide-react';

export default function Navbar({ isConfigured, onOpenConfig, onOpenMLHGuide, authState }) {
  const { isAuthenticated, user } = authState || {};

  return (
    <header style={{
      borderBottom: '1px solid var(--border-color)',
      backgroundColor: 'rgba(10, 13, 20, 0.8)',
      backdropFilter: 'blur(12px)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0.875rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #eb5424 0%, #ff7849 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(235, 84, 36, 0.35)'
          }}>
            <ShieldCheck size={24} color="#ffffff" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
                Auth0 Login Flow
              </span>
              <span className="badge badge-mlh">MLH Builders Week</span>
            </div>
            <p style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>
              Major League Hacking Global Hack Week Challenge
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          {isConfigured ? (
            <span className="badge badge-success">
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
              Auth0 Active
            </span>
          ) : (
            <span className="badge badge-warning">
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
              Setup Needed
            </span>
          )}

          {isAuthenticated && user && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.25rem 0.65rem',
              backgroundColor: 'var(--bg-tertiary)',
              borderRadius: '9999px',
              border: '1px solid var(--border-color)',
              fontSize: '0.85rem'
            }}>
              {user.picture ? (
                <img
                  src={user.picture}
                  alt={user.name || 'User avatar'}
                  style={{ width: '22px', height: '22px', borderRadius: '50%' }}
                />
              ) : (
                <Lock size={14} color="#a5b4fc" />
              )}
              <span style={{ maxWidth: '140px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {user.name || user.email}
              </span>
            </div>
          )}

          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={onOpenMLHGuide}
            title="MLH Submission Guide & Copyable text"
          >
            <FileCheck size={16} color="#6366f1" />
            <span>MLH Submission</span>
          </button>

          <button
            type="button"
            className="btn btn-outline btn-sm"
            onClick={onOpenConfig}
            title="Configure Auth0 Domain & Client ID"
          >
            <Settings size={16} />
            <span>Settings</span>
          </button>
        </div>
      </div>
    </header>
  );
}
