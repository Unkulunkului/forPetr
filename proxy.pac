function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.targpatrol.local")) {
    return "PROXY 127.0.0.1";
  }
  return "DIRECT";
}
