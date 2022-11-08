function findProxy(url, host) {
  if (shExpMatch(host, “*targpatrol.local:4200)) {
    return "PROXY localhost:4200”;
  }
  return "DIRECT";
}
