function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.targpatrol.local")) {
    return "PROXY localhost:8080";
  }
  if (shExpMatch(host, "targpatrol.local")) {
    return "PROXY localhost:4200";
  }
  return "DIRECT";
}
