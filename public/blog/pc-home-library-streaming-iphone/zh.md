# 将 Windows PC 漫画库串流至 iPhone — 家中 Wi-Fi 与外出 5G 全支持

您的漫画收藏存放在 Windows PC 上。数百 GB 的 CBZ、EPUB 和 PDF 文件，按照您喜欢的方式整理得井井有条。iPhone 只有 64 GB 存储空间，大部分已经被占用。最直接的解决方案——复制文件——意味着要维护两份副本、不断面临空间不足，以及每次添加新内容时都要重新传输。

[BiblioFuse](https://bibliofuse.com/zh/) 提供了不同的解决方式。适用于 Windows 的 BiblioFuse PC Reader 内置了流媒体服务器。iPhone 直接连接 PC 并按需加载页面——没有任何复制，没有任何上传，iPhone 存储空间保持充裕。Mac 用户一直享有的这项功能，现已在 Windows 上原生支持，可从 Microsoft Store 下载。

## PC 库串流的工作原理

BiblioFuse PC Reader 在您的 Windows 机器上运行本地 HTTP 服务器。当 iPhone 和 PC 处于同一 Wi-Fi 网络时，iOS 应用会通过 Bonjour 自动发现 PC——这与 AirPrint 和 AirDrop 使用的零配置网络协议相同。您的书库会出现在 iPhone 上，无需输入 IP 地址，也无需配置路由器。

打开某个卷册时，BiblioFuse 会立即获取前几页，并在您阅读时预加载后续页面。CBZ 和 CBR 文件逐页传输；EPUB 和 PDF 文件使用 HTTP Range 请求，使大文件无需完整下载即可快速打开。阅读体验——从右到左模式、条漫竖向滚动、横屏双页视图——与阅读本地文件完全相同。唯一的区别是数据的来源。

关闭应用窗口后服务器依然运行。它会最小化到系统托盘而非退出。这意味着即使您在用 PC 做其他事情，iPhone 仍可访问您的书库。双击托盘图标可恢复窗口；右键点击图标并选择"退出"可完全停止服务器。

## 第一部分：家庭 Wi-Fi 串流

这是最简单的配置。您的 PC 和 iPhone 在同一网络上，BiblioFuse 自动处理发现过程。

### 在 PC 上

1. 从 Microsoft Store 下载并安装 **BiblioFuse PC Reader**。
2. 打开应用，进入**设置 → 家庭书库**。
3. 点击**添加文件夹**，选择存放漫画和电子书的文件夹。您可以添加多个文件夹——漫画一个、图像小说一个、PDF 一个。
4. 启用**共享书库**。服务器立即在端口 7341 上启动，并开始在后台扫描书库。
5. 可选：在设置 → 安全中设置**密码**以保护访问。若跳过此步骤，局域网内任何人均可连接——家庭使用没问题，但在共享或公共 Wi-Fi 上建议启用保护。
6. 可以关闭窗口。服务器在系统托盘中持续运行。

### 在 iPhone 上

1. 打开 iPhone 上的 **[BiblioFuse](https://bibliofuse.com/zh/)**。
2. 点击**书库**标签。
3. 点击顶部的来源选择器——若 PC 正在运行且共享已启用，几秒内即可看到 **PC 家庭书库**。
4. 点击它。PC 的文件夹结构立即显示。

配置完成。整个书库现在可在 iPhone 上浏览和阅读，无需将任何文件传输到设备。当您在 PC 上添加新卷册时，下次刷新书库时它们即会出现在 iPhone 视图中——无需重新同步。

### 支持的格式

BiblioFuse PC Reader 可串流所有本地可读格式：**CBZ、CBR、EPUB、PDF 和 TXT**。CBZ 格式的漫画、CBR 格式的图像小说、EPUB 格式的电子书、PDF 格式的扫描书籍——均通过同一串流连接支持。

### 性能优化建议

**使用 5 GHz Wi-Fi。** 若路由器同时支持 2.4 GHz 和 5 GHz，确保 PC 和 iPhone 均连接到 5 GHz 频段。对于高分辨率大体积 CBZ 文件，更高的带宽有显著改善。

**书库存放于 SSD 更快。** 若漫画收藏存放在机械硬盘上，每个新卷册首页加载会有轻微延迟。将书库移至 SSD（内置或外置）可消除此问题。

**若 iPhone 找不到 PC：** 当共享处于活动状态时，PC 应用在设置 → 家庭书库中显示网络地址。检查 Windows 防火墙是否阻止了端口 7341。也可以在 iOS 应用的书库 → 添加服务器 → 手动中手动输入 PC 的局域网 IP 地址。

## 第二部分：外出时通过 5G 串流

家庭 Wi-Fi 串流仅在两台设备处于同一网络时有效。要从咖啡厅、酒店或任何 5G 环境访问书库，需要连接两个网络。解决方案是 [Tailscale](https://tailscale.com)——与 [BiblioFuse Tailscale 指南](/zh/blog/tailscale-remote-library-access/)中描述的配置相同。

Tailscale 在您的设备之间创建私有加密的网状网络。配置完成后，iPhone 可以像在同一局域网中一样访问 PC 的串流服务器——通过任何网络连接，无需端口转发，无需静态 IP。

### 为远程串流配置 Tailscale

**在 Windows PC 上：**

1. 从 [tailscale.com](https://tailscale.com) 或 Microsoft Store 下载 Tailscale。
2. 使用 Google、GitHub、Microsoft 或免费 Tailscale 账户登录。
3. Tailscale 与 BiblioFuse 一同在系统托盘运行。记录 PC 的 Tailscale IP 地址（以 `100.` 开头）。
4. 确保 BiblioFuse PC Reader 正在运行且书库共享已启用。

**在 iPhone 上：**

1. 从 App Store 安装 Tailscale。
2. 使用相同的 Tailscale 账户登录。
3. 启用 Tailscale VPN 开关。
4. 打开 iPhone 上的 BiblioFuse。在书库 → 添加服务器中，输入 PC 的 Tailscale IP 地址和端口 `7341`。
5. 点击连接。

BiblioFuse 在 Tailscale IP 可用时自动优先使用它，因此同一已保存连接在家（通过局域网）和外出（通过 Tailscale）时均有效。无需两个独立的连接条目。

### 使用移动数据时的预期体验

Tailscale 尽可能建立点对点连接，避免中继服务器以获得更好的性能。在典型的 5G 连接上，串流漫画页面表现良好。BiblioFuse 只发送当前页面并预加载后几页——不会一次性串流整个 CBZ 文件，因此 200 MB 的文件包不意味着 200 MB 的流量消耗。预计每页约 **1–3 MB**，具体取决于图像分辨率和服务器压缩设置。

如需在流量有限的套餐下阅读，可在出门前通过 Wi-Fi 使用 [BiblioFuse](https://bibliofuse.com/zh/) 下载单个卷册。在 iPhone 的 PC 书库视图中，点击任意卷册旁的下载图标将其缓存到本地。该卷册之后无需 Tailscale 或数据连接即可离线阅读。

## PC 与 Mac 的区别

如果您使用过 Mac 伴侣应用，从 iOS 端来看 PC 体验几乎完全相同。以下是一些 Windows 特有的差异：

- **端口：** PC 服务器使用端口 **7341**（Mac 应用默认使用 8686）。
- **发现机制：** 两者均使用 Bonjour/mDNS，服务类型为 `_bibliofuse._tcp`，iOS 以相同方式发现两者。
- **系统托盘：** 关闭窗口时 PC 应用保留在系统托盘；服务器持续运行，直到您选择退出。
- **设置文件：** PC 设置存储在 `%APPDATA%\BiblioFuse\settings.json`，如需手动检查或重置可访问此路径。
- **同时只有一台服务器活跃：** 在当前版本中，BiblioFuse iOS 连接 Mac 或 PC 服务器之一——不能同时连接两者。iOS 首先发现正在运行且处于活跃状态的那台。

有关 Mac 串流的详细信息，请参阅[通过 Wi-Fi 将 Mac 漫画库串流至 iPhone](/zh/blog/mac-home-library-streaming-iphone/)。

## 常见问题

**BiblioFuse 有 Windows 应用吗？**
有。BiblioFuse PC Reader 是原生 Windows 应用，可在 Microsoft Store 下载。它在本地读取 CBZ、CBR、EPUB、PDF 和 TXT 文件，并通过网络将完整书库串流至 iOS 应用。

**如何将 Windows PC 上的漫画串流至 iPhone？**
在 Windows 上安装 BiblioFuse PC Reader 并在设置中启用书库共享。在 iPhone 上安装 BiblioFuse。在同一 Wi-Fi 网络下，打开 iPhone 上的 BiblioFuse 并点击书库——PC 书库将通过 Bonjour 自动发现显示。无需 IP 地址或路由器配置。

**不在家时能否通过 5G 访问 PC 书库？**
可以，使用 Tailscale。在 Windows PC 和 iPhone 上安装 Tailscale，使用同一账户登录并在两台设备上启用。BiblioFuse 自动检测 Tailscale 连接并用于从任何地方访问 PC——酒店 Wi-Fi、5G、任何网络连接。

**从 PC 串流会占用 iPhone 存储空间吗？**
不会。页面按需从 PC 获取；除应用本身和阅读进度数据外，iPhone 上不存储任何内容。您可以浏览和阅读 500 GB 的书库，而无需在 iPhone 上占用任何文件存储空间。

**串流时 PC 必须保持开机状态吗？**
是的。串流服务器运行在 PC 上；若 PC 进入睡眠或服务器停止，iOS 连接将中断。要防止串流时休眠，请在 Windows 设置 → 电源和睡眠中将睡眠设置为"从不"，或使用 PowerToys 等工具保持机器唤醒。

**PC 串流服务器使用哪个端口？**
端口 7341。若防火墙阻止此端口上的流量，需为 BiblioFuse PC Reader 添加例外规则。

## 开始使用

[BiblioFuse PC Reader](https://bibliofuse.com/zh/) 现已在 Microsoft Store 上线。iPhone 版 BiblioFuse 可在 App Store 下载。安装两者，将 PC 应用指向您的书库文件夹，下次打开应用时您的整个收藏便已在 iPhone 上——无需数据线，无需云端，无需复制。
