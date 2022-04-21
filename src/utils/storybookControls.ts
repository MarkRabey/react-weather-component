type ControlTypeArray = 'array';
type ControlTypeBoolean = 'boolean';
type ControlTypeNumber = 'number' | 'range';
type ControlTypeEnum =
  | 'radio'
  | 'inline-radio'
  | 'check'
  | 'inline-check'
  | 'select'
  | 'multi-select';
type ControlTypeString = 'text' | 'color' | 'date';
type ControlTypeObject = 'object';

type ControlType =
  | ControlTypeArray
  | ControlTypeBoolean
  | ControlTypeNumber
  | ControlTypeEnum
  | ControlTypeString
  | ControlTypeObject;

export interface ReturnedArg<T> {
  name: string;
  required: boolean;
  description: string;
  defaultValue: T;
  control: {
    type: ControlType;
    options?: T[];
    [K: string]: any;
  };
}

type ArgsAction = {
  action: keyof GlobalEventHandlersEventMap;
};

export type Args<K> = {
  [T in keyof K]: Partial<ReturnedArg<K[T]>> | ArgsAction;
} & {
  children?: Partial<ReturnedArg<string>>;
};

interface ArgProps {
  name: string;
  required: boolean;
  description: string;
  type: ControlType;
}

interface NumberArgProps {
  min: number;
  max: number;
  step: number;
}

/**
 * This function is just a wrapper for arguments issue with story controls
 * @param args Param arguments that are needed for the component controls
 */
export const getArgs = <K>(args: Partial<Args<K>>) => {
  return args as Record<string, Partial<ReturnedArg<K[any]>> | ArgsAction>;
};

const createControlFromProps = <T>(props: Partial<ArgProps>) => {
  const allProps: Partial<ReturnedArg<T>> = {};
  if (props.name) {
    allProps.name = props.name;
  }
  if (props.description) {
    allProps.description = props.description;
  }
  return allProps;
};

export const select = <T>(
  options: T[],
  defaultValue?: T,
  props: Partial<ArgProps> = {},
) => {
  const allProps: Partial<ReturnedArg<T>> = createControlFromProps<T>(props);
  const type = props.type || 'select';

  allProps.defaultValue = defaultValue || options[0];
  allProps.control = {type, options};
  return allProps;
};

export const boolean = (
  defaultValue?: boolean,
  props: Partial<ArgProps> = {},
) => {
  const allProps: Partial<ReturnedArg<boolean>> =
    createControlFromProps<boolean>(props);
  const type = props.type || 'boolean';

  allProps.defaultValue = defaultValue || false;
  allProps.control = {type};
  return allProps;
};

export const text = (defaultValue?: string, props: Partial<ArgProps> = {}) => {
  const allProps: Partial<ReturnedArg<string>> =
    createControlFromProps<string>(props);
  const type = props.type || 'text';

  allProps.defaultValue = defaultValue || '';
  allProps.control = {type};
  return allProps;
};

export const number = (
  defaultValue?: number,
  props: Partial<ArgProps & NumberArgProps> = {},
) => {
  const allProps: Partial<ReturnedArg<number>> =
    createControlFromProps<number>(props);

  allProps.defaultValue = defaultValue || 0;
  allProps.control = {
    type: props.type || 'number',
    min: props.min || -Infinity,
    max: props.max || Infinity,
    step: props.step || 1,
  };
  return allProps;
};

export const obj = <T extends Record<string, any> = Record<string, any>>(
  defaultValue?: T,
  props: Partial<ArgProps> = {},
) => {
  const allProps: Partial<ReturnedArg<T>> = createControlFromProps<T>(props);
  const type = props.type || 'object';

  allProps.defaultValue = (defaultValue || {}) as any;
  allProps.control = {type};
  return allProps;
};

export const action = (actionName: keyof GlobalEventHandlersEventMap) => {
  return {
    action: actionName,
  };
};
