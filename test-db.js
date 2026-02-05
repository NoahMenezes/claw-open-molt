
import { createClient } from '@libsql/client';
import dotenv from 'dotenv';

dotenv.config();

const url = process.env.DATABASE_URL;
const authToken = process.env.DATABASE_AUTH_TOKEN;

async function testConnection() {
  if (!url) {
    console.error('DATABASE_URL is not defined');
    process.exit(1);
  }

  console.log(`Connecting to ${url}...`);
  const client = createClient({
    url,
    authToken,
  });

  try {
    const rs = await client.execute('SELECT 1');
    console.log('Successfully connected to the database!');
    console.log('Result:', rs.rows);
  } catch (err) {
    console.error('Failed to connect to the database:');
    console.error(err);
    process.exit(1);
  } finally {
    client.close();
  }
}

testConnection();
