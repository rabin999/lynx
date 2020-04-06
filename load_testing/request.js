import http from "k6/http";
import { check } from "k6";

export let options = {
    vus: 1000,
    duration: '10s',
    tlsAuth: [
        {
            domains: ["localhost"],
            cert: open("../ssl_certificate/localhost-cert.pem"),
            key: open("../ssl_certificate/localhost-privkey.pem")
        }
    ]
};

export default function () {
    check(http.get("https://localhost:8000/users"), {
        "status is 200": (r) => r.status == 200,
        "protocol is HTTP/2": (r) => r.proto == "HTTP/2.0",
    });
}
