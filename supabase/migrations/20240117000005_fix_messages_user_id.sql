-- Temporarily disable RLS
alter table messages disable row level security;

-- Drop existing messages table
drop table if exists messages;

-- Recreate messages table with text user_id
create table if not exists messages (
  id uuid default gen_random_uuid() primary key,
  project_id uuid references projects(id) on delete cascade,
  user_id text not null,
  role text not null check (role in ('user', 'assistant')),
  content text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table messages enable row level security;

-- Create policy for messages that checks project ownership
create policy "Users can access messages in their projects"
  on messages for all
  using (
    exists (
      select 1 from projects
      where projects.id = messages.project_id
      and projects.user_id = auth.jwt() ->> 'sub'
    )
  );
