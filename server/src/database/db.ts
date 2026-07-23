import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.resolve(process.cwd(), 'enquiries.db');
const db = new Database(dbPath);

// Enable WAL mode for better performance
db.pragma('journal_mode = WAL');

// Create enquiries table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS enquiries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    pickup TEXT NOT NULL,
    destination TEXT NOT NULL,
    travel_date TEXT NOT NULL,
    vehicle TEXT,
    trip_type TEXT,
    passengers TEXT,
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

export interface EnquiryRecord {
  id?: number;
  name: string;
  phone: string;
  pickup: string;
  destination: string;
  travel_date: string;
  vehicle?: string;
  trip_type?: string;
  passengers?: string;
  message?: string;
  created_at?: string;
}

export const saveEnquiry = (enquiry: EnquiryRecord) => {
  const stmt = db.prepare(`
    INSERT INTO enquiries (name, phone, pickup, destination, travel_date, vehicle, trip_type, passengers, message)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const info = stmt.run(
    enquiry.name,
    enquiry.phone,
    enquiry.pickup,
    enquiry.destination,
    enquiry.travel_date,
    enquiry.vehicle || 'Not Specified',
    enquiry.trip_type || 'General Travel',
    enquiry.passengers || 'Not Specified',
    enquiry.message || ''
  );

  return info.lastInsertRowid;
};

export const getEnquiries = (limit = 50) => {
  const stmt = db.prepare('SELECT * FROM enquiries ORDER BY id DESC LIMIT ?');
  return stmt.all(limit);
};

export default db;
