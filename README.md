# WebP Converter Web - Next.js Frontend

A beautiful, modern Next.js frontend for the WebP Converter SaaS application with Tailwind CSS.

## Features

- 🎨 **Beautiful UI** - Modern, responsive design with Tailwind CSS
- 📤 **Drag & Drop Upload** - Easy-to-use image uploader with react-dropzone
- 🔓 **Public Converter** - Try the service without signing up
- 🔐 **User Authentication** - Register and login functionality
- 📊 **Dashboard** - View API key, usage stats, and documentation
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast & Optimized** - Built with Next.js 14 App Router

## Prerequisites

- **Node.js** (v18 or higher)
- **API Server** running at `http://localhost:3001` (see `../api/README.md`)

## Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Configure environment variables:**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## Running the Application

### Development Mode
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Production Build
```bash
npm run build
npm run start
```

## Project Structure

```
web/
├── app/
│   ├── dashboard/         # Protected dashboard page
│   │   └── page.tsx
│   ├── login/            # Login page
│   │   └── page.tsx
│   ├── register/         # Registration page
│   │   └── page.tsx
│   ├── layout.tsx        # Root layout with navigation
│   ├── page.tsx          # Homepage with hero and features
│   └── globals.css       # Tailwind CSS imports
├── components/
│   ├── Dashboard.tsx     # Dashboard component with API docs
│   └── PublicUploader.tsx # Drag-and-drop image uploader
├── package.json
├── tailwind.config.js
└── next.config.js
```

## Pages Overview

### Homepage (`/`)
- Hero section highlighting WooCommerce optimization
- Public image converter (no login required)
- Features showcase
- Pricing information
- Call-to-action sections

### Register (`/register`)
- User registration form
- Email and password validation
- Automatic redirect to dashboard after signup
- Shows free tier benefits

### Login (`/login`)
- User authentication
- JWT token storage
- Redirect to dashboard on success

### Dashboard (`/dashboard`)
- **Protected Route** - Requires authentication
- Displays API key with copy functionality
- Shows credit usage and remaining conversions
- Progress bar for monthly limits
- Complete API documentation with examples
- cURL command examples

## Key Components

### PublicUploader
- Drag-and-drop image upload
- File type validation (JPG, PNG)
- File size limit (10MB)
- Real-time conversion with progress indicator
- Automatic download of converted WebP image
- Shows file size reduction statistics

### Dashboard
- Fetches user data from API
- Protected with JWT authentication
- Displays API key securely
- Shows usage statistics with visual progress bar
- Interactive API documentation
- Copy-to-clipboard functionality

## Authentication Flow

1. **Registration/Login**: User submits credentials
2. **Token Storage**: JWT token stored in `localStorage`
3. **API Requests**: Token sent in `Authorization` header
4. **Dashboard Access**: Token validated on protected routes
5. **Logout**: Clears token and redirects to homepage

## Styling

The application uses **Tailwind CSS** with a custom color scheme:

- **Primary Color**: Blue (shades 50-900)
- **Accent Colors**: Green, Purple, Orange for feature highlights
- **Typography**: Inter font family
- **Responsive Breakpoints**: Mobile-first design

## API Integration

The frontend communicates with the NestJS API:

```javascript
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

// Example: Register user
const response = await axios.post(`${API_URL}/auth/register`, {
  email,
  password
})

// Example: Upload image (public)
const formData = new FormData()
formData.append('image', file)
const response = await axios.post(`${API_URL}/api/v1/public-convert`, formData)

// Example: Protected request
const response = await axios.get(`${API_URL}/auth/me`, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
```

## User Experience Highlights

### Homepage
- Clear value proposition for WooCommerce users
- Instant try-before-signup converter
- Feature cards with icons
- Transparent pricing (500 free conversions)
- Multiple CTAs throughout the page

### Dashboard
- Clean, organized layout
- Visual credit usage indicators
- One-click API key copying
- Comprehensive API documentation
- Ready-to-use code examples

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Tips

### Hot Reload
Next.js provides instant hot reload during development. Changes to components will reflect immediately.

### Tailwind Classes
Use the `className` prop for styling. Common patterns:
- `flex items-center justify-center` - Centering
- `space-x-4` - Horizontal spacing
- `hover:bg-primary-700` - Hover effects
- `transition-colors` - Smooth transitions

### State Management
The application uses React hooks for state:
- `useState` for component state
- `useEffect` for data fetching
- `useRouter` for navigation

## Testing the Application

1. **Start the API server** (see `../api/README.md`)
2. **Start the web server**: `npm run dev`
3. **Visit** `http://localhost:3000`
4. **Try the public converter** on the homepage
5. **Register** a new account
6. **View dashboard** and copy your API key
7. **Test API calls** using the provided cURL examples

## Deployment

### Vercel (Recommended for Next.js)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables
Set `NEXT_PUBLIC_API_URL` to your production API URL in deployment settings.

## Troubleshooting

**API connection failed:**
- Ensure the API server is running at the configured URL
- Check CORS settings in the API
- Verify the `NEXT_PUBLIC_API_URL` environment variable

**Authentication not working:**
- Check if JWT token is stored in localStorage
- Verify token expiration (default: 7 days)
- Ensure API `/auth/me` endpoint is accessible

**Images not converting:**
- Check file size (max 10MB)
- Verify file type (JPG, PNG only)
- Check browser console for errors
- Verify API rate limits

## License

MIT License - Built for WooCommerce & E-commerce Speed Optimization
