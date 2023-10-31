import ExcelJS from 'exceljs';
import { sortBy } from 'lodash';

const workbook = new ExcelJS.Workbook();

export const exportImageFromExcel = async (filePath: string) => {
  await workbook.xlsx.readFile(filePath);
  const images = sortBy(workbook.worksheets[0].getImages(), [
    'range.tl.nativeRow',
    'range.tl.nativeCol',
  ]);
  return [images, workbook.model.media];
};
