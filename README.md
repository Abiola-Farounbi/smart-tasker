# Smart Tasker

## 🚀 Project Overview

Smart Tasker is a React-based application designed to streamline task management with advanced features and a user-friendly interface.

## ✨ Key Features

### 1. Comprehensive Task Management
- Full CRUD (Create, Read, Update, Delete) operations for tasks
- User friendly and feature-rich task creation process

### 2. Multi-Step Form Wizard
- **Dynamic Task Creation Workflow**
  - Four-stage form for detailed task input
  - Input validation at each step
  - Prevents progression with incomplete or invalid inputs
  - Final review stage before task submission

### 3. Advanced Search and Filtering
- **Real-Time Task Filtering**
  - Case-insensitive search functionality
  - Filters tasks by title and description
  - Instant, responsive search results

### 4. Data Persistence
- Local Storage Integration
  - Automatic task saving in browser's localStorage

### 5. Pagination and Data Fetching
- External API Data Retrieval
  - Fetches paginated data dynamically
  - Navigation buttons for page traversal
  - Smooth, responsive data loading

### 6. Responsive Design
- Mobile-friendly layout
- Consistent user interface across devices
- Adaptive design using Tailwind CSS

## 🛠 Technology Stack

| Technology | Purpose |
|-----------|---------|
| React | Core UI Library |
| Context API | State Management |
| Tailwind CSS | Responsive Styling |
| Lucide React Icons | UI Icons |

## 🔍 Technical Implementation Details

### State Management
- Utilizes React's Context API for efficient, centralized state management
- Provides a clean, scalable approach to handling application state

### Form Validation
- Comprehensive input validation
- Step-by-step validation preventing incomplete submissions
- Provides clear feedback to users

### Search Functionality
- Implements case-insensitive search
- Performs real-time filtering without page reload
- Optimized for performance with minimal render overhead

### Local Storage
- Leverages `localStorage` for persistent data storage

## 📦 Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or Yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/smart-tasker.git

# Navigate to project directory
cd smart-tasker

# Install dependencies
npm install

# Start development server
npm start
```
