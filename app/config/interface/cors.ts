export default interface AppConfigInterface {
    enable: boolean;
    exposeHeaders: string[];
    max_age: number;
    methods: string[];
    origin: boolean;
}