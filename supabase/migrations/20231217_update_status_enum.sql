-- First, let's check the current status column type and constraints
DO $$ 
DECLARE
    col_type text;
BEGIN
    SELECT data_type 
    INTO col_type
    FROM information_schema.columns 
    WHERE table_name = 'projects' AND column_name = 'status';

    -- Log the current type
    RAISE NOTICE 'Current status column type: %', col_type;

    -- Drop existing constraint if any
    ALTER TABLE projects DROP CONSTRAINT IF EXISTS projects_status_check;

    -- Add new check constraint
    ALTER TABLE projects 
    ADD CONSTRAINT projects_status_check 
    CHECK (status IN ('active', 'archived', 'indexing'));
END $$;
