# UI/UX Ideas for Future Use

This file contains saved layout designs and components that can be reused in future pages or sections.

---

## 1. Project Layout Idea

Interactive project cards with status badges and animations. Can be used for future project pages or sections.

### React/Next.js Component Code:

```tsx
{/* CURRENT PROJECTS SECTION */}
<section className="container-max pt-8 pb-16 md:pt-12 md:pb-20">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="text-3xl md:text-4xl font-bold text-center mb-12"
  >
    Current Projects
  </motion.h2>
  
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {[
      {
        title: "Campus Microgrid Optimization",
        desc: "Using physics-informed neural networks to optimize energy distribution across Virginia Tech's campus infrastructure.",
        status: "In Progress",
        color: "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
      },
      {
        title: "Environmental Sensing Network",
        desc: "Developing low-cost, high-precision sensors for real-time environmental monitoring and data collection.",
        status: "Research Phase",
        color: "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
      },
      {
        title: "Autonomous Field Robotics",
        desc: "Creating autonomous platforms for agricultural and environmental data collection using advanced control systems.",
        status: "Prototype",
        color: "bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400"
      },
      {
        title: "Quantum Computing Applications",
        desc: "Exploring quantum algorithms for solving complex optimization problems in renewable energy systems.",
        status: "Early Stage",
        color: "bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400"
      },
      {
        title: "Materials Innovation Lab",
        desc: "Developing next-generation materials for energy storage and conversion using computational physics models.",
        status: "In Progress",
        color: "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
      },
      {
        title: "Smart City Infrastructure",
        desc: "Designing physics-based solutions for intelligent urban planning and infrastructure optimization.",
        status: "Planning",
        color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400"
      },
    ].map((project, i) => (
      <motion.div
        key={project.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.1 * i }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className="card p-6 cursor-pointer"
      >
        <div className="flex items-center justify-between mb-4">
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${project.color}`}>
            {project.status}
          </span>
        </div>
        <h3 className="font-semibold text-lg mb-3">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.desc}</p>
        <Link href="/projects" className="link-underline text-sm">
          Learn more →
        </Link>
      </motion.div>
    ))}
  </div>
</section>
```

### Features:
- **Responsive grid layout**: 1 column on mobile, 2 on tablet, 3 on desktop
- **Status badges**: Color-coded status indicators (In Progress, Research Phase, Prototype, etc.)
- **Hover animations**: Cards lift up on hover with smooth transitions
- **Staggered entrance**: Cards animate in with delays for a polished effect
- **Theme-aware colors**: Different colors for light/dark modes
- **Interactive elements**: Cursor pointer and hover states

### Status Color Options:
- Green: In Progress projects
- Blue: Research Phase
- Purple: Prototype stage
- Orange: Early Stage
- Yellow: Planning phase

### Usage Notes:
- Uses framer-motion for animations
- Requires Tailwind CSS classes
- Links can be updated to point to specific project pages
- Easy to customize project data by updating the array
- Status colors and badges can be modified for different project states

---

## 2. CTA (Call-to-Action) Section

A centered CTA section with card styling and multiple action buttons.

### React/Next.js Component Code:

```tsx
{/* CTA SECTION */}
<section className="container-max pt-8 pb-16 md:pt-12 md:pb-20">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className="card p-8 md:p-12 text-center"
  >
    <h2 className="text-2xl md:text-3xl font-bold mb-4">
      Ready to Join the Movement?
    </h2>
    <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
      Whether you're a student, researcher, or industry professional, there's a place for you in PIVOT. 
      Let's work together to create physics-driven solutions for tomorrow's challenges.
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <Link
        href="/contact"
        className="rounded-xl bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 transition font-medium"
      >
        Get in Touch
      </Link>
      <Link
        href="/projects"
        className="rounded-xl border border-brand-600 text-brand-600 dark:text-brand-400 hover:bg-brand-600 hover:text-white dark:hover:text-white px-6 py-3 transition font-medium"
      >
        View Our Work
      </Link>
    </div>
  </motion.div>
</section>
```

### Features:
- **Card-based design**: Uses the global card styling
- **Centered layout**: Text and buttons are center-aligned
- **Responsive buttons**: Stack on mobile, side-by-side on desktop
- **Smooth animations**: Fade-in animation on scroll
- **Dual CTA buttons**: Primary (filled) and secondary (outlined) actions
- **Theme-aware**: Works with light/dark mode

### Usage Notes:
- Perfect for landing pages, about pages, or any conversion-focused section
- Button text and links can be easily customized
- Animation can be adjusted or removed as needed
- Responsive design works on all screen sizes