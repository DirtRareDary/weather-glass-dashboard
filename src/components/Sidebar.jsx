// --- SIDEBAR -------------------------------------------------------
function Sidebar() {
  const [active, setActive] = React.useState('grid');
  const items = [
    { id: 'grid', Comp: Icon.Grid },
    { id: 'cal', Comp: Icon.Calendar },
    { id: 'globe', Comp: Icon.Globe },
    { id: 'clock', Comp: Icon.Clock },
    { id: 'gear', Comp: Icon.Gear },
  ];
  return (
    <div className="my-5 ml-5 shrink-0">
      <div className="glass-sidebar w-[64px] h-full flex flex-col items-center py-5 gap-4">
        {/* Logo */}
        <div className="w-[38px] h-[38px] glass rounded-xl flex items-center justify-center text-white">
          <Icon.Logo size={20} />
        </div>

        {/* Nav */}
        <div className="flex flex-col gap-3 mt-4">
          {items.map(({ id, Comp }) => (
            <div
              key={id}
              className={`sidebar-icon ${active === id ? 'active' : ''}`}
              onClick={() => setActive(id)}
            >
              <Comp size={18} filled={id === 'grid' && active === 'grid'} />
            </div>
          ))}
        </div>

        {/* Logout */}
        <div className="mt-auto mb-2">
          <div className="sidebar-icon">
            <Icon.Exit size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}
