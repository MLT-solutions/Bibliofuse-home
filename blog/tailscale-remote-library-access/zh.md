# 使用 BiblioFuse 和 Tailscale 远程访问家中的漫画库

你正在出差，晚上 10 点坐在酒店房间里，无书可读。你所有的漫画收藏——800 册，按你喜欢的方式整理得井井有条——正躺在家里连接着 Mac 的外置硬盘里。通常情况下，你只能等回家后再看。现在不用了。

BiblioFuse 的家庭库串流功能让你的 iPhone 可以像在同一 Wi-Fi 网络中一样连接到你的 Mac，即使你在世界的另一端。让这一切成为可能的桥梁是 Tailscale——一款零配置的 VPN 网状网络，在后台静默运行，无需端口转发、静态 IP 或任何路由器配置。

## 为什么"上传到云端"不是答案

显而易见的替代方案是将你的库同步到 iCloud、Dropbox 或 Google Drive。这对小型收藏有效。一旦规模扩大，就行不通了：

- 1 TB 的漫画库通过家庭宽带上传需要数周时间。
- 这种规模的云存储每月费用在 50–150 元不等，且无限期持续。
- 你失去了控制权：每一本漫画的每一页都保存在别人的服务器上。

Tailscale 的方式什么都不上传。你的库留在 Mac 上，iPhone 通过加密隧道按需获取页面。你无需为存储付费，文件永远在你的掌控之中。

## BiblioFuse 家庭串流的工作原理

macOS 版 BiblioFuse 内置了一个 HTTP 服务器，iPhone 应用可以连接到它。当两台设备处于同一 Wi-Fi 网络时，iPhone 可以浏览 Mac 库、在阅读时串流页面，并同步阅读进度——而无需复制任何文件。

Tailscale 将这个本地网络延伸到你所在的任何地方，让 Mac 的私有 IP 地址从你账号下任何运行 Tailscale 的设备上都可以访问，并且全程端对端加密。

## Tailscale 的工作原理

Tailscale 基于 WireGuard 构建，这是一款以快速和密码学安全著称的现代 VPN 协议。它创建了一个点对点的网状网络：每台设备直接连接到你账号下的其他设备，无需通过中央服务器路由流量。

整个设置大约需要 5 分钟，不需要访问路由器。

## 分步设置

### 在你的 Mac 上

1. 从 [tailscale.com](https://tailscale.com) 或 Mac App Store 下载 Tailscale。
2. 用 Google、GitHub、Microsoft 登录，或创建免费的 Tailscale 账号。
3. 记下你 Mac 的 Tailscale IP 地址（例如 `100.x.x.x`）。
4. 打开 Mac 上的 BiblioFuse，进入**偏好设置 → 家庭库服务器**。
5. 启用服务器。默认端口为 `8686`。

### 在你的 iPhone 上

1. 从 App Store 安装 Tailscale。
2. 登录与 Mac 相同的 Tailscale 账号。
3. 开启 Tailscale VPN 开关。
4. 打开 iPhone 上的 [BiblioFuse](https://bibliofuse.com/zh/)，进入**资料库 → 连接到 Mac**。
5. 输入你 Mac 的 Tailscale IP 地址和端口 `8686`。
6. 点击连接，Mac 库立即出现。

## 性能与带宽

Tailscale 在可能的情况下建立直接点对点连接。在典型的酒店 Wi-Fi 或移动网络（20–50 Mbps）下，串流漫画页面运行流畅。BiblioFuse 只发送当前页面并预加载后续几页。

## 隐私与安全

Tailscale 连接通过 WireGuard 进行端对端加密。没有其他人可以访问你的 BiblioFuse 服务器。你的文件永远不会经过任何第三方服务器。

## 常见问题

**Mac 需要保持开机状态吗？**
是的。BiblioFuse 在 Mac 处于活跃状态时运行。在系统设置 → 电池中关闭自动休眠。

**通过手机数据也能用吗？**
可以。Tailscale 适用于任何网络连接。串流漫画每页大约消耗 1–3 MB。

**可以连接多台 Mac 吗？**
可以。将每台 Mac 添加到你的 Tailscale 账号，并在 BiblioFuse 中保存为不同连接。

**Tailscale 收费吗？**
有免费套餐，支持最多 3 个用户和 100 台设备——个人使用绰绰有余。

## 开始使用

如果你还没有 [BiblioFuse](https://bibliofuse.com/zh/)，请从 App Store 下载 iPhone 和 iPad 版本，从 Mac App Store 下载 macOS 版本。Tailscale 在 [tailscale.com](https://tailscale.com) 免费下载。

两者结合，让你的家庭漫画库如影随形——无需将任何文件上传到云端。
