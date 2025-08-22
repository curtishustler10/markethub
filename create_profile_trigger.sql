-- Create a database trigger to automatically create profiles when users confirm their email
-- This ensures profiles are always created, even if the callback route doesn't work

-- Function to create profile after email confirmation
CREATE OR REPLACE FUNCTION create_profile_on_signup()
RETURNS TRIGGER AS $$
BEGIN
    -- Only create profile when email_confirmed_at changes from NULL to a value
    IF OLD.email_confirmed_at IS NULL AND NEW.email_confirmed_at IS NOT NULL THEN
        INSERT INTO profiles (id, name, email, role, created_at, updated_at)
        VALUES (
            NEW.id,
            COALESCE(NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)),
            NEW.email,
            CASE 
                WHEN NEW.raw_user_meta_data->>'role' = 'market_organizer' THEN 'market_organizer'::user_role
                WHEN NEW.raw_user_meta_data->>'role' = 'admin' THEN 'admin'::user_role
                ELSE 'vendor'::user_role
            END,
            NEW.created_at,
            NOW()
        )
        ON CONFLICT (id) DO NOTHING;  -- Prevent duplicates if profile already exists
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS on_auth_user_confirmed ON auth.users;

-- Create trigger on auth.users table
CREATE TRIGGER on_auth_user_confirmed
    AFTER UPDATE ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION create_profile_on_signup();