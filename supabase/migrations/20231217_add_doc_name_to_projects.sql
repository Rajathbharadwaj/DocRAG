-- Add doc_name column to projects table
ALTER TABLE projects ADD COLUMN IF NOT EXISTS doc_name TEXT;
