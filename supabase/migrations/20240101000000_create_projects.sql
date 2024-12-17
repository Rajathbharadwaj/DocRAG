-- Create projects table
create table if not exists projects (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  description text,
  user_id text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  documents_count integer default 0 not null,
  status text default 'active' not null check (status in ('active', 'archived'))
);

-- Enable Row Level Security
alter table projects enable row level security;

-- Create policy to allow users to only see their own projects
create policy "Users can view their own projects"
  on projects for select
  using (auth.uid()::text = user_id);

-- Create policy to allow users to insert their own projects
create policy "Users can insert their own projects"
  on projects for insert
  with check (auth.uid()::text = user_id);

-- Create policy to allow users to update their own projects
create policy "Users can update their own projects"
  on projects for update
  using (auth.uid()::text = user_id);

-- Create policy to allow users to delete their own projects
create policy "Users can delete their own projects"
  on projects for delete
  using (auth.uid()::text = user_id);

-- Create updated_at trigger
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

create trigger update_projects_updated_at
  before update on projects
  for each row
  execute function update_updated_at_column();
