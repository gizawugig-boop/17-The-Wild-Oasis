#The-Wild-Oasis

This template provides a minimal setup to get React working, Builtt with raect query and supabase

## Email verification codes

The signup flow opens a code-entry dialog when Supabase requires email
confirmation. In the Supabase dashboard, configure the **Confirm signup** email
template to include `{{ .Token }}` so users receive a code they can enter in
the app. Users can also open the dialog from the login page if they already
have a verification code.
