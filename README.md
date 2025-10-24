# Enterprise Resource Planning Project

This project consists of a frontend React application and a backend Node.js server with PostgreSQL database.

## Prerequisites

- Node.js (v16 or higher)
- PostgreSQL (v14 or higher)
- npm (Node Package Manager)

## Getting Started

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd erp-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:5173`

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd erp-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node server.js
   ```

   The backend API will be available at `http://localhost:3000`

### Database Setup

1. Make sure PostgreSQL is installed and running on your system.

2. Create and initialize the database:
   ```bash
   # Login to PostgreSQL
   psql -U postgres

   # Run the initialization script
   \i erp-backend/init_database.sql
   ```

3. Load sample data:
   ```bash
   # Make sure you're connected to the erp_project_2025_db database
   \c erp_project_2025_db

   # Run the sample data script
   \i erp-backend/sample_data.sql
   ```

### Database Connection

The backend expects the following PostgreSQL connection:
- Database Name: `erp_project_2025_db`
- Default Host: `localhost`
- Default Port: `5432`

If you need to modify these settings, please update them in the backend configuration.

## Development

- Frontend runs in development mode with hot-reload enabled
- Backend uses nodemon for automatic server restart on file changes
- Database changes require manual restart of the backend server

## Troubleshooting

### Database Issues
- Ensure PostgreSQL service is running
- Verify database name matches `erp_project_2025_db`
- Check if PostgreSQL user has appropriate permissions

### Frontend Issues
- Clear npm cache if dependencies fail to install: `npm cache clean --force`
- Check if the correct Node.js version is installed: `node --version`

### Backend Issues
- Verify that port 3000 is not in use by another application
- Check logs in `erp-backend/src/logger/app.log` for error details
