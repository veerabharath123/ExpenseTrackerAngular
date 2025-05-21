# ExpenseTracker

ExpenseTracker is a web application built with Angular that helps users manage and track their expenses by category. It features category management, expense tracking, and data visualization using charts.

## Features

- User authentication and authorization
- Add, edit, and delete expense categories
- Add, edit, and delete expenses
- View expenses by category
- Visualize expenses with charts (PrimeNG + Chart.js)
- Secure data handling with AES encryption (crypto-js)
- Responsive UI

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [Angular CLI](https://angular.io/cli) (v16+ recommended)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/ExpenseTracker.git
   cd ExpenseTracker
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install required libraries:**
   ```bash
   npm install primeng primeicons chart.js crypto-js
   ```

4. **Set up environment variables:**
   - Edit `src/environments/environment.ts` and `src/environments/environment.prod.ts` to set your API endpoints and encryption key.

### Running the Application

Start the development server:
```bash
ng serve
```
Navigate to [http://localhost:4200/](http://localhost:4200/) in your browser.

### Building for Production

```bash
ng build
```
The build artifacts will be stored in the `dist/` directory.

### Running Unit Tests

```bash
ng test
```

### Running End-to-End Tests

```bash
ng e2e
```

## Project Structure

```
src/
  app/
    components/         # Angular components (UI)
    models/             # Data models and interfaces
    services/           # API and business logic services
    utils/              # Utility classes (encryption, loading screen, etc.)
    app.module.ts       # Main app module
  assets/               # Static assets (images, etc.)
  environments/         # Environment configs
```

## Dependencies

- [Angular](https://angular.io/)
- [PrimeNG](https://www.primefaces.org/primeng/)
- [Chart.js](https://www.chartjs.org/)
- [crypto-js](https://www.npmjs.com/package/crypto-js)
- [RxJS](https://rxjs.dev/)

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)

---

*This project was generated with [Angular CLI](https://github.com/angular/angular-cli).*