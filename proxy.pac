function findProxy(url, host) {
  if (shExpMatch(url, "https://*targpatrol.local:4200/*")) {
    return "PROXY https://localhost:4200”;
  }
  if (shExpMatch(url, "https://*targpatrol.local:4200*")) {
    return "PROXY https://localhost:4200”;
  }
  return "DIRECT";
}
