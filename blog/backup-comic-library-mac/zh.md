# 如何在 Mac 上备份你的漫画库：外接硬盘、NAS 与云端方案

BiblioFuse 将你的漫画和电子书——EPUB、CBZ、CBR、PDF、ZIP、RAR 和 TXT——存储在 iPhone、iPad 和 Mac 上，并通过 Wi-Fi 直接将 Mac 库串流到 iPhone，无需复制文件。要备份 Mac 上的漫画库，你可以使用 Time Machine 配合外接硬盘或 NAS，将文件复制到 iCloud Drive 或 Dropbox 等云存储，或者使用任何能镜像标准文件夹的备份工具。BiblioFuse 的阅读进度会通过 iCloud 自动同步，你在每本书中的阅读位置始终得到保留。

## 为什么备份漫画库如此重要

想象一下：你花了五年时间下载正版购买的作品、扫描实体收藏，精心整理了数百卷 CBZ、CBR、EPUB 和 PDF 文件。某个星期二早上，Mac 的内置硬盘突然故障。没有任何警告。没有第二次机会。一切都消失了。

或者你正在换新 Mac，不确定迁移助理能否正确迁移你的库，或者是否要在你模糊记得于 2021 年创建的各种文件夹中寻找文件。

无论哪种情况，当你的库值得保护时，制定合理的备份策略绝不是可选项。

## 为什么漫画库比你想象的更难替换

音乐和照片有串流服务和云同步作为安全网。漫画和漫画单行本则完全不同。无 DRM 的文件——你购买的 CBZ 文件、Humble Bundle 的 EPUB 图画小说、你好不容易找到的同人志——一旦丢失就无法复原。出版商不会永远维护下载库。同人翻译档案会消失。你自己扫描的实体书无法重新扫描。

一个认真的数字漫画收藏轻松就能达到 50 GB、200 GB 甚至更多。这比大多数照片库还要大，远超典型的音乐库。文件体积庞大，意味着意外删除的后果更为严重：在一个拥有 800 卷的文件夹中，你可能三个月后才会发现某一卷 CBZ 已经不见了。

## 如何在 Mac 上备份你的漫画库

以下方法可以独立使用，也可以组合使用。同时采用两种方法——本地备份加云端备份——可以获得双重冗余保障。

### 方法一：Time Machine（适合大多数用户）

Time Machine 是备份整个 Mac（包括漫画库）最简单的方式。

1. 将外接 HDD、SSD 或 NAS 连接到 Mac。
2. 打开**系统设置 → 通用 → Time Machine**。
3. 点击**添加备份磁盘**，选择你的外接硬盘或 NAS。
4. Time Machine 每小时自动备份一次，保留过去 24 小时的每小时快照、过去一个月的每日快照，以及磁盘满之前的每周快照。

Time Machine 支持版本历史，因此如果你不小心删除了某卷或覆盖了某个文件夹，可以恢复到出错前的精确版本。除初始设置外无需任何额外配置。

### 方法二：手动复制到外接硬盘

对于希望拥有一份便携式独立库的读者来说，手动复制到外接硬盘速度快，且不需要任何软件。

1. 打开 **Finder**，导航到 BiblioFuse 的库文件夹。默认位置是 `~/Library/Containers/com.modernlogic.bibliofuse/Data/Documents/`，但你可能已经指向了自定义文件夹。
2. 选中该文件夹，将其拖到外接硬盘上。
3. 每次添加大量新卷时重复此操作。

此方法最好与 Time Machine 配合使用，而非单独使用。手动复制提供一块可以带到异地存放的便携硬盘；Time Machine 则提供版本历史。

### 方法三：云存储（iCloud Drive、Dropbox、Google Drive）

如果你希望在多台 Mac 上访问库，或将云存储作为异地备份，云存储是理想选择。

**iCloud Drive：**
1. 将漫画库文件夹移动到 `~/Library/Mobile Documents/com~apple~CloudDocs/`（Finder 中你的 iCloud Drive 文件夹）。
2. 文件会自动同步到 Apple 服务器以及使用相同 Apple ID 登录的其他任何 Mac。
3. 仅在 Mac 磁盘空间有限时才在 iCloud 设置中启用**优化 Mac 储存空间**——否则请保留完整的本地副本。

**Dropbox 或 Google Drive：**
1. 将库文件夹移动到 Mac 上的 Dropbox 或 Google Drive 文件夹。
2. 桌面客户端会自动同步更改。
3. 请注意，大型库（100 GB 以上）会占用大量云存储配额。

云同步不能替代本地备份。如果你不小心删除了文件，云端回收站通常只保留 30 天。

### 方法四：NAS（网络附属存储）

对于大型收藏，NAS 是最佳解决方案。来自 Synology、QNAP 或类似厂商的设备连接到家庭网络，提供数 TB 的冗余存储。

