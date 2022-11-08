function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.dev")) {
    return "PROXY localhost:4200";
  }
  return "DIRECT";
}
