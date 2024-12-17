-- Add URL column to projects table
alter table if exists projects 
add column if not exists url text;
