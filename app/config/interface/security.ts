export default interface SecurityConfigInterface {
    encryption: string;
    enable_rate_limit: boolean;
    csrf: {
        enable: boolean;
        methods: string[];
        filter_uris: string[];
        cookie_options: string[]
    };
    xss: boolean;
    sql_injection: boolean;
    command_enjection: boolean;
    sanitize_input: boolean;
    sanitize_json: boolean;
    strict_transport_security: boolean;
    safe_regex: boolean;
}