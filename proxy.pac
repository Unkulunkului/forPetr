function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.targpatrol.local")) {
    return "PROXY 0.0.0.0:8080";
  }
  if (shExpMatch(host, "targpatrol.local")) {
    return "PROXY 0.0.0.0:8080";
  }
  return "DIRECT";
}
