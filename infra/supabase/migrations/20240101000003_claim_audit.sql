-- Create audit log table for profile and market claims
CREATE TABLE IF NOT EXISTS claim_audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id),
    target_type TEXT NOT NULL,
    target_id UUID NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE claim_audit_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can manage claim audit logs" ON claim_audit_logs
    FOR ALL
    USING ( auth.role() = 'service_role' )
    WITH CHECK ( auth.role() = 'service_role' );
