import qs from 'qs';
import { AUTHORIZE_URL } from '../constants';
import { AuthorizationScope } from '../types';

export type GetAuthorizationUrlOptions = {
  scope?: AuthorizationScope[];
  show_dialog?: boolean;
  state?: string;
};

export function getAuthorizationUrl(
  clientId: string,
  redirectUri: string,
  responseType: 'code' | 'token',
  options?: GetAuthorizationUrlOptions,
) {
  return `${AUTHORIZE_URL}?${qs.stringify({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: responseType,
    ...(options?.scope && { scope: options.scope.join(' ') }),
    ...(options?.show_dialog && { show_dialog: options.show_dialog }),
    ...(options?.state && { state: options.state }),
  })}`;
}
