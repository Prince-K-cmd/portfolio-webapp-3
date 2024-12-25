export function HeroTitle() {
  return (
    <div className="mb-4">
      <h1
        id="hero-title"
        className="text-4xl md:text-6xl font-bold"
        aria-label="Prince Kyeremeh, Full Stack Developer"
      >
        <span
          className="text-muted-foreground text-2xl block mb-2"
          aria-hidden="true"
        >
          Hi, I&apos;m
        </span>
        <span className="gradient-text">Prince Kyeremeh</span>
      </h1>
    </div>
  );
}
