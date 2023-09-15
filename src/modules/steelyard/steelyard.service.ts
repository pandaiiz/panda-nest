import { Injectable } from '@nestjs/common';
import { DelimiterParser, SerialPort } from 'serialport';
import { sleep } from '../../utils';

@Injectable()
export class SteelyardService {
  async getWeight(comPort: string): Promise<any> {
    /*if (this.portStatus) {
      return Promise.reject({ message: '端口暂未关闭，请稍后再读取参数' });
    }*/
    // 获取端口列表
    const ports = await SerialPort.list();
    if (ports.find((port) => port.path === comPort)) {
      // 找到COM3端口，打开端口读取数据
      const port = new SerialPort({
        path: comPort,
        baudRate: 9600,
        dataBits: 8, //数据位
        parity: 'none', //奇偶校验
        stopBits: 1, //停止位
      });
      // this.portStatus = true;
      const parser = port.pipe(new DelimiterParser({ delimiter: 'S' }));
      // 读称前需要sleep 500ms
      await sleep(500);
      return new Promise((resolve) => {
        parser.on('data', (data) => {
          const weight = parseFloat(data.toString().trim());
          if (weight > 0) {
            // this.portStatus = false;
            port.close();
            resolve({ weight });
          }
        });
      });
    } else {
      return Promise.reject({ message: `${comPort}端口未开启，请检查连接` });
    }
  }
}
