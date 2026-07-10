# nodejs-auth-boilerplate

A secure Node.js authentication starter built with Express.js, JWT, and a lightweight local database store so the project can run even without a local Postgres installation.

## Database setup

The app now uses a local JSON file database at [Backend/database/auth-store.json](Backend/database/auth-store.json) by default. This keeps the project portable for demos and open-source sharing.

If you want to use PostgreSQL instead, set a DATABASE_URL in [Backend/.env](Backend/.env) and the app will connect to it automatically.

### SQL schema for PostgreSQL

If you later connect to PostgreSQL, create the users table with:

```sql
CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  full_name VARCHAR(150) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Run locally

1. Install dependencies in the backend and frontend folders.
2. Start the backend:
   ```bash
   cd Backend
   npm run dev
   ```
3. Start the frontend:
   ```bash
   cd Frontend
   npm run dev
   ```

## Notes

- The local database file is created automatically on first run.
- The UI has been refreshed with a dark theme for a modern look.
