export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-primary-bg text-text-primary">
      <div className="glass-panel text-center max-w-xl w-full">
        <p className="text-accent-cyan font-mono mb-2">[404]</p>
        <h1 className="text-3xl font-bold mb-3 gradient-text">Signal Lost</h1>
        <p className="text-text-secondary mb-6">
          The page you are looking for drifted outside the investigation perimeter. Return to the safe zone.
        </p>
        <a
          href="/"
          className="project-link inline-flex justify-center items-center"
          aria-label="Return to homepage"
        >
          ⬅ Back to home
        </a>
      </div>
    </main>
  )
}
