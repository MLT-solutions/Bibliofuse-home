# 适用于 iPhone、iPad 和 Android 的 Kavita 阅读应用：同步进度、书签与批注

**简短回答：** [BiblioFuse Reader](https://bibliofuse.com/zh/comicreader/) 通过 Kavita 自身的 API 连接 Kavita 服务器，而不只是 OPDS 目录。因此它可以双向同步阅读进度、同步书签，并同步 EPUB 的高亮和笔记——包括添加、编辑和删除——与你在 Kavita 网页阅读器中看到的批注完全一致。设置只需扫一次二维码。

本指南说明哪些内容会同步、哪些不会、支持哪些文件格式，以及如何在一分钟内完成连接。

## 为什么 Kavita 的进度在阅读应用里常常不同步

大多数第三方阅读器通过 OPDS 与 Kavita 通信。OPDS 是一种目录协议：它擅长列出系列和传送文件，但从设计上就不负责把阅读位置、书签或笔记写回服务器。Kavita 的官方文档也说明，使用 Kavita 服务器最完整的方式是通过它的 API。

所以，如果你曾在手机上读完一卷，却发现 Kavita 里仍显示未读，那个应用几乎可以肯定只用了 OPDS。

BiblioFuse 直接使用 Kavita API。你的系列、卷、章节、特别篇、阅读清单和合集会像在 Kavita 中一样显示，你在阅读器里的操作也会写回服务器。

## BiblioFuse 与 Kavita 之间同步的内容

| 功能 | BiblioFuse 在 Kavita 服务器上的表现 |
|---|---|
| 阅读进度 | 双向同步。打开一本书，会从 Kavita 记录的位置继续；继续阅读，Kavita 也会更新。 |
| EPUB 精确位置 | 恢复到章节内的具体位置，而不只是章节。 |
| 书签 | 漫画和 PDF 使用页面书签，EPUB 使用书内书签，均保存到 Kavita。 |
| 高亮 | EPUB 高亮通过 Kavita 的批注 API 同步，并使用你服务器上的高亮颜色。 |
| 笔记 | EPUB 笔记会同步，包括在 Kavita 网页阅读器中编写的带格式笔记。 |
| 批注管理 | 可在阅读器或批注列表中添加、编辑和删除高亮与笔记，更改会同步到服务器。 |
| 离线更改 | 先保存在设备上，待服务器可访问后再发送。 |

你在 BiblioFuse 中做的高亮和笔记会出现在 Kavita 网页阅读器的批注面板中；在网页上创建的批注，也会在你下次打开这本书时出现在 BiblioFuse 里。

## Kavita 服务器上的文件格式支持

并非每种格式都支持所有类型的同步。这取决于 Kavita 为各格式存储的内容，不是可以更改的设置。

| 格式 | 阅读 | 进度 | 书签 | 高亮 / 笔记 |
|---|---|---|---|---|
| CBZ / CBR | 串流，无需完整下载 | 同步 | 页面书签 | 不支持 |
| EPUB | 串流 | 同步（按章节内位置） | 同步 | 同步（Kavita 批注 API） |
| PDF | 支持 | 同步（按页） | 页面书签 | 不支持（Kavita 批注仅适用于 EPUB） |

实际使用中：

- **漫画（CBZ、CBR）** 逐页打开。除非你选择保存以便离线阅读，否则不会完整下载。
- **EPUB** 功能最完整：进度、书签、高亮和笔记全部同步。
- **PDF** 会同步页码和页面书签。Kavita 没有 PDF 批注存储，因此 PDF 高亮只保留在你的设备上。

## 如何在一分钟内添加 Kavita 服务器

连接服务器需要 BiblioFuse Pro，另外需要你的 Kavita 服务器地址和 Kavita 认证密钥（在 Kavita 的用户设置中找到 API 密钥或第三方客户端部分）。

### 方式一：扫描二维码（最快）

1. 在电脑上打开 [BiblioFuse Kavita 与 Komga 二维码生成器](https://bibliofuse.com/zh/tools/qr-generator/)。
2. 选择 **Kavita**，输入服务器地址并粘贴认证密钥。二维码在你的浏览器中生成，不会发送到任何地方。
3. 在手机或平板上打开 **BiblioFuse > 设置 > OPDS**，点按**二维码扫描图标**。
4. 扫描二维码。服务器会连同地址和密钥一并添加好。

请像对待密码一样对待这个二维码。它包含你的认证密钥，不要公开发布截图。

### 方式二：手动输入

打开 **BiblioFuse > 设置 > OPDS > 添加服务器**，选择 Kavita，手动输入地址（例如 `http://192.168.1.20:5000`）和认证密钥。

添加服务器后，打开书库顶部的位置面板并选择你的 Kavita 服务器。完整的[设置指南](https://bibliofuse.com/zh/guide/)为每一步提供了截图。

## 管理高亮和笔记

在 Kavita 的 EPUB 中选中文字即可高亮或添加笔记。对于 Kavita 的书，颜色选择器会显示你服务器上的五种高亮颜色，因此同一条高亮在 BiblioFuse 和 Kavita 网页阅读器中看起来一致。

- **添加：** 选中文字，然后选择“高亮”或“笔记”。
- **编辑：** 在已有高亮内选中文字并选择“编辑批注”，或在批注列表中编辑。你可以更改颜色和笔记内容。
- **删除：** 在阅读器或批注列表中移除。删除操作会发送到 Kavita。

批注列表会显示当前书中的所有高亮和笔记，支持搜索，点按任意一条即可直接跳转到对应段落。

## 支持的设备

- **iPhone、iPad 和 iPhone Duo：** 支持进度、书签和批注同步（BiblioFuse 2.1.15）。
- **Apple Vision Pro：** 原生 visionOS 应用支持 Kavita 书库、进度、书签和批注（BiblioFuse 2.1.15）。
- **Android 手机和平板：** 支持进度、书签和批注同步（BiblioFuse 2.0.16）。
- **Apple TV 和 Android TV：** 它们从你自己网络中的 BiblioFuse 主机读取内容，不连接 Kavita。

[功能对照表](https://bibliofuse.com/zh/features/)列出了各平台支持的功能以及起始版本。

## 没有 Kavita 服务器？BiblioFuse 有自己的主机

Kavita 是一款出色的服务器，但你并不一定需要它。BiblioFuse 自带适用于 Mac、Windows PC、Docker 和 Synology NAS 的免费主机。把它指向你已有的文件夹，就能通过家中 Wi-Fi，或借助 Tailscale 远程串流到其他设备上的 BiblioFuse。

值得了解的区别是：在 BiblioFuse 主机上，阅读进度、书签、高亮和笔记对**所有**受支持的格式——CBZ、CBR、PDF、EPUB 和 TXT——都能同步，因为主机自行保存批注，而不依赖服务器针对某种格式提供的功能。

| | Kavita 服务器 | BiblioFuse 主机 |
|---|---|---|
| 运行平台 | Docker、Windows、Linux、macOS | Mac、Windows PC、Docker、Synology |
| 进度同步 | CBZ、CBR、EPUB、PDF | CBZ、CBR、PDF、EPUB、TXT |
| 书签同步 | CBZ、CBR、EPUB、PDF | CBZ、CBR、PDF、EPUB、TXT |
| 高亮 / 笔记同步 | EPUB | CBZ、CBR、PDF、EPUB、TXT |
| 网页阅读器 | 有 | 有（NAS 和 Docker 主机） |
| 多用户书库服务器 | 是 | 否——个人书库主机 |

两者可以同时使用。不少读者把漫画放在 Kavita 上，再用 BiblioFuse 主机管理一个存放 PDF 或文本文件的文件夹。主机下载和设置向导请见 [BiblioFuse Reader](https://bibliofuse.com/zh/comicreader/)。

## Komga 和其他 OPDS 服务器

BiblioFuse 也可原生连接 Komga，支持阅读进度双向同步和 EPUB 精确位置。书签和批注同步仅限 Kavita，因为 Komga 没有相应的 API。其他任何 OPDS 1.x 服务器都可作为目录使用，如果服务器支持 OPDS-PSE，还可逐页串流。

如果你还在考虑把藏书放上服务器之前如何整理，可以先看看[数字漫画书库管理指南](https://bibliofuse.com/zh/blog/digital-comic-library-management-guide/)和 [CBZ、CBR 与 EPUB 格式对比](https://bibliofuse.com/zh/blog/cbz-vs-cbr-vs-epub-formats-explained/)。

## FAQ

**BiblioFuse 能与 Kavita 同步阅读进度吗?**
可以，而且是双向同步。BiblioFuse 使用 Kavita 的 API，因此书会从 Kavita 记录的位置继续，你的阅读进度也会随时写回。适用于 CBZ、CBR、EPUB 和 PDF。

**我能在 iPhone 或 iPad 上与 Kavita 同步高亮和笔记吗?**
可以，适用于 EPUB。在 BiblioFuse 中创建的高亮和笔记通过 Kavita 的批注 API 保存，并显示在 Kavita 网页阅读器中。你可以在任意一端添加、编辑和删除。

**为什么 Kavita 上的 CBZ、CBR 或 PDF 不支持高亮?**
Kavita 只为 EPUB 存储批注。漫画和 PDF 仍会同步阅读进度和页面书签。如果你需要同步 PDF 或漫画上的高亮和笔记，BiblioFuse 主机对所有格式都支持。

**从 Kavita 阅读漫画需要先下载整本吗?**
不需要。CBZ 和 CBR 逐页串流。你也可以选择保存一本书以便离线阅读。

**把 Kavita 服务器添加到 BiblioFuse 最快的方法是什么?**
在浏览器中用 BiblioFuse 二维码生成器创建二维码，然后在应用中打开 设置 > OPDS 并点按二维码扫描图标。服务器地址和认证密钥会自动填好。

**BiblioFuse 的 Kavita 支持是免费的吗?**
阅读本地文件免费。连接 Kavita、Komga 和 OPDS 服务器属于 BiblioFuse Pro，可选择按月或按年订阅，也可一次性买断终身版。

**BiblioFuse 能通过互联网连接 Kavita 吗?**
可以。如果你的 Kavita 服务器能从家庭网络之外访问——通过反向代理、VPN 或 Tailscale——输入该地址即可，BiblioFuse 的连接方式相同。

**可以同时使用 Kavita 和 BiblioFuse 主机吗?**
可以。两者都会出现在位置面板中，各自保存自己的进度、书签和批注。
