# CLAUDE.md

此文件為 Claude Code (claude.ai/code) 在此代碼庫中工作時提供指導。

## 開發指令

- **開發伺服器**: `npm run dev` (啟動於 localhost:3000)
- **生產環境建置**: `npm run build`
- **預覽生產版本**: `npm run preview`
- **生成靜態網站**: `npm run generate`
- **程式碼檢查**: `npm run lint`
- **部署至 GitHub Pages**: `npm run deploy`

## 架構概述

這是一個 Nuxt 3 個人履歷網站，具有以下主要特點：

### 核心配置

- **框架**: Nuxt 3 並停用 SSR (`ssr: false`)
- **狀態管理**: 使用 Pinia 進行集中狀態管理
- **樣式系統**: TailwindCSS 搭配 `assets/css/main.css` 自訂 CSS
- **部署方式**: GitHub Pages，生產環境基礎 URL 為 `/PersonalResume/`

### 元件結構

應用程式遵循單頁面佈局 (`app.vue`)，包含以下主要區塊：

- `Header` - 導覽列和深色模式切換
- `Main` - 主要介紹區塊
- `Experience` - 工作經驗
- `Skills` - 技術技能展示
- `Projects` - 專案展示，使用 `ProjectCard` 元件
- `Education` - 教育背景
- `Footer` - 聯絡資訊和頁尾

### 深色模式實作

實作了完善的深色模式系統：

- **狀態管理**: `stores/darkMode.ts` - 管理深色模式狀態的 Pinia store
- **組合式函數**: `composables/useDarkMode.ts` - Vue 組合式 API 整合
- **UI 元件**: `components/DarkModeToggle.vue` - 深色模式切換元件
- **自動偵測**: 尊重系統色彩方案偏好設定
- **持續同步**: 自動與作業系統深色模式變更同步

### 重要技術細節

- 使用 `process.client` 檢查僅限瀏覽器端操作
- 透過 DOM 操作套用 Tailwind 深色模式類別
- 透過 `LanguageSwitcher` 元件提供語言切換功能
- 透過 `@nuxt/icon` 模組整合圖示系統

### 檔案組織

- `/components/` - 各履歷區塊的 Vue 元件
- `/stores/` - Pinia 狀態管理
- `/composables/` - 可重複使用的 Vue 組合式函數
- `/assets/` - 樣式表和圖片
- `/public/` - 靜態資源 (favicon, robots.txt)

## 提交規範

本專案遵循約定式提交規範，描述部分使用**繁體中文**撰寫。代碼庫中的範例：

- `chore: 刪除 Claude PR Assistant 的工作流程文件`
- `chore: 設定 ESLint 開發環境並修正程式碼格式`

格式：`<type>[optional scope]: <繁體中文描述>`
