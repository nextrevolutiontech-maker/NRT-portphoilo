export async function register() {
  // This file runs at Next.js server startup and for edge runtimes.
  // It is the standard place to initialize observability SDKs (Datadog, Sentry, OpenTelemetry).
  
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // e.g., await import('./sentry.server.config');
    console.log('[Observability] Node.js runtime instrumentation initialized.');
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    // e.g., await import('./sentry.edge.config');
    console.log('[Observability] Edge runtime instrumentation initialized.');
  }
}

// Optionally, export an onRequestError handler for unhandled errors
// export function onRequestError(err: Error, request: any, context: any) {
//   console.error('[Observability] Error:', err.message);
// }
