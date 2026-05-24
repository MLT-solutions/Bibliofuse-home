# BiblioFuse如何通过iCloud在iPhone、iPad和Mac间同步阅读进度

你在上班途中用iPhone读漫画——翻到第80页，到家后切换到iPad，却要翻找页面缩略图才能找到之前的位置。或者在Mac上读完一章，第二天早上拿起iPhone，发现还停在第一页。

阅读进度同步听起来简单，但在大多数阅读器中都存在微妙的失效问题。[BiblioFuse](/zh/)使用iCloud同步你的精确阅读位置——页码、阅读方向和显示设置——在iPhone、iPad和Mac之间自动完成，无需手动操作。

## 为何阅读进度同步难以做好

简单的方法——在云端文档中保存页码——会以多种方式失效：无法处理不同编码下页数不同的情况，不同步阅读方向，也没有跨设备持久标记"已读"状态的机制。

[BiblioFuse](/zh/)将进度数据存储为与文件内容哈希值绑定的元数据，而非文件名。这意味着即使你重命名CBZ文件或在文件夹间移动，进度数据在任何设备上都能正确匹配。

## 设置iCloud同步

**iPhone或iPad**：进入系统**设置** → Apple ID → **iCloud** → **iCloud Drive**，找到**BiblioFuse**并确认开关已开启。

**Mac**：打开**系统设置 → Apple ID → iCloud**，启用iCloud Drive并确认BiblioFuse在列表中。

完成后BiblioFuse自动处理一切。没有"立即同步"按钮——设备在线时，更改会在后台传播。

## 同步内容

**阅读位置**：精确到当前页码。在第87页关闭的卷册，其他设备会在第87页打开。

**阅读方向**：将漫画设为从右到左后，该设置会跟随卷册同步到所有设备。

**完成状态**：在一台设备上标记为已读，所有设备均会更新。

**标签与评分**：标签和星级评分在所有设备间同步。

## iCloud Drive文件同步的工作方式

[BiblioFuse](/zh/)还将iCloud Drive用于库文件本身。**Mac到iPhone**：在Finder中导航到**iCloud Drive → BiblioFuse**，将CBZ、CBR、EPUB或PDF放入该文件夹，几分钟内即可在iPhone的BiblioFuse中看到。通过Wi-Fi传输添加的文件也会存储在BiblioFuse的iCloud文件夹中，供其他设备访问。

**大批量传输用Wi-Fi Transfer**：在应用设置中开启**Wi-Fi导入**，在同一Wi-Fi网络的浏览器中打开显示的URL，将文件拖入即可。本地网络速度可达50–100 MB/s，10GB收藏几分钟内完成传输。

## Mac家庭媒体库：无需复制即可阅读

如果主要收藏存储在Mac上，Mac家庭媒体库可通过家庭Wi-Fi将卷册直接串流到iPhone，无需复制文件到设备或iCloud。开启方式：在Mac版BiblioFuse的**偏好设置 → 家庭媒体库**中启用共享，然后在iPhone的BiblioFuse中切换到Mac媒体库标签页。Mac家庭媒体库会话的阅读进度仍通过iCloud同步。

## 离线阅读

离线阅读时，BiblioFuse在本地保存进度，设备下次联网时自动同步。若两台设备发生冲突，页码更高的设备（阅读更多的设备）获胜。

## 立即开始

[BiblioFuse](/zh/)在App Store免费提供，适用于iPhone和iPad，iCloud同步无需付费订阅。在设备设置中为BiblioFuse启用iCloud Drive，进度即刻开始跨设备同步。
