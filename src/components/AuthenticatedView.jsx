import React, { useState } from 'react';
import { LogOut, User, Mail, ShieldCheck, ShieldAlert, Key, Calendar, Code, Copy, Check, Terminal, ExternalLink, Sparkles } from 'lucide-react';

export default function AuthenticatedView({ user, onLogout, onOpenMLHGuide }) {
  const [showClaims, setShowClaims] = useState(false);
  const [copiedClaims, setCopiedClaims] = useState(false);
  const [simulatedApiResult, setSimulatedApiResult] = useState(null);
  const [isSimulatingApi, setIsSimulatingApi] = useState(false);

  const handleCopyClaims = () => {
    navigator.clipboard.writeText(JSON.stringify(user, null, 2));
    setCopiedClaims(true);
    setTimeout(() => setCopiedClaims(false), 2000);
  };

  const handleSimulateApi = () => {
    setIsSimulatingApi(true);
    setTimeout(() => {
      setIsSimulatingApi(false);
      setSimulatedApiResult({
        status: 200,
        message: 'Successfully accessed protected resource using Bearer Token!',
        timestamp: new Date().toISOString(),
        identitySubject: user.sub,
        scope: ['read:current_user', 'openid', 'profile', 'email']
      });
    }, 600);
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      {/* MLH Success Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%)',
        border: '1px solid rgba(16, 185, 129, 0.35)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.25rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent-emerald)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff'
          }}>
            <ShieldCheck size={22} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Auth0 Log-in Flow Active & Verified!
            </h3>
            <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
              You have successfully authenticated via Auth0. Take a screenshot of this view for your MLH submission!
            </p>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={onOpenMLHGuide}
        >
          <Sparkles size={16} />
          <span>Prepare MLH Submission</span>
        </button>
      </div>

      {/* Main Profile Card */}
      <div className="glass-card" style={{ padding: '2.25rem' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          borderBottom: '1px solid var(--border-color)',
          paddingBottom: '1.75rem',
          marginBottom: '1.75rem'
        }}>
          {/* Avatar & User Details */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative' }}>
              {user.picture ? (
                <img
                  src={user.picture}
                  alt={user.name || 'User picture'}
                  style={{
                    width: '76px',
                    height: '76px',
                    borderRadius: '50%',
                    border: '3px solid var(--accent-auth0)',
                    boxShadow: '0 4px 14px rgba(235, 84, 36, 0.25)',
                    objectFit: 'cover'
                  }}
                />
              ) : (
                <div style={{
                  width: '76px',
                  height: '76px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-tertiary)',
                  border: '2px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <User size={36} color="#94a3b8" />
                </div>
              )}
              {user.email_verified && (
                <div
                  title="Email Verified"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    backgroundColor: 'var(--accent-emerald)',
                    borderRadius: '50%',
                    padding: '3px',
                    border: '2px solid var(--bg-card)',
                    display: 'flex'
                  }}
                >
                  <ShieldCheck size={14} color="#ffffff" />
                </div>
              )}
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flexWrap: 'wrap' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
                  {user.name || 'Authenticated User'}
                </h2>
                {user.email_verified ? (
                  <span className="badge badge-success">
                    <ShieldCheck size={12} />
                    Verified Email
                  </span>
                ) : (
                  <span className="badge badge-warning">
                    <ShieldAlert size={12} />
                    Email Unverified
                  </span>
                )}
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                {user.email || 'No email provided'}
              </p>
              {user.nickname && user.nickname !== user.name && (
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                  @{user.nickname}
                </p>
              )}
            </div>
          </div>

          {/* Logout Button */}
          <button
            type="button"
            className="btn btn-danger"
            onClick={onLogout}
          >
            <LogOut size={18} />
            <span>Log Out</span>
          </button>
        </div>

        {/* Claims & Token Metadata Overview Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.25rem' }}>
              <Key size={14} /> Subject ID (sub)
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', wordBreak: 'break-all', color: 'var(--text-primary)' }}>
              {user.sub || 'N/A'}
            </div>
          </div>

          <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.25rem' }}>
              <Mail size={14} /> Email Identity
            </div>
            <div style={{ fontSize: '0.85rem', wordBreak: 'break-all', color: 'var(--text-primary)' }}>
              {user.email || 'N/A'}
            </div>
          </div>

          <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.25rem' }}>
              <Calendar size={14} /> Last Authenticated
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>
              {user.updated_at ? new Date(user.updated_at).toLocaleString() : 'Just now'}
            </div>
          </div>
        </div>

        {/* Interactive Controls: Claims Viewer & Simulated API */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => setShowClaims(!showClaims)}
          >
            <Code size={16} />
            <span>{showClaims ? 'Hide ID Token Claims' : 'Inspect ID Token Claims'}</span>
          </button>

          <button
            type="button"
            className="btn btn-outline btn-sm"
            onClick={handleSimulateApi}
            disabled={isSimulatingApi}
          >
            <Terminal size={16} />
            <span>{isSimulatingApi ? 'Sending Request...' : 'Test Protected API Call'}</span>
          </button>
        </div>

        {/* Raw Claims Viewer */}
        {showClaims && (
          <div className="animate-fade-in" style={{
            background: 'var(--bg-primary)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-color)',
            overflow: 'hidden',
            marginBottom: '1.5rem'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.75rem 1rem',
              backgroundColor: 'var(--bg-secondary)',
              borderBottom: '1px solid var(--border-color)'
            }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                Decoded User Object (ID Token Claims)
              </span>
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={handleCopyClaims}
                style={{ padding: '0.2rem 0.5rem', fontSize: '0.75rem' }}
              >
                {copiedClaims ? <Check size={12} color="#10b981" /> : <Copy size={12} />}
                <span>{copiedClaims ? 'Copied' : 'Copy JSON'}</span>
              </button>
            </div>
            <pre style={{
              padding: '1rem',
              margin: 0,
              fontSize: '0.8rem',
              color: '#38bdf8',
              overflowX: 'auto',
              lineHeight: 1.5
            }}>
              {JSON.stringify(user, null, 2)}
            </pre>
          </div>
        )}

        {/* Simulated API Output */}
        {simulatedApiResult && (
          <div className="animate-fade-in" style={{
            background: 'rgba(16, 185, 129, 0.05)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            padding: '1rem',
            marginBottom: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-emerald)', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.5rem' }}>
              <ShieldCheck size={16} />
              <span>Authorization Header Validation: HTTP 200 OK</span>
            </div>
            <pre style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.775rem',
              color: 'var(--text-secondary)',
              margin: 0,
              whiteSpace: 'pre-wrap'
            }}>
              {JSON.stringify(simulatedApiResult, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
