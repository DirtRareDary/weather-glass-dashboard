// --- FORECAST ROW --------------------------------------------------
// TODO: Replace with real API data (e.g. OpenWeatherMap, WeatherAPI)
const DAYS = [
  { day: 'Sunday',    temp: 11, Icon: Icon.Cloud },
  { day: 'Monday',    temp: 13, Icon: Icon.Cloud },
  { day: 'Tuesday',   temp: 14, Icon: Icon.CloudSun },
  { day: 'Wednesday', temp: 10, Icon: Icon.Storm, active: true },
  { day: 'Thursday',  temp: 19, Icon: Icon.Sun },
  { day: 'Friday',    temp: 12, Icon: Icon.Cloud },
];

function Sparkline() {
  // Larger, more pronounced curve for the wider/taller forecast graph.
  const width = 1000, height = 180;
  const pts = [
    [ 70,   95],   // Sunday — mid
    [230,   55],   // Monday — rising
    [390,   28],   // Tuesday — peak of hump
    [550,  148],   // Wednesday — DEEP dip
    [710,   50],   // Thursday — recovery hump
    [930,   90],   // Friday — settle
  ];
  const d = pts.reduce((acc, p, i, arr) => {
    if (i === 0) return `M ${p[0]} ${p[1]}`;
    const prev = arr[i - 1];
    const cx1 = prev[0] + (p[0] - prev[0]) / 2;
    const cx2 = prev[0] + (p[0] - prev[0]) / 2;
    return `${acc} C ${cx1} ${prev[1]}, ${cx2} ${p[1]}, ${p[0]} ${p[1]}`;
  }, '');
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className="absolute inset-0 pointer-events-none w-full h-full"
    >
      <path d={d} fill="none" stroke="white" strokeWidth="2.5" opacity="0.95" strokeLinecap="round" />
    </svg>
  );
}

function Forecast() {
  return (
    <div className="mt-auto relative pb-2 w-full">
      {/* Temp + Icons row */}
      <div className="flex justify-between items-end relative">
        {DAYS.map((d, i) => (
          <div key={d.day} className="flex flex-col items-center relative z-10" style={{ flex: 1 }}>
            <div className={`flex items-center gap-2 text-white whitespace-nowrap ${d.active ? 'font-bold text-2xl' : 'text-xl font-medium'}`}>
              <span>{d.temp}°</span>
              <d.Icon size={d.active ? 26 : 20} />
            </div>
          </div>
        ))}
      </div>

      {/* Sparkline — bigger & taller */}
      <div className="relative h-[160px] w-full mt-2">
        <Sparkline />
      </div>

      {/* Day labels */}
      <div className="flex justify-between mt-2">
        {DAYS.map(d => (
          <div key={d.day} style={{ flex: 1 }} className="text-center">
            <span className={d.active ? 'text-white font-semibold text-sm' : 'text-sm text-white/55 font-normal'}>
              {d.day}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- MAIN PANEL ----------------------------------------------------
// No background image here — the storm fills the whole viewport,
// we just layer transparent UI on top.
function MainPanel() {
  return (
    <div className="flex-1 relative flex flex-col min-h-0">
      <div className="relative pl-3 pr-10 pt-24 pb-8 flex flex-col flex-1 min-h-0">
        <div className="glass rounded-full px-3 py-1 text-[11px] text-white/85 font-medium w-fit mt-2">
          Weather Forecast
        </div>

        <h1 className="mt-4 text-[80px] font-bold text-white leading-[1.02] tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
          Storm
          <br />
          with Heavy Rain
        </h1>

        <p className="mt-4 max-w-[360px] text-[13px] text-white/75 font-light leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.35)]">
          Partly cloudy with occasional snow showers. High around 50°F.
          Wind from the east 11 to 21 mph. Snow chance is 40%, with
          rainfall expected to be less than an inch.
        </p>

        <Forecast />
      </div>
    </div>
  );
}
