# Next.js Product Marketing Application

## 📝 Developer Test Assignment Overview

This project is a responsive, marketing-focused web application using Next.js that demonstrates proficiency in modern web development practices and SEO optimization. Developed within a 4-6 hour timeframe, the focus has been on quality implementation of core features.

## 🚀 Technologies Used

- **Framework**: Next.js 15
- **Styling**: TailwindCSS
- **Type Safety**: TypeScript
- **Containerization**: Docker
- **Linting**: ESLint with Next.js plugin
- **Code Formatting**: Prettier

## ✨ Key Features

### 1. Product Listing Page
- Fetch and display products from mock REST API
- Implement loading states and error handling
- Responsive design (mobile, tablet, desktop)
- Basic filtering functionality

### 2. Product Detail Page
- Dynamic routing for individual products
- SEO best practices:
  - Meta tags
  - Open Graph tags
  - Proper heading hierarchy
  - Clean URL structure

### 3. Navigation
- Responsive header with navigation menu
- Breadcrumb navigation
- Footer with relevant links

## 🛠 Technical Requirements

### Data Handling
- REST API data fetching
- Loading and error state management
- Basic data caching implementation

### Code Quality
- Clean, well-documented code
- Modular component organization
- TypeScript type safety
- Comprehensive Git commit history

## 🖥 Local Development Setup

### Prerequisites
- Node.js (v20+)
- npm (v10+)
- Docker (optional)

### Installation Steps
1. Clone the repository
```bash
git clone https://github.com/yourusername/nextjs-product-app.git
cd nextjs-product-app
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

4. Open http://localhost:3000

🐳 Docker Deployment
Build Docker Image
```bash
npm run docker:build
```

Run Docker Container
```bash
npm run docker:up
```

📂 Project Structure
src/
├── app/                # Next.js app router
│   ├── products/       # Product-related pages
│   └── layout.tsx      # Global layout
├── components/         # Reusable React components
├── lib/                # Utility functions and API calls
├── types/              # TypeScript type definitions
└── styles/             # Global styles

🧪 Development Commands
Linting
```bash
# Check linting issues
npm run lint

# Automatically fix linting issues
npm run lint:fix
```

Formatting
```bash
# Format all files
npm run format
```

Testing
```bash
# Run tests
npm test
```

🚧 Known Limitations
- Mock data used for products
- Basic product listing and detail views
- Limited advanced filtering

🎯 Performance Optimizations
- Server-side rendering
- Efficient data fetching
- Minimal bundle size
- Responsive design

🤝 Contributing
1. Fork the repository
2. Create feature branch (git checkout -b feature/AmazingFeature)
3. Commit changes (git commit -m 'Add AmazingFeature')
4. Push to branch (git push origin feature/AmazingFeature)
5. Open Pull Request

📊 Evaluation Criteria
- Code quality and organization
- REST API implementation
- SEO optimization
- Responsive design
- Docker configuration
- Git commit history
- Documentation quality