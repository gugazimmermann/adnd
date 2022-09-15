import { ALERT, ATTRIBUTE } from './enums';

export type GenericObject = { [key: string]: any };

export type AlertType = {
  type?: ALERT;
  text?: string;
};

export type CognitoUserType = {
  sub: string;
  email_verified: boolean;
  locale: string;
  email: string;
};

export type useOutletContextProfileProps = {
  user: CognitoUserType,
  loadUser: (force?: boolean) => void;
  setLoading: (loading?: boolean) => void;
};

export type useOutletContextProps = {
  setAlert: (alert: AlertType) => void;
  setTitle: (text: string) => void;
  signIn: (email: string, pwd: string, remember: boolean) => void;
  sendForgotPasswordCode: (email: string) => void;
  redefinePassword: (email: string, code: string, pwd: string) => void;
  resendConfirmationCode: (email: string) => void;
  confirmSignUp: (email: string, code: string) => void;
  signUp: (email: string, pwd: string) => void;
};

export type StateType = {
  email?: string;
  alert?: AlertType;
};

export type CharacterCreationContextType = {
  setTitle: (x: string) => void;
  setBack: (x: string) => void;
  setDescription: (x: string) => void;
  setButtonText: (x: string) => void;
  setButtonDisabled: (x: boolean) => void;
  setForward: (x: string) => void;
};

export type AttributesType = {
  [key in ATTRIBUTE]: number;
};

export type ContentTableRowType = string[];

export type ContentTableType = {
  header: string[];
  rows: ContentTableRowType[];
};

export type JsonContentTableType = {
  [key: string]: ContentTableType;
};

export type AbilityAdjustmentsType = {
  name: string;
  value: string;
}

export type ContentRaceType = {
  portait: string;
  name: string;
  description: string;
  "ability-adjustments": AbilityAdjustmentsType[],
  classes: string[];
  languages: string[];
  advantages: string[];
  disadvantages: string[];
  "favorite-enemies": string[];
}

export type CharType = {
  attributes: AttributesType,
  race: string;
  class: string;
}