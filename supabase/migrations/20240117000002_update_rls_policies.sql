-- Drop existing policies
drop policy if exists "Users can view their own projects" on projects;
drop policy if exists "Users can insert their own projects" on projects;
drop policy if exists "Users can update their own projects" on projects;
drop policy if exists "Users can delete their own projects" on projects;

-- Create updated policies using jwt.claims.user_id
create policy "Users can view their own projects"
  on projects for select
  using ((current_setting('request.jwt.claims', true)::json->>'user_id') = user_id);

create policy "Users can insert their own projects"
  on projects for insert
  with check ((current_setting('request.jwt.claims', true)::json->>'user_id') = user_id);

create policy "Users can update their own projects"
  on projects for update
  using ((current_setting('request.jwt.claims', true)::json->>'user_id') = user_id);

create policy "Users can delete their own projects"
  on projects for delete
  using ((current_setting('request.jwt.claims', true)::json->>'user_id') = user_id);
