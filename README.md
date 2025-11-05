# AdvSoftEngg_Final_Project

A responsive telemedicine web template with admin/doctor/patient modules for appointments, services, reports, and payments, built on AdminLTE/Bootstrap with jQuery and DataTables.

TeleMed is a responsive front‑end template for a telemedicine/virtual clinic platform. It includes ready‑made admin, doctor, and patient dashboards to manage appointments, services, reports, and payments. Built with HTML, CSS, and JavaScript on AdminLTE and Bootstrap, with jQuery and DataTables, it’s a solid base you can extend into a full‑stack telehealth solution.

## Features

- Admin, Doctor, and Patient modules
- Appointments, services, payments, and reporting screens
- AdminLTE + Bootstrap UI, jQuery plugins (DataTables, validation)
- Ready to integrate with any backend framework

## Structure

- `admin/` – Admin dashboards and management pages
- `doctor/` – Doctor-facing dashboard and income/appointment pages
- `patient/` – Patient portal for appointments, services, and payments
- `asset/` – CSS, JS, images, and third‑party plugins (AdminLTE, Bootstrap, jQuery, DataTables)

## Getting started

Open `index.html` in a browser, or serve the folder via any static server. Integrate with your backend of choice for authentication, data, and real‑time features.

## How to run

This is a static front‑end. You can run it in any of the following ways:

### Option 1: Open the files directly

- Double‑click `index.html` to preview the landing page.
- Open the module dashboards directly:
	- Admin: `admin/index.html`
	- Doctor: `doctor/index.html`
	- Patient: `patient/index.html`

### Option 2: Via XAMPP (Apache)

- Start Apache from the XAMPP Control Panel.
- Ensure the folder is located at `C:\\xampp\\htdocs\\telemed\\telemed`.
- In your browser, visit:
	- <http://localhost/telemed/telemed/>
	- <http://localhost/telemed/telemed/admin/>
	- <http://localhost/telemed/telemed/doctor/>
	- <http://localhost/telemed/telemed/patient/>

### Option 3: VS Code Live Server (quick preview)

- Install the “Live Server” extension in VS Code.
- Open this project folder in VS Code and click “Go Live” (status bar).
- Your browser will open to a local URL (for example, <http://127.0.0.1:5500/>). Navigate to the admin/doctor/patient subfolders as needed.

### Optional: simple local server (Python)

```powershell
cd "C:\xampp\htdocs\telemed\telemed"
python -m http.server 8000
```

Then open <http://localhost:8000/> in your browser.
