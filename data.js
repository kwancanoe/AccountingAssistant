// Data tables
const level1Data = [
    { id: 1, data: 'ธุรกิจบริการการตลาดออนไลน์' }
];

const level2Data = [
    { id: 1, data: 'สมุดรายวันซื้อ' }
];

const level3Data = [
    { id: 1, data: 'บริการ' },
    { id: 2, data: 'สินค้า' }
];

const level4Data = [
    { id: 1, data: 'Cloud Vat เงินสด' },
    { id: 2, data: 'Cloud Non Vat เงินสด' },
    { id: 3, data: 'Cloud Vat เงินเชื่อ' },
    { id: 4, data: 'Cloud Non Vat เงินเชื่อ' },
    { id: 5, data: 'Notebook มายิง Ads (Vat เงินสด)' },
    { id: 6, data: 'Notebook มายิง Ads (Non Vat เงินสด)' },
    { id: 7, data: 'Notebook มายิง Ads (Vat เงินเชื่อ)' },
    { id: 8, data: 'Notebook มายิง Ads (Non Vat เงินเชื่อ)' },
    { id: 9, data: 'ซื้อกระดาษ A4 (Vat เงินสด)' },
    { id: 10, data: 'ซื้อกระดาษ A4 Non Vat เงินสด' },
    { id: 11, data: 'ซื้อกระดาษ A4 Vat เงินเชื่อ' },
    { id: 12, data: 'ซื้อกระดาษ A4 Non Vat เงินเชื่อ' }
];

const level5Data = [
    { id: 1, data: 'ค่าใช้จ่ายในการผลิด/บริการ' },
    { id: 2, data: 'ภาษีซื้อ' },
    { id: 3, data: 'ทรัพย์สิน' }
];

const level6Data = [
    { id: 1, data: 'เงินสด/ธนาคาร (ซื้อสด)' },
    { id: 2, data: 'ภาษีหัก ณ ที่จ่าย' },
    { id: 3, data: 'เจ้าหนี้การค้า (ซื้อเชื่อ)' }
];

// Level tables referencing only IDs
const level1 = [
    { id: 1, dataId: 1 }
];

const level2 = [
    { id: 1, level1Id: 1, dataId: 1 }
];

const level3 = [
    { id: 1, level1Id: 1, level2Id: 1, dataId: 1 },
    { id: 2, level1Id: 1, level2Id: 1, dataId: 2 }
];

const level4 = [
    { id: 1, level1Id: 1, level2Id: 1, level3Id: 1, dataId: 1 },
    { id: 2, level1Id: 1, level2Id: 1, level3Id: 1, dataId: 2 },
    { id: 3, level1Id: 1, level2Id: 1, level3Id: 1, dataId: 3 },
    { id: 4, level1Id: 1, level2Id: 1, level3Id: 1, dataId: 4 },
    { id: 5, level1Id: 1, level2Id: 1, level3Id: 2, dataId: 5 },
    { id: 6, level1Id: 1, level2Id: 1, level3Id: 2, dataId: 6 },
    { id: 7, level1Id: 1, level2Id: 1, level3Id: 2, dataId: 7 },
    { id: 8, level1Id: 1, level2Id: 1, level3Id: 2, dataId: 8 },
    { id: 9, level1Id: 1, level2Id: 1, level3Id: 2, dataId: 9 },
    { id: 10, level1Id: 1, level2Id: 1, level3Id: 2, dataId: 10 },
    { id: 11, level1Id: 1, level2Id: 1, level3Id: 2, dataId: 11 },
    { id: 12, level1Id: 1, level2Id: 1, level3Id: 2, dataId: 12 }
];

