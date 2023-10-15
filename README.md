# 🏗 AI-based Smart Contract Explorer

<h4 align="center">
  <a href="https://app.embedbase.xyz/datasets/e4276331-4582-463b-85be-abc8b21ad739">Website</a>
</h4>

🧪 AI-based Smart Contract Explorer 是一个 基于向量数据库和 LLM 进行 ETH 智能合约代码检索的浏览器，搜索结果包含智能合约原文、出处、代码解析等多维度内容。向量数据库技术是人工智能应用中的一项重要技术，通过 ANN 最似近邻算法，我们可以通过自然语言进行联想式搜索，而非传统的关键字搜索。立项起因是传统搜索代码的浏览器，例如 Etherscan，仅能搜索出原始代码。我们希望通过 AI 赋能，建立关于智能合约代码的全维度搜索，让合约开发者的效率指数倍增。



## Quickstart

如果您想快速体验我们的功能请通过：<a href="https://app.embedbase.xyz/datasets/e4276331-4582-463b-85be-abc8b21ad739">Website</a>

如果您想了解数据流的实现，请先下载我们实现的client：<a href="https://github.com/NonceGeek/movespace_db_uploader_cli/blob/main/movespace_db_uploader_cli">movespace_db_uploader_cli</a>


### Requirements
请确保使用变量“EMBEDBASE_KEY” 将您获取的app_key存储在dotenv（.env）中

### Usage
参数列表和类型：
```
 [path: :string, embedbaseid: :string, type: :string, insert: :boolean, delete: :boolean, metadata: :string],
```
参数别名：
```
f: :filepath, e: :embedbaseid, t: :type, i: :insert, d: :delete, m: :metadata
```
使用格式：
```
./movespace_db_uploader_cli --type [mddoc, code] --path [the_path_for_content] --metadata [the_path_for_metadata] --embedbaseid [embedbase_id] --insert
```
使用事例：

```
$ ./movespace_db_uploader_cli --type mddoc --path example_data/eth/analysis/erc20.md --metadata example_data/eth/analysis/erc20.json --embedbaseid eth-smart-contracts-analysis --insert
$ ./movespace_db_uploader_cli --type code --path example_data/eth/sliced/erc20.json --embedbaseid eth-smart-contracts-sliced --insert
```






## Architecture
![img.png](img.png)


