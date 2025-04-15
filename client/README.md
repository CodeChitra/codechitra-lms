### 🟢 Theme Style Summary:

#### ✅ **Base Hue (Color Family)**:

- **Primary Hue**: `HSL(220-225)` → Blueish-violet tones (classy, techy, modern)
- **Accent Colors**: Warm contrast — coral, teal, orange, yellow, purple for charts

#### 💡 **Light Mode (Clean + Minimal)**:

- **Backgrounds**: Near white (`hsl(220, 20%, 98%)`)
- **Text / Foreground**: Deep bluish-gray (`hsl(222, 30%, 12%)`)
- **Sidebar**: Very light with soft shadows, not too distracting
- **Accent Areas**: Muted blue-grays
- **Charts**: Vibrant but not neon (coral, teal, navy, etc.)

#### 🌙 **Dark Mode (Elegant + Legible)**:

- **Backgrounds**: `hsl(222, 47%, 11%)` — deep indigo-black
- **Text / Foreground**: `hsl(0, 0%, 98%)` — clean white
- **Sidebar / Accent**: Muted purples & dark blues
- **Charts**: Pop with color but still match overall vibe (bright cyan, magenta, etc.)

---

### 🔵 Inspiration:

- Think: **Tailwind Gray + Indigo**, mixed with subtle warm tones for charts
- **Not too saturated**, avoids eye strain, gives a **professional + calm** aesthetic

---

### 🧠 Consistency Tips:

To maintain a consistent look throughout your app:

1. Use `var(--primary)`, `var(--accent)` etc. instead of raw color values
2. Avoid setting background colors with direct `#fff` or `black`, stick to:
   - `background: hsl(var(--background))`
   - `color: hsl(var(--foreground))`
3. Component library (like `shadcn/ui`) will automatically pick from these if configured properly.