1. 在 Finder 中挂载 NAS 共享：**前往 → 连接服务器**，输入 `smb://[NAS-IP]/[共享名称]`。
2. 使用 **rsync** 进行自动同步。打开终端并运行：

```
rsync -av --delete ~/漫画库路径/ /Volumes/NAS-Share/漫画库/
```

3. 将此命令设置为每日 cron 任务，或使用 **Hazel** 或 **Automator** 等工具自动触发。

具有 RAID 冗余的 NAS 意味着即使阵列中一块硬盘故障，你的数据也能存活。将其与指向 NAS 共享的 Time Machine 配合使用，可同时获得冗余和版本管理两大优势。

### 了解 BiblioFuse 的 Mac Home Library 功能

[BiblioFuse](/zh/) 包含 Mac Home Library 功能，可将漫画从 Mac 上的文件夹直接串流到 iPhone 或 iPad，通过 Wi-Fi 传输——无需复制文件、无需同步、不占用设备存储空间。

这是一项串流功能，而非备份功能。文件存储在 Mac 上。如果 Mac 硬盘故障，iPhone 就没有任何内容可以串流。**你仍然需要使用上述一种或多种方法备份 Mac 上的源文件夹。**

要找到 BiblioFuse 正在串流的文件夹，在 Mac 上打开 BiblioFuse，查看**设置 → Home Library**。该路径是你需要纳入备份策略的路径。

## 保持库整洁的实用技巧

**使用 Finder 定位库文件夹。** 在 Mac 上按 **⌘ + 空格**，输入 `~/Library/Containers/com.modernlogic.bibliofuse`，直接跳转到应用容器。你的文件位于 `Data/Documents/` 子文件夹中。

**使用 rsync 进行增量 NAS 备份。** `--delete` 标志确保你的 NAS 副本与 Mac 完全一致，删除你在本地已删除的卷。每周运行一次，或在批量导入后运行。

**使用 iCloud Drive 自动进行异地备份。** 如果你的库小于 50 GB 且拥有 iCloud+ 计划，将库存储在 iCloud Drive 中是 Mac 上阻力最小的异地备份方式。

**将阅读进度与文件分开考虑。** [BiblioFuse](/zh/) 通过 iCloud 自动同步阅读进度——你无需单独备份。将备份策略的重点放在源文件本身上。

## 常见问题解答

**BiblioFuse 在 Mac 上将我的漫画存储在哪里？**
默认情况下，BiblioFuse 在 Mac 上管理的文件存储在 `~/Library/Containers/com.modernlogic.bibliofuse/Data/Documents/`。如果你将应用指向了自定义文件夹，该文件夹就是你的库根目录。无论哪种情况，路径都可以在 Mac 版 BiblioFuse 的设置中查看。

**Time Machine 会自动备份 BiblioFuse 库吗？**
会。Time Machine 默认备份整个 Mac，包括 BiblioFuse 存储文件的应用容器。如果你在容器外使用自定义库文件夹，请确保该文件夹未被添加到 Time Machine 的排除列表中。

**我能将漫画库迁移到新 Mac 而不丢失阅读进度吗？**
可以。将漫画库文件夹复制到新 Mac，并使用相同的 Apple ID 登录。BiblioFuse 会从 iCloud 恢复你的阅读进度。在新 Mac 上将应用指向相同的相对文件夹路径，你的库将完全恢复原样。

**iCloud Drive 是大型漫画库的安全备份选项吗？**
iCloud Drive 是可靠的异地备份，但不能替代本地备份。如果你删除了文件，iCloud 会在最近删除文件夹中保留 30 天。对于大型收藏，外接硬盘或 NAS 仍然不可或缺。

**如何自动化 rsync 到 NAS 的备份？**
打开**终端**，运行 `crontab -e`。添加类似 `0 2 * * * rsync -av --delete ~/漫画/ /Volumes/NAS/漫画/` 的行，每晚凌晨 2 点执行同步。将路径替换为你实际的库路径和 NAS 挂载路径。

**如果 Mac 硬盘故障，我的漫画会怎样？**
如果你有最新的 Time Machine 备份，可以将整个库恢复到新硬盘或新 Mac。如果在外接硬盘或 NAS 上有手动副本，这些文件完好无损，可以直接复制。没有备份的话，文件将无法恢复——这正是在故障发生前设置备份至关重要的原因。

## 立即开始保护你的库

花费数年时间积累的漫画库，值得与任何其他无价数字收藏同等对待。现在最快的行动是接上外接硬盘并启用 Time Machine——仅此一步就能保护你免受硬件故障的影响。再添加云备份作为异地保护，以及 NAS 应对大型收藏。

[BiblioFuse](/zh/) 让你在 iPhone、iPad 和 Mac 上轻松阅读你的库。配合完善的备份策略，无论硬件如何更迭，你的收藏都能得到妥善保护。
