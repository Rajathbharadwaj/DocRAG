-- Drop existing table if it exists
drop table if exists messages;

-- Create messages table
create table if not exists messages (
  id uuid default gen_random_uuid() primary key,
  project_id uuid references projects(id) on delete cascade,
  user_id text not null,
  role text not null check (role in ('user', 'assistant')),
  content text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table messages enable row level security;

-- Create policy to allow users to view messages in their projects
create policy "Users can view messages in their projects"
  on messages for select
  using (
    exists (
      select 1 from projects
      where projects.id = messages.project_id
      and projects.user_id = auth.uid()::text
    )
  );

-- Create policy to allow users to insert messages in their projects
create policy "Users can insert messages in their projects"
  on messages for insert
  with check (
    exists (
      select 1 from projects
      where projects.id = messages.project_id
      and projects.user_id = auth.uid()::text
    )
  );
