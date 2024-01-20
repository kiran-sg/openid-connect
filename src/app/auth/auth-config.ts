import { AuthConfig } from "angular-oauth2-oidc";

export const authConfig: AuthConfig = {
    issuer: 'http://localhost:8080/realms/myrealm',
    clientId: 'myclient',
    redirectUri: window.location.origin + '/', //'https://www.keycloak.org/app/*',
    responseType: 'code',
    scope: 'openid profile email',
};
