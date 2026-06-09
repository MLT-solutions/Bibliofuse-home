# 通过 Wi-Fi 将 Mac 漫画库串流到 iPhone（无需复制文件）

BiblioFuse Mac Home Library 让你通过 Wi-Fi 将整个 Mac 漫画和电子书收藏串流到 iPhone 或 iPad，无需将任何文件复制到设备，也不占用 iPhone 存储空间。支持 CBZ、CBR、EPUB、PDF 和 TXT 格式，适用于运行 iOS 17 或更高版本的 iPhone 或 iPad 与 Mac 在同一 Wi-Fi 网络下——无需任何特殊网络配置。

你的 Mac 硬盘存有 400GB 的 CBZ 和 EPUB 文件，iPhone 却只有 64GB 总空间，大部分已被占用。iCloud 同步太慢，还占用存储空间；Wi-Fi Transfer 逐个导入文件又太繁琐。

[BiblioFuse](/zh/) 的 Mac Home Library 功能用完全不同的方式解决这个问题：不是把文件复制到手机，而是实时串流。Mac 充当本地服务器，iPhone 按需读取页面，无需复制任何内容。只要在同一 Wi-Fi 网络下，你就能在 iPhone 上访问全部 400GB 的库。

## 什么是 Mac Home Library

Mac Home Library 是本地串流功能，而非同步功能。区别很重要。

**同步**（如 iCloud）会把文件复制到设备上。要同步 400GB，iPhone 需要 400GB 的空余空间——大多数人根本没有这么多。

**串流**不复制任何内容。文件留在 Mac 上，iPhone 在你阅读时按需获取页面。当你在 iPhone 的 Mac Library 视图中点击某个卷册时，[BiblioFuse](/zh/) 会通过本地网络请求相应页面。iPhone 上占用的存储空间：几乎为零。

## 所需条件

- iPhone（iOS 17 或更高版本）
- Mac 与 iPhone 在同一 Wi-Fi 网络下
- 两台设备均安装 [BiblioFuse](/zh/)（iOS 应用和 Mac 伴侣应用）
- 漫画库存储在 Mac 本地

## 设置 Mac Home Library

设置约需两分钟，无需特殊网络配置。

**在 Mac 上：**

1. 打开 **BiblioFuse**（Mac 伴侣应用）。
2. 前往**偏好设置 → Home Library**。
3. 点击**启用 Home Library 共享**。
4. 若 macOS 请求本地网络权限，点击**允许**。
5. 你会看到类似 `bibliofuse.local:8765` 的本地地址——这是 iPhone 连接 Mac 时使用的地址。

**在 iPhone 上：**

1. 打开 iPhone 上的 **BiblioFuse**。
2. 点击底部的**书库**标签。
3. 点击顶部的来源选择器，你会看到 **Mac Home Library** 出现在本地书库旁边。
4. 点击 **Mac Home Library**。Mac 开机且共享已启用时，连接几秒内即可建立，Mac 上的全部书库随即显示。

无需配置 IP 地址、路由器设置或端口转发。BiblioFuse 使用 Bonjour 在本地网络上自动发现 Mac。

## 浏览与阅读

iPhone 上的 Mac Library 视图会镜像 Mac 上的文件夹结构。若你按系列整理漫画，手机上也会看到相同的文件夹。

点击系列文件夹浏览卷册，点击卷册即可打开。BiblioFuse 会立即获取前几页开始渲染。在 5GHz Wi-Fi 网络下，单页加载时间通常不足一秒，即使是高分辨率的大型 CBZ 文件也不例外。

阅读体验与本地存储的卷册完全一致：漫画的从右到左模式、条漫的垂直滚动、横屏双页展示，以及缩放和平移操作。

## 阅读进度同步

Mac Home Library 会话的阅读进度通过 iCloud 同步，与本地存储卷册的进度同步方式相同。你在串流阅读到第 87 页后，iPhone 会记录该进度并推送至 iCloud，下次在 iPad 上打开同一卷册时，会直接跳到第 87 页。

## 与 Wi-Fi Transfer 和 iCloud Sync 的区别

[BiblioFuse](/zh/) 的这三项功能各有用途：

- **Wi-Fi Transfer** 将文件从 Mac 传到 iPhone，适合构建本地收藏。
- **iCloud Sync** 通过苹果云存储保持设备间同步，适合中等规模的书库。
- **Mac Home Library** 串流而不传输，适合在家通过 Wi-Fi 访问完整书库，不占用 iPhone 存储。

## 使用技巧

**使用 5GHz Wi-Fi**，确保 Mac 和 iPhone 都连接到 5GHz 频段，大型 CBZ 文件的加载速度会更快。

**保持 Mac 不休眠**。Mac 休眠会断开串流连接。在**系统设置 → 电池 → 接通电源时防止休眠**中进行设置。

**书库在 SSD 上读取更快**。若书库存储在外置机械硬盘，首次加载可能略有延迟；SSD 可消除这一问题。

## 离线阅读

出门前，你可以将部分卷册从 Mac 库下载到 iPhone，以便离线阅读。在 Mac Library 视图中，点击卷册旁边的**下载图标**，BiblioFuse 会通过 Wi-Fi Transfer 将其复制到 iPhone 本地存储。

## 开始使用

[BiblioFuse](/zh/) 可在 App Store 免费下载，适用于 iPhone 和 iPad。Mac Home Library 是标准功能，无需额外购买。在 Mac 和 iPhone 上安装应用，在 Mac 偏好设置中启用共享，下次连接到同一网络时，即可访问你的完整书库。


## 常见问题

**BiblioFuse 的 Mac Home Library 是什么？**
Mac Home Library 是 BiblioFuse 的功能，通过 Wi-Fi 将你的整个 Mac 漫画和电子书库直接串流到 iPhone 或 iPad，不会将任何文件复制到设备，因此不占用 iPhone 存储空间。需要在 Mac 和 iPhone 上均安装 BiblioFuse，且两台设备在同一 Wi-Fi 网络（或使用 Tailscale 进行远程访问）。

**Mac Home Library 使用多少 iPhone 存储空间？**
CBZ 和 CBR 文件按需逐页串流，使用零存储空间。EPUB 和 TXT 文件会临时下载到设备以供阅读。你可以在不使用 iPhone 存储空间的情况下浏览和阅读数百 GB 的收藏。

**可以在家外访问 Mac Home Library 吗？**
可以，使用 Tailscale。Tailscale 在设备之间创建私有加密网络，让 iPhone 从移动数据或公共 Wi-Fi 也能访问你的 Mac。没有 Tailscale，连接只在同一本地 Wi-Fi 网络内有效。

**使用 Mac Home Library 时阅读进度会同步吗？**
会。串流会话的阅读进度保存在 Mac 的本地数据库中。如果为 BiblioFuse 启用了 iCloud，进度会像往常一样同步到其他设备。

**Mac Home Library 支持所有文件格式吗？**
CBZ 和 CBR 逐页串流——无需下载完整文件即可立即打开。EPUB 和 TXT 文件先下载到设备再打开。BiblioFuse 支持的所有格式均可通过 Mac Home Library 使用。
