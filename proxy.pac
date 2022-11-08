function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*patrol*")) {
    return "PROXY localhost";
  }
  return "DIRECT";
}
