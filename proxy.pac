function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.targpatrol.dev")) {
    return "PROXY 127.0.0.1:443";
  }
  return "DIRECT";
}
