-- Drop existing policies
drop policy if exists "Allow authenticated users" on projects;
drop policy if exists "Users can view messages in their projects" on messages;

-- Create policy that matches the user_id with auth.jwt() -> sub claim
create policy "Allow authenticated users with matching ID"
  on projects for all
  using (
    auth.jwt() ->> 'sub' = user_id
  );

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
