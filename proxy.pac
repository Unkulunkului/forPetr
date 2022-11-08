function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.dev:4200")) {
    return "PROXY localhost";
  }
  if (shExpMatch(host, "*dev:4200*")) {
    return "PROXY localhost";
  }
  if (shExpMatch(host, "*.dev")) {
    return "PROXY localhost:4200";
  }
  if (shExpMatch(host, "*.dev:4200")) {
    return "PROXY localhost:4200";
  }
  if (shExpMatch(host, "*dev:4200*")) {
    return "PROXY localhost:4200";
  }
  if (shExpMatch(host, "*.dev")) {
    return "PROXY localhost:4200";
  }
  if (shExpMatch(host, "*dev*")) {
    return "PROXY localhost:4200";
  }
  if (shExpMatch(host, "*dev")) {
    return "PROXY localhost:4200";
  }
  if (shExpMatch(host, "*.dev")) {
    return "PROXY localhost:4200";
  }
  if (shExpMatch(host, "*dev*")) {
    return "PROXY localhost:4200";
  }
  if (shExpMatch(host, "*dev")) {
    return "PROXY localhost:4200";
  }
  if (shExpMatch(host, "*.dev")) {
    return "PROXY localhost:4200";
  }
  if (shExpMatch(host, "*dev*")) {
    return "PROXY localhost:4200";
  }
  if (shExpMatch(host, "*dev")) {
    return "PROXY targpatrol.dev:4200";
  }
  if (shExpMatch(host, "*dev")) {
    return "HTTPS targpatrol.dev:4200";
  }
  return "DIRECT";
}
