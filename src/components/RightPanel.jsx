// --- RIGHT PANEL ---------------------------------------------------
function CurrentLocationCard() {
  return (
    <div className="glass rounded-2xl p-4">
      <div className="flex items-center gap-1.5 text-white">
        <Icon.Pin size={13} />
        <span className="text-sm font-semibold">Central Jakarta</span>
      </div>
      {/* TODO: Replace with real API data (e.g. OpenWeatherMap, WeatherAPI) */}
      <div className="mt-2 flex items-start text-white leading-none">
        <span className="text-[68px] font-bold tracking-tight">10°</span>
        <span className="text-[32px] font-bold ml-1 mt-1">C</span>
      </div>
      <div className="flex items-center gap-4 mt-4 text-[11px] text-white/65">
        <div className="flex items-center gap-1"><Icon.Wind size={13} /> 19 mph</div>
        <div className="flex items-center gap-1"><Icon.Droplet size={13} /> 40%</div>
        <div className="flex items-center gap-1"><Icon.Speed size={13} /> 15km/h</div>
      </div>
    </div>
  );
}

function LocationCard({ country, city, cond, temp, Ico, active }) {
  const bg = active ? { background: 'rgba(255,255,255,0.13)' } : {};
  return (
    <div
      className="glass rounded-xl px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-white/10 transition"
      style={bg}
    >
      <div>
        <div className="text-[10px] text-white/40 font-normal">{country}</div>
        <div className="text-sm font-semibold text-white leading-tight">{city}</div>
        <div className="text-[10px] text-white/50 mt-0.5">{cond}</div>
      </div>
      <div className="flex items-center gap-2 text-white">
        <span className="text-2xl font-semibold">{temp}°</span>
        <Ico size={18} />
      </div>
    </div>
  );
}

function RightPanel() {
  // Shift the whole right panel DOWN — starts ~20% from top, leaves breathing
  // room above so it sits in the middle-lower portion of the screen.
  return (
    <div className="w-[320px] flex flex-col p-5 gap-3 shrink-0 relative" style={{ paddingTop: '22vh' }}>
      <CurrentLocationCard />
      <div className="flex flex-col gap-2.5 mt-2">
        {/* TODO: Replace with real API data (e.g. OpenWeatherMap, WeatherAPI) */}
        <LocationCard country="Indonesia" city="North Jakarta" cond="Mostly Sunny" temp={12} Ico={Icon.Sun} active />
        <LocationCard country="Indonesia" city="Bandung"        cond="Cloudy"        temp={10} Ico={Icon.Cloud} />
        <LocationCard country="Indonesia" city="South Jakarta" cond="Sunny"         temp={14} Ico={Icon.Sun} />
      </div>
    </div>
  );
}
