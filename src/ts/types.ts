import { ALERT, ATTRIBUTE, RACES, CLASSES, CLASSESTYPES, ALIGNMENTS } from './enums';

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

export type TableType = {
  header: string[];
  rows: string[][];
};

export type AttributesTableType = {
  [key in ATTRIBUTE]: TableType;
};

export type AdjustementsType = {
  name: ATTRIBUTE;
  value: number;
}


export type AttributesType = {
  [key in ATTRIBUTE]: number;
};

export type ContentRaceType = {
  portrait: string;
  name: RACES;
  description: string;
  "ability-adjustments": AttributesType,
  classes: CLASSES[];
  languages: string[];
  advantages: string[];
  disadvantages: string[];
  "favorite-enemies": string[];
}

export type ContentClassesType = {
  type: CLASSESTYPES;
  portrait: string;
  name: CLASSES;
  description: string;
  requisites: ATTRIBUTE[];
  requiremt: AttributesType;
  races: RACES[];
  alignments: ALIGNMENTS[];
  advantages: string[];
  disadvantages: string[];
}

export type CharType = {
  attributes: AttributesType,
  race: RACES | undefined;
  class: CLASSES | undefined;
}