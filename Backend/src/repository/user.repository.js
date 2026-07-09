import { pool } from "../config/database.js";
import argon2 from "argon2";
import {
  SELECT_USER_BY_EMAIL_QUERY,
  INSERT_USER_QUERY,
  SELECT_USER_BY_ID_QUERY,
} from "../queries/user.query.js";

export async function createUser({ full_name, email, password }) {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    const normalizedEmail = email.trim().toLowerCase();
    const finalFullName = (full_name || "").trim();

    const passwordHash = await argon2.hash(password);

    // Insert user
    const userResult = await client.query(INSERT_USER_QUERY, [
      finalFullName,
      normalizedEmail,
      passwordHash,
    ]);
    const createdUser = userResult.rows[0];

    await client.query("COMMIT");

    return {
      id: createdUser.id,
      full_name: createdUser.full_name,
      email: createdUser.email,
      is_active: createdUser.is_active,
      created_at: createdUser.created_at,
    };
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
}

export async function findUserByEmail(email) {
  const result = await pool.query(SELECT_USER_BY_EMAIL_QUERY, [email]);
  return result.rows[0] || null;
}

export async function findUserById(id) {
  const result = await pool.query(SELECT_USER_BY_ID_QUERY, [id]);
  return result.rows[0] || null;
}
