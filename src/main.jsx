import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ui/ErrorFallback.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace("/")}
    >
      <App />
    </ErrorBoundary>
  </StrictMode>,
);

//new bookings /checkin/out
// cabins don't have fixed prices(d/t daily),

//  they have a price range. The price range is determined by the season. The season is determined by the date. The date is determined by the booking. The booking is determined by the user. The user is determined by the login. The login is determined by the authentication. The authentication is determined by the authorization. The authorization is determined by the role. The role is determined by the permissions. The permissions are determined by the access control list (ACL). The ACL is determined by the security policy. The security policy is determined by the security requirements. The security requirements are determined by the business requirements. The business requirements are determined by the stakeholders. The stakeholders are determined by the project manager. The project manager is determined by the project sponsor. The project sponsor is determined by the executive team. The executive team is determined by the board of directors. The board of directors is determined by the shareholders. The shareholders are determined by the investors. The investors are determined by the venture capitalists (VCs). The VCs are determined by the angel investors. The angel investors are determined by the friends and family (F&F).

// Add a resturant to this hotel.
//  relate with Home page and sends pdf to guests through email.  The resturant will have a menu. The menu will have a list of dishes. The dishes will have a price. The price will be determined by the cost of ingredients. The cost of ingredients will be determined by the supplier. The supplier will be determined by the procurement team. The procurement team will be determined by the operations manager. The operations manager will be determined by the general manager. The general manager will be determined by the hotel owner. The hotel owner will be determined by the investors. The investors will be determined by the venture capitalists (VCs). The VCs will be determined by the angel investors. The angel investors will be determined by the friends and family (F&F).
