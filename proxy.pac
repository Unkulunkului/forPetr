function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.dev:4200")) {
    return "PROXY 192.168.100.1";
  }
  if (shExpMatch(host, "*dev:4200*")) {
    return "PROXY 192.168.100.1";
  }
  if (shExpMatch(host, "*.dev")) {
    return "PROXY 192.168.100.1:4200";
  }
  if (shExpMatch(host, "*.dev:4200")) {
    return "PROXY 192.168.100.1:4200";
  }
  if (shExpMatch(host, "*dev:4200*")) {
    return "PROXY 192.168.100.1:4200";
  }
  if (shExpMatch(host, "*.dev")) {
    return "PROXY 192.168.100.1:4200";
  }
  if (shExpMatch(host, "*dev*")) {
    return "PROXY 192.168.100.1:4200";
  }
  if (shExpMatch(host, "*dev")) {
    return "PROXY 192.168.100.1:4200";
  }
  if (shExpMatch(host, "*.dev")) {
    return "PROXY 192.168.100.1:4200";
  }
  if (shExpMatch(host, "*dev*")) {
    return "PROXY 192.168.100.1:4200";
  }
  if (shExpMatch(host, "*dev")) {
    return "PROXY 192.168.100.1:4200";
  }
  if (shExpMatch(host, "*.dev")) {
    return "PROXY 192.168.100.1:4200";
  }
  if (shExpMatch(host, "*dev*")) {
    return "PROXY 192.168.100.1:4200";
  }
  if (shExpMatch(host, "*dev")) {
    return "PROXY 192.168.100.1:4200";
  }
  if (shExpMatch(host, "*dev")) {
    return "HTTPS 192.168.100.1:4200";
  }
  return "DIRECT";
}
