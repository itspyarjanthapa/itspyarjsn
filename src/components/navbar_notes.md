# Navbar Implementation Details

I will create a navigation system that matches the "pill" style seen in modern premium portfolios.

## Structure
- **Container**: `fixed top-6 left-1/2 -translate-x-1/2 z-[100]`
- **Pill**: `flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl transition-all hover:scale-[1.02]`
- **Links**: `Home`, `Projects`, `About`, `Contact`. Small, uppercase or clean sans-serif.
- **Toggles**: `ModeToggle` and `ThemeColorToggle` at the end of the pill.

## Mobile Strategy
- On small screens, hide the text links and show a "Menu" button or just the icons.
- Or use a condensed version that expands on tap.
