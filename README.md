# Setting Up the Project Locally

Follow these steps to set up the project locally on your machine:

---

## 1. Fork the Repository

1. Go to the repository on GitHub.
2. Click the **Fork** button in the top-right corner of the page.
3. This will create a copy of the repository in your own GitHub account.

---

## 2. Clone the Repository

After forking the repo, clone it to your local machine by running the following command in your terminal:

```bash
git clone https://github.com/your-username/your-forked-repo.git
```

Replace `your-username` with your GitHub username and `your-forked-repo` with the name of the repository.

---

## 3. Create a `.env` File

In the root directory of the project, create a file named `.env`. This file will store your environment variables.

The `.env` file must contain the following fields:

```
MONGO_URL=<your-mongo-db-url>
PORT=<your-preferred-port>
```

- **MONGO_URL**: This is the URL of your MongoDB database.
- **PORT**: This is the port number on which the server will run (you can set this to any available port, otherwise the default is 3000).

---

## 4. Install Dependencies

1. Open your terminal.
2. Navigate to the root directory of the project:
   ```bash
   cd ./root-dir
   ```
   Replace `./root-dir` with the actual root directory of your project.
   
3. Install all the required dependencies:
   ```bash
   npm install
   ```

---

## 5. Start the Development Server

Once all dependencies are installed, run the following command to start the development server:

```bash
npm run dev
```

---

## 6. Access the Application

The project will be live on the port you specified in the `.env` file. If no port was specified, the default port is **3000**.

To access the application, open your browser and go to:

```
http://localhost:<port>
```

If the port is set to `3000`, the URL will be:

```
http://localhost:3000
```

---

## 7. Additional Notes

- **Hot-reloading**: If your project is using **nodemon**, the server will automatically restart whenever changes are made to the code.
- **Database connection**: Ensure your MongoDB instance is running and the `MONGO_URL` in the `.env` file is correctly configured to connect to your database.
