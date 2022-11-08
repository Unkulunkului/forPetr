function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.local")) {
    return "PROXY localhost";
  }
  return "DIRECT";
}
