
# Meat Zone Restaurant Website

## Project Features
- Browse menu items (price + calories)
- Table selection and reservation
- Place orders and confirm
- Kitchen dashboard and auto printing
- Admin panel to manage items

## Technologies Used
- Frontend: HTML + JavaScript
- Backend: Node.js + Express
- Database: MySQL

## Setup Instructions
1. Import `database/schema.sql` into MySQL.
2. Run `backend/index.js` using Node.js.
3. Open `frontend/index.html` to test.
4. Extend system with authentication, printing, and admin panel.

## API Routes
- `GET /api/menu`: fetch all menu items.
- `POST /api/order`: send order with table, name, and phone.

## Next Steps
- Add authentication
- Connect with printer in kitchen
- Deploy on shared/local server
