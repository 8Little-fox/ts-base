// ts - .d.ts翻译文件 - js
import superagent from 'superagent';
import fs from 'fs'
import path from 'path'
import DellAnaylzer from './dellAnalyzer';

export interface Analyzer {
  analyze: (html: string, filePath: string) => string;
}
class Crowller {
  private filePath = path.resolve(__dirname, '../data/course.json');

  private writeFileSync(content: string) {
    fs.writeFileSync(this.filePath, content)
  }
  private async getRawHtml() {
    const result = await superagent.get(this.url);
    return result.text
  }
  private async initSpiderProcess() {
    const html = await this.getRawHtml()
    const fileContent = this.analyzer.analyze(html, this.filePath)
    this.writeFileSync(fileContent);
  }
  constructor(private url: string, private analyzer: Analyzer) {
    this.initSpiderProcess()
  }
}
const secret = 'x3b174jsx';
const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;

// 单例模式
const analyzer = DellAnaylzer.getInstance()
// const analyzer = new DellAnaylzer()
new Crowller(url, analyzer);
