const data = {
    level1: [
        { id: 1, data: 'ธุรกิจบริการการตลาดออนไลน์' }
    ],
    level2: [
        { id: 1, parentId: 1, data: 'สมุดรายวันซื้อ' }
    ],
    level3: [
        { id: 1, parentId: 1, data: 'บริการ' },
        { id: 2, parentId: 1, data: 'สินค้า' }
    ],
    level4: [
        { id: 1, parentId: 1, data: 'Cloud Vat เงินสด' },
        { id: 2, parentId: 1, data: 'Cloud Non Vat เงินสด' },
        { id: 3, parentId: 1, data: 'Cloud Vat เงินเชื่อ' },
        { id: 4, parentId: 1, data: 'Cloud Non Vat เงินเชื่อ' },
        { id: 5, parentId: 2, data: 'Notebook มายิง Ads (Vat  เงินสด)' },
        { id: 6, parentId: 2, data: 'Notebook มายิง Ads (Non Vat  เงินสด)' },
        { id: 7, parentId: 2, data: 'Notebook มายิง Ads (Vat  เงินเชื่อ)' },
        { id: 8, parentId: 2, data: 'Notebook มายิง Ads (Non Vat  เงินเชื่อ)' },
        { id: 9, parentId: 2, data: 'ซื้อกระดาษ A4 (Vat  เงินสด)' },
        { id: 10, parentId: 2, data: 'ซื้อกระดาษ A4 Non Vat เงินสด' },
        { id: 11, parentId: 2, data: 'ซื้อกระดาษ A4 Vat เงินเชื่อ' },
        { id: 12, parentId: 2, data: 'ซื้อกระดาษ A4 Non Vat เงินเชื่อ' }
    ],
    level5: [
        { id: 1, parentId: 1, data: 'ค่าใช้จ่ายในการผลิด/บริการ' },
        { id: 2, parentId: 2, data: 'ค่าใช้จ่ายในการผลิด/บริการ' },
        { id: 3, parentId: 3, data: 'ค่าใช้จ่ายในการผลิด/บริการ' },
        { id: 4, parentId: 4, data: 'ค่าใช้จ่ายในการผลิด/บริการ' },
        { id: 5, parentId: 5, data: 'ทรัพย์สิน' },
        { id: 6, parentId: 6, data: 'ทรัพย์สิน' },
        { id: 7, parentId: 7, data: 'ทรัพย์สิน' },
        { id: 8, parentId: 8, data: 'ทรัพย์สิน' },
        { id: 9, parentId: 9, data: 'ค่าใช้จ่ายในการผลิด/บริการ' },
        { id: 10, parentId: 10, data: 'ค่าใช้จ่ายในการผลิด/บริการ' },
        { id: 11, parentId: 11, data: 'ค่าใช้จ่ายในการผลิด/บริการ' },
        { id: 12, parentId: 12, data: 'ค่าใช้จ่ายในการผลิด/บริการ' }
    ],
    level6: [
        { id: 1, parentId: 1, data: 'เงินสด/ธนาคาร (ซื้อสด)' },
        { id: 2, parentId: 1, data: 'เจ้าหนี้การค้า (ซื้อเชื่อ)' },
        { id: 3, parentId: 1, data: 'ภาษีซื้อ' },
        { id: 4, parentId: 1, data: 'ภาษีหัก ณ ที่จ่าย' }
    ]
};
