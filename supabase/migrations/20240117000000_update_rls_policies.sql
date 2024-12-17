-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view their own messages" ON messages;
DROP POLICY IF EXISTS "Users can insert their own messages" ON messages;

-- Create new policies using the custom user_id claim
CREATE POLICY "Users can view their own messages"
ON messages FOR SELECT
USING (
  auth.jwt() ->> 'user_id' = user_id
);

CREATE POLICY "Users can insert their own messages"
ON messages FOR INSERT
WITH CHECK (
  auth.jwt() ->> 'user_id' = user_id
);
