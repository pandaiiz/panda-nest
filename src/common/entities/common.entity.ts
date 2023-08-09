export abstract class Common {
  // 主键id
  id: number;

  // 创建时间
  createTime: Date;

  // 更新时间
  updateTime: Date;

  // 软删除
  isDelete: boolean;

  // 更新次数
  version: number;
}
