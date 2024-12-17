-- Drop existing policies
drop policy if exists "Users can view their own projects" on projects;
drop policy if exists "Users can insert their own projects" on projects;
drop policy if exists "Users can update their own projects" on projects;
drop policy if exists "Users can delete their own projects" on projects;

-- Create a simple policy that checks if the role is authenticated
create policy "Allow authenticated users"
  on projects for all
  using (auth.role() = 'authenticated');

-- Enable RLS
alter table projects enable row level security;
