# 如何找到文件名不同的重复漫画

你在整理漫画库，跑了一个标准的重复文件查找工具。它告诉你没有重复。但你知道有问题——你有一个包含第1-5话的文件，另一个包含第1-10话，前五话明显重叠。

这正是 [Comic Duplicate Scanner](/zh/archive/) 专门为此而生的问题：通过比对页面实际内容（而非文件名或大小）来查找重复漫画压缩包。

## 为什么标准重复工具对漫画无效

- **不同的话数打包**：你从一个来源下载了 `manga_ch1-5.cbz`，从另一个来源下载了 `manga_ch1-10.cbz`
- **不同的命名规范**：`Spider-Man_001.cbz` 和 `spiderman_issue01.cbz` 可能是同一期
- **重新编码的文件**：来自两个来源的同一本漫画，JPEG 质量不同，哈希值完全不同
- **不同格式**：同样的内容分别存为 CBZ 和 CBR

## Comic Duplicate Scanner 如何检测到这些

[Comic Duplicate Scanner](/zh/archive/) 对每个压缩包内的实际页面图片使用感知哈希。它会：

1. 打开两个压缩包（CBZ、CBR、ZIP 或 RAR）
2. 从每个中提取开头几页
3. 为每页生成感知哈希
4. 比对两个压缩包之间的哈希值

如果哈希值在可配置阈值以上匹配，这对压缩包就会被标记为潜在重复——无论文件名或大小如何。

更严格的阈值需要更接近的视觉匹配，更宽松的阈值捕获更多边界情况。默认值经过校准，可在不产生误报的情况下捕获大多数实际重复。

Comic Duplicate Scanner 免费提供扫描和预览。Pro 解锁批量操作。无需订阅。

前往 App Store 或 Microsoft Store 下载 [Comic Duplicate Scanner](/zh/archive/)。
