export type GenericObject = { [key: string]: any };

export type AlertType = {
  type?: "error" | "info" | "success";
  text?: string;
};

export type CognitoUserType = {
  sub: string;
  email_verified: boolean;
  locale: string;
  email: string;
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

export type DicesType =
  | "d2"
  | "d4"
  | "d6"
  | "d8"
  | "d10"
  | "d12"
  | "d20"
  | "d100";

export type AttributeType =
  | "Strength"
  | "Dexterity"
  | "Constitution"
  | "Intelligence"
  | "Wisdom"
  | "Charisma";

export type AttributesType = {
  [key in AttributeType]: number;
};

export type ContentTableRowType = string[];

export type ContentTableType = {
  header: string[];
  rows: ContentTableRowType[];
};

export type JsonContentType = {
  [key: string]: ContentTableType;
};
