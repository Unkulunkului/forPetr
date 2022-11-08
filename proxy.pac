function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*")) {
    return "PROXY localhost:4200";
  }
  return "DIRECT";
}
