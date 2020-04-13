// Graylog Interface
interface GraylogInterface {
  enable: boolean;
  name: string;
  level: string;
  servers?: [{
    host: string,
    port: number,
    buffer_size?: number
  }],
  handleExceptions?: boolean
}

// Logger Interface
export default interface LoggerConfigInterface {
  readonly level: {
    default: string
  };
  readonly rotate_using_date?: boolean;
  readonly logs?: {
    root_location?: string,
    levels?: string[]
  }
  readonly exitOnError: boolean;
  readonly errorStack: boolean;
  readonly defaultMeta: {
    [key: string]: any
  };
  readonly graylog: GraylogInterface
}
