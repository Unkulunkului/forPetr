function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.targpatrol.local")) {
    return "PROXY 1.2.3.4";
  }
  return "DIRECT";
}
