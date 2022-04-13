export type HandlerType = {
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
};

export type ReturnType = [boolean, HandlerType];
