# Dream Capture

Dream Capture is a modern web application for recording, analyzing, and sharing your dreams. Built with Next.js, Tailwind CSS, and Prisma, it offers a beautiful user interface to document your dream experiences and connect with a community of dreamers.

## Features

- **Dream Journaling**: Record your dreams with detailed descriptions, tags, and clarity ratings
- **AI Analysis**: AI-powered analysis to extract themes, emotions, and patterns from your dreams
- **Dream Visualization**: Beautiful visual representations of your dream content
- **Community Sharing**: Share your dreams with others and explore dreams from the community
- **User Profiles**: Personalized profiles showing your dream history and statistics
- **Dream Challenges**: Participate in weekly dream challenges with other users

## Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL 
- **Authentication**: NextAuth.js
- **AI Integration**: OpenAI API

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/Darklte732/dream-capture.git
cd dream-capture
```

2. Install dependencies
```bash
npm install
```

3. Set up your environment variables
```bash
cp .env.example .env.local
# Edit .env.local with your database and API credentials
```

4. Set up the database
```bash
npx prisma migrate dev
```

5. Run the development server
```bash
npm run dev
```

## Screenshots

The application features a modern UI with intuitive navigation:

- Home page with dream capture and exploration features
- Dream journal with detailed dream entries
- Community section to discover dreams from other users
- Profile page with dream statistics and history

## License

MIT

## Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first styling
- Prisma team for the excellent ORM
- OpenAI for the AI capabilities