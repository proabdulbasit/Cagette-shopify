import { CustomerErrorCode } from '@shopify/hydrogen-react/storefront-api-types';

export const customerErrors: Record<CustomerErrorCode, string> = {
  ALREADY_ENABLED: '',
  BAD_DOMAIN: '',
  BLANK: '',
  CONTAINS_HTML_TAGS: '',
  CONTAINS_URL: '',
  CUSTOMER_DISABLED: '',
  INVALID: '',
  INVALID_MULTIPASS_REQUEST: '',
  NOT_FOUND: '',
  PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE: '',
  TAKEN: '',
  TOKEN_INVALID: '',
  TOO_LONG: '',
  TOO_SHORT: '',
  UNIDENTIFIED_CUSTOMER: ''
};
