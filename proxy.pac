function FindProxyForURL(url, host) {
    HTTPS = "HTTPS targpatrol.local"

    if (shExpMatch(host,"*.targpatrol.local")) {
        return HTTPS;
    }
    return "DIRECT";
}
