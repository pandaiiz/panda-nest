/**
 * 计算分页
 * @param total
 * @param pageSize
 * @param page
 * @returns
 */
export const getPagination = (
  total: number,
  pageSize: number,
  page: number,
) => {
  const pages = Math.ceil(total / pageSize);
  return {
    total,
    page,
    pageSize,
    pages,
  };
};

export const formatToTree = (data) => {
  // * 先生成parent建立父子关系
  const obj = {};
  data.forEach((item) => {
    obj[item.id] = item;
  });
  const parentList = [];
  data.forEach((item) => {
    const parent = obj[item.parentId];
    if (parent) {
      // * 当前项有父节点
      parent.children = parent.children || [];
      parent.children.push(item);
    } else {
      // * 当前项没有父节点 -> 顶层
      parentList.push(item);
    }
  });
  return parentList;
};
