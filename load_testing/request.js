import http from "k6/http";
import { check } from "k6";

export let options = {
    vus: 100,
    duration: '5s',
    tlsAuth: [
        {
            domains: ["localhost"],
            cert: open("../ssl_certificate/localhost-cert.pem"),
            key: open("../ssl_certificate/localhost-privkey.pem")
        }
    ]
};

export default function () {
    check(http.get("https://localhost:8000/health"), {
        "status is 200": (r) => r.status == 200,
        "protocol is HTTP/2": (r) => r.proto == "HTTP/2.0",
    });
}