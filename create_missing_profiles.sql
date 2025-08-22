-- Create profiles for existing auth users that don't have profiles
-- This fixes users who were created before the profiles table was properly set up

INSERT INTO profiles (id, name, email, role, created_at, updated_at)
SELECT 
    au.id,
    COALESCE(au.raw_user_meta_data->>'name', split_part(au.email, '@', 1)) as name,
    au.email,
    COALESCE(au.raw_user_meta_data->>'role', 'vendor') as role,
    au.created_at,
    NOW()
FROM auth.users au
LEFT JOIN profiles p ON p.id = au.id
WHERE p.id IS NULL  -- Only create profiles for users who don't have one
AND au.email_confirmed_at IS NOT NULL;  -- Only for confirmed users

-- Show what was created
SELECT 
    p.name,
    p.email,
    p.role,
    'Profile created' as status
FROM profiles p
JOIN auth.users au ON au.id = p.id
WHERE p.created_at >= NOW() - INTERVAL '1 minute';