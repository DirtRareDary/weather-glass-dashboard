// --- TOP BAR -------------------------------------------------------
function TopBar() {
  const circle = "w-9 h-9 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition cursor-pointer";
  return (
    <div className="flex items-center justify-between pl-24 pr-10 pt-6 pb-3">
      <div>
        <div className="text-xs text-white/55 font-normal">{CONFIG.userRole}</div>
        <div className="text-base text-white font-semibold tracking-tight">{CONFIG.userName}</div>
      </div>
      <div className="flex items-center gap-3">
        <div className={circle}><span className="text-white text-lg leading-none -mt-0.5">+</span></div>
        <div className={circle}><Icon.Search size={15} /></div>
        <div className={circle}><Icon.Bell size={15} /></div>
        <div className="w-[38px] h-[38px] rounded-full overflow-hidden ring-1 ring-white/25">
          {/* avatar placeholder: warm-toned svg face */}
          <svg viewBox="0 0 40 40" className="w-full h-full">
            <defs>
              <linearGradient id="avg" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#6b4632" />
                <stop offset="100%" stopColor="#3b251a" />
              </linearGradient>
            </defs>
            <rect width="40" height="40" fill="url(#avg)" />
            <circle cx="20" cy="16" r="6.5" fill="#d4a07a" />
            <path d="M6 40c2-8 8-12 14-12s12 4 14 12" fill="#d4a07a" />
          </svg>
        </div>
      </div>
    </div>
  );
}
