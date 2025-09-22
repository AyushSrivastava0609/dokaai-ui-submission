# Workflow Automation Builder

A **visual workflow automation tool** built with **React, TypeScript, TailwindCSS, and React Flow**.  
This project allows users to design and configure marketing/communication workflows with drag-and-drop nodes such as **Start, Conditions, Delays, Digests, Schedules, Channel Routers, and Channel Nodes**.

---

## Features

- **Drag & Drop Workflow Builder** – Built with [React Flow](https://reactflow.dev/).  
- **Custom Node Types** – Start nodes, binary/multi-condition nodes, delay nodes, digest nodes, schedule nodes, channel router, and more.  
- **Node Forms** – Each node has a dedicated form with controlled inputs (`FieldText`, `CuteCheckbox`, `Button`, etc.) for configuration.  
- **Consistent UI Kit** – Reusable CuteUI components ensure a clean, modern, and uniform design.  
- **Real-time Updates** – Workflows can be built and updated dynamically.  
- **Extensible** – Add more node types easily.  

---

## Tech Stack

- **Framework:** Next.js + React   
- **UI:** TailwindCSS  
- **Workflow Engine:** React Flow  
- **Components:** CuteUI  
- **Language:** TypeScript  
- **Base UI:** MUI components (wrapped inside CuteUI)  

---

## Getting Started

1. **Clone the repo**
   ```bash
   git clone <Repo Link>

2. **Install dependencies**
   ```bash
   npm install

2. **Run the server**
   ```bash
   npm run dev

The app will be running at: http://localhost:3000 

# Available Nodes

| Node Type         | Description |
|-------------------|-------------|
| **Start Node**    | Entry point of a workflow |
| **Condition Node**| Binary & multi-condition branching |
| **Delay Node**    | Wait before continuing workflow |
| **Digest Node**   | Batch events into daily/weekly/monthly digests |
| **Schedule Node** | Trigger workflow at specific date/time |
| **Channel Router**| Split workflow into multiple channels |
| **Channel Node**  | Individual channel execution (Email, SMS, Push, etc.) |
| **End Node**  | End point of a workflow |

   
