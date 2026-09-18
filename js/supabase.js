const SUPABASE_URL = "https://supabase.com/dashboard/project/yzffffubsskcjmulxpir/settings/api-keys";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_IY9ZQIUd9NMKCQ4rKEbhdg_J3ezroMI";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);
