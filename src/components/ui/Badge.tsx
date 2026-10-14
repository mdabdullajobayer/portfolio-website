interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "cyan" | "violet" | "emerald" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    default: "bg-slate-800/80 text-slate-300 border-slate-700/60",
    cyan: "bg-cyan-950/40 text-cyan-300 border-cyan-800/50",
    violet: "bg-indigo-950/40 text-indigo-300 border-indigo-800/50",
    emerald: "bg-emerald-950/40 text-emerald-300 border-emerald-800/50",
    outline: "bg-transparent text-slate-400 border-slate-800",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-medium border transition-colors ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