const level5 = [
    { id: 1, level1Id: 1, level2Id: 1, level3Id: 1, level4Id: 1, dataId: 1 },
    { id: 2, level1Id: 1, level2Id: 1, level3Id: 1, level4Id: 1, dataId: 2 },
    { id: 3, level1Id: 1, level2Id: 1, level3Id: 1, level4Id: 2, dataId: 1 },
    { id: 4, level1Id: 1, level2Id: 1, level3Id: 1, level4Id: 3, dataId: 1 },
    { id: 5, level1Id: 1, level2Id: 1, level3Id: 1, level4Id: 3, dataId: 2 },
    { id: 6, level1Id: 1, level2Id: 1, level3Id: 1, level4Id: 4, dataId: 1 },
    { id: 7, level1Id: 1, level2Id: 1, level3Id: 2, level4Id: 5, dataId: 3 },
    { id: 8, level1Id: 1, level2Id: 1, level3Id: 2, level4Id: 5, dataId: 2 },
    { id: 9, level1Id: 1, level2Id: 1, level3Id: 2, level4Id: 6, dataId: 3 },
    { id: 10, level1Id: 1, level2Id: 1, level3Id: 2, level4Id: 7, dataId: 3 },
    { id: 11, level1Id: 1, level2Id: 1, level3Id: 2, level4Id: 7, dataId: 2 },
    { id: 12, level1Id: 1, level2Id: 1, level3Id: 2, level4Id: 8, dataId: 3 },
    { id: 13, level1Id: 1, level2Id: 1, level3Id: 2, level4Id: 9, dataId: 1 },
    { id: 14, level1Id: 1, level2Id: 1, level3Id: 2, level4Id: 9, dataId: 2 },
    { id: 15, level1Id: 1, level2Id: 1, level3Id: 2, level4Id: 10, dataId: 1 },
    { id: 16, level1Id: 1, level2Id: 1, level3Id: 2, level4Id: 11, dataId: 1 },
    { id: 17, level1Id: 1, level2Id: 1, level3Id: 2, level4Id: 11, dataId: 2 },
    { id: 18, level1Id: 1, level2Id: 1, level3Id: 2, level4Id: 12, dataId: 1 }
];

const level6 = [
    { id: 1, level1Id: 1, level2Id: 1, level3Id: 1, level4Id: 1, level5Id: 1, dataId: 1 },
    { id: 2, level1Id: 1, level2Id: 1, level3Id: 1, level4Id: 1, level5Id: 2, dataId: 2 },
    { id: 3, level1Id: 1, level2Id: 1, level3Id: 1, level4Id: 2, level5Id: 3, dataId: 1 },
    { id: 4, level1Id: 1, level2Id: 1, level3Id: 1, level4Id: 2, level5Id: 3, dataId: 2 },
    { id: 5, level1Id: 1, level2Id: 1, level3Id: 1, level4Id: 3, level5Id: 4, dataId: 3 },
    { id: 6, level1Id: 1, level2Id: 1, level3Id: 1, level4Id: 4, level5Id: 6, dataId: 3 },
    { id: 7, level1Id: 1, level2Id: 1, level3Id: 2, level4Id: 5, level5Id: 7, dataId: 1 },
    { id: 8, level1Id: 1, level2Id: 1, level3Id: 2, level4Id: 6, level5Id: 9, dataId: 1 },
    { id: 9, level1Id: 1, level2Id: 1, level3Id: 2, level4Id: 7, level5Id: 10, dataId: 3 },
    { id: 10, level1Id: 1, level2Id: 1, level3Id: 2, level4Id: 8, level5Id: 12, dataId: 3 },
    { id: 11, level1Id: 1, level2Id: 1, level3Id: 2, level4Id: 9, level5Id: 13, dataId: 1 },
    { id: 12, level1Id: 1, level2Id: 1, level3Id: 2, level4Id: 10, level5Id: 15, dataId: 1 },
    { id: 13, level1Id: 1, level2Id: 1, level3Id: 2, level4Id: 11, level5Id: 16, dataId: 3 },
    { id: 14, level1Id: 1, level2Id: 1, level3Id: 2, level4Id: 12, level5Id: 18, dataId: 3 }
];
