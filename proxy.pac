function FindProxyForURL(url, host) {
    HTTPS = "HTTPS targpatrol.local:4200"

    if (shExpMatch(host,"*.targpatrol.local")) {
        return HTTPS;
    }
    return "DIRECT";
}
