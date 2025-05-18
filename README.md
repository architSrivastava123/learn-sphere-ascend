
# StudyPlanner

A personalized study planner application to help students organize their study schedules, track progress, and achieve academic goals.

## Features

- User authentication (login/signup)
- Personalized dashboard
- Study schedule organization
- Progress tracking

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Supabase
- React Router
- Framer Motion

## Installation

1. Clone this repository
```bash
git clone https://github.com/yourusername/studyplanner.git
cd studyplanner
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
Create a `.env` file in the root directory with your Supabase credentials:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server
```bash
npm run dev
```

## Git Configuration

When pushing to GitHub, consider adding these common files to your `.gitignore`:

```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build
/dist

# misc
.DS_Store
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
.env.*

# logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# editor specific files
.idea/
.vscode/
*.swp
*.swo
```

## Deployment

This project can be deployed to any static hosting service such as Vercel, Netlify, or GitHub Pages.
