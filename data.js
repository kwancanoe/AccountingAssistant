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
        // For 'บริการ' (Services)
        { id: 1, parentId: 1, data: 'Cloud Vat เงินสด' },
        { id: 2, parentId: 1, data: 'Cloud Non Vat เงินสด' },
        { id: 3, parentId: 1, data: 'Cloud Vat เงินเชื่อ' },
        { id: 4, parentId: 1, data: 'Cloud Non Vat เงินเชื่อ' },
        // For 'สินค้า' (Goods)
        { id: 5, parentId: 2, data: 'Notebook มายิง Ads (Vat เงินสด)' },
        { id: 6, parentId: 2, data: 'Notebook มายิง Ads (Non Vat เงินสด)' },
        { id: 7, parentId: 2, data: 'Notebook มายิง Ads (Vat เงินเชื่อ)' },
        { id: 8, parentId: 2, data: 'Notebook มายิง Ads (Non Vat เงินเชื่อ)' },
        { id: 9, parentId: 2, data: 'ซื้อกระดาษ A4 (Vat เงินสด)' },
        { id: 10, parentId: 2, data: 'ซื้อกระดาษ A4 Non Vat เงินสด' },
        { id: 11, parentId: 2, data: 'ซื้อกระดาษ A4 Vat เงินเชื่อ' },
        { id: 12, parentId: 2, data: 'ซื้อกระดาษ A4 Non Vat เงินเชื่อ' }
    ],
    level5: [
        // For 'Cloud Vat เงินสด'
        { id: 1, parentId: 1, data: 'ค่าใช้จ่ายในการผลิด/บริการ' },
        { id: 2, parentId: 1, data: 'ทรัพย์สิน' },
        // For 'Cloud Non Vat เงินสด'
        { id: 3, parentId: 2, data: 'ค่าใช้จ่ายในการผลิด/บริการ' },
        { id: 4, parentId: 2, data: 'ทรัพย์สิน' },
        // For 'Cloud Vat เงินเชื่อ'
        { id: 5, parentId: 3, data: 'ค่าใช้จ่ายในการผลิด/บริการ' },
        { id: 6, parentId: 3, data: 'ทรัพย์สิน' },
        // For 'Cloud Non Vat เงินเชื่อ'
        { id: 7, parentId: 4, data: 'ค่าใช้จ่ายในการผลิด/บริการ' },
        { id: 8, parentId: 4, data: 'ทรัพย์สิน' },
        // For 'Notebook มายิง Ads (Vat เงินสด)'
        { id: 9, parentId: 5, data: 'ค่าใช้จ่ายในการผลิด/บริการ' },
        { id: 10, parentId: 5, data: 'ทรัพย์สิน' },
        // For 'ซื้อกระดาษ A4 (Vat เงินสด)'
        { id: 11, parentId: 9, data: 'ค่าใช้จ่ายในการผลิด/บริการ' },
        { id: 12, parentId: 9, data: 'ทรัพย์สิน' }
    ],
    level6: [
        // For 'ค่าใช้จ่ายในการผลิด/บริการ'
        { id: 1, parentId: 1, data: 'เงินสด/ธนาคาร (ซื้อสด)' },
        { id: 2, parentId: 1, data: 'ภาษีซื้อ' },
        { id: 3, parentId: 2, data: 'เงินสด/ธนาคาร (ซื้อสด)' },
        { id: 4, parentId: 3, data: 'เจ้าหนี้การค้า (ซื้อเชื่อ)' },
        { id: 5, parentId: 4, data: 'ภาษีหัก ณ ที่จ่าย' },
        { id: 6, parentId: 5, data: 'เจ้าหนี้การค้า (ซื้อเชื่อ)' },
        { id: 7, parentId: 7, data: 'ภาษีซื้อ' }
    ]
};
