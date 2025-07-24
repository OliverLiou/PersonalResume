<template>
  <section id="projects" class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">{{ $options.title }}</h2>
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectSection',
  title: '專案分享',
  href: '#projects'
}
</script>

<script setup>

const projects = [
  {
    title: '快速報價系統',
    subTitle: 'Quickly Price Quotation Program',
    description: '企業級製造業成本管理系統，專為汽車零件製造業設計的快速蒐集成本作業平台',
    startDate: '2024-12',
    endDate: '2025-03',
    features: [
      '角色權限管理',
      'Excel整合, 支援BOM表匯入/匯出',
      '跨系統與Oracle EBS系統進行資料整合',
      '成本分類多達十種以上, 區分責任與歸屬',
      '報表自動產生: 根據分類項目自動生成成本分析表',
     ]
  },
  {
    title: '鋼捲管理系統',
    subTitle: 'Steel Coil Management System',
    description: '主要與中國鋼鐵公司進行業務整合，處理鋼材採購、合約管理、發票處理、押匯作業等完整的鋼材貿易流程',
    startDate: '2022-08',
    endDate: '2023-10',
    features: [
      '發票的建立、查詢、更新',
      '押匯明細的匯入及金額計算',
      '合約訂單的建立、查詢、更新、狀態追蹤',
      '定時任務, 自動更新合約及發票資料及相關計算'
    ]
  },
  {
    title: '節拍生產排程系統',
    subTitle: 'Tempo Production Auto Schedule System​',
    description: '以生產線別為單位, 根據每月的預示量, 進行生產排程的管理與控制, 有效避免庫存積壓或缺料, 提升製造效率並實現生產排程控制',
    startDate: '2021-09',
    endDate: '2022-07',
    features: [
      '行事曆管理',
      '即時生產監控',
      'Excel數據處理',
      '精準預示量控制',
      '排程及達成率報表(月)',
      '智慧排程管理(支援多種排程策略。如:特急生產、連續生產、區間生產、定頻生產…等等)',
    ]
  },
  {
    title: '個人開發模板(前端&後端)',
    subTitle: 'Personal Development Template (Frontend & Backend)',
    description: '標準化前後端的系統模板, 縮短開發時間, 提升開發效率',
    startDate: '2024-03',
    endDate: '持續更新中',
    features: [
      '權限控制',
      '頁籤導航',
      '實現Log日誌記錄',
      '支援內部AD域名登入',
      '統一資料表CRUD操作',
      '建立Repo供同仁使用',
    ]
  },
  {
    title: '個人履歷網站',
    subTitle: 'Personal Resume Website',
    description: '本人開發及設計的個人履歷網頁，具有響應式設計、深色模式切換、多語言支援等功能。',
    techStack: ['Nuxt 3', 'Tailwind CSS', 'JavaScript', 'GitHub Pages'],
    startDate: '2025-07',
    endDate: '持續更新中',
    features: [
      '語言中/英文支援',
      '深色模式切換功能',
      '響應式設計，支援各種裝置',
    ]
  },
  
]
</script>