function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.targpatrol.dev")) {
    return "PROXY targpatrol.dev";
  }
  return "DIRECT";
}
