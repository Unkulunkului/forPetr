function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.targpatrol.local")) {
    return "PROXY google.com";
  }
  if (shExpMatch(host, "*.local*")) {
    return "google.com";
  }
  return "DIRECT";
}
