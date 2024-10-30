class Result {
  body: string;
  status: number;

  constructor() {
    this.body = "";
    this.status = 200; // default status
  }
}

class CgiVariables {
  action: string;
  includeId: string;
  key: string;

  constructor() {
    this.action = "";
    this.includeId = "";
    this.key = "";
  }
}

class EventData {
  type: number;
  inputValues: Record<string, any>;
  blockExecution: boolean;
  navigateTo: string;
  message: string;
  showDialog: string;
  outputValues: Record<string, any>;
  stateValues: Record<string, any>;
  exception: string;
  cgiVariables: CgiVariables;
  cgiContent: string;
  headers: Record<string, any>;
  traceExecution: boolean;

  constructor() {
    this.type = 0; // default type
    this.inputValues = {};
    this.blockExecution = false;
    this.navigateTo = "";
    this.message = "";
    this.showDialog = "";
    this.outputValues = {};
    this.stateValues = {};
    this.exception = "";
    this.cgiVariables = new CgiVariables();
    this.cgiContent = "";
    this.headers = {}; // Initialize headers
    this.traceExecution = false; // default traceExecution
  }
}

class Variables {
  activeUser: string;
  developmentMode: string;
  includeId: string;

  constructor() {
    this.activeUser = "";
    this.developmentMode = "";
    this.includeId = "";
  }
}

class Context {
  classes: Record<string, any>;
  result: Result;
  vars: Record<string, any>;
  funcs: Record<string, Function>;
  variables: Variables;
  eventData: EventData;

  constructor() {
    this.classes = {};
    this.result = new Result();
    this.vars = {};
    this.funcs = {};
    this.variables = new Variables();
    this.eventData = new EventData();
  }
}

// Usage
export const context = new Context();