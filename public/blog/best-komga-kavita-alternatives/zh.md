# Komga vs Kavita vs BiblioFuse：2026 年最佳 CBZ、CBR 与 EPUB 阅读器替代方案

如果你正在比较自托管漫画和电子书服务器，最常被提及的两个名字是 [Komga](https://komga.org/) 和 [Kavita](https://kavitareader.com/)——两者都是免费、开源，并且都能很好地从你自己的存储中读取 CBZ、CBR 以及（Kavita 支持的）EPUB 文件。[Calibre-Web](https://github.com/janeczku/calibre-web) 和 [Ubooquity](https://vaemendis.net/ubooquity/) 是另外两款历史悠久、同样值得了解的选择。[BiblioFuse](/zh/) 则采取了不同的思路：它不是让你自己搭建服务器、再另外配一个第三方客户端应用，而是提供由同一个团队打造的一整套互联应用——手机、平板、Mac、PC、Apple Vision Pro、Apple TV 和 Android TV，同时也为想要自托管的人提供免费的自托管服务器。

这些方案没有哪一个对所有人都"绝对最好"。本指南会比较每一款各自的优势、不足，以及哪一款最适合你的使用场景。

## 为什么现在这个对比很重要

数字漫画和电子书收藏早已超越了 Kindle 式的封闭花园模式。读者们扫描自己的实体收藏、从汉化和粉丝翻译社区下载资源，或者单纯更喜欢拥有文件本身，而不是租用访问权限。这些收藏通常存放在 NAS、旧电脑或 Mac 上的某个文件夹里——问题就变成了：在你拥有的每一台设备上，究竟用什么来真正读取这些文件，而不需要你兼职当系统管理员？

这个问题变得更难回答了，而不是更容易。Komga 和 Kavita 已经发展成真正强大的服务器。但等式的客户端部分——你手机、平板或电视上实际使用的应用——通常是一个独立的项目，来自另一个独立开发者，有自己的发布节奏、自己的 bug，也不保证明年还会继续维护。

## 真正应该关注什么

在比较产品之前，先把漫画/电子书系统承担的两项工作区分开会有帮助：

1. **托管** — 你的文件存放在哪里，服务器如何组织和提供这些文件。
2. **阅读** — 你每天在每台设备上实际使用的应用或网页。

有些工具只把其中一项做好。阅读下面的对比时请记住这一点。

## 各方案对比

| | [Komga](https://komga.org/) | [Kavita](https://kavitareader.com/) | [Calibre-Web](https://github.com/janeczku/calibre-web) | [Ubooquity](https://vaemendis.net/ubooquity/) | [BiblioFuse](/zh/) |
|---|---|---|---|---|---|
| 支持格式 | CBZ、CBR、PDF | CBZ、CBR、CB7、CBT、ZIP、RAR、7zip、PDF、EPUB | EPUB（通过 Calibre） | EPUB、CBZ、CBR、PDF | EPUB、PDF、CBZ、CBR、RAR、ZIP、TXT |
| 官方原生移动应用 | 无——仅第三方 | 无——仅第三方 | 无——仅浏览器 | 无——仅浏览器/OPDS | 有——iPhone、iPad、Mac、Vision Pro、Apple TV、Android、Android TV、Windows |
| 文件夹管理 | 严格要求一个系列一个文件夹 | 灵活，借助元数据辅助 | 导入 Calibre 书库 | 平铺式文件夹扫描 | 按原样读取你现有的文件夹，不做重组 |
| 内置压缩工具 | 无 | 无 | 无 | 无 | 有——调整尺寸、重新编码为 WebP/JPG、合并 |
| 流式播放而非本地存储 | 仅通过 OPDS 客户端 | 仅通过 OPDS 客户端 | 无 | 仅通过 OPDS 客户端 | 有，原生支持（本地 Wi-Fi、Tailscale、iCloud） |
| Synology 安装方式 | Container Manager / Docker | Container Manager / Docker | Docker | Docker 或 Java | 原生 Package Center 应用，带文件夹选择器 |
| 界面语言 | 社区贡献 | 通过社区 Weblate 提供 13+ 种 | 社区贡献 | 有限 | 11 种，官方自带 |
| 费用 | 免费，开源 | 免费，开源 | 免费，开源 | 免费 | 自托管免费；购买应用可解锁 Pro 功能 |

## Komga：纯漫画和漫画（manga）书库的最佳选择

Komga 是漫画和 manga 领域的专精产品。它并不试图成为电子书阅读器——不支持 EPUB——这种专注也体现在它的打磨程度上：稳健的 REST API、OPDS v2 支持，以及与 Tachiyomi 等漫画追踪应用的紧密集成。如果你维护着一个庞大且精心整理的 manga 收藏，它的元数据抓取确实很出色。

代价在于结构要求。Komga 要求每个系列一个文件夹。如果你的书库还没有遵循这一惯例，你就得先花时间重新整理文件，Komga 才会满意。

**适合：** 以 manga 为主的书库、Tachiyomi 用户，以及任何习惯使用 Docker、并愿意按 Komga 的文件夹惯例重新整理文件的人。

**需要注意：** 不支持电子书（EPUB）；没有官方应用——你需要搭配 Komic、KMReader 或 Panels 等第三方客户端使用，这些客户端都由与 Komga 无关的独立开发者维护。

## Kavita：漫画与电子书兼顾的最佳全能选择

Kavita 是这份名单里功能最全面的服务器——漫画、manga 和电子书（EPUB、PDF）都在同一个书库里，文件夹扫描比 Komga 更宽容，还有 AniList 元数据、按封面生成的强调色等实用附加功能。如果你想用一个服务器搞定一切，又不介意用 Docker，这是一个非常扎实的选择。

它号称有 13+ 种社区翻译语言，听起来很厉害，但覆盖程度取决于 Weblate 上的志愿翻译者——有些语言完成度更高，有些则不然，官方并没有承诺让每种语言都保持最新。

**适合：** 漫画+电子书混合书库、想要功能最完整的自托管服务器的人，以及不介意界面部分由社区翻译的用户。

**需要注意：** 客户端方面和 Komga 情况相同——没有官方原生应用，你需要搭配 Panels 或 Komic 等第三方阅读器使用。

## Calibre-Web：已经在用 Calibre 的最佳选择

Calibre-Web 是为现有 Calibre 电子书库提供的一个轻量、简洁的网页前端。如果你已经在 Calibre 里整理了多年的书籍，只是想要浏览器访问，它能很好地完成这个任务。

它并不像 Komga 和 Kavita 那样为漫画而设计，也没有专门的移动端或电视应用——它彻头彻尾就是一个浏览器体验。

**适合：** 现有的 Calibre 用户，主要想通过浏览器远程/移动访问电子书库。

**需要注意：** 漫画充其量只是次要用例；在任何平台上都没有原生应用。

## Ubooquity：轻量、极简的最佳选择

Ubooquity 存在已久，始终忠于自己的定位：一个基于 Java 的小型简单服务器，内置 OPDS 订阅源。它几乎可以在任何硬件上运行，包括那些可能让 Komga 或 Kavita 吃力的老旧或低性能 NAS 设备。

它也是这四款替代方案中最基础的一个——功能更少，界面较为陈旧，而且和其他几款一样，没有自己的应用。

**适合：** 低性能硬件、想要尽可能小的资源占用、不需要现代化附加功能的用户。

**需要注意：** 是这几款中开发最不活跃的一个；依然只能通过浏览器/OPDS 使用。

## BiblioFuse：零配置、单一厂商生态系统的最佳选择

BiblioFuse 的出发点不同：大多数人并不想既要管理一台服务器，*又要*另外自己去找一个可能会被放弃维护的第三方客户端。因此，应用和主机端都由同一个团队打造，两者的设计目标都是让非技术用户也能轻松完成设置。

具体体现在：

- **按文件夹或标签管理，而非强制元数据。** BiblioFuse 不需要抓取元数据也能好用，也不会强加 Komga 那种严格的"一个系列一个文件夹"规则。
- **绝不重组你的文件。** 它会按你已有的方式原样读取书库——没有导入步骤，也没有需要遵循的文件夹惯例。
- **专为节省设备存储而设计，而不仅仅是提供文件。** 内置压缩/调整尺寸/合并工具（支持 EPUB、PDF、CBZ、CBR、RAR、ZIP——可调整到目标分辨率、重新编码为 WebP 或 JPG），以及从主机流式传输书库而不必下载到本地的能力。以上四款替代方案都没有内置压缩工具。
- **设置无需手动输入 IP 地址。** 在 Synology 上，原生 Package Center 应用提供文件夹选择器，而不用输入容器路径。在客户端一侧，应用会通过本地 Wi-Fi 自动发现主机，或在 Apple 设备上通过 iCloud + Tailscale 自动连接——无需手动输入服务器地址或 OPDS 端点。
- **一个生态系统，一个厂商。** iPhone、iPad、Mac、Apple Vision Pro、Apple TV、Android 手机、Android 平板、Android TV 和 Windows PC 上运行的应用，都由同一个团队构建和维护——而不是一个自托管服务器，随意拼接上某个恰好还在维护的第三方客户端。
- **11 种官方界面语言**（英语、西班牙语、法语、荷兰语、葡萄牙语、俄语、中文、日语、韩语、印尼语和马来语），而不是依赖社区的覆盖率。
- **阅读进度随处跟随你**——手机、平板、Mac、PC、电视或头显——因为这是一个整体产品，而不是通过 OPDS 各自同步的独立应用。

客观地说，BiblioFuse 也并非处处领先：Komga 和 Kavita 在大型、精心整理的 manga 书库方面拥有更成熟的元数据抓取生态，Kavita 还能读取几种 BiblioFuse 不支持的小众压缩格式（如 7zip、CBT）。BiblioFuse 在 Docker/Synology 上的免费浏览器阅读器也比其原生应用更基础——目前还不支持 PDF，也没有文字转语音或 peek zoom 功能。

**适合：** 想要几分钟内完成配置、而不是花一下午的人；家中混用 Apple、Android 和 Windows 设备的用户；希望现有文件夹结构原样可用的人；以及专门想在 Apple TV、Android TV 或 Vision Pro 上阅读的人。

**需要注意：** 在大型精心整理的 manga 书库方面，元数据抓取不如 Komga/Kavita 成熟；Docker/Synology 上的免费浏览器阅读器目前还不支持 PDF。

## 该如何选择？

- **纯 manga 收藏，想要 Tachiyomi 集成：** Komga。
- **想要一个服务器同时搞定漫画和电子书，不介意用 Docker：** Kavita。
- **已经在 Calibre 书库上投入了大量精力：** Calibre-Web。
- **老旧或低性能硬件，想要最轻量的方案：** Ubooquity。
- **想要在 Apple、Android 和 Windows 设备上——包括 Vision Pro、Apple TV 或 Android TV——直接开箱即用，不想变成系统管理员：** [BiblioFuse](/zh/comicreader/)。

## 常见问题

**Komga 有官方 iPhone 应用吗？**
没有。Komga 没有任何官方移动应用。iPhone 用户需要通过 Komic、KMReader 或 Panels 等第三方客户端连接，这些客户端都独立于 Komga 项目进行开发和维护。

**Kavita 是免费的吗？**
是的，Kavita 免费且开源。和 Komga 一样，由于 Kavita 本身并不自带客户端，你仍然需要一个独立的第三方应用（或浏览器/OPDS 客户端）才能在手机或电视上阅读。

**Komga 最好的免费自托管替代方案是什么？**
如果你还想在同一个服务器上获得 EPUB/电子书支持，Kavita 是最接近的免费替代方案。BiblioFuse 的 Docker 和 Synology 托管同样免费，区别在于它在每台设备上都配有对应的官方应用，而不是一个独立的第三方客户端。

**这些方案中有没有能直接从 SMB 或 NAS 共享读取、且无需重组文件的？**
在开源方案中，Kavita 的扫描方式最为宽容，但 Komga 仍然要求每个系列一个文件夹。BiblioFuse 在上述任何一种方案上都能原样读取你现有的文件夹结构，无需导入或重组步骤，Synology 上的设置也使用图形化文件夹选择器，而不是手动输入路径。

**自托管这些方案都需要 Docker 吗？**
Komga、Kavita、Calibre-Web 和 Ubooquity 通常都通过 Docker 部署（Ubooquity 也可以在任何安装了 Java 的机器上运行）。BiblioFuse 的 Docker 和 Synology Package Center 托管方案覆盖了同样的自托管需求，其中 Synology 套件专门设计为无需 Docker 或命令行配置。

**BiblioFuse 支持 Apple TV 或 Android TV 吗？**
支持——BiblioFuse 为这两个平台都提供了原生应用，可从 Mac、PC、Docker 或 Synology 主机进行流式传输。Komga、Kavita、Calibre-Web 和 Ubooquity 都没有在这两个平台上提供官方电视应用。

## 总结

Komga 和 Kavita 都是出色而成熟的服务器——如果你习惯使用 Docker，并愿意搭配一个独立的移动客户端，选择其中之一都不会错。但如果你更希望有一套应用家族，能在你拥有的每台设备上——从 iPhone 到 Vision Pro 再到 Android TV——直接开箱即用，同时让现有的文件夹结构原封不动，那就[试试 BiblioFuse](/zh/comicreader/)——自托管完全免费，[阅读应用](/zh/)也免费使用。
