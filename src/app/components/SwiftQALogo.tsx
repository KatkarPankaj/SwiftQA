export default function SwiftQALogo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block"
    >
      {/* Background circle */}
      <circle cx="20" cy="20" r="19" fill="url(#gradient)" opacity="0.1" />
      
      {/* Checkmark - representing Quality */}
      <path
        d="M 12 20 L 18 26 L 28 14"
        stroke="url(#gradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Speed lines - representing Swift */}
      <path
        d="M 28 10 L 33 10"
        stroke="url(#gradient)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 30 15 L 36 15"
        stroke="url(#gradient)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 29 20 L 35 20"
        stroke="url(#gradient)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Gradient definition */}
      <defs>
        <linearGradient
          id="gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
    </svg>
  );
}
